export default function Comment(props) {
  return (
    <div className="comment">
      <p>
        <a className="username" href="/#">
          {props.author}
        </a>{" "}
        {props.content}
      </p>
      <div className="nav-items">
        <a href="/#">
          <ion-icon name="heart-outline"></ion-icon>
        </a>
      </div>
    </div>
  );
}
