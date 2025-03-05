import React, { useState, Fragment } from 'react';
import { Dialog, Grid, } from '@mui/material'
import Contact from './contact';
import Image from 'next/image';
import Services from '../../data/service'
import { Link } from 'react-scroll'


const ServiceSingle = ({ maxWidth, open, onClose, title, dImg, sImg1, sImg2, description2, des2, approach, capability, process }) => { 
  
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <Fragment>
            <Dialog
                open={open}
                onClose={onClose}
                className="modalWrapper quickview-dialog"
                maxWidth={maxWidth}
            >
                <Grid className="modalBody modal-body">
                    <button className='modal-close' onClick={onClose}><i className='fa fa-close'></i></button>
                    <div className="tp-service-single-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-12">
                                    <div className="tp-service-single-wrap">
                                        <div className="tp-service-single-item">
                                            <div className="tp-service-single-main-img">
                                                <Image src={dImg} alt="" width={400}/>
                                            </div>
                                            <div className="tp-service-single-title">
                                                <h3>{title}</h3>
                                            </div>
                                            <p>In today's fast-paced digital world, building high-performing applications requires a strong foundation in development, design, and management. My expertise spans across these key areas, ensuring end-to-end delivery of top-notch software solutions:</p>
                                            <p>{description2}</p>
                                            <p>{des2}</p>
                                            <div className="row mt-4">
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    <div className="tp-p-details-img">
                                                        <Image src={sImg1} alt="" width={300}/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    <div className="tp-p-details-img">
                                                        <Image src={sImg2} alt="" width={200}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tp-service-single-item list-widget">
                                            <div className="tp-service-single-title">
                                                <h3>Our Capabilities</h3>
                                            </div>
                                            <p>We leverage cutting-edge technologies and proven methodologies to design, develop, and manage digital solutions that drive impact. From scalable web apps to high-performance mobile applications, we ensure every project is executed with precision and efficiency.</p>
                                            <ul>
                                                {capability && Array.isArray(capability) ? (
                                                    capability.slice(0, 3).map((cap, index) => (
                                                        <li key={index}>{cap}</li>
                                                    ))
                                                ) : (
                                                    <li>No capabilities available.</li>
                                                )}
                                            </ul>
                                        </div>
                                        <div className="tp-service-single-item">
                                            <div className="tp-service-single-title">
                                                <h3>Our approach</h3>
                                            </div>
                                            <p>{approach}</p>
                                        </div>
                                        <div className="tp-service-single-item list-widget">
                                            <div className="tp-service-single-title">
                                                <h3>Our Work Process</h3>
                                            </div>
                                            <ul>
                                                {process && Array.isArray(process) ? (
                                                    process.slice(0, 5).map((proc, index) => (
                                                        <li key={index}>{proc}</li>
                                                    ))
                                                ) : (
                                                    <li>No process available.</li>
                                                )}
                                            </ul>
                                        </div>
                                        <div className="tp-service-single-item">
                                        <div className="tp-service-area">
                                            <div className="tp-service-single-title">
                                                <h3>Related Service</h3>
                                            </div>
                                            <div className="tp-service-wrap">
                                            <div className="row align-items-center">                                          
                                                {Services.slice(0, 4).map((service, srv) => (
                                                    <div className="col col-lg-4 col-md-6 col-12" key={srv}>
                                                        <div className="tp-service-item">
                                                            <i className={`fi ${service.icon}`} ></i>
                                                            
                                                           <Link onClick={onClose} activeClass="active" to="service" spy={true} smooth={true} duration={500} offset={-90}>
                                                           <h2>{service.sTitle}</h2>
                                                           </Link>
                                                            
                                                            <p>{service.description2}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            </div>
                                        </div> 
                                        </div>                                       
                                        <div className="tp-service-single-item">
                                            <div className="tp-service-contact-area">
                                                <div className="tp-contact-title">
                                                    <h2>Have project in mind? Let's discuss</h2>
                                                    <p>Get in touch with us to see how we can help you with your project</p>
                                                </div>
                                                <div className="tp-contact-form-area">
                                                    <Contact />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Dialog>
        </Fragment>
    );
}
export default ServiceSingle