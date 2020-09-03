import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";

import Nav from "react-bootstrap/Nav";

const NavBar = ({ Routes, match, variant, justify, fill, bgColor }) => {
  const { url } = match;

  const makePath = (url, route) => (url === "/" ? route : `${url}/${route}`);

  return (
    <Nav justify={justify} variant={variant} fill={fill} className={bgColor}>
      {Routes.map(({ route, title }, idx) => (
        <Nav.Item key={idx}>
          <Link to={route}>
            <Nav.Link as="li" href={`${url}/${route}`} className="primary-text">
              {title}
            </Nav.Link>
          </Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};

NavBar.propTypes = {
  Routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      route: PropTypes.string,
      title: PropTypes.string,
      Component: PropTypes.func,
    })
  ).isRequired,
  match: PropTypes.object,
  variant: PropTypes.oneOf(["tabs", "pills"]),
  justify: PropTypes.bool,
  fill: PropTypes.bool,
  bgColor: PropTypes.oneOf(["primary-bg", "secondary-bg", "light-bg", "dark-bg"]),
};

NavBar.defaultProps = {
  Routes: [],
  match: {},
  justify: false,
  fill: false,
  bgColor: "light-bg"
};

export default withRouter(NavBar);
