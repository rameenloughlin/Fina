import React, { Component } from 'react'
import { bindings } from 'refire-app'

import UserAccount from './UserAccount'

class Index extends Component {
  render() {
    const { value: profile = {} } = this.props.profile || {}
    const { value: startedProjects = [] } = this.props.profileProjectsStarted || {}
    const { value: settings = {} } = this.props.settings || {}
    const { theme } = this.props
    return (
      <UserAccount
        profile={profile}
        startedProjects={startedProjects}
        settings={settings}
        styles={theme.UserAccount.UserAccount}
        theme={theme.UserAccount}
      />
    )
  }
}

export default bindings(
  ["profile", "profileProjectsStarted", "settings"]
)(Index)
