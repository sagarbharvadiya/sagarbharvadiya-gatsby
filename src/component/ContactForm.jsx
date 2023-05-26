import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef();

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedEmails, setSubmittedEmails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const templateId = process.env.GATSBY_TEMPLATE_ID;
  const serviceId = process.env.GATSBY_SERVICE_ID;
  const keyId = process.env.GATSBY_APP_KEY_ID;

  const handleSubmit = (e) => {
    e.preventDefault();

    const userEmail = e.target.user_email.value;

    if (submittedEmails.includes(userEmail)) {
      setErrorMessage("Email already submitted");
      return;
    }

    setIsLoading(true);

    emailjs
      .sendForm(serviceId, templateId, e.target, keyId)
      .then((result) => {
        console.log(result.text);
        setIsSubmitted(true);
        setSubmittedEmails((prevEmails) => [...prevEmails, userEmail]);
      })
      .catch((error) => {
        console.log(error.text);
        // Handle error
      })
      .finally(() => {
        setIsLoading(false);
      });

    formRef.current.reset();
  };
  return (
    <>
      {errorMessage && <p>{errorMessage}</p>}
      <form
        className="php-email-form"
        ref={formRef}
        onSubmit={handleSubmit}
        data-netlify="true"
      >
        <div className="row">
          <div className="col-md-6 form-group">
            <input
              type="text"
              name="user_name"
              className="form-control"
              id="name"
              placeholder="Your Name"
              required
              disabled={isSubmitted || isLoading}
            />
          </div>
          <div className="col-md-6 form-group mt-3 mt-md-0">
            <input
              type="email"
              name="user_email"
              className="form-control"
              id="email"
              placeholder="Your Email"
              required
              disabled={isSubmitted || isLoading}
            />
          </div>
        </div>
        <div className="form-group mt-3">
          <input
            type="text"
            className="form-control"
            name="subject"
            id="subject"
            placeholder="Subject"
            required
            disabled={isSubmitted || isLoading}
          />
        </div>
        <div className="form-group mt-3">
          <textarea
            className="form-control"
            name="message"
            rows="6"
            placeholder="Message"
            required
            disabled={isSubmitted || isLoading}
          ></textarea>
        </div>
        <div className="my-3"></div>
        <div className="text-center">
          <button type="submit" disabled={isSubmitted || isLoading}>
            {isLoading
              ? "Loading..."
              : isSubmitted
              ? "Submitted"
              : "Send Message"}
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
