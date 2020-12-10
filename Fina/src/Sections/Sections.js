import React from 'react'
import { styles } from 'refire-app'
import { Card } from 'elemental'

import LoadingSpinner from './LoadingSpinner'
import Panels from './Panels'

const Sections = ({ sections, panels, styles, theme }) => {

  if (!panels.length || !sections.length) {
    return <LoadingSpinner styles={styles} />
  }

  return (
    <div>
      {
        sections.map(({ key, value: category }) => {
          return (
            <Card key={key} className={styles.category}>
              <h2 className={styles.header}>
                {category.title}
              </h2>
              <Panels
                category={category}
                panels={panels}
                styles={theme.Panels}
              />
            </Card>
          )
        })
      }
    </div>
  )
}

const css = {
  category: {},
  header: {},
}

export default styles(css, Sections)
