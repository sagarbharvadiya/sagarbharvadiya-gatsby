import React, { useState } from "react";
import dataJson from "../Data/data.json";

const Project = () => {
  const [showVideo, setShowVideo] = useState(true);
  const [isLoading, setIsLoading] = useState(true); // Add state for loading status

  const handleVideoEnd = () => {
    setShowVideo(false);
  };

  const handleMediaLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      <section id="projects">
        <div className="container">
          <h2>Projects</h2>
          <div className="row">
            {dataJson.Projects.map((item, i) => {
              return (
                <React.Fragment key={i}>
                  <div className="col-lg-3">
                    <a href={item.link} target="_blank" rel="no-referrer">
                      <div className="box">
                        <div className="image-container">
                          {showVideo ? (
                            <video
                              autoPlay
                              muted
                              id="video-background"
                              className={`h-auto ${isLoading ? "hidden" : ""}`}
                              width="100%"
                              onEnded={handleVideoEnd}
                              onLoadedData={handleMediaLoad}
                              preload="auto" // Add the preload attribute
                            >
                              <source src={item.video} type="video/mp4" />
                              {/* Add additional source tags for other formats if needed */}
                            </video>
                          ) : (
                            <img
                              src={item.img}
                              alt={item.title}
                              className={isLoading ? "hidden" : ""} // Hide image while loading
                              onLoad={handleMediaLoad} // Call when the image is loaded
                            />
                          )}
                          {isLoading && (
                            <div className="loader">Loading...</div>
                          )}{" "}
                          {/* Show loader while loading */}
                        </div>
                        <div className="det">
                          <h3>{item.title}</h3>
                        </div>
                        <div className="btn">
                          <button>
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {item.button}
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
