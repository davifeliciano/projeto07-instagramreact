import { useState } from "react";

export default function User() {
  const [username, setUsername] = useState("catanacomics");
  const [profilePicSrc, setProfilePicSrc] = useState(
    "assets/profile_pics/default_profile_pic.png"
  );

  function promptUser(msg) {
    const value = prompt(msg) ?? "";
    return value.trim();
  }

  function changeUsername() {
    const newUsername = promptUser("Insira um novo nome de usuário");
    if (newUsername !== "") {
      setUsername(newUsername);
    }
  }

  function changeProfilePicSrc() {
    const newProfilePicSrc = promptUser("Insira uma URL de uma imagem");
    if (newProfilePicSrc !== "") {
      setProfilePicSrc(newProfilePicSrc);
    }
  }

  return (
    <div className="sidebar-profile">
      <button onClick={changeProfilePicSrc}>
        <img
          src={profilePicSrc}
          alt={`Imagem de perfil de ${username}`}
          width="1000"
          className="userinfo"
          height="1000"
        />
      </button>
      <div className="userinfo">
        <a className="username" href="/#">
          {username}
        </a>
      </div>
      <button onClick={changeUsername}>
        <ion-icon name="create-outline"></ion-icon>
      </button>
    </div>
  );
}
