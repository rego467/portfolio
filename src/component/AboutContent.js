import React from "react";
import Container from "react-bootstrap/Container";
import { Row, Col, ProgressBar } from "react-bootstrap";

export default function AboutContent() {
  return (
    <Container>
      <Row className="pt-3 p-4 mt-5 bg-light">
        <h4 className="text-center">About Me</h4>
        <hr />
        <Col sm={12}>
          <table className="table table-borderless text-lg-center text-md-center text-sm-center text-start">
            <tbody>
              <tr>
                <th>Name</th>
                <td>Rego Edwar</td>
              </tr>
              <tr>
                <th>Education</th>
                <td>Diploma 3, Komputerisasi Akuntansi</td>
              </tr>
              <tr>
                <th>Date of birth</th>
                <td>29 May 1993</td>
              </tr>
              <tr>
                <th>Phone</th>
                <td>085771717274</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>regoedwar.1@gmail.com</td>
              </tr>
              <tr>
                <th>Address</th>
                <td>Jakarta Timur,Indonesia</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
      <Row className="pt-3 p-4 mt-5" style={{ backgroundColor: "#edf7fa" }}>
        <h4 className="text-center">Skils</h4>
        <hr />
        <Col sm={6} className="text-center pt-3">
          <h6 className="text-start">HTML5</h6>
          <ProgressBar animated now={80} variant="info" />
        </Col>
        <Col sm={6} className="text-center pt-3">
          <h6 className="text-start">JAVASCRIPT</h6>
          <ProgressBar animated now={60} variant="warning" />
        </Col>
        <Col sm={6} className="text-center pt-3">
          <h6 className="text-start">CSS</h6>
          <ProgressBar animated now={70} variant="success" />
        </Col>
        <Col sm={6} className="text-center pt-3">
          <h6 className="text-start">REACT JS</h6>
          <ProgressBar animated now={75} variant="danger" />
        </Col>
        <Col sm={6} className="text-center pt-3">
          <h6 className="text-start">REACT BOOTSTRAP</h6>
          <ProgressBar animated now={70} />
        </Col>
      </Row>
    </Container>
  );
}
