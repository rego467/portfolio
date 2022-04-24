import React from "react";
import { Container } from "react-bootstrap";
import AboutContent from "./AboutContent";
import ContentJumbotron from "./ContentJumbotron";
import ProjectContent from "./ProjectContent";

export default function LayoutHome() {
  return (
    <Container>
      <ContentJumbotron />
      <AboutContent />
      <ProjectContent />
    </Container>
  );
}
