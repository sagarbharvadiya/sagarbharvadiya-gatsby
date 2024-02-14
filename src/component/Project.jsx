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
          <div className="row">
            {menuItems.map((items) => {
              const { name, link } = items.fields;
              const image = items.fields.image.fields.file.url;
              const { id } = items.sys;

              // Use lazy loading for individual project components
              const LazyLoadedProject = lazy(() => import("./LazyLoadedProject"));

              return (
                <React.Fragment key={id}>
                  <div className="col-lg-3">
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
