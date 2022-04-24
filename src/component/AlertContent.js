import React from "react";
import { Alert } from "react-bootstrap";

export default function AlertContent() {
  return (
    <div>
      <Alert variant="success">
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      </Alert>
    </div>
  );
}
