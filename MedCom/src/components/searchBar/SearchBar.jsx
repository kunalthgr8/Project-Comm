import React, { useState } from "react";
import "./SearchBar.css";
import { IoMdSearch } from "react-icons/io";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search products...."
        value={searchTerm}
        onChange={handleChange}
      />
      <div className="search-icon">
        <IoMdSearch onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default SearchBar;
