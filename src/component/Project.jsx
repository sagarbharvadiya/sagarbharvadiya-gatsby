import React, { useState, useEffect } from "react";
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
              return (
                <React.Fragment key={id}>
                  <div className="col-lg-3">
                    <a href={link} target="_blank" rel="no-referrer">
                      <div className="box">
                        <div className="image-container">
                          <img src={image} alt={name} />
                        </div>
                        <div className="det">
                          <h3>{name}</h3>
                        </div>
                        <div className="btn">
                          <button>
                            <a href={link} target="_blank" rel="noreferrer">
                              Read More
                            </a>
                          </button>
                        </div>
                      </div>
                    </a>
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
