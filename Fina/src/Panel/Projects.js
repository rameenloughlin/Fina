import React from 'react'
import { Spinner } from 'elemental'
import { styles } from 'refire-app'

import Project from './Project'

const Projects = ({ panelId, projects, loaded, styles, theme }) => {
  if (!projects.length) {
    if (!loaded) {
      return (
        <div className={styles.spinnerContainer}>
          <Spinner />
        </div>
      )
    } else {
      return (
        <div className={styles.noProjectsYet}>
          There's no Project Ideas for this topic yet. Why not post one below
        </div>
      )
    }
  } else {
    return (
      <div>
        {
          projects.map(({ key, value: project }) => {
            return (
              <Project
                key={key}
                projectKey={key}
                project={project}
                panelId={panelId}
                styles={theme.Project} />
            )
          })
        }
      </div>
    )
  }
}

const css = {
  spinnerContainer: {
    padding: "30px 0",
  },
  noProjectsYet: {},
}

export default styles(css, Projects)
