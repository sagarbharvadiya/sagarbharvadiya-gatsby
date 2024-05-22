import React, { useState, useEffect } from "react";
import client from "../client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { INLINES } from "@contentful/rich-text-types";

function Header() {
  const [menuItems, setMenuItems] = useState([]);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    async function getMenuItems() {
      try {
        const entries = await client.getEntries({
          content_type: "navbarComponent",
        });
        setMenuItems(entries.items);
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    }
    getMenuItems();
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const renderRichText = (links) => {
    const renderNode = {
      [INLINES.ASSET_HYPERLINK]: (node) => (
        <a
          href={`https:${node.data.target.fields.file.url}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {node.content[0].value}
        </a>
      ),
    };

    return documentToReactComponents(links, { renderNode });
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
            {menuItems.map((item) => (
              <li key={item.sys.id}>{renderRichText(item.fields.links)}</li>
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
          <a
            href="https://bit.ly/sagar-linkedin"
            rel="noreferrer"
            target="_blank"
            className="linkedin"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=6352644141"
            rel="noreferrer"
            target="_blank"
            class="whatsapp"
          >
            <i class="fa-brands fa-whatsapp"></i>
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
