import React from 'react'
import { Pagination } from 'elemental'
import { styles } from 'refire-app'

const PanelNumberTabs = ({ pageSize, currentPage, handlePageSelect, projects, styles }) => {
  if (projects.length > pageSize) {
    return (
      <Pagination
        currentPage={currentPage}
        onPageSelect={handlePageSelect}
        pageSize={pageSize}
        total={projects.length}
        className={styles.pagination}
      />
    )
  } else {
    return <div />
  }
}

const css = {
  pagination: {
    display: "block",
    margin: "10px 0 0 0",
  },
}

export default styles(css, PanelNumberTabs)
