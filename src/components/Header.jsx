import {useState} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../static/images/logo.png';
// react-icons
import { FaLinkedinIn , FaGithub , FaCodepen ,FaList ,FaRegWindowClose} from "react-icons/fa";
import { GoMail } from "react-icons/go";



function Header() {

    let [navbar , Setnavbar] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 85) Setnavbar(true)
        else Setnavbar(false)
    };

    window.addEventListener('scroll' , changeNav);


    return (
        <header className= {navbar ? 'scrolled' : ''}>

            {/* Start navbar */}
            <nav>

                {/* Start logo */}
                <div className="logo">
                    <Link to="#">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                {/* End logo */}

                {/* Start nav_links */}
                <div className="nav_links">

                    {/* start links */}
                    <ul className='links'>
                        <li>
                            <Link to='#home' className='activated' data-linkactive = "home">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to='#skills' className='activated' data-linkactive = "skills">
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link to='#projects' className='activated' data-linkactive = "projects">
                                Projects
                            </Link>
                        </li>
                    </ul>
                    {/* End links */}

                     {/* start icons */}
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
                    {/* End icons */}

                    {/* Start connect */}
                    <Link to="#connect" className='connect'>
                        <span>Lets Connect</span>
                    </Link>
                    {/* End connect */}
                </div>
                {/* End nav_links */}

                {/* Start list */}
                <FaList className='list' onClick={openList}/>
                {/* End list */}
            </nav>
            {/* End navbar */}

            {/* ------------------------------------------------------------------- */}

            {/* Start list_links */}
            <div className="list_links" id='list_div'>

                    {/* Start logo */}
                    <div className="logo_list">
                        <Link to="#">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    {/* End logo */}

                    {/* start links */}
                    <ul className='links_list'>
                        <li>
                            <Link to='#home' className='activated' onClick={closeList} data-linkactive = "home">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to='#skills' className='activated' onClick={closeList} data-linkactive = "skills">
                                Skills
                            </Link>
                            </li>
                        <li>
                            <Link to='#projects' className='activated' onClick={closeList} data-linkactive = "projects">
                                Projects
                            </Link>
                        </li>
                    </ul>
                    {/* End links */}

                     {/* start icons */}
                    <div className='social_cycle'>

                        <div className="main">
                            {/* Start up */}
                            <div className="up">
                                <button className="card1">
                                    <Link to={"https://www.linkedin.com/in/mohamed-mahmoud90/"} target='_blank'>
                                        <FaLinkedinIn className='linkedin'/>
                                    </Link>
                                </button>

                                <button className="card2">
                                    <Link to={"https://github.com/Mohamed-Leo"} target='_blank'>
                                        <FaGithub className='github'/>
                                    </Link>
                                </button>
                            </div>
                            {/* End up */}

                            {/* Start down */}
                            <div className="down">
                                <button className="card3">
                                    <Link to={"https://codepen.io/Shadowing-213123"} target='_blank'>
                                        <FaCodepen className='codepen'/>
                                    </Link>
                                </button>

                                <button className="card4">
                                    <Link to={"mailto:mohamed.mahmoud.232424@gmail.com"}>
                                        <GoMail className='mail'/>
                                    </Link>
                                </button>
                            </div>
                            {/* End down */}
                        </div>
                    </div>
                    {/* End icons */}

                    {/* Start close */}
                    <FaRegWindowClose className='close' onClick={closeList}/>
                    {/* End close */}
            </div>
            {/* End list_links */}
        </header>
    );



    function openList () {
        let lisrDiv = document.getElementById("list_div");
        lisrDiv.style.cssText = `left : 0;`
    }

    function closeList() {
        let lisrDiv = document.getElementById("list_div");
        lisrDiv.style.cssText = `left : -100%;`;
    }
}

export default Header;
