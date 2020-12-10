import React, { Component } from 'react'
import { FirebaseWrite, styles } from 'refire-app'
import { FormField, Radio } from 'elemental'
import SettingsModal from '../Admin/SettingsModal'
import { saveSetting } from '../updates'

class ThemeApply extends Component {

  constructor(props) {
    super(props)
    this.saveSettings = this.saveSettings.bind(this)
  }

  saveSettings(setting, value) {
    const { authenticatedUser, submit } = this.props
    submit(
      saveSetting(
        {
          userId: authenticatedUser.uid,
          setting,
          value,
        }
      )
    )
  }

  render() {
    const { visible, toggleVisible, user = {}, styles } = this.props
    const { settings = {} } = user
    if (!user) {
      return <div />
    }
    return (
      <SettingsModal
        title="Settings"
        visible={visible}
        hide={toggleVisible}
        save={toggleVisible}
        saveText="Apply"
        Footer={() => <div/>}
        styles={styles}
      >
        <div>
          <FormField label="Choose a Theme">
            <Radio
              name="inline_radios"
              label="Alice Blue"
              checked={settings.theme === "AliceBlue"}
              onChange={() => this.saveSettings("theme", "AliceBlue")}
            />
            <Radio
              name="inline_radios"
              label="Black Chrome"
              checked={settings.theme === "BlackChrome"}
              onChange={() => this.saveSettings("theme", "BlackChrome")}
            />
            <Radio
              name="inline_radios"
              label="Sea Green"
              checked={settings.theme === "Green"}
              onChange={() => this.saveSettings("theme", "Green")}
            />
          </FormField>
        </div>
      </SettingsModal>
    )
  }
}

const css = {
  container: {},
  modal: {},
}

export default FirebaseWrite({ method: "update" })(
  styles(css, ThemeApply)
)
