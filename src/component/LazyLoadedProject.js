import React from "react";

const LazyLoadedProject = ({ name, link, image }) => {
  return (
    <>
      <a href={link} target="_blank" rel="no-referrer">
        <div className="box">
          <div className="image-container">
            <img src={image} alt={name} loading="lazy" />
          </div>
          <div className="det">
            <h3>{name}</h3>
          </div>
          <div className="btn">
            <button>
              <a href={link} target="_blank" rel="noreferrer">
                Visit Project
              </a>
            </button>
          </div>
        </div>
      </a>
    </>
  );
};

export default LazyLoadedProject;
