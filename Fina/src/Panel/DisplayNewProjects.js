import React from 'react'
import { styles } from 'refire-app'
import Color from 'color'

const DisplayNewProjects = ({ projects, nextProjects = [], displayNewProjects, styles }) => {
  const diff = nextProjects.length - projects.length
  const projectsDiff = diff === 1 ? "project" : "projects"
  if (!diff) {
    return <div />
  } else {
    return (
      <div className={styles.container} onClick={displayNewProjects}>
       There is { diff } new { projectsDiff } available since you loaded the page, click here to update list
      </div>
    )
  }
}

const css = {
  container: {
    padding: "10px",
    background: Color("#27ae60").lighten(0.7).hexString(),
    cursor: "pointer",
    marginBottom: "20px",
  },
}

export default styles(css, DisplayNewProjects)
