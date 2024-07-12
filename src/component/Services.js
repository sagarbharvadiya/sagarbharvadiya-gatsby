import React, { useState, useEffect } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import client from "../client";

const Services = () => {

  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    async function getMenuItems() {
      const entries = await client.getEntries({
        content_type: "service",
      });
      setMenuItems(entries.items);
    }
    getMenuItems();
  }, []);

  return (
    <section className="tw-w-full tw-py-2 lg:tw-py-5 tw-bg-muted" id="services">
      <div className="container">
        <div className="tw-space-y-4 tw-mb-12">
          <h2 className="tw-text-4xl tw-font-bold">MY SERVICES</h2>
          <p className="tw-text-muted-foreground">
            Here are the services I offer to help you build your dream web application.
          </p>
        </div>
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8">
          {menuItems.map((items) => {
            const { title, description, image } = items.fields;
            const { id } = items.sys;
            const richTextContent = documentToReactComponents(description);

            return (
              <div className="bg-card tw-rounded-lg" key={id}>
                {image && (
                  <div className="tw-relative tw-w-full tw-h-auto lg:tw-h-60 tw-overflow-hidden tw-rounded-lg  tw-rounded-bl-none tw-rounded-br-none ">
                    <img
                      src={image.fields.file.url}
                      alt={image.fields.title}
                      className="tw-w-full tw-h-full tw-object-cover"
                    />
                  </div>
                )}
                <div className="tw-mt-4 tw-p-6 tw-space-y-2">
                  <h3 className="tw-text-2xl tw-font-bold">{title}</h3>
                  <div className="tw-text-muted-foreground">
                    {richTextContent}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
