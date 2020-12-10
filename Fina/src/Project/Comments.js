import React from 'react'
import Comment from './Comment'
import { styles } from 'refire-app'
import { Spinner } from 'elemental'

const Comments = ({
  posts,
  user,
  locked,
  isAdmin,
  deleteComment,
  updateQuote,
  toggleUpvote,
  selectLastPage,
  styles,
  theme,
}) => {
  if (!posts.length) {
    return (
      <div className={styles.spinnerContainer}>
        <Spinner />
      </div>
    )
  } else {
    return (
      <div>
        {
          posts.map(({ key, value: post }) => {
            return (
              <Comment
                key={key}
                postKey={key}
                post={post}
                user={user}
                locked={locked}
                isAdmin={isAdmin}
                deleteComment={deleteComment}
                updateQuote={updateQuote}
                toggleUpvote={toggleUpvote}
                selectLastPage={selectLastPage}
                styles={theme.Comment}
                theme={theme}
              />
            )
          })
        }
      </div>
    )
  }
}

const css = {
  spinnerContainer: {
    padding: "30px 0",
  },
}

export default styles(css, Comments)
