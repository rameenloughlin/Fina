import React, { Component } from 'react'
import { bindings } from 'refire-app'

import Sections from './Sections'

class Index extends Component {
  render() {
    const { value: sections = [] } = this.props.sections || {}
    const { value: panels = [] } = this.props.panels || {}
    const { theme } = this.props

    return (
      <div>
        <Sections
          sections={sections}
          panels={panels}
          styles={theme.Sections.Sections}
          theme={theme.Sections}
        />
      </div>
    )
  }
}

export default bindings(["sections", "panels"])(Index)
