import React, { useState, useEffect } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import client from "../client";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles

const Banner = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    async function getMenuItems() {
      const entries = await client.getEntries({
        content_type: "bannerSection",
        "sys.id": "6pz8tmz7cY5jp1snFurSxl",
      });
      setMenuItems(entries.items);
    }
    getMenuItems();
  }, []);

  useEffect(() => {
    // Initialize AOS after menu items are loaded
    if (menuItems.length > 0) {
      AOS.init();
    }
  }, [menuItems]);

  return (
    <>
      {menuItems.map((items, i) => {
        const { title, description, button, link } = items.fields;
        const { id } = items.sys;
        const image = items.fields.image.fields.file.url;
        const richTextContent = documentToReactComponents(description);
        return (
          <React.Fragment key={id}>
            <div
              className="banner-section"
              data-aos="fade-up" // Add AOS animation to the entire banner section
            >
              <div className="banner-wrapper">
                <div
                  className="banner-left-section"
                  data-aos="fade-right" // Add AOS animation to the left section
                  data-aos-duration="1000"
                >
                  <h2>{title}</h2>
                  {richTextContent}
                  <div className="banner-left-btn">
                    <a href={link} className="btn btn-success">{button}</a>
                  </div>
                </div>
                <div
                  className="banner-right-section"
                  data-aos="fade-left" // Add AOS animation to the right section
                  data-aos-duration="1000"
                >
                  <img src={image} alt="Banner" loading="lazy" />
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
