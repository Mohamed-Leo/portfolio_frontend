// import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../static/images/logo.png';
import { FaLinkedinIn , FaGithub , FaCodepen , FaRegCopyright} from "react-icons/fa";

export default function Footer() {
    return (
        <footer>
            {/* Start logo */}
            <div className="logo">
                <Link to="#">
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            {/* End logo */}

            {/* Start info */}
            <div className="info">
                {/* Start social */}
                <div className='social'>

                    <Link to={"https://www.linkedin.com/in/mohamed-mahmoud90/"} target='_blank'>
                        <FaLinkedinIn className='icon'/>
                    </Link>

                    <Link to={"https://github.com/Mohamed-Leo"} target='_blank'>
                        <FaGithub className='icon'/>
                    </Link>

                    <Link to={"https://codepen.io/Shadowing-213123"} target='_blank'>
                        <FaCodepen className='icon'/>
                    </Link>
                </div>
                {/* End social */}

                <p>
                    Copyright <FaRegCopyright /> 2023 all rights reserved
                </p>
            </div>
            {/* End info */}
        </footer>
    )
}
