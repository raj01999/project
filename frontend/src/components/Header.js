import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <header>
      {/* Navbar is ans bootstrap componnt , you can refer to this css 
      but it changes acording to the display size by using media quary , it will be to big if I wrigt all media quary =>
      .navbar {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 1.5rem 1rem;
} */}
      <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
        {/* for making everthing center we use container  */}
        <Container>
          {/* Link container is bootstrap alternative fro link, it's apply bootstrap css  */}
          <LinkContainer to="/">
            <Navbar.Brand>shopHere</Navbar.Brand>
          </LinkContainer>
          {/* for responsive to the display size Navbar.toggle What is navbar toggle?
          Navbar togglers are left-aligned by default, but should they follow a
          sibling element like a . navbar-brand , they'll automatically be
          aligned to the far right. Reversing your markup will reverse the
          placement of the toggler. Below are examples of different toggle
          styles. */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {/* for responsive to the display size The navbar collapse is the
          component which wraps the remain components of the navbar, such as
          navbar menu, navbar buttons, forms... etc. In other words, it wraps
          all navbar components except . navbar-header . It's defined by the two
          classes . collapse navbar-collapse */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/cart">
                {/* for link glow  */}
                <Nav.Link>
                  {/* fas is an icon class  */}
                  <i className="fas fa-shopping-cart"></i> Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>
                  <i className="fas fa-user"></i> Login
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
