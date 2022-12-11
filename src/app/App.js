import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Alert, Col, Container, Row } from "react-bootstrap";
import configureNavigation from "./nav/Navigation";
import { RouterProvider, useRouteError } from "react-router-dom";
import ErrorBoundary from "./error/ErrorBoundary";
import "bootstrap/dist/css/bootstrap.min.css";

// This is the name of the ModuleDederationPlugin/nameoftheExportFileName
const QRApp = React.lazy(() => import("qrcode/QRGenerator"));

const QRAppContainer = ({ nav }) => {
  return (
    <Container fluid>
      <Row>{nav}</Row>
      <Row>
        <div>Remote QR App Here</div>
      </Row>
      <Row>
        <ErrorBoundary>
          <QRApp />
        </ErrorBoundary>
      </Row>
    </Container>
  );
};

const Home = ({ nav }) => {
  return (
    <Container fluid>
      <Row>{nav}</Row>
      <Row>
        <Col sm={4}>SomeData Here</Col>
        <Col sm={8}>Other data here</Col>
      </Row>
      <Row>
        <Col>
          <div>
            <p>
              <b>Host App</b>
            </p>
            <p>The app will not work without a store</p>
            <footer>
              <p>Host Footer</p>
            </footer>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

const ErrorPage = () => {
  const error = useRouteError();
  return <Alert variant="danger">{error}</Alert>;
};
const remotes = [
  {
    path: "/",
    activeWhen: "/",
    value: "Home",
    Element: Home,
    ErrorElement: ErrorBoundary,
  },
  {
    path: "/qr/",
    activeWhen: "/qr/",
    value: "QR Generator",
    Element: QRAppContainer,
    ErrorElement: ErrorBoundary,
  },
];

const router = configureNavigation(remotes);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback={<h1>Loading Content</h1>}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
