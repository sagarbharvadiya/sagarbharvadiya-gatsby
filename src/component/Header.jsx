import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import client from "../client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { INLINES } from "@contentful/rich-text-types";
import MobileHeader from "./MobileHeader";


function Header() {
  const [menuItems, setMenuItems] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function getMenuItems() {
      try {
        const entries = await client.getEntries({
          content_type: "navbarComponent",
          order: "fields.order",
        });
        setMenuItems(entries.items.map((item) => item.fields));
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    }
    getMenuItems();
  }, []);

  const renderRichText = (richText) => {
    const options = {
      renderNode: {
        [INLINES.HYPERLINK]: (node, children) => (
          <a
            href={node.data.uri}
            target="_blank"
            rel="noopener noreferrer"
            className="tw-no-underline tw-text-white tw-cursor-pointer"
          >
            {children}
          </a>
        ),
      },
    };
    try {
      return documentToReactComponents(richText, options);
    } catch (error) {
      console.error("Error rendering rich text:", error);
      setError(error);
      return null;
    }
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(menuItems)

  return (
    <>
      <header className="tw-sticky tw-top-0 tw-z-20 tw-bg-[#0f172a]/80 tw-backdrop-blur-sm tw-hidden md:tw-block">
        <div className="container tw-mx-auto tw-py-4 tw-flex tw-items-center tw-justify-between">
          <a
            href=""
            className="tw-text-2xl tw-font-bold tw-text-white tw-no-underline"
          >
            <h3>
              Sagar <span>Bharvadiya</span>
            </h3>
          </a>
          <nav className="tw-hidden md:tw-flex tw-items-center tw-space-x-6 header__nav">
            {menuItems
              .sort((a, b) => a.order - b.order)
              .map((item, index) => (
                <li
                  key={index}
                  className="tw-list-none tw-text-lg tw-font-bold"
                >
                  {item.type === "resume" ? (
                    // Debug: Log item.links to ensure it has the expected data
                    <div>
                      {console.log(item.links)}
                      {item.links && (
                        <a
                          href={item.links.uri}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="tw-no-underline tw-text-white tw-cursor-pointer"
                        >
                          {item.menu}
                        </a>
                      )}
                    </div>
                  ) : (
                    <ScrollLink
                      to={item.link}
                      smooth={true}
                      duration={500}
                      className="tw-no-underline tw-text-white tw-cursor-pointer"
                    >
                      {item.menu}
                    </ScrollLink>
                  )}
                </li>
              ))}
          </nav>
          <button className="get-in-touch tw-w-[120px] tw-h-[40px] tw-rounded-2xl tw-cursor-pointer tw-relative tw-text-lg tw-text-white tw-bg-black tw-border-none tw-transition-[0.1s] tw-font-bold tw-hidden lg:tw-block">
            Get in Touch
          </button>
        </div>
      </header>
      <MobileHeader />
    </>
  );
}

export default Header;
