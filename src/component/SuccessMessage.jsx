import React from "react";
const SuccessMessage = () => {
  return (
    <div className="tw-w-full tw-rounded-lg tw-bg-slate-700 tw-mt-4 md:tw-mt-0 tw-py-12 tw-px-8 tw-text-center md:tw-py-[60px] md:tw-px-[70px]">
      <h3 className="tw-text-white tw-pb-2 tw-text-xl tw-font-bold sm:tw-text-2xl">
        Your Message Sent Successfully
      </h3>
      <span className="tw-bg-indigo-500 tw-mx-auto tw-mb-6 tw-inline-block tw-h-1 tw-w-[90px] tw-rounded"></span>
      <p className="tw-text-yellow-50 tw-mb-10 tw-text-base tw-leading-relaxed">
        Thanks for reaching out! We've received your message and will get back
        to you as soon as possible.
      </p>
    </div>
  );
};

export default SuccessMessage;
