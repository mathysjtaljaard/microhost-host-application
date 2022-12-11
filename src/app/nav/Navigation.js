import React from "react";
import { Nav, Navbar, NavLink } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { createBrowserRouter } from "react-router-dom";

const populateNavItem = ({ path, activeWhen, value }, index) => {
  return (
    <LinkContainer to={path} key={index}>
        <NavLink eventKey={activeWhen}>{value}</NavLink>
    </LinkContainer>
  );
};

const populateNavigationBar = (remotes) => {
  console.log(remotes);
  return (
    <Navbar bg="light" expand="lg">
      <Nav variant="tabs" >
        {remotes.map((item, index) => populateNavItem(item, index))}
      </Nav>
    </Navbar>
  );
};

const configureRoutes = (remotes, nav) => {
  console.log(remotes);
  const routes = remotes.map(({ path, Element, errorElement }) => {
    return {
      path: path,
      element: <Element nav={nav} />,
      errorElement,
    };
  });
  console.log(routes);
  return createBrowserRouter(routes);
};

const configureNavigation = (remotes) => {
  const navigationTabs = populateNavigationBar(remotes);
  const router = configureRoutes(remotes, navigationTabs);

  return router;
};

export default configureNavigation;
