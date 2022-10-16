import React from 'react';
import Card from './Card';
import classes from './ErrorModal.module.css';
// 
// const Backdrop = props =>{
//  return <div className={classes.backdrop} onClick={props.onConfirm}></div>
// }
// const ModalOverlay = (props)=>{
//     <Card className={classes.modal}>
//     <header className={classes.header} >
//        <h2>{props.title}</h2>
//     </header>
//     <div className={classes.content}>
//        <p>
//            {props.message}
//        </p>
//     </div>
//     <footer className={classes.actions}>
//      <button onClick={props.onConfirm} className={classes.btn}>Okay</button>
//     </footer>
//    </Card>
// }
const ErrorModal = props=>{

    return(
        <React.Fragment>
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
    {/* {ReactDom.createPortal(<Backdrop onConfirm ={props.onConfirm}/>,document.getElementById('backdrop-root'))}
    {ReactDom.createPortal(<ModalOverlay title ={props.title} message = {props.message} onConfirm ={props.onConfirm}/>,document.getElementById('overlay-root'))} */}
    </React.Fragment>);
   
}
export default ErrorModal;