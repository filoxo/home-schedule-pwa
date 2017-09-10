import { h, Component } from 'preact'
import { Router } from 'preact-router'

import Header from './header'
import Home from '../routes/home'
import Profile from '../routes/profile'
// import Home from 'async!./home';
// import Profile from 'async!./profile';

import Drawer from 'preact-material-components/Drawer'
import List from 'preact-material-components/List'
import Toolbar from 'preact-material-components/Toolbar'
import 'preact-material-components/Toolbar/style.css'
import 'preact-material-components/Drawer/style.css'
import 'preact-material-components/List/style.css'

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
        <Drawer.TemporaryDrawer
          ref={drawer => {
            this.drawer = drawer
          }}
        >
          <Drawer.TemporaryDrawerHeader className="mdc-theme--primary-bg">
            Components
          </Drawer.TemporaryDrawerHeader>
          <Drawer.TemporaryDrawerContent>
            <List>
              <List.LinkItem>Home</List.LinkItem>
              <List.LinkItem onClick={this.toggleDrawer}>
                CLose menu
              </List.LinkItem>
            </List>
          </Drawer.TemporaryDrawerContent>
        </Drawer.TemporaryDrawer>
        <Toolbar className="toolbar">
          <Toolbar.Row>
            <Toolbar.Section align-start={true}>
              <Toolbar.Icon menu={true} onClick={this.toggleDrawer}>
                menu
              </Toolbar.Icon>
              <Toolbar.Title>My App</Toolbar.Title>
            </Toolbar.Section>
          </Toolbar.Row>
        </Toolbar>
        <Router onChange={this.handleRoute}>
          <Home path="/" />
          <Profile path="/profile/" user="me" />
          <Profile path="/profile/:user" />
        </Router>
      </div>
    )
  }
}
