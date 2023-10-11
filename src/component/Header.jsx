import React, { useState, useEffect } from "react";
import client from "../client";

function Header() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    async function getMenuItems() {
      const entries = await client.getEntries({
        content_type: "navbarComponent",
      });
      setMenuItems(entries.items);
      console.log(entries);
    }
    getMenuItems();
  }, []);

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <a href="/">
          <h3>
            Sagar <span>Bharvadiya</span>
          </h3>
        </a>
      </div>

      <div className="nav_new">
        <nav className={`header__nav ${isNavOpen ? "open" : ""}`}>
          <ul>
            {menuItems.map((items) => (
              <li key={items.sys.id}>
                <a href={items.fields.link}>
                  {items.fields.menu}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="social">
          <a href="tel:6352644141">
            <i className="fa-solid fa-phone"></i>
          </a>
          <a href="mailto:sagarbharvadiya@gmail.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>

      <button className="header__toggle" onClick={toggleNav}>
        <span className="header__toggle-icon">
          <div className="hamburger-menu">
            <div className="hamburger-menu-line"></div>
            <div className="hamburger-menu-line"></div>
            <div className="hamburger-menu-line"></div>
          </div>
        </span>
      </button>
    </header>
  );
}

export default Header;
