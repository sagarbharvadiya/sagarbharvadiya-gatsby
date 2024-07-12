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
          <h2>Projects</h2>
          <div className="tw-grid tw-gap-6 tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-4">
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
      </section>
    </>
  );
};

export default Project;
