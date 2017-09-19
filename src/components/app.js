import { h, Component } from 'preact'
import { Router, route, Link } from 'preact-router'

import Toolbar from 'preact-material-components/Toolbar'
import 'preact-material-components/Toolbar/style.css'
import Tabs from 'preact-material-components/Tabs'
import 'preact-material-components/Tabs/style.css'

import ChoreList from '../routes/choreList'
import choresJson from '../chores'

const choresLs =
  typeof window !== 'undefined' ? localStorage.getItem('chores') : null
const choresSrc = choresLs === null ? choresJson : JSON.parse(choresLs)

export default class App extends Component {
  constructor() {
    super()
    this.state = { chores: choresSrc }
    this.update = this.update.bind(this)
  }
  /** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
  handleRoute = e => {
    this.currentUrl = e.url
  }

  update(list) {
    this.setState(
      { chores: Object.assign({}, this.state.chores, list) },
      localStorage.setItem('chores', JSON.stringify(this.state.chores))
    )
  }

  render() {
    const { chores } = this.state
    return (
      <div id="app">
        <Toolbar className="toolbar">
          <Toolbar.Row>
            <Toolbar.Section>
              <Tabs indicator-accent={true}>
                <Tabs.Tab href="/daily">Daily</Tabs.Tab>
                <Tabs.Tab href="/weekly">Weekly</Tabs.Tab>
                <Tabs.Tab href="/monthly">Monthly</Tabs.Tab>
              </Tabs>
            </Toolbar.Section>
          </Toolbar.Row>
        </Toolbar>
        <Router onChange={this.handleRoute}>
          <ChoreList
            path="/daily"
            default
            list={chores.daily}
            listPrefix="daily"
            update={this.update}
          />
          <ChoreList
            path="/weekly"
            list={chores.weekly}
            listPrefix="weekly"
            update={this.update}
          />
          <ChoreList
            path="/monthly"
            list={chores.monthly}
            listPrefix="monthly"
            update={this.update}
          />
        </Router>
      </div>
    )
  }
}
