import React, { Component } from 'react'
import { styles } from 'refire-app'
import { Card } from 'elemental'
import sortBy from 'lodash/sortBy'
import drop from 'lodash/drop'
import take from 'lodash/take'
import find from 'lodash/find'


import DisplayNewProjects from './DisplayNewProjects'
import AddProjectButton from './AddProjectButton'
import AddProjectIdea from './AddProjectIdea'
import Projects from './Projects'
import PanelNumberTabs from './PanelNumberTabs'


class Panel extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      currentPage: 1,
      projects: null,
      settingsVisible: false,
    }
    this.handlePageSelect = this.handlePageSelect.bind(this)
    this.NewProjectFocus = this.NewProjectFocus.bind(this)
    this.displayNewProjects = this.displayNewProjects.bind(this)
    this.toggleSettings = this.toggleSettings.bind(this)
  }

  componentWillMount() {
    if (this.props.panelProjects) {
      this.setState({ projects: this.props.panelProjects })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.panelProjects) {
      if (this.state.projects) {
        const nextProjects = nextProps.panelProjects
        this.setState({
          projects: this.state.projects.reduce((result, project) => {
            const nextProject = find(nextProjects, (next) => project.key === next.key)
            if (nextProject && nextProject.value) {
                // update only posts count
                // TODO: update timestamp, but how to keep the sorting?
                return [
                  ...result,
                  {
                    ...project,
                    value: {
                      ...project.value,
                      posts: nextProject.value.posts,
                    },
                  },
                ]
            } else {
              return result
            }
          }, []),
        })
      } else {
        this.setState({
          projects: nextProps.panelProjects,
        })
      }
    }
  }

  handlePageSelect(page) {
    this.setState({ currentPage: page })
  }

  NewProjectFocus() {
    if (this.titleInput) {
      this.titleInput.focus()
    }
  }

  displayNewProjects() {
    this.setState({
      projects: this.props.panelProjects,
      currentPage: 1,
    })
  }

  toggleSettings() {
    this.setState({
      settingsVisible: !this.state.settingsVisible,
    })
  }

  render() {
    const {
    
      panelId,
      panel,
      panelProjects,
      settings,
      user,
      styles,
      theme,
    } = this.props
    const { PANEL_PAGE_SIZE } = settings
    const projects = this.state.projects || []
   

    const pagedProjects = take(
      drop(
        sortBy(
          projects,
          (project) => (project.value || {}).lastPostAt
        ).reverse(),
        (this.state.currentPage - 1) * PANEL_PAGE_SIZE
      ),
      PANEL_PAGE_SIZE
    )

    return (
      <div>
       
        <Card className={styles.container}>
          <div className={styles.headerContainer}>
            <h2 className={styles.header}>
              {panel.title}
            </h2>
            <div className={styles.buttonsContainer}>
              
              <AddProjectButton
                user={user}
                newProject={this.NewProjectFocus}
                styles={theme.AddProjectButton}
              />
            </div>
          </div>
          <DisplayNewProjects
            projects={projects}
            nextProjects={panelProjects}
            displayNewProjects={this.displayNewProjects}
          />
          <Projects
            panelId={panelId}
            projects={pagedProjects}
            loaded={!!panelProjects}
            theme={theme}
            styles={theme.Projects}
          />
          <PanelNumberTabs
            currentPage={this.state.currentPage}
            handlePageSelect={this.handlePageSelect}
            projects={projects}
            pageSize={PANEL_PAGE_SIZE}
          />
        </Card>
        <AddProjectIdea
          panelId={panelId}
          user={user}
          inputRef={(input) => { this.titleInput = input}}
          displayNewProjects={this.displayNewProjects}
          styles={theme.AddProjectIdea}
          theme={theme}
        />
      </div>
    )
  }
}

const css = {
  container: {},
  buttonsContainer: {
    "@media (min-width: 480px)": {
      position: "absolute",
      right: "0px",
      top: "0px",
    },
  },
  headerContainer: {
    position: "relative",
  },
  header: {
    minHeight: "28px",
    "@media (min-width: 480px)": {
      display: "inline-block",
    },
  },
  
}

export default styles(css, Panel)
