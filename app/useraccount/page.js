"use client";
import React, { useState } from "react";
import VerticalNavbar from "../../components/Navbar/VerticalNavbar";
import Header from "../../components/Header/Header";
import Useraccount from "../../components/User Account/Useraccount";

const Page = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="flex">
      <aside>
        <VerticalNavbar
          isDrawerOpen={isDrawerOpen}
          toggleDrawer={toggleDrawer}
        />
      </aside>
      <main>
        <div className="fixed w-full">
          <Header />
        </div>
        <div className={`p-4 ${isDrawerOpen ? "" : "ml-24"}`}>
          <Useraccount />
        </div>
      </main>
    </div>
  );
};

export default Page;
