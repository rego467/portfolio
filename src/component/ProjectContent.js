import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import work from "../assets/works.jpg";
import emailjs from "@emailjs/browser";

export default function ProjectContent() {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_5cotkfl",
        "template_7ikwbr9",
        e.target,
        "DsTFsX9h-leFwlGJt"
      )
      .then((res) => {
        alert("send message successfully", res);
      })
      .catch((err) => {
        console.log(err);
      });
    e.target.reset();
  };
  return (
    <Container>
      <Row className="mt-5 bg-light p-4 g-2">
        <h4 className="text-center">MY PROJECT</h4>
        <hr />
        <Col lg={4}>
          <img src={work} className="img-fluid rounded-3" />
        </Col>
        <Col lg={8}>
          <h4 className="ms-3">Designing Dashboards</h4>
          <div className="mt-4">
            <span className="bg-danger p-2 rounded-pill mt-5 me-3 ms-3">
              2020
            </span>
            <small className="h6 text-muted">Dashboard</small>
          </div>
          <div className="mt-4 ms-3">
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </Col>
      </Row>
      <hr />
      <Row className="mt-2 bg-light p-4 g-2">
        <Col lg={4}>
          <img src={work} className="img-fluid rounded-3" />
        </Col>
        <Col lg={8}>
          <h4 className="ms-3">Designing Dashboards</h4>
          <div className="mt-4">
            <span className="bg-danger p-2 rounded-pill mt-5 me-3 ms-3">
              2020
            </span>
            <small className="h6 text-muted">Dashboard</small>
          </div>
          <div className="mt-4 ms-3">
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </Col>
      </Row>
      <hr />
      <Row className="mt-2 bg-light p-4 g-2">
        <Col lg={4}>
          <img src={work} className="img-fluid rounded-3" />
        </Col>
        <Col lg={8}>
          <h4 className="ms-3">Designing Dashboards</h4>
          <div className="mt-4">
            <span className="bg-danger p-2 rounded-pill mt-5 me-3 ms-3">
              2020
            </span>
            <small className="h6 text-muted">Dashboard</small>
          </div>
          <div className="mt-4 ms-3">
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </Col>
      </Row>
      <hr />
      <Row className="pt-4">
        <h4 className="text-center">CONTACT</h4>
        <hr />
        <Col sm={8} className="pt-2">
          <Form onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control name="name" type="text" placeholder="Enter name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="user_email"
                type="email"
                placeholder="name@example.com"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control name="message" as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
