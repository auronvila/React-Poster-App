import PostsList from "../components/PostsList.jsx";
import {Outlet} from "react-router-dom";

function Posts() {
  return (
    <>
      <Outlet/>
      <main>
        <PostsList/>
      </main>
    </>
  )
}

export default Posts;
