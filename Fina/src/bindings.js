export default {
  "sections": {
    type: "Array",
    query: (ref) => ref.orderByChild("active").equalTo(true),
    path: "sections",
  },
  "panels": {
    type: "Array",
    query: (ref) => ref.orderByChild("active").equalTo(true),
    path: "panels",
  },
  "panel": {
    type: "Object",
    path: (state, params) => (
      params.panelId
        ? `panels/${params.panelId}`
        : null
    ),
  },
  "panelProjects": {
    populate: (key) => `projectPs/${key}`,
    path: (state, params) => (
      params.panelId
        ? `panels/${params.panelId}/projectPs`
        : null
    ),
  },
  "projectP": {
    type: "Object",
    path: (state, params) => (
      params.projectId
        ? `projectPs/${params.projectId}`
        : null
    ),
  },
  "projectPosts": {
    populate: (key) => `posts/${key}`,
    path: (state, params) => (
      params.projectId
        ? `projectPs/${params.projectId}/posts`
        : null
    ),
  },
  "user": {
    type: "Object",
    path: (state) => (
      state.firebase.authenticatedUser
        ? `users/${state.firebase.authenticatedUser.uid}`
        : null
    ),
  },
  "profile": {
    type: "Object",
    path: (state, params) => (
      params.uid
        ? `users/${params.uid}`
        : null
    ),
  },
  "profileProjectsStarted": {
    populate: (key) => `projectPs/${key}`,
    query: (ref) => ref.orderByKey().limitToLast(10),
    path: (state, params) => (
      params.uid
        ? `users/${params.uid}/projectsStarted`
        : null
    ),
  },
  "adminUsers": {
    type: "Array",
    path: (state) => (
      state.firebase.authenticatedUser
        ? "adminUsers"
        : null
    ),
  },
  "settings": {
    path: "settings",
  },
}
