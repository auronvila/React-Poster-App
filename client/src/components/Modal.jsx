import classes from './modal.module.css'
export default function Modal(props){
  return(
    <>
      <div onClick={props.closeModal} className={props.show && classes.backdrop}/>
      <dialog open={props.show} className={classes.modal}>
        {props.children}
      </dialog>
    </>
  )
}