const bgColor = 'green'
const textColor = "#003300"
const buttonBgColor = 'MediumSeaGreen'
const buttonTextColor = "#fff"
const linkColor = "#fff"
const accentColor = "#d64242"

const buttonstyles = {
  background: buttonBgColor,
  border: `1px solid ${bgColor}`,
  color: buttonTextColor,
  textShadow: "none",
  "&:hover": {
    background: bgColor,
    border: "1px solid ##003300",
    color: linkColor,
  },
}

const linkstyles = {
  color: linkColor,
  "&:hover, &:active, &:focus": {
    color: linkColor,
  },
}

const dialogstyles = {
  container: {
    "& .Modal-content": {
      backgroundColor: bgColor,
    },
  },
  modal: {
    background: bgColor,
    color: textColor,
  },
}

export default {
  App: {
    App: {
      ":global": {
        body: {
          background: 'MediumSeaGreen',
        },
      },
    },
    Footer: {
      container: {
        background: bgColor,
        color: textColor,
      },
    },
    TopBar: {
      topBarContainer: {
        background: bgColor,
      },
      link: linkstyles,
    },
    LoginAuth: {
      button: buttonstyles,
    },
    SettingsButton: {
      button: buttonstyles,
    },
    ThemeApply: {
      ...dialogstyles,
    },
  },
  Sections: {
    Sections: {
      category: {
        background: bgColor,
      },
      header: {
        color: textColor,
      },
    },
    Panels: {
      link: linkstyles,
    },
  },
  Panel: {
    Panel: {
      container: {
        background: bgColor,
      },
      header: {
        color: textColor,
      },
    },
    PanelSettings: {
      ...dialogstyles,
    },
    Project: {
      title: linkstyles,
      projectContainer: {
        color: linkColor,
      },
    },
    Projects: {
      noProjectsYet: {
        color: textColor,
      },
    },
    SettingsButton: {
      button: buttonstyles,
    },
    AddProjectButton: {
      button: buttonstyles,
    },
    AddProjectIdea: {
      container: {
        background: bgColor,
      },
      displayName: {
        color: linkColor,
      },
    },
    TextBoxPreview: {
      topicPreview: {
        color: linkColor,
      },
      textPreview: {
        color: linkColor,
      },
    },
    InputTextForms: {
      topic: {
        background: bgColor,
        color: linkColor,
      },
      text: {
        background: bgColor,
        color: linkColor,
      },
    },
  },
  UserAccount: {
    UserAccount: {
      container: {
        background: bgColor,
        color: linkColor,
      },
      header: {
        color: textColor,
      },
    },
    ProjectsPosted: {
      projectLink: linkstyles,
    },
  },
  Project: {
    Project: {
      container: {
        background: bgColor,
      },
      header: {
        color: textColor,
      },
      lockContainer: {
        color: linkColor,
      },
    },
    ReplyToProject: {
      container: {
        background: bgColor,
      },
      displayName: {
        color: textColor,
      },
    },
    TextBoxPreview: {
      textPreview: {
        color: linkColor,
      },
    },
    InputTextForms: {
      text: {
        background: bgColor,
        color: linkColor,
      },
    },
    Post: {
      container: {
        background: 'green',
      },
      bodyContainer: {
        color: 'linkColor',
      },
      nameContainer: {
        color: linkColor,
      },
      postDate: {
        color: 'black',
      },
      edited: {
        color: textColor,
      },
    },
    EditButton: {
      button: {
        color: linkColor,
      },
    },
    DeletePostButton: {
      button: {
        color: linkColor,
      },
    },
    ReplyButton: {
      button: {
        color: 'black',
      },
    },
    QuoteButton: {
      button: {
        color: 'black',
      },
    },
    UpvoteButton: {
      button: {
        color: 'black',
      },
      buttonActive: {
        color: accentColor,
      },
    },
    DeletePostDialog: {
      ...dialogstyles,
    },
    DeleteDialog: {
      ...dialogstyles,
    },
    LockDialog: {
      ...dialogstyles,
    },
  },
}
