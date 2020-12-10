import React, { Component } from 'react'
import { bindings } from 'refire-app'

import Panel from './Panel'

class Index extends Component {
  render() {
    const { key: panelId, value: panel = [] } = this.props.panel || {}
    const { value: panelProjects } = this.props.panelProjects || {}
    const { value: settings = {} } = this.props.settings || {}
    const { authenticatedUser: user, theme, adminUsers } = this.props

    return (
      <Panel
        adminUsers={adminUsers}
        panelId={panelId}
        panel={panel}
        panelProjects={panelProjects}
        settings={settings}
        user={user}
        styles={theme.Panel.Panel}
        theme={theme.Panel}
      />
    )
  }
}

export default bindings(
  ["panel", "panelProjects", "adminUsers", "settings"],
  ["authenticatedUser"]
)(Index)
