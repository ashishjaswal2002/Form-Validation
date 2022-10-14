import React from 'react';
import Card from './Card';
import classes from './ErrorModal.module.css';

const ErrorModal = props=>{

    return(
        <div>
    <div className={classes.backdrop}>
     <Card className={classes.modal}>
     <header className={classes.header} >
        <h2>{props.title}</h2>
     </header>
     <div className={classes.content}>
        <p>
            {props.message}
        </p>
     </div>
     <footer className={classes.actions}>
      <button onClick={props.onConfirm} className={classes.btn}>Okay</button>
     </footer>
    </Card>
    </div>
    </div>)
    
}
export default ErrorModal;