import React, { useState } from "react";
import dataJson from "../Data/data.json";

const Project = () => {
  const [showVideo, setShowVideo] = useState(true);

  const handleVideoEnd = () => {
    setShowVideo(false);
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
                    <a href={item.link} target="_blank" rel="noreferrer">
                      <div className="box">
                        <div className="image-container">
                          {showVideo ? (
                            <video
                              autoPlay
                              muted
                              id="video-background"
                              className="h-auto"
                              width="100%"
                              onEnded={handleVideoEnd}
                            >
                              <source src={item.video} type="video/mp4" />
                              {/* Add additional source tags for other formats if needed */}
                            </video>
                          ) : (
                            <img src={item.img} alt={item.title} />
                          )}
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
