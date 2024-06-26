import React from 'react';
import pandaLogo from '../../assets/image/panda-logo.svg'
import {
    HeaderContainer,
    HeaderLogo,
    Logo,
    HeaderMenu,
    Button,
    Content,
    ContentLi,
    ConnectButton
} from './header.styled';
import { slide as Menu } from 'react-burger-menu';
import HamburgerIcon from '../../assets/image/icon/menu.png';
import CrossIcon from '../../assets/image/icon/cross.png';
import { Link } from 'react-router-dom';

const CustomBurgerIcon = () => <img src={HamburgerIcon} alt="menu"/>;
const CustomCrossIcon = () => <img src={CrossIcon} alt="cross"/>;

function header() {
  return (
    <HeaderContainer>
        <HeaderLogo as={Link} to="/">
            <img src={pandaLogo} className="logo" alt="logo"/>
            <Logo>
                HomeWork NFT
            </Logo>
        </HeaderLogo>
        <HeaderMenu>
            <div>
                <Content>
                    <ContentLi as={Link} to="/">Home</ContentLi>
                    <ContentLi as={Link} to="/search">Discover</ContentLi>
                    <ContentLi>Docs</ContentLi>
                    <ContentLi>Blog</ContentLi>
                    <ContentLi>About</ContentLi>
                    <ContentLi>Contact US</ContentLi>
                </Content>
            </div>
            <Button>
                <ConnectButton>
                    Connect Wallet
                </ConnectButton>
            </Button>
        </HeaderMenu>
        <Menu customBurgerIcon={ <CustomBurgerIcon /> } customCrossIcon={ <CustomCrossIcon /> } right>
            <ContentLi as={Link} to="/">Home</ContentLi>
            <ContentLi as={Link} to="/search">Discover</ContentLi>
            <ContentLi>Docs</ContentLi>
            <ContentLi>Blog</ContentLi>
            <ContentLi>About</ContentLi>
            <ContentLi>Contact US</ContentLi>
        </Menu>
    </HeaderContainer>
  )
}

export default header