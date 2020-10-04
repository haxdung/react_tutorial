import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import "./css/Content.css";

class Content extends Component {
  render() {
    return (
      <div className="">
        <Container>
          <Row>
            <Col>list</Col>
            <Col>detail</Col>
          </Row>
        </Container>
      </div>
    );
  }
}


export default Content;