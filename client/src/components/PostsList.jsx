import Post from "./Post.jsx";
import classes from './postsList.module.css'
import {useEffect, useState} from "react";

export default function PostsList() {
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
  }, [])

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



  return (
    <>
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