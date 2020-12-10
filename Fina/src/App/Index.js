import React, { Component } from 'react'
import { bindings } from 'refire-app'
import UserTheme from '../UserTheme'
import { siteName } from '../config'

import App from './App'

class Index extends Component {

  constructor() {
    super()
    this.state = {
      stylesLoaded: true,
    }
    this.themeChanged = this.themeChanged.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    const { value: user } = this.props.user || {}
    const { value: nextUser } = nextProps.user || {}
    if (!user && nextUser) {
      this.themeChanged()
    }
    if (user && nextUser && user.settings && nextUser.settings && user.settings.theme !== nextUser.settings.theme) {
      this.themeChanged()
    }
  }

  themeChanged() {
    // delay rendering after theme change to avoid react-free-layout errors
    this.setState({ stylesLoaded: false })
    setTimeout(() => {
      this.setState({ stylesLoaded: true })
    }, 0)
  }

  render() {
    const { _status: { connected, initialFetchDone }, authenticatedUser, children } = this.props
    const { key: panelKey, value: panel = {} } = this.props.panel || {}
    const { key: projectKey } = this.props.projectP || {}
    const { value: settings } = this.props.settings || {}
    const { value: user } = this.props.user || {}
    const { settings: { theme = "AliceBlue" } = {} } = user || {}
    const loading = !connected || !initialFetchDone || !settings || !this.state.stylesLoaded
    const currentTheme = UserTheme[theme]

    return (
      <App
        siteName={siteName}
        loading={loading}
        user={user}
        panel={panel}
        panelKey={panelKey}
        projectKey={projectKey}
        authenticatedUser={authenticatedUser}
        theme={currentTheme.App}
        styles={currentTheme.App.App}
      >
        {
          React.Children.map(children, (child) => {
            return React.cloneElement(child, { theme: currentTheme })
          })
        }
      </App>
    )
  }
}

export default bindings(
  ["_status", "panel", "projectP", "settings", "user"],
  ["authenticatedUser"]
)(Index)
