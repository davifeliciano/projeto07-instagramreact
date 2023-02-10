export default function Header() {
  return (
    <header>
      <nav className="desktop-nav">
        <div className="nav-home">
          <a href="/#">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <div className="vertical-border"></div>
          <img className="logo" src="assets/logo.svg" alt="Instagram" />
        </div>
        <div>
          <input placeholder="Pesquisar" type="text" />
        </div>
        <div className="nav-items">
          <a href="/#">
            <ion-icon name="paper-plane-outline"></ion-icon>
          </a>
          <a href="/#">
            <ion-icon name="compass-outline"></ion-icon>
          </a>
          <a href="/#">
            <ion-icon name="heart-outline"></ion-icon>
          </a>
          <a href="/#">
            <ion-icon name="person-outline"></ion-icon>
          </a>
        </div>
      </nav>
      <nav className="mobile-nav">
        <a href="/#">
          <ion-icon name="logo-instagram"></ion-icon>
        </a>
        <img className="logo" src="assets/logo.svg" alt="Instagram" />
        <a href="/#">
          <ion-icon name="paper-plane-outline"></ion-icon>
        </a>
      </nav>
    </header>
  );
}
