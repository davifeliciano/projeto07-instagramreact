import Posts from "./Posts";
import Stories from "./Stories";

export default function Body() {
  return (
    <main>
      <div className="main-container">
        <Stories />
        <Posts />
      </div>
    </main>
  );
}
