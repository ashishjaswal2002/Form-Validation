import React, {useState} from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';

import UserList from './components/Users/UserList';
function App() {
//  Now we are going to Output Our List in The Component..
  const[usersList,setUserlist] = useState([]);

   const addUserHandler = ( uName,uAge)=>{
     setUserlist((prevUserList)=>{
      return [...prevUserList,{name:uName,age:uAge,id:Math.random().toString()}];
     });
    };
  return (
    <div >
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={usersList}/>
      
    </div>
  );
}
// Pending Error Modal
// Done

export default App;
