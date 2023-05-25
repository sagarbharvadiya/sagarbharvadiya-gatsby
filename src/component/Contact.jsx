import React from 'react'
import ContactForm from './ContactForm'
import Map from './Map'
const Contact = () => {
    return (
        <>
            <section id="contact" className="contact">
                <div className="container">
                    <div className="section-title">
                        <span>Contact Me</span>
                        {/* <h2>Contact Me</h2> */}
                        {/* <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p> */}
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <Map/>
                        </div>
                        <div className="col-lg-6">
                           <ContactForm/>
                        </div>

                    </div>
                </div>
            </section >

        </>
    )
}

export default Contact
