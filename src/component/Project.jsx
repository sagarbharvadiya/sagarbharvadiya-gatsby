import React, { useState, useEffect, lazy, Suspense } from "react";
import client from "../client";

const Project = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    async function getMenuItems() {
      const entries = await client.getEntries({
        content_type: "projects",
      });
      setMenuItems(entries.items);
    }
    getMenuItems();
  }, []);


  return (
    <>
      <section id="projects">
        <div className="container">
        <h2 className="tw-text-4xl tw-font-bold">PROJECTS</h2>
          <div className="tw-w-full lg:tw-max-w-6xl tw-mx-auto tw-py-12 md:tw-px-6">
          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 lg:tw-grid-cols-4 tw-gap-8">
            {menuItems.map((items) => {
              const { name, link } = items.fields;
              const image = items.fields.image.fields.file.url;
              const { id } = items.sys;

              const LazyLoadedProject = lazy(() => import("./LazyLoadedProject"));

              return (
                <React.Fragment key={id}>
                  <div className="tw-w-full">
                    <Suspense fallback={<div>Loading...</div>}>
                      <LazyLoadedProject
                        name={name}
                        link={link}
                        image={image}
                      />
                    </Suspense>
                  </div>
                </React.Fragment>
              );
            })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
