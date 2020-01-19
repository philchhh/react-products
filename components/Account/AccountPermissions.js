import React from "react";
import axios from "axios";
import Switch from "../ui/form-elements/Switch";
import Table, {
  TableHeader,
  TableRow,
  TableBody,
  Cell
} from "../ui/tables/Table";
import baseUrl from "../../utils/baseUrl";
import cookie from "js-cookie";
import formatDate from "../../utils/formatDate";

function AccountPermissions() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const url = `${baseUrl}/api/users`;
    const token = cookie.get("token");
    const payload = { headers: { Authorization: token } };
    const response = await axios.get(url, payload);
    setUsers(response.data);
  }

  return (
    <div>
      <h2>User Permissions</h2>
      <Table>
        <TableHeader>
          <Cell />
          <Cell header>Name</Cell>
          <Cell>Email</Cell>
          <Cell>Joined</Cell>
          <Cell>Updated</Cell>
          <Cell>Role</Cell>
        </TableHeader>
        <TableBody>
          {users.map(user => (
            <UserPermissions key={user._id} user={user} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

function UserPermissions({ user }) {
  const [admin, setAdmin] = React.useState(user.role === "admin");

  const isFirstRun = React.useRef(true);

  React.useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    updatePermission();
  }, [admin]);

  function handleChangePermission() {
    setAdmin(prevState => !prevState);
  }

  async function updatePermission() {
    const url = `${baseUrl}/api/account`;
    const payload = { _id: user._id, role: admin ? "admin" : "user" };
    await axios.put(url, payload);
  }

  return (
    <TableRow>
      <Cell>
        <Switch
          rounded
          defaultChecked={admin}
          onChange={handleChangePermission}
        />
        {/* <Checkbox toggle checked={admin} onChange={handleChangePermission} /> */}
      </Cell>
      <Cell>{user.name}</Cell>
      <Cell>{user.email}</Cell>
      <Cell>{formatDate(user.createdAt)}</Cell>
      <Cell>{formatDate(user.updatedAt)}</Cell>
      <Cell>{admin ? "admin" : "user"}</Cell>
    </TableRow>
  );
}

export default AccountPermissions;
