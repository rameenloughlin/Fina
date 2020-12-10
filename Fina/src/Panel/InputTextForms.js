import React from 'react'
import { styles } from 'refire-app'
import { FormField, FormInput } from 'elemental'

const InputTextForms = ({
  preview,
  inputRef,
  topic,
  text,
  updateTopic,
  updateText,
  styles,
}) => {
  if (preview) {
    return <div />
  } else {
    return (
      <div>
        <FormField>
          <FormInput
            ref={inputRef}
            placeholder="Enter Project Title"
            value={topic}
            onChange={updateTopic}
            className={styles.topic}
          />
        </FormField>
        <FormField>
          <FormInput
            placeholder="Enter a Description of the Project"
            value={text}
            multiline
            onChange={updateText}
            className={styles.text}
          />
        </FormField>
      </div>
    )
  }
}

const css = {
  topic: {},
  text: {},
}

export default styles(css, InputTextForms)
