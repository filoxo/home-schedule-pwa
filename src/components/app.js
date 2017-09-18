import { h, Component } from 'preact'
import { Router, route, Link } from 'preact-router'

import Toolbar from 'preact-material-components/Toolbar'
import 'preact-material-components/Toolbar/style.css'
import Tabs from 'preact-material-components/Tabs'
import 'preact-material-components/Tabs/style.css'

import ChoreList from '../routes/choreList'

const chores = {
  daily: [
    { text: 'Daily 1', status: false },
    { text: 'Daily 2', status: false },
    { text: 'Daily 3', status: false }
  ],
  weekly: [
    { text: 'Weekly 1', status: false },
    { text: 'Weekly 2', status: false },
    { text: 'Weekly 3', status: false }
  ],
  monthly: [
    { text: 'monthly 1', status: false },
    { text: 'monthly 2', status: false },
    { text: 'monthly 3', status: false }
  ]
}

export default class App extends Component {
  /** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
  handleRoute = e => {
    this.currentUrl = e.url
  }

  toggleDrawer = () => {
    this.drawer.MDComponent.open = !this.drawer.MDComponent.open
  }

  render() {
    return (
      <div id="app">
        <Toolbar className="toolbar">
          <Toolbar.Row>
            <Toolbar.Section align-start={true}>
              <Toolbar.Title>Cleaning Schedule</Toolbar.Title>
            </Toolbar.Section>
          </Toolbar.Row>
        </Toolbar>
        <Tabs indicator-accent={true}>
          <Tabs.Tab href="/daily">Daily</Tabs.Tab>
          <Tabs.Tab href="/weekly">Weekly</Tabs.Tab>
          <Tabs.Tab href="/monthly">Monthly</Tabs.Tab>
        </Tabs>
        <Router onChange={this.handleRoute}>
          <ChoreList
            path="/daily"
            default
            list={chores.daily}
            listPrefix="daily"
          />
          <ChoreList path="/weekly" list={chores.weekly} listPrefix="weekly" />
          <ChoreList
            path="/monthly"
            list={chores.monthly}
            listPrefix="monthly"
          />
        </Router>
      </div>
    )
  }
}
