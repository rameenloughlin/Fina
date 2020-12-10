import React from 'react'
import { Link, styles } from 'refire-app'

const ProjectsPosted = ({ projectPs, styles }) => {
  if (projectPs.length) {
    return (
      <div>
        {
          projectPs
          .concat([])
          .reverse()
          .sort((a, b) => a.key < b.key)
          .map(({ key, value: projectP }) => {
            return (
              <Link
                to={`/panel/${projectP.panelId}/${key}`}
                key={key}
                className={styles.projectLink}
              >
                {projectP.title}
              </Link>
            )
          })
        }
      </div>
    )
  } else {
    return (
      <div>
        This user hasn't posted any Projects yet.
      </div>
    )
  }
}

const css = {
  projectLink: {
    display: "block",
  },
}

export default styles(css, ProjectsPosted)
