import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

export class CreateCustomer extends Component {
    constructor(props) {
        super(props);
        this.state = false;
      }

onChange = () => {
    this.setState(true) 
}
    render(){
        return 
        <Modal
        basic
        onClose={this.state}
        onOpen={this.onChange}
        open={this.state}
        size='small'
        trigger={<Button>Basic Modal</Button>}
      >
        <Header icon>
          <Icon name='archive' />
          Archive Old Messages
        </Header>
        <Modal.Content>
          <p>
            Your inbox is getting full, would you like us to enable automatic
            archiving of old messages?
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color='red' inverted onClick={this.onChange}>
            <Icon name='remove' /> No
          </Button>
          <Button color='green' inverted onClick={this.onChange}>
            <Icon name='checkmark' /> Yes
          </Button>
        </Modal.Actions>
      </Modal>

        
    }
}