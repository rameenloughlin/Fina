import React, { Component } from 'react'
import { styles } from 'refire-app'
import { Card } from 'elemental'
import moment from 'moment'

import ProjectsPosted from './ProjectsPosted'

class UserAccount extends Component {

  render() {
    const { profile, startedProjects, settings, styles, theme } = this.props
    const { DATE_FORMAT } = settings

    return (
      <div>
        <Card className={styles.container}>
          <img
            className={styles.profileImage}
            src={profile.profileImageURL}
          />
          <div className={styles.profileContainer}>
            <h2 className={styles.header}>
              {profile.displayName}
            </h2>
            <div>
              <strong>Joined</strong> {moment(profile.registeredAt || moment(), "x").format(DATE_FORMAT)}
            </div>
            <div>
              <strong>Project Ideas Posted</strong> {Object.keys(profile.projectsStarted || {}).length}
            </div>
            <div>
              <strong>Number of Comments</strong> {Object.keys(profile.posts || {}).length}
            </div>
          </div>
        </Card>
        <Card className={styles.container}>
          <h3 className={styles.header}>Project Ideas Posted</h3>
          <ProjectsPosted
            projectPs={startedProjects}
            styles={theme.ProjectsPosted}
          />
        </Card>
      </div>
    )
  }

}

const css = {
  container: {},
  header: {},
  profileImage: {
    width: "80px",
    height: "80px",
    borderRadius: "40px",
    display: "inline-block",
    verticalAlign: "top",
    marginRight: "20px",
  },
  profileContainer: {
    display: "inline-block",
  },
}

export default styles(css, UserAccount)
