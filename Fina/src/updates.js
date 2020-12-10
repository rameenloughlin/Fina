import { firebase } from 'refire-app'
import includes from 'lodash/includes'

export function newProject({ panelId, topic, text, user }) {
  const ref = firebase.database().ref()
  const projectKey = ref.child("projectPs").push().key
  const postKey = ref.child("posts").push().key

  return {
    [`panels/${panelId}/projectPs/${projectKey}`]: true,
    [`projectPs/${projectKey}`]: {
      title: topic,
      panelId: panelId,
      createdAt: firebase.database.ServerValue.TIMESTAMP,
      lastPostAt: firebase.database.ServerValue.TIMESTAMP,
      user: {
        displayName: user.displayName,
        image: user.profileImageURL,
        id: user.uid,
      },
      posts: {
        [postKey]: true,
      },
    },
    [`posts/${postKey}`]: {
      body: text,
      createdAt: firebase.database.ServerValue.TIMESTAMP,
      projectId: projectKey,
      user: {
        displayName: user.displayName,
        image: user.profileImageURL,
        id: user.uid,
      },
    },
    [`users/${user.uid}/projectsStarted/${projectKey}`]: true,
    [`users/${user.uid}/posts/${postKey}`]: true,
  }
}

export function deleteProject({ projectKey, projectP }) {
  const posts = Object.keys(projectP.posts).reduce((paths, postId) => {
    return {
      ...paths,
      [`posts/${postId}`]: null,
      [`users/${projectP.user.id}/posts/${postId}`]: null,
    }
  }, {})

  return {
    ...posts,
    [`projectPs/${projectKey}`]: null,
    [`panels/${projectP.panelId}/projectPs/${projectKey}`]: null,
    [`users/${projectP.user.id}/projectsStarted/${projectKey}`]: null,
  }
}

export function toggleProjectLock({ projectKey, projectP }) {
  return {
    [`projectPs/${projectKey}/locked`]: !projectP.locked,
  }
}

export function replyToProject({ projectKey, text, replyToKey, user }) {
  const ref = firebase.database().ref()
  const postKey = ref.child("posts").push().key
  replyToKey = replyToKey === undefined ? null : replyToKey

  return {
    [`projectPs/${projectKey}/posts/${postKey}`]: true,
    [`projectPs/${projectKey}/lastPostAt`]: firebase.database.ServerValue.TIMESTAMP,
    [`posts/${postKey}`]: {
      body: text,
      createdAt: firebase.database.ServerValue.TIMESTAMP,
      projectId: projectKey,
      replyTo: replyToKey,
      user: {
        displayName: user.displayName,
        image: user.profileImageURL,
        id: user.uid,
      },
    },
    [`users/${user.uid}/posts/${postKey}`]: true,
  }
}

export function deleteComment({ postKey, post }) {
  return {
    [`projectPs/${post.projectId}/posts/${postKey}`]: null,
    [`posts/${postKey}`]: null,
    [`users/${post.user.id}/posts/${postKey}`]: null,
  }
}

export function saveSetting({ userId, setting, value }) {
  return {
    [`users/${userId}/settings/${setting}`]: value,
  }
}

export function toggleUpvote({ postKey, post, user }) {
  const value = includes(Object.keys(post.value.likes || {}),user.uid) ? null : true
  return {
    [`posts/${postKey}/likes/${user.uid}`]: value,
    [`users/${user.uid}/likes/${postKey}`]: value,
  }
}

export function savePost({ postKey, text, user }) {
  return {
    [`posts/${postKey}/body`]: text,
    [`posts/${postKey}/edited`]: true,
    [`posts/${postKey}/editedLast`]: firebase.database.ServerValue.TIMESTAMP,
    [`posts/${postKey}/editedBy`]: user.uid,
  }
}
