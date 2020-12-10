import React from 'react'
import { styles } from 'refire-app'
import ReactMarkdown from 'react-markdown'
import Markdown from '../App/Markdown'

const CommentBody = ({
      post,
      hide,
      styles,
    }) => {

  if (hide || !post) {
    return ( <div></div> )
  } else {
    return (
      <div
        className={styles.bodyContainer}>
        <ReactMarkdown
          className={styles.markdown}
          escapeHtml={true}
          source={post.body}
          renderers={
            {
              ...ReactMarkdown.renderers,
              ...{ Markdown },
            }
          }
        />
      </div>
    )
  }
}

const css = {
  bodyContainer: {
    margin: "0 0 10px 0",
    textAlign: 'left',
  },

}

export default styles(css, CommentBody)
