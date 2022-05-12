import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      {/* for container, row, col refert to the  HomeScreen compoent in screens folder  */}
      {/* also can refert to the pic on whatsapp group  */}
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright &copy; shopHere</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
