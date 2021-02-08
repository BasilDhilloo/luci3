import styles from './header2.module.css';
import Logo from './../../../src/assets/Logo1.png';
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./../../App.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import headIcon from './../../../src/assets/headIcon.png';
import headDrop from './../../../src/assets/headDrop.png';

export default function HeaderTwo() {
  return (
    <Navbar collapseOnSelect expand="lg"  variant="light" className={styles.navbar}>
      <Navbar.Brand href="/">
        <img src={Logo}/>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" className={styles.navbarButton}/>

      <Navbar.Collapse id="responsive-navbar-nav" >
        <Nav className="navbar-nav ml-auto">
            <Nav.Link href="/teamprofile"><img src={headIcon} /> </Nav.Link>
            <Nav.Link href="/team"><h4 className={styles.linkText}> ST Taran</h4></Nav.Link>
            <Nav.Link href="/team"><img src={headDrop} /> </Nav.Link>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
  );
}   

