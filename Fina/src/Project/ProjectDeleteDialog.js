import React from 'react'
import { styles } from 'refire-app'
import SettingsModal from '../Admin/SettingsModal'

const ProjectDeleteDialog = ({ visible, save, hide, title="", styles }) => {
  return (
    <SettingsModal
      title="Delete Project Idea?"
      visible={visible}
      hide={hide}
      save={save}
      saveText="Delete"
      width="small"
      styles={styles}
    >
      Are you sure you want to permanently delete <strong>{title}</strong>?
    </SettingsModal>
  )
}


const css = {
  container: {},
  modal: {},
}

export default styles(css, ProjectDeleteDialog)
