/* eslint-disable no-unused-vars */
import React from "react";
import Displaytodos from "./Displaytodos";
import { NavLink } from "react-router-dom";
const Other = () => {
  return (
    <>
      <h2>Todos List</h2>
      <NavLink to="/">Back </NavLink>
      <Displaytodos />
    </>
  );
};

export default Other;
