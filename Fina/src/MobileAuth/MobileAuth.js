import React, { Component } from 'react'
import { FirebaseOAuth, bindings, styles } from 'refire-app'
import { Button, Spinner } from 'elemental'
import prefix from 'prefix-lite'
import classnames from 'classnames'

class MobileAuth extends Component {
  render() {
    const { _status: { connected, initialFetchDone }, authenticatedUser, styles } = this.props
    const loading = !connected || !initialFetchDone

    if (loading) {
      return (
        <div className={classnames("app-container", styles.container)}>
          <Spinner size="sm" />
        </div>
      )
    }

    if (authenticatedUser) {
      return <div />
    }

    return (
      <div className={classnames("app-container", styles.container)}>
        <FirebaseOAuth provider="google" flow="redirect">
          <Button>Login with Google</Button>
        </FirebaseOAuth>
      </div>
    )
  }
}

const css = {
  container: prefix({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }),
}

export default styles(
  css,
  bindings(["_status"], ["authenticatedUser"])(MobileAuth)
)
