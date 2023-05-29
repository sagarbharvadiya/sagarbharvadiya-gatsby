import React from 'react';
import { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';


const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  databaseURL: 'YOUR_DATABASE_URL',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: '1:926290748516:web:b342288b9b51ca028d6b71',
  measurementId: 'YOUR_MEASUREMENT_ID',
};

initializeApp(firebaseConfig);
const database = getDatabase();

const ContactFormNew = () => {
  const [details, setDetails] = useState({
    fName: '',
    email: '',
    sub: '',
    mes: '',
  });

  const postData = async (e) => {
    e.preventDefault();
    const { fName, email, sub, mes } = details;

    try {
      const formRef = ref(database, 'sagarform');
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

      console.log('Data posted successfully');
    } catch (error) {
      console.error('Error posting data:', error);
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
          ></textarea>
        </div>
        <div className="my-3"></div>
        <div className="text-center">
          <button type="submit" onClick={postData}>
            submit
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactFormNew;
