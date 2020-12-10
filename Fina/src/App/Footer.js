import React from 'react'
import { Card, Glyph } from 'elemental'
import { styles } from 'refire-app'
import { version } from '../../package.json'

const Footer = ({ styles }) => (
  <Card className={styles.container}>
    <a href="https://github.com/rameenloughlin">
      <Glyph icon='mark-github' /> <strong>Fina </strong> - Developer Rameen Loughlin
    </a>
    &nbsp;
    &nbsp;
    Version:
    &nbsp;
    {version}
  </Card>
)

const css = {
  container: {
    textAlign: "center",
  },
}

export default styles(css, Footer)
