import "./header.css";
import scene from "../../images/pic.jpg"
export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Travelling Blog</span>
      </div>
      <img
        className="headerImg"
        src={scene}
        alt=""
      />
    </div>
  );
}