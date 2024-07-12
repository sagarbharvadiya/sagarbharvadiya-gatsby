import React from "react";

const LazyLoadedProject = ({ name, link, image }) => {
  return (
    <>
      <a href={link} target="_blank" rel="no-referrer" className="tw-no-underline !tw-text-white">
        <div className="group tw-relative tw-cursor-pointer">
          <div className="tw-absolute tw-inset-0  tw-opacity-0 tw-transition-opacity tw-bg-gradient tw-duration-300 group-hover:tw-opacity-80 tw-rounded-lg" />
          <div className="tw-relative tw-bg-background tw-border tw-border-input tw-rounded-lg tw-overflow-hidden tw-shadow-lg tw-transition-transform tw-duration-300 tw-transform-gpu group-hover:tw--translate-y-2 group-hover:tw-rotate-2">
            <img src={image} alt={name} width={400} height={300} className="tw-w-full tw-object-cover" />
            <div className="tw-p-4">
              <h3 className="tw-text-lg tw-font-semibold tw-mb-4">{name}</h3>
              <a href={link} className="tw-text-sm tw-no-underline !tw-text-white tw-bg-blue-600 tw-py-2 tw-px-4 hover:tw-bg-blue-800 tw-rounded-md">View Project</a>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default LazyLoadedProject;
