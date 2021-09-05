import * as React from "react";
import { Alert } from "react-bootstrap";

export default function Error() {
  return (
    <Alert dismissable variant="danger">
      <Alert.Heading>Oh shoot! Looks like something went wrong.</Alert.Heading>
      <p>Make sure you filled out all the required fields and try again.</p>
    </Alert>
  );
}
