import React from "react";
import ReactDOM from "react-dom";
import { Container, Header } from "semantic-ui-react";
import User from "./User";
//import AlertForm from "./AlertForm";

const App = ({ children }) => (
  <Container style={{ margin: 20 }}>
    <Header as="h2">PagerDuty User Provisioning</Header>
    {children}
  </Container>
);

// TODO: Switch to https://github.com/palmerhq/the-platform#stylesheet when it will be stable
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

ReactDOM.render(
  <App>
    <User />
  </App>,
  document.getElementById("root")
);

