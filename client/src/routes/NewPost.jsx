import classes from '../components/newPost.module.css';
import {useState} from "react";
import Modal from "../components/Modal.jsx";
import {useNavigate} from "react-router-dom";

function NewPost(props) {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');
  const navigate = useNavigate();

  function handleBodyChange(event) {
    setEnteredBody(event.target.value)
  }

  function handleAuthorCahnge(event) {
    setEnteredAuthor(event.target.value)
  }

  function closeHandler() {
    navigate('/')
  }

  function handleSubmit(event) {
    event.preventDefault();
    const dto = {
      body: enteredBody,
      author: enteredAuthor,
    }
    props.onAddPost(dto);
    closeHandler()
  }

  return (
    <Modal closeModal={props.closeModal} show={true}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea onChange={handleBodyChange} id="body" required rows={3}/>
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input onChange={handleAuthorCahnge} type="text" id="name" required/>
        </p>
        <p className={classes.actions}>
          <button onClick={closeHandler} type={'button'}>Cancel</button>
          <button type={'submit'}>Submit</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;