import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import "./css/Header.css";


class Header extends Component {
  render() {
    return (
      <div className="">
        <Container>
          <Row>
            <Col><h6 className="display-4">Hello, world!</h6></Col>
            <Col>clock</Col>
          </Row>
        </Container>
      </div>
    );
  }
}


export default Header;