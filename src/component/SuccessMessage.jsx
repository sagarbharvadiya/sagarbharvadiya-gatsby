import React from "react";
const SuccessMessage = () => {
  return (
    <div className="w-full max-w-[570px] rounded-[20px] bg-gray-900 py-12 px-8 text-center md:py-[60px] md:px-[70px]">
      <h3 className="text-white pb-2 text-xl font-bold sm:text-2xl">
        Your Message Sent Successfully
      </h3>
      <span className="bg-indigo-500 mx-auto mb-6 inline-block h-1 w-[90px] rounded"></span>
      <p className="text-gray-400 mb-10 text-base leading-relaxed">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>
    </div>
  );
};

export default SuccessMessage;
