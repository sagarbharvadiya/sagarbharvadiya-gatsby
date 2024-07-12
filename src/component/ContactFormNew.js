import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';
import emailjs from "@emailjs/browser";
// import SuccessMessage from './SuccessMessage';
const firebaseConfig = {
  apiKey: process.env.GATSBY_YOUR_API_KEY,
  authDomain: process.env.GATSBY_YOUR_AUTH_DOMAIN,
  databaseURL: process.env.GATSBY_YOUR_DATABASE_URL,
  projectId: process.env.GATSBY_YOUR_PROJECT_ID,
  storageBucket: process.env.GATSBY_YOUR_STORAGE_BUCKET,
  messagingSenderId: process.env.GATSBY_YOUR_MESSAGING_SENDER_ID,
  appId: process.env.GATSBY_YOUR_APP_ID,
  measurementId: process.env.GATSBY_YOUR_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const ContactFormNew = () => {
  const [details, setDetails] = useState({
    fName: '',
    email: '',
    sub: '',
    mes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Email.js credentials
  const emailJsServiceId =  process.env.GATSBY_EMIALJS_SERVICEID;
  const emailJsTemplateId =  process.env.GATSBY_EMIALJS_TEMPLATEID;
  const emailJsUserId =  process.env.GATSBY_EMIALJS_USERID;

  const sendNotificationEmail = async () => {
    try {
      const { fName, email, sub, mes } = details;

      const emailParams = {
        to_name: 'Sagar Bharvadiya', // Your name or recipient's name
        from_name: fName,
        email: email,
        message: `New form submission \nName: ${fName}\nEmail: ${email}\nSubject: ${sub}\nMessage: ${mes}`,
      };

       // Replace 'your_emailjs_service_id', 'your_emailjs_template_id', and 'your_emailjs_user_id' with your actual EmailJS credentials
       await emailjs.send(emailJsServiceId, emailJsTemplateId, emailParams, emailJsUserId);

      console.log('Notification email sent successfully');
    } catch (error) {
      console.error('Error sending notification email:', error);
    }
  };

  const validateForm = () => {
    const { fName, email, sub, mes } = details;
    const newErrors = {};

    if (fName.trim() === '') newErrors.fName = true;
    if (email.trim() === '') newErrors.email = true;
    if (sub.trim() === '') newErrors.sub = true;
    if (mes.trim() === '') newErrors.mes = true;

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const postData = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const { fName, email, sub, mes } = details;

    try {
      const formRef = ref(database, 'sagarform');
      setIsSubmitting(true);
      await push(formRef, {
        fName,
        email,
        sub,
        mes,
      });

      await sendNotificationEmail();

      setDetails({
        fName: '',
        email: '',
        sub: '',
        mes: '',
      });

      setSubmitted(true);
    } catch (error) {
      console.error('Error posting data:', error);
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <>
      <form className="php-email-form">
        <div className="row">
          <div className="col-md-6 form-group">
            <input
              type="text"
              name="user_name"
              className={`form-control ${errors.fName && details.fName === '' ? 'border-red-500' : ''}`}
              id="name"
              placeholder="Your Name"
              value={details.fName}
              onChange={(e) => setDetails({ ...details, fName: e.target.value })}
              required
              disabled={submitted}
            />
          </div>
          <div className="col-md-6 form-group mt-3 mt-md-0">
            <input
              type="email"
              name="user_email"
              className={`form-control ${errors.email && details.email === '' ? 'border-red-500' : ''}`}
              id="email"
              placeholder="Your Email"
              value={details.email}
              required
              onChange={(e) => setDetails({ ...details, email: e.target.value })}
              disabled={submitted}
            />
          </div>
        </div>
        <div className="form-group mt-3">
          <input
            type="text"
            className={`form-control ${errors.sub && details.sub === '' ? 'border-red-500' : ''}`}
            name="subject"
            id="subject"
            placeholder="Subject"
            value={details.sub}
            required
            onChange={(e) => setDetails({ ...details, sub: e.target.value })}
            disabled={submitted}
          />
        </div>
        <div className="form-group mt-3">
          <textarea
            className={`form-control ${errors.mes && details.mes === '' ? 'border-red-500' : ''}`}
            name="message"
            rows="6"
            placeholder="Message"
            value={details.mes}
            required
            onChange={(e) => setDetails({ ...details, mes: e.target.value })}
            disabled={submitted}
          ></textarea>
        </div>
        <div className="my-3"></div>
        <div className="text-center">
          <button className='contact-btn tw-text-lg tw-text-white tw-px-4 tw-py-3 tw-flex tw-items-center tw-rounded-2xl tw-overflow-hidden tw-transition-all tw-duration-300 tw-ease-in-out tw-pl-3 tw-bg-blue-600' onClick={postData} disabled={isSubmitting || submitted}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              className='tw-transition-all tw-duration-300 tw-ease-in-out tw-block tw-origin-center'
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="currentColor"
                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
              ></path>
            </svg>
            <span className='tw-block tw-ml-1 tw-transition-all tw-duration-300 tw-ease-in-out'>{isSubmitting ? 'Submitting...' : submitted ? 'Submitted' : 'Submit'}</span>
          </button>
        </div>
      {/* {submitted && <SuccessMessage />} */}
      </form>
    </>
  );
};

export default ContactFormNew;
