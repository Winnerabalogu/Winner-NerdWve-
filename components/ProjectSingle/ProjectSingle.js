import React, { Fragment } from 'react';
import { Dialog, Grid, } from '@mui/material'
import Contact from './contact';
import RelatedProject from './related';
import Image from 'next/image';
import Projects from '../../data/project'


const ProjectSingle = ({ maxWidth, open, onClose, title, pImg, psub1img1, psub1img2,description, features, stra, straList, approach, goals }) => {


    return (
        <Fragment>
            <Dialog
                open={open}
                onClose={onClose}
                className="modalWrapper quickview-dialog"
                maxWidth={maxWidth}
            >

                <Grid className="modalBody modal-body project-modal">
                    <button className='modal-close' onClick={onClose}><i className='fa fa-close'></i></button>
                    <div className="tp-project-single-area">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-12 col-12">
                                    <div className="tp-project-single-wrap">
                                        <div className="tp-project-single-item">
                                            <div className="row align-items-center mb-5">
                                                <div className="col-lg-7">
                                                    <div className="tp-project-single-title">
                                                        <h3>{title} Project</h3>
                                                    </div>
                                                    <p>{description}</p>
                                                </div>
                                                <div className="col-lg-5">
                                                    <div className="tp-project-single-content-des-right">
                                                        <ul>
                                                            <li>Location :<span>7 Lake Street,London</span></li>
                                                            <li>Client :<span>wpOceans</span></li>
                                                            <li>Consult :<span>Harry Johnson</span></li>
                                                            <li>Project Type :<span>Tonu React</span></li>
                                                            <li>Duration :<span>6 Month</span></li>
                                                            <li>Completion :<span>15 Apr 2023</span></li>
                                                            <li>Share :<span>Creative, Portfolio</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                                
                                            <div className="tp-project-single-main-img">
                                                <Image src={pImg} alt="" />
                                            </div>
                                        </div>
                                        <div className="tp-project-single-item list-widget">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="tp-project-single-title">
                                                        <h3>Our Strategies</h3>
                                                    </div>
                                                    <p>{stra}</p>
                                                    <ul>
                                                    {straList && Array.isArray(straList) ? (
                                                    straList.slice(0, 5).map((list, index) => (
                                                        <li key={index}>{list}</li>
                                                    ))
                                                ) : (
                                                    <li>No Strategies available.</li>
                                                )}
                                                    </ul>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="tp-project-single-item-quote">
                                                        <p>"Amazing looking theme and instantly turns your application into a great
                                                            looking one. Really shows that pro_ fessionals built this theme up. Very
                                                            happy with the way the theme looks ."</p>
                                                        <span>Robert - <span>Yellow Theme</span></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tp-project-single-item">
                                            <div className="tp-project-single-title">
                                                <h3>Our approach</h3>
                                            </div>
                                            <p>{approach}</p>
                                        </div>
                                        <div className="tp-project-single-gallery">
                                            <div className="row mt-4">
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    <div className="tp-p-details-img">
                                                        <Image src={psub1img1} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    <div className="tp-p-details-img">
                                                        <Image src={psub1img2} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tp-project-single-item list-widget">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="tp-project-single-title">
                                                        <h3>Resieved goals</h3>
                                                    </div>
                                                    <ul>
                                                    {goals && Array.isArray(goals) ? (
                                                    goals.slice(0, 3).map((goal, index) => (
                                                        <li key={index}>{goal}</li>
                                                    ))
                                                ) : (
                                                    <li>No Goal available.</li>
                                                )}
                                                    </ul>
                                                </div>
                                                <div className="col-lg-6 list-widget-s">
                                                    <div className="tp-project-single-title">
                                                        <h3>Results</h3>
                                                    </div>
                                                    <ul>
                                                    {features && Array.isArray(features) ? (
                                                    features.slice(0, 3).map((feature, index) => (
                                                        <li key={index}>{feature}</li>
                                                    ))
                                                ) : (
                                                    <li>No features available.</li>
                                                )}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <RelatedProject />
                                        <div className="tp-project-single-item">
                                            <div className="tp-project-contact-area">
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
export default ProjectSingle;

