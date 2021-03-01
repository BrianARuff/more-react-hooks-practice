import * as React from "react";

const UsersList = (props: any) => {
  return (
    <>
      <ul>
        {
          props.usersList.map((user: any) => {
            return (
              <li key={user.id}>{user.title}</li>
            )
          })
        }
      </ul>
    </>
  )
}

export default UsersList