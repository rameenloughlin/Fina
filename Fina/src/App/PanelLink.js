import React from 'react'
import { Link } from 'refire-app'

const PanelLink = ({ panel, panelKey, projectKey, layout }) => {
  if (panel && panelKey && projectKey) {
    return (
      <span>
        <strong className={layout}> &gt; </strong>
        <Link to={`/panel/${panelKey}`} className={layout}>{panel.title}</Link>
      </span>
    )
  } else {
    return <span />
  }
}

export default PanelLink
