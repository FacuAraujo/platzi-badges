<<<<<<< HEAD
import React from 'react';

import Navbar from './Navbar';

function Layout(props) {
  // const children = props.children;

=======
import React from "react";

import Navbar from "./Navbar";

const Layout = props => {
  // const children = props.children;
>>>>>>> 1.ReactDOM.render
  return (
    <React.Fragment>
      <Navbar />
      {props.children}
    </React.Fragment>
  );
<<<<<<< HEAD
}
=======
};
>>>>>>> 1.ReactDOM.render

export default Layout;
