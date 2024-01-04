// "use client";
// import React, { useState } from "react";
// import VerticalNavbar from "../../components/Navbar/VerticalNavbar";
// import Header from "../../components/Header/Header";
// import Dragdrop from "../../components/Drag & Drop/Dragdrop";

// const Page = () => {
//   const [isDrawerOpen, setDrawerOpen] = useState(false);

//   const toggleDrawer = () => {
//     setDrawerOpen(!isDrawerOpen);
//   };

//   return (
//     <div className="flex">
//       <aside>
//         <VerticalNavbar
//           isDrawerOpen={isDrawerOpen}
//           toggleDrawer={toggleDrawer}
//         />
//       </aside>
//       <main>
//         <div className="fixed w-full">
//           <Header />
//         </div>
//         <div className={`p-4 ${isDrawerOpen ? "" : "ml-24"}`}>
//           <Dragdrop />
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Page;


"use client";
import React, { useEffect, useState } from "react";
import VerticalNavbar from "../../components/Navbar/VerticalNavbar";
import Header from "../../components/Header/Header";
import Dragdrop from "../../components/Drag & Drop/Dragdrop";
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
          <Dragdrop />
        </div>
        <div className="shadow mt-5 w-full">
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Page;
