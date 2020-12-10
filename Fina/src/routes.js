import React from 'react'
import { IndexRoute, Route } from 'refire-app'

import App from './App/Index'
import Index from './Sections/Index'
import Panel from './Panel/Index'
import Project from './Project/Index'
import UserAccount from './UserAccount/Index'
import MobileAuth from './MobileAuth/MobileAuth'

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="panel/:panelId" component={Panel} />
      <Route path="panel/:panelId/:projectId" component={Project} />
      <Route path="profile/:uid" component={UserAccount} />
    </Route>
    <Route path="native-login" component={MobileAuth} />
  </Route>
)
