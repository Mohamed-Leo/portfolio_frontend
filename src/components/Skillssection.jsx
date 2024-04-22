// import React from 'react';
// import json files (api)--------
import skillsFrontData from '../static/js/skillsFrontData';
import skillsBackData from '../static/js/skillsBackData';

// Import Swiper React components-----
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y , Autoplay} from 'swiper/modules';
// Import Swiper styles--------
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/less';
import 'swiper/less/navigation';
// import react-circular-progressbar ---------
import { CircularProgressbar , buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// import parallax------------
import { ScrollParallax } from "react-just-parallax";



export default function Skillssection(percentages) {


    return (
        <section className='skills_sec active-cy' id='skills'>

                <ScrollParallax>
                    {/* Start container */}
                    <div className="container">
                        {/* Start head  */}
                        <div className="head">
                            <h2>
                                skills
                                <span>
                                    after spending much time during my last year in college I found my passion in
                                    programming, especially in the web development field I started to learn with
                                    myself then I decided to enter this field with AMIT Learning company it was a
                                    long journey. I learned various technologies. here are some of skills that i have
                                    learned.
                                </span>
                            </h2>
                        </div>
                        {/* end head  */}

                        {/* Start front_skills */}
                        <div className="front_skills">

                            <div className="align-head">
                                <button data-text="Awesome" className="button">
                                    <span className="actual-text">&nbsp;FrontEnd&nbsp;</span>
                                    <span className="hover-text" aria-hidden="true">&nbsp;FrontEnd&nbsp;</span>
                                </button>
                            </div>

                            <Swiper
                                className='testominal'
                                // install Swiper modules
                                modules={[ Navigation , A11y , Autoplay]}
                                loop={true}
                                autoplay={{
                                    delay : 4000,
                                    disableOnInteraction: false
                                }}
                                navigation
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                        },
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 0,
                                        },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 0,
                                        },
                                    }}
                                >

                                    {
                                        skillsFrontData.map((data , i) =>

                                            <SwiperSlide className='slide-item' key={data.id}>
                                                <div className='progress_bar'>
                                                    <CircularProgressbar
                                                    value={percentages.frontpercentage[i]}
                                                    text={`${percentages.frontpercentage[i]}%`}
                                                    styles={buildStyles({
                                                        rotation: 0.25,
                                                        textSize: '20px',
                                                        pathTransitionDuration: 1,
                                                        pathColor: data.pathcolor,
                                                        textColor: '#fff',
                                                        trailColor: 'transparent',
                                                        backgroundColor: '#3e98c7',
                                                    })}
                                                    />
                                                </div>
                                                <h4 >{data.lang}</h4>
                                            </SwiperSlide>
                                        )
                                    }
                            </Swiper>
                        </div>
                        {/* end front_skills */}

                        {/* Start back_skills */}
                        <div className="back_skills">

                            <div className="align-head">
                                <button data-text="Awesome" className="button">
                                    <span className="actual-text">&nbsp;BackEnd&nbsp;</span>
                                    <span className="hover-text" aria-hidden="true">&nbsp;BackEnd&nbsp;</span>
                                </button>
                            </div>

                            <Swiper
                                className='testominal'
                                // install Swiper modules
                                modules={[ Navigation , A11y , Autoplay]}
                                loop={true}
                                autoplay={{
                                    delay : 6000,
                                    disableOnInteraction: false
                                }}
                                navigation
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                        },
                                    1024: {
                                        slidesPerView: 2,
                                        spaceBetween: 0,
                                        },
                                    }}
                                >

                                    {
                                        skillsBackData.map((data , i) =>
                                            <SwiperSlide className='slide-item' key={data.id}>
                                                <div className='progress_bar'>
                                                    <CircularProgressbar
                                                    value={percentages.backpercentage[i]}
                                                    text={`${percentages.backpercentage[i]}%`}
                                                    styles={buildStyles({
                                                        rotation: 0.25,
                                                        textSize: '20px',
                                                        pathTransitionDuration: 1,
                                                        pathColor: data.pathcolor,
                                                        textColor: '#fff',
                                                        trailColor: 'transparent',
                                                        backgroundColor: '#3e98c7',
                                                    })}
                                                    />
                                                </div>
                                                <h4>{data.lang}</h4>
                                            </SwiperSlide>
                                        )
                                    }
                            </Swiper>
                        </div>
                        {/* end back_skills */}
                    </div>
                    {/* End container */}
                </ScrollParallax>
        </section>
    )
}
