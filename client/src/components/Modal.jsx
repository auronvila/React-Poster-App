import classes from './modal.module.css'
import {useNavigate} from "react-router-dom";
export default function Modal(props){
  const navigate = useNavigate();
  function closeHandler(){
    navigate('/')
  }
  return(
    <>
      <div onClick={closeHandler} className={props.show && classes.backdrop}/>
      <dialog open={props.show} className={classes.modal}>
        {props.children}
      </dialog>
    </>
  )
}