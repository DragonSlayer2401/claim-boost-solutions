'use client';
import { Nav, Navbar } from 'react-bootstrap';
import './header.css';

const NavBar = () => {
  return (
    <header>
      <Navbar expand="lg" className="bg-white py-4 px-6 fixed w-full z-50">
        <Navbar.Brand className="font-bold text-xl me-auto" href="/">
          ClaimBoost Solutions
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="flex gap-x-4 ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default NavBar;
