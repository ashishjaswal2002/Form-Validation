import React,{useState,useRef} from 'react';
import Card from '../UI/Card';
import Form from '../UI/Form';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props =>{
     const nameInput = useRef();
     const ageInput = useRef();
//     // For USername..
//     const [enteredUsername,SetEnteredUsername]= useState('');
// //    For Age..
//   const [enteredAge,SetEnteredAge] =  useState('');
  const [error,setError]  = useState();
      
   
    const addUserHandler = (event)=>{
        event.preventDefault();
       const enteredName = nameInput.current.value;
       const enteredeAge = ageInput.current.value;
        console.log(nameInput.current.value);
        // This Function Get the value of the Input....
       

     

    if(enteredName.trim().length ===0 || enteredeAge.trim().length===0){
      setError({
        title:'Invalid Input',
        message:'Please enter a valid name and age (Non Empty Values'
      });
        return;
        
    }
    // In input field All Inputs behave as a String So To overcome Entered Age Problem we have to 
    //add +
    if(+enteredeAge<1){
       setError({
        title:'Invalid Input',
        message:'Please enter a valid age greater than zero'
       })
        return;
    }
  props.onAddUser(enteredName,enteredeAge);

        console.log('Yes it is Clicked');
        // SetEnteredUsername('');
        // SetEnteredAge('');
  
       nameInput.current.value = '';
       ageInput.current.value= '';  
        
   }
// //   Get UserInput and Add to another Component
//   const userNameHandler =(event)=>{
//     // SetEnteredUsername(event.target.value);
   
    


//   }
//   const AgeNameHandler =(event)=>{
//     // SetEnteredAge(event.target.value);

  
//   }
  const errorHandler = ()=>{
     setError(null)
  }
    return (

      <>
      {/* Or we can add React.Fragment 
            or import React,fragment
            <Fragment>*/}

    <Card>
    <Form onSubmit={addUserHandler}>
           <label htmlFor='username'>UserName</label>
           {/* We have to give value to clear the form input  */}
           <input id='username' type="text" ref={nameInput} />
           <label htmlFor='age'>Age</label>
           <input id='age' type="number"ref={ageInput} />
           <button type='submit' >Add User</button>
    </Form>
      </Card> 
     {error &&<ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}

    </>
    )

};

export default AddUser;