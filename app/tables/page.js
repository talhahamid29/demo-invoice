"use client";
import React, { useEffect, useState } from "react";
import VerticalNavbar from "../../components/Navbar/VerticalNavbar";
import Header from "../../components/Header/Header";
import Table from "../../components/Table2/Table";
import Footer from "../../components/Footers/Footer";

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
        <div style={{marginTop:80}}>
          <Header />
        </div>
        <div
          className="shadow"
          style={{
            marginLeft: 2,
            marginTop: 2,
            height: '100vh',
            overflow: "scroll",
            scrollbarColor: "gray white",
            scrollbarWidth: "thin",
          }}
        >
          <Table />
        </div>
        <div className="fixed bottom-0 w-full shadow">
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Page;
