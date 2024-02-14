import React, { useState, useEffect } from "react";
// import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import client from "../client";

const AboutUs = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    async function getMenuItems() {
      const entries = await client.getEntries({
        content_type: "bannerSection",
        "sys.id":"7ERyLjnWxetzZAXhIwelBz"
      });
      setMenuItems(entries.items);
      // console.log(entries);
    }
    getMenuItems();
  }, []);
  return (
    <>
      {menuItems.map((items, i) => {
        const { title, description } = items.fields;
        const { id } = items.sys;
        const image = items.fields.image.fields.file.url;
        const richTextContent = documentToReactComponents(description);
        return (
          <React.Fragment key={id}>
            <div className="about-us-section" id="about">
              <div className="about-us-wrapper">
                <div className="about-us-right-section">
                  <img src={image} alt="About Us" loading="lazy" />
                </div>
                <div className="about-us-left-section ">
                  <h2>{title}</h2>
                {richTextContent}
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default AboutUs;
