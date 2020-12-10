import React, { Component } from 'react'
import { FirebaseWrite, bindings, routeActions } from 'refire-app'

import drop from 'lodash/drop'
import take from 'lodash/take'
import find from 'lodash/find'

import { isUserAdmin } from '../utils'
import { deleteProject, toggleProjectLock, deleteComment, toggleUpvote } from '../updates'

import Project from './Project'

class Index extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      currentPage: 1,
      quote: null,
      postKey: null,
      deleteDialogVisible: false,
      lockDialogVisible: false,
      deletePostDialogVisible: false,
      editPostVisible: false,
      displayPostVisible: true,
      deletePostKey: null,
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  handlePageSelect = (page) => {
    window.scrollTo(0, 0)
    this.setState({ currentPage: page })
  }

  selectLastPage = () => {
    const { value: posts = [] } = this.props.projectPosts || {}
    const { value: settings = {} } = this.props.settings || {}
    const { PROJECT_PAGE_SIZE } = settings
    const remainder = (posts.length + 1) % PROJECT_PAGE_SIZE
    const pages = Math.floor((posts.length + 1) / PROJECT_PAGE_SIZE)
    const lastPage = remainder === 0 ? pages : pages + 1
    this.handlePageSelect(lastPage)
  }

  updateQuote = (quote, postKey) => {
    this.setState({ quote, postKey })
  }

  hideDeleteDialog = () => {
    this.setState({ deleteDialogVisible: false })
  }

  showDeleteDialog = () => {
    this.setState({ deleteDialogVisible: true })
  }

  hideLockDialog = () => {
    this.setState({ lockDialogVisible: false })
  }

  showLockDialog = () => {
    this.setState({ lockDialogVisible: true })
  }

  showDeletePostDialog = (postKey) => {
    this.setState({
      deletePostDialogVisible: true,
      deletePostKey: postKey,
    })
  }

  hideDeletePostDialog = () => {
    this.setState({
      deletePostDialogVisible: false,
      deletePostKey: null,
    })
  }

  deleteProject = () => {
    const { submit, dispatch } = this.props
    const { key: projectKey, value: projectP } = this.props.projectP || {}
    submit(deleteProject({ projectKey, projectP }))
    dispatch(routeActions.push(`/panel/${projectP.panelId}`))
  }

  deleteComment = () => {
    const { value: posts = [] } = this.props.projectPosts || {}
    const post = find(posts, (projectPost) => {
      return projectPost.key === this.state.deletePostKey
    })
    this.props.submit(deleteComment({ postKey: this.state.deletePostKey, post: post.value }))
    this.hideDeletePostDialog()
  }

  toggleLocked = () => {
    const { submit } = this.props
    const { key: projectKey, value: projectP = {} } = this.props.projectP || {}
    submit(toggleProjectLock({ projectKey, projectP }))
    this.hideLockDialog()
  }

  toggleUpvote = (postKey) => {
    const { submit } = this.props
    const { value: posts = [] } = this.props.projectPosts || {}
    const user = this.props.authenticatedUser
    const post = find(posts, (projectPost) => {
      return projectPost.key === postKey
    })
    submit(toggleUpvote({ postKey: postKey, post: post, user: user }))
  }

  render() {
    const { key: projectKey, value: projectP = {} } = this.props.projectP || {}
    const { value: posts = [] } = this.props.projectPosts || {}
    const { value: settings = {} } = this.props.settings || {}
    const { authenticatedUser: user, theme } = this.props
    const { PROJECT_PAGE_SIZE } = settings
    const isAdmin = isUserAdmin(this.props.adminUsers, this.props.authenticatedUser)
    const pagedPosts = take(drop(posts, (this.state.currentPage - 1) * PROJECT_PAGE_SIZE), PROJECT_PAGE_SIZE)
    // TODO: this is fugly, figure out something better
    const stateSetters = {
      hideDeleteDialog: this.hideDeleteDialog,
      deleteProject: this.deleteProject,
      hideLockDialog: this.hideLockDialog,
      toggleLocked: this.toggleLocked,
      hideDeletePostDialog: this.hideDeletePostDialog,
      deleteComment: this.deleteComment,
      handlePageSelect: this.handlePageSelect,
      showDeleteDialog: this.showDeleteDialog,
      showLockDialog: this.showLockDialog,
      showDeletePostDialog: this.showDeletePostDialog,
      updateQuote: this.updateQuote,
      toggleUpvote: this.toggleUpvote,
      selectLastPage: this.selectLastPage,
    }

    return (
      <Project
        projectKey={projectKey}
        projectP={projectP}
        posts={posts}
        settings={settings}
        user={user}
        isAdmin={isAdmin}
        pagedPosts={pagedPosts}
        state={this.state}
        stateSetters={stateSetters}
        styles={theme.Project.Project}
        theme={theme.Project}
      />
    )
  }
}

export default FirebaseWrite({ method: "update" })(
    bindings(
      ["projectP", "projectPosts", "adminUsers", "settings"],
      ["authenticatedUser"]
    )(Index)
)
