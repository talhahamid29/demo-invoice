// components/Drawer.js
import React from "react";

const Drawer = ({ children, onClose }) => {
  return (
    <div
      className="fixed inset-0 overflow-hidden z-50"
      onClick={onClose}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div
        className="fixed inset-y-0 right-0 max-w-xs w-full p-4 bg-white shadow"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Drawer;
