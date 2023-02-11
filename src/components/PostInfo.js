import { profiles } from "./data";

export default function PostInfo(props) {
  const likedByProfile = profiles.find(
    (profile) => profile.username === props.likedBy
  );

  return (
    <div className="post-info">
      <img
        src={likedByProfile.src}
        alt={`Imagem de perfil de ${likedByProfile.username}`}
        width="1000"
        height="1000"
      />
      <p>
        Curtido por{" "}
        <a className="username" href="/#">
          {likedByProfile.username}
        </a>{" "}
        e{" "}
        <a className="username" href="/#">
          outras{" "}
          <span data-test="likes-number">
            {props.likeAmount.toLocaleString()}
          </span>{" "}
          pessoas
        </a>
      </p>
    </div>
  );
}
