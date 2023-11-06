import React, { useState, useEffect } from "react";
// import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import client from "../client";

const Banner = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    async function getMenuItems() {
      const entries = await client.getEntries({
        content_type: "bannerSection",
        "sys.id":"6pz8tmz7cY5jp1snFurSxl"
      });
      setMenuItems(entries.items);
      // console.log(entries);
    }
    getMenuItems();
  }, []);

  return (
    <>
      {menuItems.map((items, i) => {
        const { title, description, button, link } = items.fields;
        const { id } = items.sys;
        const image = items.fields.image.fields.file.url
        const richTextContent = documentToReactComponents(
          description
        );
        return (
          <React.Fragment key={id}>
            <div className="banner-section">
              <div className="banner-wrapper">
                <div className="banner-left-section">
                  <h2>{title}</h2>
                  {richTextContent}
                  <div className="banner-left-btn">
                    <a href={link}>{button}</a>
                  </div>
                </div>
                <div className="banner-right-section">
                  <div className="banner-right-section">
                    <img src={image} alt="Banner" />
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default Banner;
