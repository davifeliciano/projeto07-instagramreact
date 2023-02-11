import { useState } from "react";

export default function PostActions(props) {
  const { like, likeSetter, likeAmount, likeAmountSetter } = props;
  const [save, setSave] = useState(false);

  function toggleLike() {
    like ? likeAmountSetter(likeAmount - 1) : likeAmountSetter(likeAmount + 1);
    likeSetter(!like);
  }

  function toggleSave() {
    setSave(!save);
  }

  return (
    <div className="post-actions">
      <div className="nav-items">
        <button
          className={`like-btn ${like ? "liked" : ""}`}
          data-test="like-post"
          onClick={toggleLike}
        >
          <ion-icon name={`heart${like ? "" : "-outline"}`}></ion-icon>
        </button>
        <button>
          <ion-icon name="chatbubble-outline"></ion-icon>
        </button>
        <button>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </button>
      </div>
      <div className="nav-items">
        <button data-test="save-post" onClick={toggleSave}>
          <ion-icon name={`bookmark${save ? "" : "-outline"}`}></ion-icon>
        </button>
      </div>
    </div>
  );
}
