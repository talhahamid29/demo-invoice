"use client";
import React, { useEffect, useState } from "react";
import VerticalNavbar from "../../components/Navbar/VerticalNavbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footers/Footer";
import List from "../../components/list/List";

const Page = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  
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
        <div className="mt-[80px]">
          <Header />
        </div>
        <div
          className="shadow pl-10 pr-10"
          style={{
            marginLeft: 2,
            marginTop: 2,
            height: 500,
            overflowY: "scroll",
            overflowX: "hidden",
            scrollbarColor: "gray white",
            scrollbarWidth: "thin",
          }}
        >
          <List />
        </div>
        <div className="shadow mt-10 w-full">
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Page;
