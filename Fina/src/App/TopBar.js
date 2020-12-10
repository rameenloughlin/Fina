import React from 'react'
import { Link, styles } from 'refire-app'
import LoginAuth from './LoginAuth'
import PanelLink from './PanelLink'
import SettingsButton from './SettingsButton'

const TopBar = ({
  siteName,
  authenticatedUser,
  panel,
  panelKey,
  projectKey,
  toggleSettings,
  user,
  styles,
  theme,
}) => {
  return (
    <div className={styles.topBarContainer}>
      <div className={styles.topbar}>
        <h1 className={styles.header}>
          <Link to="/" className={styles.link}>
            { siteName }
          </Link>
          <PanelLink
            panel={panel}
            panelKey={panelKey}
            projectKey={projectKey}
            layout={styles.link}
          />
        </h1>
        <div className={styles.buttonsContainer}>
          <SettingsButton
            user={user}
            toggleVisible={toggleSettings}
            styles={theme.SettingsButton}
          />
          <LoginAuth
            user={authenticatedUser}
            styles={theme.LoginAuth}
          />
        </div>
      </div>
    </div>
  )
}

const css = {
  topBarContainer: {
    position: "fixed",
    left: 0,
    right: 0,
    height: "50px",
    zIndex: 1,
    background: "#89CDFE",
  },
  topbar: {
    position: "relative",
    maxWidth: "940px",
    margin: "0 auto",
    height: "50px",
    padding: "7px 20px",
  },
  header: {
    display: "inline-block",
    margin: 0,
    paddingTop: "12px",
    fontSize: "14px",
    "@media (min-width: 480px)": {
      paddingTop: "5px",
      fontSize: "20px",
    },
  },
  buttonsContainer: {
    position: "absolute",
    right: "20px",
    top: "8px",
  },
  link: {
    color: "darkblue",
  },
}

export default styles(css, TopBar)
