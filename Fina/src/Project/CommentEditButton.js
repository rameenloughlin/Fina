import React from 'react'
import { styles } from 'refire-app'
import EditIcon from 'react-icons/lib/fa/pencil'

const CommentEditButton = ({ user, locked, isAdmin, mine, onClick, styles }) => {
  if ((user && !locked && mine) || isAdmin) {
    const layout = mine ? styles.button : styles.buttonAdminOwned
    return (
      <span onClick={onClick} title="Edit">
        <span className={layout}>
          <EditIcon size="18px" />
        </span>
      </span>
    )
  }
  return <span />
}

const css = {
  button: {
    cursor: "pointer",
    color: "#555",
    display: "inline-block",
    verticalAlign: "top",
    paddingRight: "20px",
  },
  buttonAdminOwned: {
    cursor: "pointer",
    color: "#955",
    display: "inline-block",
    verticalAlign: "top",
    paddingRight: "20px",
  },
}

export default styles(css, CommentEditButton)
