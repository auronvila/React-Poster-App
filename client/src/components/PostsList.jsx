import Post from "./Post.jsx";
import classes from './postsList.module.css'
import {useLoaderData} from "react-router-dom";

export default function PostsList() {
  const data = useLoaderData();

  return (
    <>
      {data.length > 0 && (
        <ul className={classes.posts}>
          {data.map(i => (
            <Post key={i.id} author={i.author} content={i.body}/>
          ))}
        </ul>)
      } )
    </>
  )
}