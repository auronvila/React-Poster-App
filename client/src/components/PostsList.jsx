import Post from "./Post.jsx";
import classes from './postsList.module.css'
import NewPost from "./NewPost.jsx";
import {useEffect, useState} from "react";
import Modal from "./Modal.jsx";
import MainHeadeer from "./MainHeadeer.jsx";

export default function PostsList() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true)
        const response = await fetch('http://localhost:8080/posts');
        const responseData = await response.json();
        setPosts(responseData.posts)
      } catch (e) {
        alert('error while fetching data')
        throw new Error('error while fetching data')
        return
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [isFormVisible])

  async function addPostHandler(postData) {
    const response = await fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const responseData = response.json();
    setPosts(prevState => [responseData.posts, ...prevState]);
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
      {!loading && posts.length > 0 ? (
        <ul className={classes.posts}>
          {posts.map(i => (
            <Post key={i.id} author={i.author} content={i.body}/>
          ))}
        </ul>
      ) : (
        !loading &&
        <div style={{textAlign: 'center'}}>
          <h2>There are no posts yet.</h2>
          <p>Start Adding Some</p>
        </div>
      )}
      {loading && <h3 style={{textAlign: 'center'}}>Loading...</h3>}
    </>
  )
}