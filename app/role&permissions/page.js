"use client";
import React, { useEffect, useState } from "react";
import VerticalNavbar from "../../components/Navbar/VerticalNavbar";
import Header from "../../components/Header/Header";
import RolesPermissions from "../../components/Roles & Permissions/Roles&Permissions";
import Footer from "../../components/footer/Footer";

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

  const sampleData = [
    { USER: "Data 1", ROLE: "Value 1",PLAN:"plan 1",BILLING:"Bill 1",STATUS:"Status1",ACTTIONS:"Action" },
    { USER: "Data 2", ROLE: "Value 2",PLAN:"plan 1",BILLING:"Bill 1",STATUS:"Status1",ACTTIONS:"Action" },
    { USER: "Data 2", ROLE: "Value 2",PLAN:"plan 1",BILLING:"Bill 1",STATUS:"Status1",ACTTIONS:"Action" },
    { USER: "Data 2", ROLE: "Value 2",PLAN:"plan 1",BILLING:"Bill 1",STATUS:"Status1",ACTTIONS:"Action" },
    { USER: "Data 2", ROLE: "Value 2",PLAN:"plan 1",BILLING:"Bill 1",STATUS:"Status1",ACTTIONS:"Action" },
    { USER: "Data 2", ROLE: "Value 2",PLAN:"plan 1",BILLING:"Bill 1",STATUS:"Status1",ACTTIONS:"Action" },
    { USER: "Data 2", ROLE: "Value 2",PLAN:"plan 1",BILLING:"Bill 1",STATUS:"Status1",ACTTIONS:"Action" },
    { USER: "Data 2", ROLE: "Value 2",PLAN:"plan 1",BILLING:"Bill 1",STATUS:"Status1",ACTTIONS:"Action" },
    { USER: "Data 2", ROLE: "Vscscalue 2",PLAN:"plan 1",BILLING:"Bill 1",STATUS:"Status1",ACTTIONS:"Action" },
  ];
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
          <RolesPermissions data={sampleData} itemsPerPage={5}/>
        </div>
        <div className="shadow mt-5 w-full">
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Page;
