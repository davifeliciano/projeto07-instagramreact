import Stories from "./Stories";
import Posts from "./Posts";
import Sidebar from "./Sidebar";
import MobileFooter from "./MobileFooter";

export default function Body() {
  return (
    <>
      <main>
        <div className="main-container">
          <Stories />
          <Posts />
        </div>
        <Sidebar />
      </main>
      <MobileFooter />
    </>
  );
}
