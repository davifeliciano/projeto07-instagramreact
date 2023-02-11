export default function PostActions(props) {
  const { like, likeSetter, likeAmount, likeAmountSetter } = props;

  function toggleLike() {
    like ? likeAmountSetter(likeAmount - 1) : likeAmountSetter(likeAmount + 1);
    likeSetter(!like);
  }

  return (
    <div className="post-actions">
      <div className="nav-items">
        <button
          className={`like-btn ${like ? "liked" : ""}`}
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
        <button>
          <ion-icon name="bookmark-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
}
