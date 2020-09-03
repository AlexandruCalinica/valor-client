import React from "react";
import PropTypes from "prop-types";
import { Route, withRouter } from "react-router-dom";

const CustomRouter = ({ Routes }) => {

  return Routes.map(({ path, Component }, idx) => (
    <Route path={path} render={() => <Component />} key={idx} />
  ));
};

CustomRouter.propTypes = {
  Routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      route: PropTypes.string,
      title: PropTypes.string,
      Component: PropTypes.func,
    })
  ).isRequired,
};

export default withRouter(CustomRouter);