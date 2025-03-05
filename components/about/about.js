import Image from 'next/image';
import React from 'react'
import aImg from '../../public/images/about/img-1.jpg';

const About = (props) => {
    return (

        <section className="tf-about-section section-padding">
            <div className="container">
                <div className="tf-about-wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="tf-about-img">
                                <Image src={aImg} alt="" />
                                <div className="tf-about-img-text">
                                    <div className="tf-about-icon">
                                        <h3>3+</h3>
                                        <span>Years Exprience</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="tf-about-text">
                                <small>about Me</small>
                                <h2>Welcome to my portfolio! I’m Abalogu Winner.</h2>
                                <h5>I have 3+ years of experiences in Software Development for give you better services.</h5>
                                <p>I am an enthusiastic software programmer with a passion for coding. Throughout my academic journey, I have developed my skills in programming languages such as ; HTML, Python, CSS and have gained hands on experience through various projects and internships. I have developed a responsive e-commerce website using React and integrated it with a Node.js backend for product management.I also created a personal portfolio website with Next.js and SASS for styling to showcase my development skills.
                                These experiences have equipped me with a solid foundation in software development and a strong problem solving mindset and I am very particular about details.  </p>

                                <div className="tf-funfact">
                                    <div className="tf-funfact-item">
                                        <h3>Web Development</h3>
                                        <p>Stack : Js(Next.js)</p>
                                    </div>
                                    <div className="tf-funfact-item">
                                        <h3>Mobile App </h3>
                                        <p>Stack: Flutter, React Native</p>
                                    </div>
                                    <div className="tf-funfact-item">
                                        <h3>UI/UX DESIGN</h3>
                                        <p>Stack : Figma</p>
                                    </div>
                                    <div className="tf-funfact-item">
                                        <h3>Project Management</h3>
                                        <p>Stack: Jira, Trello, Asana, Notion</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="visible-rotate-text">
                <h1>About Me</h1>
            </div>
        </section>
    )
}

export default About;