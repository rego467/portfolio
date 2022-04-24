import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import foto from "../assets/Group 3.svg";

export default function ContentJumbotron() {
  return (
    <Container>
      <Row className="g-2 pt-3 pt-sm-5" style={{ fontFamily: "Poppins" }}>
        <Col sm={12} lg={7} className="order-md-last order-lg-first">
          <div>
            <h1 className="text-center text-lg-start text-md-center text-sm-center">
              Hi, im Rego edwar
            </h1>
            <h1 className="text-center text-lg-start text-md-center text-sm-center">
              front end developer
            </h1>
            <p className="mt-4 text-center text-lg-start text-md-center text-sm-center text-dark">
              Im living in Jakarta, IndonesiaAmet minim mollit non deserunt
              ullamco est sit aliqua dolor do amet sint. Velit officia consequat
              duis enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.
            </p>

            <div className="pt-3 text-center text-lg-start text-md-center text-sm-center">
              <Button variant="secondary">CONTACT ME</Button>
            </div>
          </div>
        </Col>
        <Col
          sm={12}
          lg={5}
          className="text-center order-first order-sm-first order-md-first p-3"
        >
          <Image src={foto} />
        </Col>
      </Row>
    </Container>
  );
}
