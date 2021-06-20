import {useState} from 'react';
import logo  from '../../static/logo.png';
import fav from '../../static/fav.png';
import './header.css';
import {Nav, Navbar} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

export default function Header(){
    return(
        <div>
            <div className="icon">
                <img src={logo} alt="logo"/>
            </div>
            {/* <div className="nav">
                <Navbar collapseOnSelect expand="lg">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <div className="nav-left">
                        <Nav className="mr-auto">
                        <Nav.Link href="#1">HOME</Nav.Link>
                        <Nav.Link href="#2">BROWSE</Nav.Link>
                        <Nav.Link href="#3">SPECIALS</Nav.Link>
                        <Nav.Link href="#4">RECIPES</Nav.Link>
                        <Nav.Link href="#5"><img src={fav}/>MY FAVURITES</Nav.Link>
                        <Nav.Link href="#6">GREAT PRICE</Nav.Link>
                        </Nav>
                        </div>                   
                        <div className="nav-rig">
                        <Nav>
                        <Nav.Link href="#7">My Account</Nav.Link>
                        <Nav.Link href="#8">Help</Nav.Link>
                        <Nav.Link href="#9">Contact</Nav.Link>
                        <Nav.Link href="#0">Register</Nav.Link>
                        <Nav.Link href="#11">Sign In</Nav.Link>
                        </Nav>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
            </div> */}


            <Container fluid className="header-nav">
            <Row className="header-nav-row">
            <Navbar collapseOnSelect expand="lg">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Col md={6}>
                    <div className="nav-left">
                    <Nav className="mr-auto">
                    <Nav.Link href="#1">HOME</Nav.Link>
                    <Nav.Link href="#2">BROWSE</Nav.Link>
                    <Nav.Link href="#3">SPECIALS</Nav.Link>
                    <Nav.Link href="#4">RECIPES</Nav.Link>
                    <Nav.Link href="#5"><img src={fav}/>MY FAVURITES</Nav.Link>
                    {/* <Nav.Link href="#6">GREAT PRICE</Nav.Link> */}
                    </Nav>
                    </div>
                </Col>
                <Col md={{ order: 'last' }}>
                    {/* code above use to keep div in the right */}
                    <div className="nav-rig">
                    <Nav>
                    <Nav.Link href="#7">My Account</Nav.Link>
                    <Nav.Link href="#8">Help</Nav.Link>
                    <Nav.Link href="#9">Contact</Nav.Link>
                    <Nav.Link href="#0">Register</Nav.Link>
                    <Nav.Link href="#11">Sign In</Nav.Link>
                    </Nav>
                    </div>
                </Col>
                </Navbar.Collapse>
                </Navbar>
            </Row>
            </Container>


        </div>
    );
}