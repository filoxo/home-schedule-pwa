import { h, Component } from 'preact'
import List from 'preact-material-components/List'
import 'preact-material-components/List/style.css'
import Checkbox from 'preact-material-components/Checkbox'
import 'preact-material-components/Checkbox/style.css'
import FormField from 'preact-material-components/FormField'
import 'preact-material-components/FormField/style.css'
import Fab from 'preact-material-components/Fab'
import 'preact-material-components/Fab/style.css'
import Icon from 'preact-material-components/Icon'

import style from './style'

export default class ChoreList extends Component {
  toggleTask = e => {
    const index = parseInt(e.target.dataset.index, 10)
    this.props.list[index].status = !this.props.list[index].status
    this.props.update(this.props.list)
  }

  resetList = () => {
    this.props.list.forEach(t => {
      t.status = false
    })
    this.props.update(this.props.list)
  }

  render() {
    return (
      <List>
        {this.props.list.map(({ text, status }, i) => {
          const id = `${this.props.listPrefix}-${i}`
          return (
            <List.Item key={id}>
              <FormField>
                <Checkbox
                  id={id}
                  checked={status}
                  onClick={this.toggleTask}
                  data-index={i}
                />
                <label for={id}>{text}</label>
              </FormField>
            </List.Item>
          )
        })}
        <div class={style.fabsolute}>
          <Fab ripple={true} onClick={this.resetList}>
            <Icon>undo</Icon>
          </Fab>
        </div>
      </List>
    )
  }
}
