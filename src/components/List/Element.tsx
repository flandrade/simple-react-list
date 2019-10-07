import React from 'react';
import Badge from 'react-bootstrap/Badge';

import { User, Status } from "../../services/api";

interface Props {
  users: User[];
}

const Element: React.FC<Props> = ({users}): React.ReactElement => {
  return (
    <tbody>
      {users.map(user => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.address.city}</td>
          <td>{formatStatus(user.status)}</td>
        </tr>
      ))}
    </tbody>
  );
}

function formatStatus(status: Status): React.ReactElement {
  return status === "available"
  ? (<Badge variant="success">Available</Badge>)
  : (<Badge variant="danger">Non-available</Badge>)
}

export default Element;
