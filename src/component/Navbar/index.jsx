import React from 'react';
import "./style.css"
import { Button } from '../../globalStyles';
import { Link } from 'react-router-dom';

export const Navbar = () => {

    return (
        <div className='container'>
            <div className='logo'>
                <div>
                    <p>Plant</p>
                </div>
            </div>
            <div className="texts">
                <ol className='links'>
                    <Link to={'/home'} className='none'><div >Home</div></Link>
                    <Link to={'/sevices'}className='none'><div>Services</div></Link>
                    <Link to={'/about'}className='none'><div>About Us</div></Link>
                    <Link to={'/blog'}className='none'><div>Blog</div></Link>
                    <Link to={'/contact'}className='none'><div>Contact</div></Link>
                </ol>
            </div>
            <ol className='login'>
            <Link to={'/login'}className='none'> <div className='text_login'>Login</div></Link>
                <button>Sign Up</button>
            </ol>

        </div>
    );
};

export default Navbar;