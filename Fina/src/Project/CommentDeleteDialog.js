import React from 'react'
import { styles } from 'refire-app'
import SettingsModal from '../Admin/SettingsModal'

const CommentDeleteDialog = ({ visible, save, hide, styles }) => {
  return (
    <SettingsModal
      title="Delete Comment?"
      visible={visible}
      hide={hide}
      save={save}
      saveText="Delete"
      width="small"
      styles={styles}
    >
      Are you sure you want to permanantly delete this Comment? 
    </SettingsModal>
  )
}

const css = {
  container: {},
  modal: {},
}

export default styles(css, CommentDeleteDialog)
