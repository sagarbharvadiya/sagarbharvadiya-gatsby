import React, { useState, useEffect } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import client from "../client";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles
const AboutUs = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    async function getMenuItems() {
      const entries = await client.getEntries({
        content_type: "bannerSection",
        "sys.id": "7ERyLjnWxetzZAXhIwelBz",
      });
      setMenuItems(entries.items);
    }
    getMenuItems();
  }, []);

  useEffect(() => {
    // Delay AOS initialization by 300 milliseconds
    const timeoutId = setTimeout(() => {
      if (menuItems.length > 0) {
        AOS.init();
      }
    }, 300);

    // Clear the timeout if the component is unmounted
    return () => clearTimeout(timeoutId);
  }, [menuItems]);

  return (
    <>
      {menuItems.map((items, i) => {
        const { title, description } = items.fields;
        const { id } = items.sys;
        const image = items.fields.image.fields.file.url;
        const richTextContent = documentToReactComponents(description);
        return (
          <React.Fragment key={id}>
            <div
              className="about-us-section"
              id="about"
              data-aos="fade-up" // AOS animation for image
              data-aos-duration="1200"
            >
              <div className="about-us-wrapper">
                <div
                  className="about-us-right-section"
                  data-aos="fade-up" // AOS animation for image
                  data-aos-duration="1200"
                >
                  <img src={image} alt="About Us" loading="lazy" />
                </div>
                <div
                  className="about-us-left-section"
                  data-aos="fade-up" // AOS animation for left section
                  data-aos-duration="1200"
                >
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
