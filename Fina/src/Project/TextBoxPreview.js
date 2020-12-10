import React from 'react'
import { styles } from 'refire-app'
import ReactMarkdown from 'react-markdown'
import Markdown from '../App/Markdown'

const TextBoxPreview = ({ preview, text, styles }) => {
  if (preview) {

    if (!text.length) {
      return (
        <div>
          <div className={styles.textPreview}>
            <p>Nothing to preview yet</p>
          </div>
        </div>
      )
    }

    return (
      <div>
        <div className={styles.textPreview}>
          <ReactMarkdown
            escapeHtml={true}
            source={text}
            renderers={
              {
                ...ReactMarkdown.renderers,
                ...{ Markdown },
              }
            }
          />
        </div>
      </div>
    )
  } else {
    return <div />
  }
}

const css = {
  textPreview: {
    "& p": {
      margin: "0 0 30px 0",
    },
  },
}

export default styles(css, TextBoxPreview)
