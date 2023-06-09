import styled from 'styled-components';
import { Container } from '../../globalStyles';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
	background: transparent;
	margin-bottom: -80px;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	position: absolute;
	top: 0;
	z-index: 50;
	width: 99%;
	/* margin-bottom: 3rem; */
	/* font-style:DM Sans; */
	transition: background-color 0.3s ease-in;
	/* background-color: black; */
`;

export const NavbarContainer = styled(Container)`
	display: flex;
	justify-content: start;
	height: 80px;
	${Container}
`;

export const NavLogo = styled(Link)`
	color: #fff;
	/* justify-self: flex-start; */
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	display: flex;
	align-items: center;
	/* z-index: 50; */
	color: black;
	font-family:'DM Sans';
	margin-left: 14px;
	font-weight: 700;
	/* @media screen and (max-width: 960px) {
		color: white;
	} */
`;

export const NavIcon = styled.img`
	margin-right: 1rem;
	width: 3.5rem;
	border-radius: 50%;
`;

export const MobileIcon = styled.div`
	display: none;
	z-index: 50;
	@media screen and (max-width: 960px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: absolute;
		top: 0;
		right: 0;
		
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
	}
	.cancel {
		color: white;
	@media screen and (max-width: 960px) {
		counter-reset: white;
	}
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	width: 100%;
	@media screen and (max-width: 960px) {
		flex-direction: column;
		/* justify-content: center; */
		width: 100%;
		height: 100vh;
		position: fixed;
		padding-top: 30%;
		top: 0;
		left: 0;
		opacity: ${({ show }) => (show ? 1 : 0)};
		visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
		transform: translateY(${({ show }) => (show ? '0' : '-10px')});
		transition: opacity 0.5s ease;
		background-color: #071c2f;
	}
	> li:first-child {
		margin-left: auto;
	}
	button {
		width: 7rem;
		height: 2.5rem;
		border-radius: 5px;
		border: 1px solid green;
		background: rgba(6, 111, 20, 1);
		color: white;

		@media screen and (max-width: 960px) {
		position: relative;
		left: 38%;
	}

	}
`;

export const NavItem = styled.li`
	height: 80px;
	cursor: pointer;
	display: flex;
	align-items: center;
	@media screen and (max-width: 960px) {
		width: 100%;
		
		&:hover {
			border: none;
		}
	}

	.changecolor {
	@media screen and (max-width: 960px) {
		color: white;
		text-align: center;
	}
	.buttonn {
	@media screen and (max-width: 960px) {
		position: relative;
		left: 50px;
	}
	}
	}
`;
export const NavItemm = styled.li`
	height: 80px;
	cursor: pointer;
	display: flex;
	margin-left: 80px;
	@media screen and (max-width: 960px) {
		width: 100%;
		&:hover {
			border: none;
		}
	}

	.changecolor {
	@media screen and (max-width: 960px) {
		color: white;
		position: relative;
		right: 9%;
	}
	}
`;

export const NavLinks = styled.span`
	color: #fff;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0.5rem 1rem;
	color: black;
	font-family:'DM Sans';
	height: 100%;
	&:hover {
		transform: scale(1.01);
		transition: all 0.1s ease-in-out;
	}
	@media screen and (max-width: 960px) {
		text-align: center;
		padding: 2rem;
		width: 100%;
		display: table;
		&:hover {
			color: #4b59f7;
			transition: all 0.3s ease;
		}
	}
`;

export const NavBtnLink = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	padding: 8px 16px;
	height: 100%;
	width: 100%;
	border: none;
	outline: none;
`;