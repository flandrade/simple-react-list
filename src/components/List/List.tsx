import React from 'react';
import Table from 'react-bootstrap/Table';

import Element from './Element'
import './List.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { User, getUsers } from '../../services/api';

interface State {
  users: User[];
}

class List extends React.Component<{ getUsers: getUsers }, State> {
  state = {
    users: []
  }

  componentDidMount() {
    getUsers()
    .then(data => this.setState({ users: data }))
    .catch(console.log)
  }

  render() {
    return (
      <div className="List-container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>City</th>
              <th>Status</th>
            </tr>
          </thead>
          <Element users={this.state.users}/>
        </Table>
    </div>

    );
  }
}

export default List;
