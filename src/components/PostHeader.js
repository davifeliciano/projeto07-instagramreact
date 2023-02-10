import { profiles } from "./data";

export default function PostHeader(props) {
  const authorProfile = profiles.find(
    (profile) => profile.username === props.author
  );

  return (
    <div className="post-header">
      <div className="post-header-left">
        <a href="/#">
          <img
            src={authorProfile.src}
            alt={`Imagem de perfil de ${props.author}`}
            width="1000"
            height="1000"
          />
        </a>
        <a className="username" href="/#">
          {props.author}
        </a>
      </div>
      <div className="post-options">
        <a href="/#">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </a>
      </div>
    </div>
  );
}
