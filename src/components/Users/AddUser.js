import React,{useState} from 'react';
import Card from '../UI/Card';
import Form from '../UI/Form';
import ErrorModal from '../UI/ErrorModal';
const AddUser = props =>{
    // For USername..
    const [enteredUsername,SetEnteredUsername]= useState('');
//    For Age..
  const [enteredAge,SetEnteredAge] =  useState('');
  const [error,setError]  = useState();
      
   
    const addUserHandler = (event)=>{
        event.preventDefault();
        // This Function Get the value of the Input....
       

     

    if(enteredUsername.trim().length ===0 || enteredAge.trim().length===0){
      setError({
        title:'Invalid Input',
        message:'Please enter a valid name and age (Non Empty Values'
      });
        return;
        
    }
    // In input field All Inputs behave as a String So To overcome Entered Age Problem we have to 
    //add +
    if(+enteredAge<1){
       setError({
        title:'Invalid Input',
        message:'Please enter a valid age greater than zero'
       })
        return;
    }
  props.onAddUser(enteredUsername,enteredAge);

        console.log('Yes it is Clicked');
        SetEnteredUsername('');
        SetEnteredAge('');
  

        
    }
//   Get UserInput and Add to another Component
  const userNameHandler =(event)=>{
    SetEnteredUsername(event.target.value);
   
    


  }
  const AgeNameHandler =(event)=>{
    SetEnteredAge(event.target.value);

  
  }
  const errorHandler = ()=>{
     setError(null)
  }
    return (
      <div>
   
    <Card>
    <Form onSubmit={addUserHandler}>
           <label htmlFor='username'>UserName</label>
           {/* We have to give value to clear the form input  */}
           <input id='username' type="text" value={enteredUsername} onChange={userNameHandler} />
           <label htmlFor='age'>Age</label>
           <input id='age' type="number" value={enteredAge} onChange={AgeNameHandler} />
           <button type='submit' >Add User</button>
    </Form>
      </Card> 
     {error &&<ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      

    </div>
    )

};

export default AddUser;