import * as React from "react";

const UsersList = (props: any) => {
  return (
    <>
      <ul>
        {
          props.usersList ? props.usersList.map((user: any) => {
              return (
                <li key={user.id}>{user.title}</li>
              )
            })
            : null
        }
      </ul>
    </>
  )
}

export default UsersList