"use client"
import React, { useState, useEffect } from "react";
import VerticalNavbar from "../../components/Navbar/VerticalNavbar";
import Header from "../../components/Header/Header";
import Table from "../../components/Table/Table2";
import Footer from "../../components/Footers/Footer";
import Dashboard from "../../components/Dashboard/Dashboard";

const Page = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
    const [hasToken, setHasToken] = useState(false);
    useEffect(() => {
      const tokens = localStorage.getItem("token");
      setHasToken(!!tokens); 
    }, []);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };


  return (
    <div className="flex">
      <aside>
        <VerticalNavbar
          className="fixed"
          isDrawerOpen={isDrawerOpen}
          toggleDrawer={toggleDrawer}
        />
      </aside>
      <main className="bg-white shadow flex-1">
        <div className="mt-20">
          <Header />
        </div>
        <div
          className="shadow"
          style={{
            marginLeft: 2,
            marginTop: 2,
            height: 450,
            overflow: "scroll",
            scrollbarColor: "gray white",
            scrollbarWidth: "thin",
          }}
        >
          <Dashboard />
        </div>
        <div className="shadow mt-5 w-full">
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Page;
