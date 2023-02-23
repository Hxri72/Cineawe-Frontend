import React, { Fragment, useEffect, useMemo } from "react";
import { useTable } from "react-table";
import { useState } from "react";

import { getAllUsers } from "../../../../api_Integration/Admin/admin";
import { COLUMNS } from "../Includes/columns";

function ManageUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await getAllUsers();
      console.log(response);
      if (response?.success) {
        setUsers(response.data);
      } else {
        console.log("no users");
      }
    };
    fetchUser();
  }, []);

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => users, []);
  const tableInstance = useTable({
    columns: columns,
    data: data,
  });

  const { getTableProps, getTableBodyprops, headerGroups, rows, prepareRow } =
    tableInstance;

  //   {users?.length!== 0 ? users.map(user=>{
  //     return <p className='text-white'>{user.firstname}</p>
  // }):<div>No users</div>}

  return (
    <Fragment>
      <div className="mainDiv">
        <div className="maindivInside">
          <div className="usersTable ">
            <table {...getTableProps()}>
              <thead>
                <tr>
                  <th></th>
                </tr>
              </thead>

              <tbody {...getTableBodyprops()}>
                <tr>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ManageUser;
