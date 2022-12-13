import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

const NavBar = () => {

  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link
              href="#home">
              Home
            </Nav.Link>

            <Nav.Link href="#skills">
              Skills
            </Nav.Link>

            <Nav.Link
              href="#projects">
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Socials icon 1" /></a>
              <a href="#"><img src={navIcon2} alt="Socials icon 2" /></a>
              <a href="#"><img src={navIcon3} alt="Socials icon 3" /></a>
            </div>
            <button className="vvs"><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;