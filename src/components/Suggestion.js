import { profiles } from "./data";

export default function Suggestion(props) {
  const { username, whySuggested } = props.suggestion;
  const profile = profiles.find((profile) => profile.username === username);

  return (
    <div className="suggestion">
      <div className="suggestion-info">
        <a href="/#">
          <img
            src={profile.src}
            alt={`Imagem de perfil de ${username}`}
            width="1000"
            height="1000"
          />
        </a>
        <div className="userinfo">
          <a className="username" href="/#">
            {username}
          </a>
          <p className="description" href="#">
            {whySuggested}
          </p>
        </div>
      </div>
      <a className="follow" href="/#">
        Follow
      </a>
    </div>
  );
}
