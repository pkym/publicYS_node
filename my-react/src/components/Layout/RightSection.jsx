import React from 'react';
import logoImg from "../../assets/img/logo_wt.png";
import MainNavigation from '../MainNavigation';

export default function RightSection(props) {
  return (
    <section className="right">
      <h2 className="logo">
        <img src={logoImg} alt="재난 보관함" />
      </h2>
      <div className="content">
        {props.children}
      </div>
      <MainNavigation/>
    </section>
  );
}
