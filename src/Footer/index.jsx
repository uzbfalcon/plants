import React from 'react';
import { Container, Content, Icon } from './style';
import facebook from '../assets/Frame 148.png'
import twitter from '../assets/Frame 149.png'
import instagram from '../assets/Frame 150.png'


export const Footer = () => {
  return (
    <Container>
      <Content>
        <Content.Title >Plant</Content.Title>
        <Content.Item>
        Lorem ipsum dolor sit amet, consectetur adi piscing elit. Diam nibh posuere duis eu non sit integer at placerat amet.
          </Content.Item>
          <Icon>
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="facebook" />
            <img src={instagram} alt="facebook" />
          </Icon>
      </Content>
      <Content>
        <Content.Title>Navigation</Content.Title>
        <Content.Item>Home</Content.Item>
        <Content.Item>About</Content.Item>
        <Content.Item>Help & Support</Content.Item>
        <Content.Item>Product</Content.Item>
      </Content>
      <Content>
        <Content.Title>About Us</Content.Title>
        <Content.Item>Contact</Content.Item>
        <Content.Item>Address</Content.Item>
        <Content.Item>Blog</Content.Item>
        <Content.Item>About Us</Content.Item>
      </Content>
      <Content>
        <Content.Title>Help</Content.Title>
        <Content.Item>Coustomers Services</Content.Item>
        <Content.Item>FAQs</Content.Item>
        <Content.Item>We Are Hiring</Content.Item>
        <Content.Item>Returns</Content.Item>
      </Content>
    </Container>
  );
};

export default Footer;