import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';

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

  const validateForm = () => {
    const { fName, email, sub, mes } = details;

    if (fName.trim() === '' || email.trim() === '' || sub.trim() === '' || mes.trim() === '') {
      return false;
    }

    return true;
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

      // Reset the form fields
      setDetails({
        fName: '',
        email: '',
        sub: '',
        mes: '',
      });

      setSubmitted(true);
      alert('Data posted successfully');
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
              className="form-control"
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
              className="form-control"
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
            className="form-control"
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
            className="form-control"
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
          <button type="submit" onClick={postData} disabled={isSubmitting || submitted}>
            {isSubmitting ? 'Submitting...' : submitted ? 'Submitted' : 'Submit'}
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactFormNew;
