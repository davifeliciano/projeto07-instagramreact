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
          className="userinfo"
          src={profilePicSrc}
          alt={`Imagem de perfil de ${username}`}
          width="1000"
          height="1000"
          data-test="profile-image"
        />
      </button>
      <div className="userinfo">
        <a className="username" href="/#" data-test="name">
          {username}
        </a>
      </div>
      <button onClick={changeUsername} data-test="edit-name">
        <ion-icon name="create-outline"></ion-icon>
      </button>
    </div>
  );
}
