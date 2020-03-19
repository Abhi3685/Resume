import React from 'react'
import { useForm } from 'react-hook-form'
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css'

export function Contact() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => { 
        window.emailjs.send('gmail', 'resume_contact_email', data).then(res => {
            console.log('Email successfully sent!');
        }).catch(err => console.error('Oh well, you failed.', err));
        const content = (
            <div className="text-center contact_msg">
                <i className="fa fa-check-circle"></i><br/>
                <p>Your message was sent successfully. Thanks!</p>
            </div>
        )
        PopupboxManager.open({ content })
    }

    var nameClass = errors.name ? "form-control error" : "form-control"; 
    var emailClass = errors.email ? "form-control error" : "form-control"; 
    var subjectClass = errors.subject ? "form-control error" : "form-control"; 
    var messageClass = errors.message ? "form-control error" : "form-control"; 

    return (
        <div className="section_wrapper container">
            <div className="section_heading">
                <h1>Contact Me</h1>
                <span>Contact Me</span>
            </div>
            <div className="contact_content">
                <div className="row">
                    <div className="col-lg-6">
                        <h3>Get In Touch</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form_field">
                                <label htmlFor="name">Enter your name*</label>
                                <input name="name" ref={register({ required: true })} id="name" className={nameClass} />
                            </div>
                            <div className="form_field">
                                <label htmlFor="email">Enter your email*</label>
                                <input name="email" ref={register({ required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} id="email" className={emailClass} />
                            </div>
                            <div className="form_field">
                                <label htmlFor="subject">Enter your subject*</label>
                                <input ref={register({ required: true })} name="subject" id="subject" className={subjectClass} />
                            </div>
                            <div className="form_field">
                                <label htmlFor="message">Enter your message*</label>
                                <textarea ref={register({ required: true })} name="message" rows="7" id="message" className={messageClass}></textarea>
                            </div>
                            <button className="btn custom_btn">SEND MAIL</button>
                        </form>
                    </div>
                    <div className="col-lg-6">
                        <div className="info_block">
                            <i className="info_block_icon fa fa-phone"></i>
                            <div className="info_block_detail">
                                <h5>Phone</h5>
                                <p>+91-8178427237</p>
                                <p>+91-9643097626</p>
                            </div>
                        </div>
                        <div className="info_block">
                            <i className="info_block_icon fa fa-envelope"></i>
                            <div className="info_block_detail">
                                <h5>Email</h5>
                                <p>abhibindra3685@gmail.com</p>
                                <p>abhishek.bindra.ab@gmail.com</p>
                            </div>
                        </div>
                        <div className="info_block">
                            <i className="info_block_icon fa fa-map-marker"></i>
                            <div className="info_block_detail">
                                <h5>Address</h5>
                                <p>Pocket B6, Sector 3, Rohini, Delhi-85</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br /><br />
            <PopupboxContainer />
        </div>
    )
}
