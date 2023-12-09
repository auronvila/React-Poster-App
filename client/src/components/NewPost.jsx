import classes from './newPost.module.css';
import {useState} from "react";

function NewPost(props) {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  function handleBodyChange(event) {
    setEnteredBody(event.target.value)
  }

  function handleAuthorCahnge(event) {
    setEnteredAuthor(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    const dto = {
      body: enteredBody,
      author: enteredAuthor,
    }
    props.onAddPost(dto);
    props.closeModal()
  }

  return (
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
        <button onClick={props.closeModal} type={'button'}>Cancel</button>
        <button type={'submit'}>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;