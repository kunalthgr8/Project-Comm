import React from "react";
import "./TopBar.css";
import SearchBar from "../searchBar/SearchBar";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCircleUser } from "react-icons/fa6";

const TopBar = () => {
  const handleSearch = (searchTerm) => {
    console.log(searchTerm);
  };

  return (
    <div className="topbar">
      {/* <div className="">
        <GiHamburgerMenu />
      </div> */}
      <div className="searchbox-topbar">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="user-topbox" >
        <FaCircleUser />
      </div>
    </div>
  );
};

export default TopBar;
