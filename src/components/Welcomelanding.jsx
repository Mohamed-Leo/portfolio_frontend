// import React from 'react';
import personalimg from '../static/images/personal photo.png';
import {useTypewriter , Cursor} from 'react-simple-typewriter';
import { ScrollParallax } from "react-just-parallax";
import { Link } from 'react-router-dom';

export default function Welcomelanding() {

    const [text] = useTypewriter({
        words: ['web developer' , 'full stack developer' , 'front end developer' , 'Back end developer'],
        loop: {},
        typeSpeed:120,
        deleteSpeed:80,
    });



    return (
        <div className='welcome'>
            <section id='home'>
            <ScrollParallax>
                {/* Start container */}
                <div className="container">
                    {/* Start info */}
                    <div className="info">

                        <button className="btn animate" type="button">
                            <strong>Welcome to my Portfolio</strong>
                            <div id="container-stars">
                                <div id="stars"></div>
                            </div>

                            <div id="glow">
                                <div className="circle"></div>
                                <div className="circle"></div>
                            </div>
                        </button>

                        <h1>
                            hi! iam mohamed a <span className='wrap wrap_meida'>
                                {text}
                                <span className='wrap'><Cursor cursorStyle={'/'}/></span>
                                </span>

                        </h1>

                        <div className='about'>
                            <p>
                            I am a Junior Full-Stack Web Developer seeking to secure a challenging position as a Full-
                            Stack Developer in a fast-paced environment where I can utilize my skills in developing
                            web applications and software solutions and learn from my colleagues to develop my
                            knowledge and gain more skills.
                            </p>
                        </div>

                        <Link to={'https://drive.google.com/file/d/1NSYKyHIyclv0L-nNFp_Ecq_Xnnirja8_/view?usp=sharing'} className="lets_connect" target='_blank'>
                            <span className="circle" aria-hidden="true">
                                <span className="icon arrow"></span>
                            </span>
                            <span className="button-text">Download cv</span>
                        </Link>
                    </div>
                    {/* End info */}

                    {/* Start img  */}
                    <div className="img">
                        <img src={personalimg} alt="personal-img" />
                    </div>
                    {/* End img */}
                </div>
                {/* End container */}
            </ScrollParallax>
            </section>
        </div>
    );
}
