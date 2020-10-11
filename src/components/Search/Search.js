import React, { useState } from "react";
import "./Search.css";

const SearchBar = () => {
  const [search, setSearch] = useState({
    filter: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  console.log(search);
  return (
    <form>
      <label for="search">
        <i className="ri-search-line"></i>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>
      <input type="submit" value='Search' />
    </form>
  );
};

export default SearchBar;
