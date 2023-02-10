import User from "./User";
import Suggestions from "./Suggestions";
import SidebarNavigation from "./SidebarNavigation";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <User />
      <Suggestions />
      <SidebarNavigation />
    </aside>
  );
}
