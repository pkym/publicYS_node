import React from "react";
import { Outlet } from "react-router-dom";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

export default function RootLayout() {
  return (
    <>
      <div className="background"></div>
      <main className="wrapper">
        <LeftSection />
        <RightSection>
          <Outlet />
        </RightSection>
      </main>
    </>
  );
}
