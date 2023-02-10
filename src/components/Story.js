import { profiles } from "./data";

export default function Story(props) {
  const { src } = profiles.find(
    (profile) => profile.username === props.username
  );

  return (
    <div className="story">
      <a href="/#">
        <img
          src={src}
          alt={`Imagem de perfil de ${props.username}`}
          width="1000"
          height="1000"
        />
      </a>
      <p>{props.username}</p>
    </div>
  );
}
