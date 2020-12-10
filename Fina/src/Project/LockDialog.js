import React from 'react'
import { styles } from 'refire-app'
import SettingsModal from '../Admin/SettingsModal'

const LockDialog = ({ visible, save, hide, locked, title="", styles }) => {
  const text = locked ? "Unlock" : "Lock"
  const confirmText = locked ? "unlock" : "lock"
  return (
    <SettingsModal
      title={`${text} Project Idea?`}
      visible={visible}
      hide={hide}
      save={save}
      saveText={text}
      width="small"
      styles={styles}
    >
      Do you really want to {confirmText} Project Idea Comment <strong>{title}</strong>?  This means no-one can comment on it.
    </SettingsModal>
  )
}

const css = {
  container: {},
  modal: {},
}

export default styles(css, LockDialog)
