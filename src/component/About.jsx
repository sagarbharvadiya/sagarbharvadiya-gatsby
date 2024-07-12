import React, { useState, useEffect } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import client from "../client";
import Social from "./Social";
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

  return (
    <>
      {menuItems.map((items, i) => {
        const { title, description, skills } = items.fields;
        const { id } = items.sys;
        const image = items.fields.image.fields.file.url;
        const richTextContent = documentToReactComponents(description);
        return (
          <React.Fragment key={id}>
            <section
              className="tw-w-full tw-h-full  tw-py-24 tw-bg-muted"
              id="about"
            >
              <div className="container tw-grid tw-grid-cols-1 tw-justify-between md:tw-grid-cols-2 tw-gap-12">
                <div className="tw-space-y-4">
                  <h2 className="tw-text-4xl tw-font-bold">{title}</h2>
                  <p className="tw-text-muted-foreground">{richTextContent}</p>
                </div>
                <div className="tw-m-auto">
                  <img
                    src={image}
                    alt={image}
                    className="tw-w-fit tw-m-auto tw-rounded-3xl hover:tw-cursor-not-allowed dp-img"
                    loading="lazy"
                  />
                  <br />
                  <Social />
                </div>
              </div>
              <div className="container">
                <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-6 tw-mt-14">
                  {skills.map((item, i) => {
                    const { title, description, link } = item.fields;
                    const richTextContent =
                      documentToReactComponents(description);
                    return (
                      <div
                        key={i}
                        className="bg-card tw-rounded-lg tw-p-6 tw-border-solid"
                      >
                        <a href={link} target="_blank" className="!tw-text-white tw-no-underline">
                          <h3 className="tw-text-2xl tw-font-bold">{title}</h3>
                          <p className="tw-text-muted-foreground">
                            {richTextContent}
                          </p>
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default AboutUs;
