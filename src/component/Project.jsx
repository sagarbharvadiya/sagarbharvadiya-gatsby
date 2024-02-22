import React, { useState, useEffect, lazy, Suspense } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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

  useEffect(() => {
    // Initialize AOS after menu items are loaded
    if (menuItems.length > 0) {
      AOS.init();
    }
  }, [menuItems]);

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

              const LazyLoadedProject = lazy(() => import("./LazyLoadedProject"));

              return (
                <React.Fragment key={id}>
                  <div className="col-lg-3 col-md-4 col-sm-6">
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
