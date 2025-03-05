"use client";
import React from "react";
import NavLink from 'next/link'
import himg from '../../public/images/slider/port-img2.jpg'
import { Link } from 'react-scroll'
import Image from "next/image";

const Hero =() => {
    return (
        <section className="tp-hero-section-1">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-7 col-lg-7">
                        <div className="tp-hero-section-text">
                            <div className="tp-hero-title">
                                <h2>App & Software Developer</h2>
                            </div>
                            <div className="tp-hero-sub">
                                <p>Abalogu Winner</p>
                            </div>
                            <div className="btns">
                                <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} offset={-95} className="theme-btn">Contact Me</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-vec">
                <div className="right-img">
                    <Image src={himg} alt=""/>
                </div>
            </div>
            <div className="social-link">
                <ul>
                    <li><NavLink href="https://web.facebook.com/xstonnershub">Facebook</NavLink></li>
                    <li><NavLink href="https://x.com/WealthPrim82754">Twitter</NavLink></li>
                    <li><NavLink href="https://www.instagram.com/nerdwave.io/">Instagram</NavLink></li>
                    <li><NavLink href="https://www.linkedin.com/in/abalogu-winner/">Linkedln</NavLink></li>
                </ul>
            </div>
            <div className="visible-text">
                <h1>Developer</h1>
            </div>
        </section>
    )
}

export default Hero;