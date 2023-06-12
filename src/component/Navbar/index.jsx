import React, { useState } from 'react';
import "./style.css"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { CgMenuRight } from 'react-icons/cg';
import { MobileIcon } from './style';
import { IconContext } from 'react-icons';

export const Navbar = () => {
    const [show, setShow] = useState(false);

    let navigate = useNavigate();
    let location = useLocation();

    const handleClick = () => {
        setShow(!show);
    };

    const scrollTo = (id) => {
        const element = document.getElementById(id);

        element.scrollIntoView({
            behavior: 'smooth',
        });
    };

    const closeMobileMenu = (to, id) => {
        if (id && location.pathname === '/') {
            scrollTo(id);
        }

        navigate(to);
        setShow(false);
    };

    return (
        <IconContext.Provider value={{ color: '#fff' }}>
            <div className='container'>
                <div className='logo'>
                    <div>
                        <p>Plant</p>
                    </div>
                </div>
                <MobileIcon onClick={handleClick}>
                    {show ? <FaTimes /> : <CgMenuRight />}
                </MobileIcon>
                <div className="texts" show={show}>
                    <ol className='links' >
                        <Link to={'/home'} className='none'><div >Home</div></Link>
                        <Link to={'/sevices'} className='none'><div>Services</div></Link>
                        <Link to={'/about'} className='none'><div>About Us</div></Link>
                        <Link to={'/blog'} className='none'><div>Blog</div></Link>
                        <Link to={'/contact'} className='none'><div>Contact</div></Link>
                    </ol>
                </div>
                <ol className='login'>
                    <Link to={'/login'} className='none'> <div className='text_login'>Login</div></Link>
                    <button>Sign Up</button>
                </ol>

            </div>
        </IconContext.Provider>
    );
};

export default Navbar;