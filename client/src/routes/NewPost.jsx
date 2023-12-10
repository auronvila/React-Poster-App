import classes from '../components/newPost.module.css';
import Modal from "../components/Modal.jsx";
import {useNavigate, Form, redirect} from "react-router-dom";

function NewPost(props) {
  const navigate = useNavigate();

  function closeHandler() {
    navigate('/')
  }

  return (
    <Modal closeModal={props.closeModal} show={true}>
      <Form method={'post'} className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea name={'body'} id="body" required rows={3}/>
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input name={'author'} type="text" id="author" required/>
        </p>
        <p className={classes.actions}>
          <button onClick={closeHandler} type={'button'}>Cancel</button>
          <button type={'submit'}>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({request}) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  await fetch('http://localhost:8080/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return redirect('/');
}