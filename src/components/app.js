import { h, Component } from 'preact'
import { Router, route, Link } from 'preact-router'

import Toolbar from 'preact-material-components/Toolbar'
import 'preact-material-components/Toolbar/style.css'
import Tabs from 'preact-material-components/Tabs'
import 'preact-material-components/Tabs/style.css'

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
          <div path="/daily" default>
            daily
          </div>
          <div path="/weekly">weekly</div>
          <div path="/monthly">monthly</div>
        </Router>
      </div>
    )
  }
}
