import Story from "./Story";
import { stories } from "./data";

export default function Stories() {
  return (
    <div className="stories">
      {stories.map((username) => (
        <Story key={username} username={username} />
      ))}
      <button>
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </button>
    </div>
  );
}
