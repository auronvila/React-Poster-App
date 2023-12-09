import Post from "./Post.jsx";
import classes from './postsList.module.css'
import NewPost from "./NewPost.jsx";
import {useState} from "react";
import Modal from "./Modal.jsx";
import MainHeadeer from "./MainHeadeer.jsx";

export default function PostsList() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [posts, setPosts] = useState([])

  function addPostHandler(postData) {
    setPosts((exitstingPosts) => [postData, ...exitstingPosts]);
  }

  function closeModal() {
    setIsFormVisible(false)
  }

  return (
    <>
      <MainHeadeer onCreatePost={() => setIsFormVisible(true)}/>
      <Modal closeModal={closeModal} show={isFormVisible}>
        <NewPost closeModal={closeModal} onAddPost={addPostHandler}/>
      </Modal>
      {posts.length > 0 ? (
        <ul className={classes.posts}>
          {posts.map(i => (
            <Post key={i.body} author={i.author} content={i.body}/>
          ))}
        </ul>
      ) : (
        <div style={{textAlign:'center'}}>
          <h2>There are no posts yet.</h2>
          <p>Start Adding Some</p>
        </div>
      )}
    </>
  )
}