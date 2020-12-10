import React from 'react'
import { Link, styles } from 'refire-app'
import find from 'lodash/find'

function findPanel(panels, panelId) {
  return find(panels, (panel) => {
    return panel.key === panelId
  }) || { value: {} }
}

const Panels = ({ panels, category, styles }) => {
  return (
    <div>
      {
        Object.keys(category.panels).map((panelId) => {
          const panel = findPanel(panels, panelId)
          return (
            <h3 key={panelId} className={styles.header}>
              <Link to={`panel/${panel.key}`} className={styles.link}>
                {panel.value.title}
              </Link>
            </h3>
          )
        })
      }
    </div>
  )
}

const css = {
  header: {},
  link: {},
}

export default styles(css, Panels)
