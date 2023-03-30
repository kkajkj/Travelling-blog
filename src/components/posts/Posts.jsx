import Post from "../post/Post";
import "./posts.css";
import taj from "../../images/tajm.jpg"
import pyr from "../../images/pyramid.jpg"
import wat from "../../images/waterfal.jpg"
import mount from "../../images/mount.jpg"
import goa from "../../images/goa.jpg"
import build from "../../images/build.jpg"
export default function Posts() {
  return (
    <div className="posts">
      <Post img={taj}/>
      <Post img={pyr}/>
      <Post img={wat}/>
      <Post img={mount}/>
      <Post img={goa}/>
      <Post img={build}/>
    </div>
  );
}