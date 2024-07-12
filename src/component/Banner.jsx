import React, { useState, useEffect } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import client from "../client";

const Banner = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    async function getMenuItems() {
      const entries = await client.getEntries({
        content_type: "titleDescriptionButtons",
        "sys.id": "1R9rioEIrdJow6kE81wRiV",
      });
      setMenuItems(entries.items);
    }
    getMenuItems();
  }, []);

  return (
    <>
      {menuItems.map((items) => {
        const { title, description, button1, button2 } = items.fields;
        const { id } = items.sys;
        const image = items.fields.bg.fields.file.url;
        const richTextContent = documentToReactComponents(description);
        return (
          <React.Fragment key={id}>
            <section
              className="tw-w-full tw-h-[100dvh] tw-relative tw-z-10"
              id="home"
            >
              <div className="container tw-h-full tw-flex tw-flex-col tw-items-center tw-justify-center tw-space-y-6 tw-relative tw-z-10">
                <h1 className="tw-text-4xl lg:tw-text-6xl tw-font-bold">{title}</h1>
                <p className="tw-text-2xl">{richTextContent}</p>
                <div className="tw-flex tw-gap-4">
                  <button
                    className="btn-main tw-w-full tw-px-3 tw-flex tw-justify-center tw-items-center tw-overflow-hidden lg:tw-w-52 lg:tw-h-12 tw-rounded-[5rem] tw-bg-[length:300%_300%] tw-transition-[0.5s] tw-backdrop-blur-[1rem] tw-bg-origin-border"
                    type="button"
                    onClick={() => {
                      const projectsElement =
                        document.getElementById("projects");
                        projectsElement.scrollIntoView({ behavior: "smooth", duration:"500" });
                    }}
                  >
                    <strong className="tw-z-10 tw-text-[1rem] #fff tw-tracking-wider">
                      {button1}
                    </strong>
                    <div id="container-stars">
                      <div id="stars"></div>
                    </div>
                    <div id="glow">
                      <div className="circle"></div>
                      <div className="circle"></div>
                    </div>
                  </button>
                  <button
                    className="btn-main tw-w-full tw-px-3 tw-flex tw-justify-center tw-items-center tw-overflow-hidden lg:tw-w-52 lg:tw-h-12 tw-rounded-[5rem] tw-bg-[length:300%_300%] tw-transition-[0.5s] tw-backdrop-blur-[1rem] tw-bg-origin-border"
                    type="button"
                    onClick={() => (window.location.href = "tel:6362644141")}
                  >
                    <strong className="tw-z-10 tw-text-[1rem] #fff tw-tracking-wider">
                      {button2}
                    </strong>
                    <div id="container-stars">
                      <div id="stars"></div>
                    </div>

                    <div id="glow">
                      <div className="circle"></div>
                      <div className="circle"></div>
                    </div>
                  </button>
                </div>
              </div>
              <div className="tw-absolute tw-inset-0 -tw-z-10">
                <div
                  className="tw-w-full tw-h-screen tw-d-flex tw-justify-center tw-items-center tw-bg-fixed tw-bg-center tw-bg-cover tw-bg-no-repeat"
                  style={{
                    backgroundImage: `url(${image})`,
                  }}
                ></div>
                <div className="tw-absolute tw-h-screen tw-inset-0 tw-bg-black tw-opacity-50"></div>
              </div>
            </section>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default Banner;
