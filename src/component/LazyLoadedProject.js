import React from "react";

const LazyLoadedProject = ({ name, link, image }) => {
  return (
    <>
      <a href={link} target="_blank" rel="no-referrer" className="tw-no-underline !tw-text-white">
        <div className="box bg-card tw-rounded-lg tw-flex tw-justify-center tw-flex-col tw-h-full">
          <div className="tw-text-center tw-mb-5">
            <img src={image} alt={name} loading="lazy" className="tw-w-full tw-h-full" />
          </div>
          <div className="tw-text-center tw-mb-5">
            <h3 className="tw-text-2xl">{name}</h3>
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
