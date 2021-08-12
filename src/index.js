import React from "react";
import ReactDOM from "react-dom";
import { Container, Header } from "semantic-ui-react";

import pkg from 'semantic-ui-react/package.json'
import User from "./User";
//import AlertForm from "./AlertForm";

const Page = ({ children }) => (
  <Container text style={{ margin: 40 }}>
    <Header as="h3">This example is powered by Semantic UI React {pkg.version} </Header>
    {children}
  </Container>
);

// TODO: Switch to https://github.com/palmerhq/the-platform#stylesheet when it will be stable
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

ReactDOM.render(
  <Page>
    <User />
  </Page>,
  document.getElementById("root")
);
