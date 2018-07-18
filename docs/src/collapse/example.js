import React, { Component } from 'react'
import { Collapse, Button } from 'relaunch'

export default class Example extends Component {
  state = {
    visible: false,
  }

  toggleVisible = () => {
    this.setState(state => ({
      visible: !state.visible,
    }))
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggleVisible}>Toggle</Button>
        <Collapse visible={this.state.visible}>
          {props => (
            <div {...props}>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </div>
          )}
        </Collapse>
      </div>
    )
  }
}
