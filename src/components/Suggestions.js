import { suggestions } from "./data";
import Suggestion from "./Suggestion";

export default function Suggestions() {
  return (
    <div className="sidebar-suggestions">
      <div className="suggestions-header">
        <p>Sugestões para você</p>
        <a href="/#">Ver tudo</a>
      </div>
      {suggestions.map((suggestion, index) => (
        <Suggestion key={index} suggestion={suggestion} />
      ))}
    </div>
  );
}
