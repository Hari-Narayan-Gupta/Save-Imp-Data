import React from "react";
import logo from './Image/logo.jpg';

export default function Header(props) {
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo"  width='70' height="50"
        />
        <h1> {props.title} </h1>
      </div>
    </>
  );
}
