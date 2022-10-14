import React from "react";
import Card from "../UI/Card";
import UserListstyle from "../UI/UserListstyle";

const UserList = props=>{
  
    return (
    <UserListstyle >
    <ul>
        {props.users.map(user=> <li key={user.id}>{user.name} ({user.age} years old)</li>)}
    </ul>

   </UserListstyle>
   )
}

export default UserList;


