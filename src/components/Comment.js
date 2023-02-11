import { useState } from "react";

export default function Comment(props) {
  const [like, setLike] = useState(false);

  function toggleLike() {
    setLike(!like);
  }

  return (
    <div className="comment">
      <p>
        <a className="username" href="/#">
          {props.author}
        </a>{" "}
        {props.content}
      </p>
      <div className="nav-items">
        <button
          className={`like-btn ${like ? "liked" : ""}`}
          onClick={toggleLike}
        >
          <ion-icon name={`heart${like ? "" : "-outline"}`}></ion-icon>
        </button>
      </div>
    </div>
  );
}
