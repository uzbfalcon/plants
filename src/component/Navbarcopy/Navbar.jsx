import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { CgMenuRight } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavIcon,
	MobileIcon,
	NavMenu,
	NavLinks,
	NavItem,
	NavItemm,
} from './NavbarStyles.js';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
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
		<IconContext.Provider value={{ color: '#1a1717' }}>
			<Nav>
				<NavbarContainer>
					<NavLogo to="/">
						Plant
					</NavLogo>
					<MobileIcon onClick={handleClick}>
						{show ? <FaTimes style={{color: 'white', marginTop:'5px'}}/> : <CgMenuRight />}
					</MobileIcon>
					<NavMenu show={show}>
						<NavItem >
							<NavLinks onClick={() => closeMobileMenu()} className='changecolor'>
								Home
							</NavLinks>
						</NavItem>
						<NavItem >
							<NavLinks onClick={() => closeMobileMenu()} className='changecolor'>
								Services
							</NavLinks>
						</NavItem>
						<NavItem >
							<NavLinks onClick={() => closeMobileMenu()} className='changecolor'>
								About Us
							</NavLinks>
						</NavItem>
						<NavItem >
							<NavLinks onClick={() => closeMobileMenu()} className='changecolor'>
								Blog
							</NavLinks>
						</NavItem>
						<NavItem >
							<NavLinks onClick={() => closeMobileMenu()} className='changecolor'>
								Contact
							</NavLinks>
						</NavItem>
						<NavItemm >
							<NavLinks onClick={() => closeMobileMenu()} className='changecolor'>
								Login
							</NavLinks>
						</NavItemm>
						<NavItem >
							<button onClick={() => closeMobileMenu()} className='buttonn'>
								Sign up
							</button>
						</NavItem>
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</IconContext.Provider>
	);
};

export default Navbar;