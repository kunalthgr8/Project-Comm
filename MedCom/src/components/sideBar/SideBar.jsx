import React, { useMemo } from "react";
import "./SideBar.css";
import Logo from "../../assets/Logo.svg";
import { Link, NavLink } from "react-router-dom";

const SideBar = () => {
  const items = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Products",
      path: "/product",
    },
    {
      title: "Cart",
      path: "/cart",
    },
    {
      title: "Offers",
      path: "/offers",
    },
    {
      title: "Contact Us",
      path: "/contact",
    },
  ];

  return (
    <div className="sidebar">
      <div className="side-logo">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <h1>Aoushadhi</h1>
      </div>

      <div className="side-items">
        {items.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `${isActive ? "active-item" : ""} side-title`
            }
          >
            {item.title}
          </NavLink>
        ))}
      </div>
      <div className="side-footer">
        <p>Copyright @KunalSingla</p>
      </div>
    </div>
  );
};

export default React.memo(SideBar);
