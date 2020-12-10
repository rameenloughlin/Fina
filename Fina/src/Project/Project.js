import React, { Component } from 'react'
import { styles } from 'refire-app'
import { Card } from 'elemental'
import LockIcon from 'react-icons/lib/fa/lock'

import ReplyToProject from './ReplyToProject'
import Comments from './Comments'
import PanelNumberTabs from './PanelNumberTabs'
import ProjectDeleteDialog from './ProjectDeleteDialog'
import LockDialog from './LockDialog'
import CommentDeleteDialog from './CommentDeleteDialog'
import TopToolbar from './TopToolbar'
import ProjectDeleteButton from './ProjectDeleteButton'
import LockButton from './LockButton'

class Project extends Component {

  render() {
    const {
      projectKey,
      projectP,
      posts,
      settings,
      pagedPosts,
      user,
      isAdmin,
      styles,
      theme,
      state: {
        currentPage,
        deleteDialogVisible,
        deletePostDialogVisible,
        lockDialogVisible,
        postKey,
        quote,
      },
      stateSetters: {
        deleteComment,
        deleteProject,
        handlePageSelect,
        hideDeleteDialog,
        hideDeletePostDialog,
        hideLockDialog,
        selectLastPage,
        showDeleteDialog,
        showDeletePostDialog,
        showLockDialog,
        toggleLocked,
        updateQuote,
        toggleUpvote,
        saveEditedPost,
      },
    } = this.props
    const { PROJECT_PAGE_SIZE, PROJECT_PAGE_LIMIT } = settings
    const locked = projectP.locked
      ? <LockIcon size="22px" />
      : <span />

    return (
      <div>
        <ProjectDeleteDialog
          visible={deleteDialogVisible}
          hide={hideDeleteDialog}
          save={deleteProject}
          title={projectP.title}
          styles={theme.ProjectDeleteDialog}
        />
        <LockDialog
          visible={lockDialogVisible}
          hide={hideLockDialog}
          save={toggleLocked}
          title={projectP.title}
          locked={projectP.locked}
          styles={theme.LockDialog}
        />
        <CommentDeleteDialog
          visible={deletePostDialogVisible}
          hide={hideDeletePostDialog}
          save={deleteComment}
          styles={theme.CommentDeleteDialog}
        />
        <Card className={styles.container}>
          <div className={styles.paginationContainer}>
            <div className={styles.headerContainer}>
              <div className={styles.lockContainer}>
                {locked}
              </div>
              <h2 className={styles.header}>
                {projectP.title}
              </h2>
            </div>
            <TopToolbar
              isAdmin={isAdmin}
              posts={posts}
              pageSize={PROJECT_PAGE_SIZE}>
              <PanelNumberTabs
                currentPage={currentPage}
                handlePageSelect={handlePageSelect}
                posts={posts}
                pageSize={PROJECT_PAGE_SIZE}
                pageLimit={PROJECT_PAGE_LIMIT}
              />
              <div className={styles.buttonsContainer}>
                <ProjectDeleteButton
                  visible={isAdmin}
                  confirmDelete={showDeleteDialog}
                />
                <LockButton
                  visible={isAdmin}
                  locked={projectP.locked}
                  confirmLockedChange={showLockDialog}
                />
              </div>
            </TopToolbar>
          </div>
          <Comments
            posts={pagedPosts}
            deleteComment={showDeletePostDialog}
            updateQuote={updateQuote}
            toggleUpvote={toggleUpvote}
            saveEditedPost={saveEditedPost}
            user={user}
            locked={projectP.locked}
            isAdmin={isAdmin}
            theme={theme}
          />
          <div className={styles.paginationContainer}>
            <PanelNumberTabs
              currentPage={currentPage}
              handlePageSelect={handlePageSelect}
              posts={posts}
              pageSize={PROJECT_PAGE_SIZE}
              pageLimit={PROJECT_PAGE_LIMIT}
            />
          </div>
        </Card>

        <ReplyToProject
          user={user}
          projectKey={projectKey}
          postKey={postKey}
          quote={quote}
          locked={projectP.locked}
          selectLastPage={selectLastPage}
          styles={theme.ReplyToProject}
          theme={theme}
        />
      </div>
    )
  }
}

const css = {
  container: {},
  header: {
    minHeight: "28px",
    margin: "0em 0 1em 0",
    display: "inline-block",
  },
  lockContainer: {
    display: "inline-block",
    verticalAlign: "top",
    paddingTop: "4px",
    paddingRight: "5px",
  },
  paginationContainer: {
    position: "relative",
    minHeight: "32px",
  },
  buttonsContainer: {
    display: "inline-block",
  },
}

export default styles(css, Project)
