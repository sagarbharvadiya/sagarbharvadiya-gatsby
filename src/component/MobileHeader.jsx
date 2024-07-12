import React, { useState, useEffect } from "react";
import client from "../client";
import { Link as ScrollLink } from "react-scroll";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { INLINES } from "@contentful/rich-text-types";

function MobileHeader() {
  const [menuItems, setMenuItems] = useState([]);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [error, setError] = useState(null);

  const Button = ({ children, variant, className, ...props }) => (
    <button
      className={`${variant === "icon" ? "p-2" : "px-4 py-2"} ${className}`}
      {...props}
    >
      {children}
    </button>
  );

  const MenuIcon = (props) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    async function getMenuItems() {
      try {
        const entries = await client.getEntries({
          content_type: "navbarComponent",
          order: "fields.order",
        });
        setMenuItems(entries.items.map((item) => item.fields));
      } catch (error) {
        setError(error);
        console.error("Error fetching menu items:", error);
      }
    }
    getMenuItems();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <header className="md:tw-hidden">
      <div className="container tw-mx-auto tw-py-4 tw-px-4 md:tw-px-6 tw-flex tw-items-center tw-justify-between">
        <a
          href=""
          className="tw-text-2xl tw-font-bold tw-text-white tw-hover:text-white tw-no-underline"
        >
          <h3>
            Sagar <span>Bharvadiya</span>
          </h3>
        </a>
        <Button
          variant="icon"
          className="md:tw-hidden tw-bg-primary tw-rounded-md"
          onClick={toggleNav}
        >
          <MenuIcon className="tw-w-6 tw-h-6" />
        </Button>
      </div>
      <nav className={`header__nav ${isNavOpen ? "open" : ""}`}>
        <ul>
          {menuItems
            .sort((a, b) => a.order - b.order)
            .map((item, index) => (
              <li key={index} className="tw-list-none tw-text-lg tw-font-bold">
                {item.type === "resume" ? (
                  <div>
                    {item.links &&
                      documentToReactComponents(item.links, {
                        renderNode: {
                          [INLINES.ASSET_HYPERLINK]: (node) => (
                            <a
                              href={`https://${node.data.target.fields.file.url}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {item.menu}
                            </a>
                          ),
                        },
                      })}
                  </div>
                ) : (
                  <ScrollLink
                    to={item.link}
                    smooth={true}
                    duration={500}
                    className="tw-no-underline tw-text-white tw-cursor-pointer"
                    onClick={toggleNav} // Add this line
                  >
                    {item.menu}
                  </ScrollLink>
              
                )}
              </li>
            ))}
          <button
            className="get-in-touch tw-w-[120px] tw-mb-2 tw-h-[40px] tw-rounded-2xl tw-cursor-pointer tw-relative tw-text-lg tw-text-white tw-bg-black tw-border-none tw-transition-[0.1s] tw-font-bold tw-block lg:tw-hidden"
            onClick={() =>
              (window.location.href =
                "https://api.whatsapp.com/send?phone=6352644141")
            }
          >
            Get in Touch
          </button>
        </ul>
      </nav>
    </header>
  );
}

export default MobileHeader;
