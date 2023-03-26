import { useState } from "react";
import "./SearchBar.css";
function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const emptyField = () => {
    setTerm("");
  };

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
    emptyField();
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <label>Entre search term</label>
        <input
          className="input"
          type="text"
          placeholder="ex: cars | hourse ..."
          onChange={handleChange}
          value={term}
        />
      </form>
    </div>
  );
}

export default SearchBar;
