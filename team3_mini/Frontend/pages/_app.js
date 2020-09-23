import React from "react";
import PropTypes from "prop-types";
import withReduxSaga from "next-redux-saga";
import wrapper from "../store/configureStore";
import "antd/dist/antd.css";

import Footer from "../components/Footer";
import Header from "../components/Header";

const App = ({ Component }) => {
  return (
    <>
      <Header />
      <Component />
      <Footer />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(withReduxSaga(App));
