import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';
import emailjs from "@emailjs/browser";

// Initialize Firebase with the provided configuration
const firebaseConfig = {
    apiKey: process.env.GATSBY_YOUR_API_KEY,
    authDomain: process.env.GATSBY_YOUR_AUTH_DOMAIN,
    databaseURL: process.env.GATSBY_YOUR_DATABASE_URL,
    projectId: process.env.GATSBY_YOUR_PROJECT_ID,
    storageBucket: process.env.GATSBY_YOUR_STORAGE_BUCKET,
    messagingSenderId: process.env.GATSBY_YOUR_MESSAGING_SENDER_ID,
    appId: process.env.GATSBY_YOUR_APP_ID,
    measurementId: process.env.GATSBY_YOUR_MEASUREMENT_ID,
}
initializeApp(firebaseConfig);

const BoxModel = () => {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [details, setDetails] = useState({
        fName: '',
        email: '',
        sub: '',
        mes: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    // Email.js credentials
    const emailJsServiceId = process.env.GATSBY_EMIALJS_SERVICEID;
    const emailJsTemplateId = process.env.GATSBY_EMIALJS_TEMPLATEID;
    const emailJsUserId = process.env.GATSBY_EMIALJS_USERID;

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



    // Access the database instance
    const database = getDatabase();

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
            await sendNotificationEmail(); // Add this line to send notification email
            setDetails({
                fName: '',
                email: '',
                sub: '',
                mes: '',
            });

            // Instead of using formSubmitted, we use setIsFormSubmitted to track successful form submission
            setIsFormSubmitted(true);
            alert('Data posted successfully');
        } catch (error) {
            console.error('Error posting data:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        // Show the modal after 2 seconds
        const timer = setTimeout(() => {
            setShowModal(true);
            // Disable scrolling on the body element when the modal is shown
            document.body.style.overflow = 'hidden';
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const handleCloseModal = () => {
        setShowModal(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <>
            {showModal && (
                <div className="modal_box">
                    <button className="close_button" onClick={handleCloseModal}>
                        X
                    </button>
                    {isFormSubmitted ? (  // Update formSubmitted to isFormSubmitted here
                        <div>
                            <h2>Thank You!</h2>
                            <p>Your message has been submitted successfully.</p>
                        </div>
                    ) : (
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
                                <button className='btn btn-success' type="submit" onClick={postData} disabled={isSubmitting || formSubmitted}>
                                    {isSubmitting ? 'Submitting...' : formSubmitted ? 'Submitted' : 'Submit'}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            )}
        </>
    );
};

export default BoxModel;
