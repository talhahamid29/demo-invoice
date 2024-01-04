"use client"
import React, { useState } from 'react'
import ReactPaginate from "react-paginate";
import ReactModal from "react-modal";
import { useTable, usePagination } from "react-table";
import PaginationTable from "./PaginationTable";


const EditRoleModal = ({ isOpen, onRequestClose }) => {

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Edit Role Modal"
      style={{
        content: {
          scrollbarWidth:'thin',
          scrollbarColor:'white white',
          width:900,
          marginLeft:150,
          marginRight:100 
        },
      }}
    >
      <div className="p-10">
        <h1
          className="text-gray-700"
          style={{
            textAlign: "center",
            fontSize: 25,
            fontWeight: "bold",
            fontFamily: "sans-serif",
          }}
        >
          Edit Role
        </h1>
        <p
          className="text-gray-700"
          style={{ textAlign: "center", fontFamily: "sans-serif" }}
        >
          Set Role Permissions
        </p>

        <div style={{ margin: 20, fontFamily: "sans-serif" }}>
          <p className="text-gray-700">Role Name</p>
          <input
            type="text"
            placeholder="Enter Role Name"
            style={{
              appearance: "none",
              width: 750,
              border: "2px solid gray",
              borderRadius: "0.25em",
              outline: "none",
              cursor: "pointer",
            }}
          />
        </div>

        <div style={{ margin: 20 }}>
          <h1
            className="text-gray-700"
            style={{
              fontSize: 25,
              fontWeight: "bold",
              fontFamily: "sans-serif",
            }}
          >
            Role Permissions
          </h1>
          <div className="flex">
            <p
              className="text-gray-700 ml-10"
              style={{ fontFamily: "sans-serif" }}
            >
              Administrator Access
            </p>
            <input
              type="checkbox"
              style={{
                marginLeft: 100,
                appearance: "none",
                width: "1.5em",
                height: "1.5em",
                border: "2px solid gray",
                borderRadius: "0.25em",
                outline: "none",
                cursor: "pointer",
              }}
            />
            <span className="ml-2 text-gray-700">Select All</span>
          </div>
          <br />
          <hr style={{ color: "gray" }} />
          <div className="flex">
            <span
              className="text-gray-600 font-bold m-3"
              style={{ fontFamily: "sans-serif"}}
            >
              User Management
            </span>

            <input
              type="checkbox"
              style={{
                marginLeft: 127,
                appearance: "none",
                width: "1.5em",
                height: "1.5em",
                border: "2px solid gray",
                borderRadius: "0.25em",
                outline: "none",
                cursor: "pointer",
                marginTop: 10,
              }}
            />
            <span className="ml-2 text-gray-700" style={{ marginTop: 10 }}>
              Read
            </span>
            <input
              type="checkbox"
              style={{
                marginLeft: 100,
                appearance: "none",
                width: "1.5em",
                height: "1.5em",
                border: "2px solid gray",
                borderRadius: "0.25em",
                outline: "none",
                cursor: "pointer",
                marginTop: 10,
              }}
            />
            <span className="ml-2 text-gray-700" style={{ marginTop: 10 }}>
              Write
            </span>

            <input
              type="checkbox"
              style={{
                marginLeft: 100,
                appearance: "none",
                width: "1.5em",
                height: "1.5em",
                border: "2px solid gray",
                borderRadius: "0.25em",
                outline: "none",
                cursor: "pointer",
                marginTop: 10,
              }}
            />
            <span className="ml-2 text-gray-700" style={{ marginTop: 10 }}>
              Create
            </span>
          </div>

          <hr style={{ color: "gray" }} />
          <div className="flex">
            <span
              className="text-gray-600 font-bold m-3"
              style={{ fontFamily: "sans-serif" }}
            >
              Content Management
            </span>

            <input
              type="checkbox"
              style={{
                marginLeft: 102,
                appearance: "none",
                width: "1.5em",
                height: "1.5em",
                border: "2px solid gray",
                borderRadius: "0.25em",
                outline: "none",
                cursor: "pointer",
                marginTop: 10,
              }}
            />
            <span className="ml-2 text-gray-700" style={{ marginTop: 10 }}>
              Read
            </span>
            <input
              type="checkbox"
              style={{
                marginLeft: 100,
                appearance: "none",
                width: "1.5em",
                height: "1.5em",
                border: "2px solid gray",
                borderRadius: "0.25em",
                outline: "none",
                cursor: "pointer",
                marginTop: 10,
              }}
            />
            <span className="ml-2 text-gray-700" style={{ marginTop: 10 }}>
              Write
            </span>

            <input
              type="checkbox"
              style={{
                marginLeft: 100,
                appearance: "none",
                width: "1.5em",
                height: "1.5em",
                border: "2px solid gray",
                borderRadius: "0.25em",
                outline: "none",
                cursor: "pointer",
                marginTop: 10,
              }}
            />
            <span className="ml-2 text-gray-700" style={{ marginTop: 10 }}>
              Create
            </span>
          </div>

          <hr style={{ color: "gray" }} />

          <div className="flex">
            <span
              className="text-gray-600 font-bold m-3"
              style={{ fontFamily: "sans-serif" }}
            >
              Disputes Management
            </span>

            <input
              type="checkbox"
              style={{
                marginLeft: 95,
                appearance: "none",
                width: "1.5em",
                height: "1.5em",
                border: "2px solid gray",
                borderRadius: "0.25em",
                outline: "none",
                cursor: "pointer",
                marginTop: 10,
              }}
            />
            <span className="ml-2 text-gray-700" style={{ marginTop: 10 }}>
              Read
            </span>
            <input
              type="checkbox"
              style={{
                marginLeft: 100,
                appearance: "none",
                width: "1.5em",
                height: "1.5em",
                border: "2px solid gray",
                borderRadius: "0.25em",
                outline: "none",
                cursor: "pointer",
                marginTop: 10,
              }}
            />
            <span className="ml-2 text-gray-700" style={{ marginTop: 10 }}>
              Write
            </span>

            <input
              type="checkbox"
              style={{
                marginLeft: 100,
                appearance: "none",
                width: "1.5em",
                height: "1.5em",
                border: "2px solid gray",
                borderRadius: "0.25em",
                outline: "none",
                cursor: "pointer",
                marginTop: 10,
              }}
            />
            <span className="ml-2 text-gray-700" style={{ marginTop: 10 }}>
              Create
            </span>
          </div>

          <hr style={{ color: "gray" }} />

          <div className="flex">
            <span
              className="text-gray-600 font-bold m-3"
              style={{ fontFamily: "sans-serif" }}
            >
              Database Management
            </span>

            <input
              type="checkbox"
              style={{
                marginLeft: 90,
                appearance: "none",
                width: "1.5em",
                height: "1.5em",
                border: "2px solid gray",
                borderRadius: "0.25em",
                outline: "none",
                cursor: "pointer",
                marginTop: 10,
              }}
            />
            <span className="ml-2 text-gray-700" style={{ marginTop: 10 }}>
              Read
            </span>
            <input
              type="checkbox"
              style={{
                marginLeft: 100,
                appearance: "none",
                width: "1.5em",
                height: "1.5em",
                border: "2px solid gray",
                borderRadius: "0.25em",
                outline: "none",
                cursor: "pointer",
                marginTop: 10,
              }}
            />
            <span className="ml-2 text-gray-700" style={{ marginTop: 10 }}>
              Write
            </span>

            <input
              type="checkbox"
              style={{
                marginLeft: 100,
                appearance: "none",
                width: "1.5em",
                height: "1.5em",
                border: "2px solid gray",
                borderRadius: "0.25em",
                outline: "none",
                cursor: "pointer",
                marginTop: 10,
              }}
            />
            <span className="ml-2 text-gray-700" style={{ marginTop: 10 }}>
              Create
            </span>
          </div>

          <hr style={{ color: "gray" }} />

          <div className="flex">
            <span
              className="text-gray-600 font-bold m-3"
              style={{ fontFamily: "sans-serif" }}
            >
              Financial Management
            </span>

            <input
              type="checkbox"
              style={{
                marginLeft: 92,
                appearance: "none",
                width: "1.5em",
                height: "1.5em",
                border: "2px solid gray",
                borderRadius: "0.25em",
                outline: "none",
                cursor: "pointer",
                marginTop: 10,
              }}
            />
            <span className="ml-2 text-gray-700" style={{ marginTop: 10 }}>
              Read
            </span>
            <input
              type="checkbox"
              style={{
                marginLeft: 100,
                appearance: "none",
                width: "1.5em",
                height: "1.5em",
                border: "2px solid gray",
                borderRadius: "0.25em",
                outline: "none",
                cursor: "pointer",
                marginTop: 10,
              }}
            />
            <span className="ml-2 text-gray-700" style={{ marginTop: 10 }}>
              Write
            </span>

            <input
              type="checkbox"
              style={{
                marginLeft: 100,
                appearance: "none",
                width: "1.5em",
                height: "1.5em",
                border: "2px solid gray",
                borderRadius: "0.25em",
                outline: "none",
                cursor: "pointer",
                marginTop: 10,
              }}
            />
            <span className="ml-2 text-gray-700" style={{ marginTop: 10 }}>
              Create
            </span>
          </div>

          <hr style={{ color: "gray" }} />

          <div className="flex">
            <span
              className="text-gray-600 font-bold m-3"
              style={{ fontFamily: "sans-serif" }}
            >
              Reporting
            </span>

            <input
              type="checkbox"
              style={{
                marginLeft: 187,
                appearance: "none",
                width: "1.5em",
                height: "1.5em",
                border: "2px solid gray",
                borderRadius: "0.25em",
                outline: "none",
                cursor: "pointer",
                marginTop: 10,
              }}
            />
            <span className="ml-2 text-gray-700" style={{ marginTop: 10 }}>
              Read
            </span>
            <input
              type="checkbox"
              style={{
                marginLeft: 100,
                appearance: "none",
                width: "1.5em",
                height: "1.5em",
                border: "2px solid gray",
                borderRadius: "0.25em",
                outline: "none",
                cursor: "pointer",
                marginTop: 10,
              }}
            />
            <span className="ml-2 text-gray-700" style={{ marginTop: 10 }}>
              Write
            </span>

            <input
              type="checkbox"
              style={{
                marginLeft: 100,
                appearance: "none",
                width: "1.5em",
                height: "1.5em",
                border: "2px solid gray",
                borderRadius: "0.25em",
                outline: "none",
                cursor: "pointer",
                marginTop: 10,
              }}
            />
            <span className="ml-2 text-gray-700" style={{ marginTop: 10 }}>
              Create
            </span>
          </div>

          <hr style={{ color: "gray" }} />

          <div className="flex">
            <span
              className="text-gray-600 font-bold m-3"
              style={{ fontFamily: "sans-serif" }}
            >
              API Control
            </span>

            <input
              type="checkbox"
              style={{
                marginLeft: 173,
                appearance: "none",
                width: "1.5em",
                height: "1.5em",
                border: "2px solid gray",
                borderRadius: "0.25em",
                outline: "none",
                cursor: "pointer",
                marginTop: 10,
              }}
            />
            <span className="ml-2 text-gray-700" style={{ marginTop: 10 }}>
              Read
            </span>
            <input
              type="checkbox"
              style={{
                marginLeft: 100,
                appearance: "none",
                width: "1.5em",
                height: "1.5em",
                border: "2px solid gray",
                borderRadius: "0.25em",
                outline: "none",
                cursor: "pointer",
                marginTop: 10,
              }}
            />
            <span className="ml-2 text-gray-700" style={{ marginTop: 10 }}>
              Write
            </span>

            <input
              type="checkbox"
              style={{
                marginLeft: 100,
                appearance: "none",
                width: "1.5em",
                height: "1.5em",
                border: "2px solid gray",
                borderRadius: "0.25em",
                outline: "none",
                cursor: "pointer",
                marginTop: 10,
              }}
            />
            <span className="ml-2 text-gray-700" style={{ marginTop: 10 }}>
              Create
            </span>
          </div>

          <hr style={{ color: "gray" }} />

          <div className="flex">
            <span
              className="text-gray-600 font-bold m-3"
              style={{ fontFamily: "sans-serif" }}
            >
              Repository Management
            </span>

            <input
              type="checkbox"
              style={{
                marginLeft: 75,
                appearance: "none",
                width: "1.5em",
                height: "1.5em",
                border: "2px solid gray",
                borderRadius: "0.25em",
                outline: "none",
                cursor: "pointer",
                marginTop: 10,
              }}
            />
            <span className="ml-2 text-gray-700" style={{ marginTop: 10 }}>
              Read
            </span>
            <input
              type="checkbox"
              style={{
                marginLeft: 100,
                appearance: "none",
                width: "1.5em",
                height: "1.5em",
                border: "2px solid gray",
                borderRadius: "0.25em",
                outline: "none",
                cursor: "pointer",
                marginTop: 10,
              }}
            />
            <span className="ml-2 text-gray-700" style={{ marginTop: 10 }}>
              Write
            </span>

            <input
              type="checkbox"
              style={{
                marginLeft: 100,
                appearance: "none",
                width: "1.5em",
                height: "1.5em",
                border: "2px solid gray",
                borderRadius: "0.25em",
                outline: "none",
                cursor: "pointer",
                marginTop: 10,
              }}
            />
            <span className="ml-2 text-gray-700" style={{ marginTop: 10 }}>
              Create
            </span>
          </div>

          <hr style={{ color: "gray" }} />

          <div className="flex">
            <span
              className="text-gray-600 font-bold m-3"
              style={{ fontFamily: "sans-serif" }}
            >
              Payroll
            </span>

            <input
              type="checkbox"
              style={{
                marginLeft: 207,
                appearance: "none",
                width: "1.5em",
                height: "1.5em",
                border: "2px solid gray",
                borderRadius: "0.25em",
                outline: "none",
                cursor: "pointer",
                marginTop: 10,
              }}
            />
            <span className="ml-2 text-gray-700" style={{ marginTop: 10 }}>
              Read
            </span>
            <input
              type="checkbox"
              style={{
                marginLeft: 100,
                appearance: "none",
                width: "1.5em",
                height: "1.5em",
                border: "2px solid gray",
                borderRadius: "0.25em",
                outline: "none",
                cursor: "pointer",
                marginTop: 10,
              }}
            />
            <span className="ml-2 text-gray-700" style={{ marginTop: 10 }}>
              Write
            </span>

            <input
              type="checkbox"
              style={{
                marginLeft: 100,
                appearance: "none",
                width: "1.5em",
                height: "1.5em",
                border: "2px solid gray",
                borderRadius: "0.25em",
                outline: "none",
                cursor: "pointer",
                marginTop: 10,
              }}
            />
            <span className="ml-2 text-gray-700" style={{ marginTop: 10 }}>
              Create
            </span>
          </div>
          <hr style={{ color: "gray" }} />
        </div>
        <button
          onClick={onRequestClose}
          className="bg-gray-900 text-white rounded shadow"
          style={{ marginLeft: 275, width: 100, height: 30 }}
        >
          Submit
        </button>
        <button
          onClick={onRequestClose}
          className="bg-gray-200  rounded shadow"
          style={{ marginLeft: 20, width: 100, height: 30 }}
        >
          Close{" "}
        </button>
      </div>
    </ReactModal>
  );
};

const RolesPermissions = ({ data, itemsPerPage }) => {
    const [currentPage, setCurrentPage] = useState(0);
  const [isEditRoleModalOpen, setEditRoleModalOpen] = useState(false);

    const handlePageChange = ({ selected }) => {
      setCurrentPage(selected);
    };

    const offset = currentPage * itemsPerPage;
    const currentData = data.slice(offset, offset + itemsPerPage);

     const openEditRoleModal = () => {
       setEditRoleModalOpen(true);
     };

     const closeEditRoleModal = () => {
       setEditRoleModalOpen(false);
     };

  return (
    <div>
      <p className="text-gray-500 text-xl font-bold">Roles List</p>
      <p className="text-gray-400 font-sans">
        A role provided access to predefined menus and features so that
        depending on <br />
        assigned role an administrator can have access to what he need
      </p>

      <div className="flex">
        <div
          className="bg-white shadow rounded"
          style={{ width: 300, marginLeft: 10, marginTop: 10, height: 150 }}
        >
          <div className="flex">
            <p className="text-gray-500 pt-7 pl-6">Total 4 users</p>
            <img
              src="https://source.unsplash.com/random"
              className="w-7 h-7 mt-6 ml-10 rounded-full"
            />
            <img
              src="https://source.unsplash.com/random"
              className="w-7 h-7 mt-6 rounded-full"
            />
            <img
              src="https://source.unsplash.com/random"
              className="w-7 h-7 mt-6 rounded-full"
            />
            <img
              src="https://source.unsplash.com/random"
              className="w-7 h-7 mt-6 rounded-full"
            />
          </div>
          <p className="text-2xl ml-5 mt-6 font-bold text-gray-600">
            Administrator
          </p>
          <div className="flex">
            <button
              className="text-blue-500 ml-5 mt-2"
              onClick={openEditRoleModal}
            >
              Edit Role
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-gray-500 ml-40"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6"
              />
            </svg>
          </div>
        </div>

        <div
          className="bg-white shadow rounded"
          style={{ width: 300, marginLeft: 30, marginTop: 10, height: 150 }}
        >
          <div className="flex">
            <p className="text-gray-500 pt-7 pl-6">Total 7 users</p>
            <img
              src="https://source.unsplash.com/random"
              className="w-7 h-7 mt-6 ml-10 rounded-full"
            />
            <img
              src="https://source.unsplash.com/random"
              className="w-7 h-7 mt-6 rounded-full"
            />
            <img
              src="https://source.unsplash.com/random"
              className="w-7 h-7 mt-6 rounded-full"
            />
            <img
              src="https://source.unsplash.com/random"
              className="w-7 h-7 mt-6 rounded-full"
            />
          </div>
          <p className="text-2xl ml-5 mt-6 font-bold text-gray-600">Manager</p>
          <div className="flex">
            <button
              className="text-blue-500 ml-5 mt-2"
              onClick={openEditRoleModal}
            >
              Edit Role
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-gray-500 ml-40"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6"
              />
            </svg>
          </div>
        </div>

        <div
          className="bg-white shadow"
          style={{ width: 300, marginLeft: 30, marginTop: 10, height: 150 }}
        >
          <div className="flex">
            <p className="text-gray-500 pt-7 pl-6">Total 5 users</p>
            <img
              src="https://source.unsplash.com/random"
              className="w-7 h-7 mt-6 ml-10 rounded-full"
            />
            <img
              src="https://source.unsplash.com/random"
              className="w-7 h-7 mt-6 rounded-full"
            />
            <img
              src="https://source.unsplash.com/random"
              className="w-7 h-7 mt-6 rounded-full"
            />
            <img
              src="https://source.unsplash.com/random"
              className="w-7 h-7 mt-6 rounded-full"
            />
          </div>
          <p className="text-2xl ml-5 mt-6 font-bold text-gray-600">Users</p>
          <div className="flex">
            <button
              className="text-blue-500 ml-5 mt-2"
              onClick={openEditRoleModal}
            >
              Edit Role
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-gray-500 ml-40"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex">
        <div
          className="bg-white shadow rounded"
          style={{ width: 300, marginLeft: 10, marginTop: 10, height: 150 }}
        >
          <div className="flex">
            <p className="text-gray-500 pt-7 pl-6">Total 3 users</p>
            <img
              src="https://source.unsplash.com/random"
              className="w-7 h-7 mt-6 ml-10 rounded-full"
            />
            <img
              src="https://source.unsplash.com/random"
              className="w-7 h-7 mt-6 rounded-full"
            />
            <img
              src="https://source.unsplash.com/random"
              className="w-7 h-7 mt-6 rounded-full"
            />
          </div>
          <p className="text-2xl ml-5 mt-6 font-bold text-gray-600">Support</p>
          <div className="flex">
            <button
              className="text-blue-500 ml-5 mt-2"
              onClick={openEditRoleModal}
            >
              Edit Role
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-gray-500 ml-40"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6"
              />
            </svg>
          </div>
        </div>

        <div
          className="bg-white shadow rounded"
          style={{ width: 300, marginLeft: 30, marginTop: 10, height: 150 }}
        >
          <div className="flex">
            <p className="text-gray-500 pt-7 pl-6">Total 2 users</p>
            <img
              src="https://source.unsplash.com/random"
              className="w-7 h-7 mt-6 ml-10 rounded-full"
            />
            <img
              src="https://source.unsplash.com/random"
              className="w-7 h-7 mt-6 rounded-full"
            />
          </div>
          <p className="text-2xl ml-5 mt-6 font-bold text-gray-600">
            Ristricted User
          </p>
          <div className="flex">
            <button
              className="text-blue-500 ml-5 mt-2"
              onClick={openEditRoleModal}
            >
              Edit Role
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-gray-500 ml-40"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6"
              />
            </svg>
          </div>
          <EditRoleModal
            isOpen={isEditRoleModalOpen}
            onRequestClose={closeEditRoleModal}
          />
        </div>

        <div
          className="bg-white shadow"
          style={{ width: 300, marginLeft: 30, marginTop: 10, height: 150 }}
        >
          <div className="flex">
            <button className="bg-gray-900 text-white text-xl ml-20 mt-10 font-bold rounded">
              Add New Role
            </button>
          </div>
          <p className="ml-10 mt-6 text-gray-600">
            Add role, if it doesnt exist.
          </p>
        </div>
      </div>

      <div className="my-8">
        <div
          className="bg-white"
          style={{ width: 1000, height: 100, padding: 10 }}
        >
          <br />
          <div className="bg-white flex" style={{ float: "right" }}>
            <input className="rounded" type="text" placeholder="Search User" />
            <select
              className="rounded"
              style={{ marginLeft: 30, border: "1px solid gray" }}
            >
              <option>Select Plan</option>
            </select>
          </div>
        </div>
           <PaginationTable/>
      </div>
    </div>
  );
};

export default RolesPermissions


