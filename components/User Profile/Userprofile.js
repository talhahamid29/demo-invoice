import React from "react";
import Image from "next/image";
import react from "../../public/react.png";
import figma from "../../public/figma.jpg";
import support from "../../public/support.jpg";
import twetter from "../../public/twetter.png";
import vue from "../../public/vue.png";
import Project from "./Project";

const Userprofile = () => {
  return (
    <div>
      <div>
        <div className=" bg-white card rounded shadow" style={{ width:900,height: 355 }}>
          <div
            className="bg-gray-900 relative"
            style={{ width: 900, height: 260 }}
          ></div>
          <div className="flex">
            {/* <div
              className="card bg-gray-200 absolute"
              style={{
                marginTop: -40,
                marginLeft: 20,
                width: 120,
                height: 120,
              }}
            ></div> */}
            <div>
              <br />
              <b
                className="text-gray-600"
                style={{ marginLeft: 180, fontSize: 20 }}
              >
                John Doe
              </b>
            </div>
            <div className="flex">
              <b
                className="text-gray-600"
                style={{ marginTop: 60, marginLeft: -100, fontSize: 14 }}
              >
                UX Designer
              </b>
              <b
                className="text-gray-600"
                style={{ marginTop: 60, marginLeft: 17, fontSize: 14 }}
              >
                USA
              </b>
              <b
                className="text-gray-600"
                style={{ marginTop: 60, marginLeft: 20, fontSize: 14 }}
              >
                Joined on Dec 1 1997
              </b>
              <button
                className="bg-gray-900 text-white rounded"
                style={{
                  marginTop: 50,
                  marginLeft: 300,
                  width: 100,
                  height: 30,
                }}
              >
                Connected
              </button>
            </div>
          </div>
        </div>

        <div className="flex">
          <div
            className="bg-white shadow rounded"
            style={{ width: 300, height: 450, marginTop: 30 }}
          >
            <p
              className="text-gray-400"
              style={{ paddingLeft: 30, paddingTop: 30 }}
            >
              ABOUT
            </p>
            <p
              className="text-gray-500"
              style={{
                paddingLeft: 30,
                fontFamily: "sans-serif",
                marginTop: -20,
              }}
            >
              <br />
              Full Name: John Doe
            </p>
            <p
              className="text-gray-500"
              style={{
                paddingLeft: 30,
                fontFamily: "sans-serif",
                marginTop: -20,
              }}
            >
              <br />
              Status: Active
            </p>
            <p
              className="text-gray-500"
              style={{
                paddingLeft: 30,
                fontFamily: "sans-serif",
                marginTop: -20,
              }}
            >
              <br />
              Role: Developer
            </p>
            <p
              className="text-gray-500"
              style={{
                paddingLeft: 30,
                fontFamily: "sans-serif",
                marginTop: -20,
              }}
            >
              <br />
              Country: USA
            </p>
            <p
              className="text-gray-500"
              style={{
                paddingLeft: 30,
                fontFamily: "sans-serif",
                marginTop: -20,
              }}
            >
              <br />
              Language: English
            </p>

            <p
              className="text-gray-400"
              style={{ paddingLeft: 30, paddingTop: 30 }}
            >
              CONTACTS
            </p>
            <p
              className="text-gray-500"
              style={{
                paddingLeft: 30,
                fontFamily: "sans-serif",
                marginTop: -20,
              }}
            >
              <br />
              Contact: (123) 456-7890
            </p>
            <p
              className="text-gray-500"
              style={{
                paddingLeft: 30,
                fontFamily: "sans-serif",
                marginTop: -20,
              }}
            >
              <br />
              Skype: John.doe
            </p>
            <p
              className="text-gray-500"
              style={{
                paddingLeft: 30,
                fontFamily: "sans-serif",
                marginTop: -20,
              }}
            >
              <br />
              Email: John.doe@example.com
            </p>

            <p
              className="text-gray-400"
              style={{ paddingLeft: 30, paddingTop: 30 }}
            >
              TEAMS
            </p>
            <p
              className="text-gray-500"
              style={{
                paddingLeft: 30,
                fontFamily: "sans-serif",
                marginTop: -20,
              }}
            >
              <br />
              Backend Develper {"("}126 Members{")"}
            </p>
            <p
              className="text-gray-500"
              style={{
                paddingLeft: 30,
                fontFamily: "sans-serif",
                marginTop: -20,
              }}
            >
              <br />
              React Develper {"("}98 Members{")"}
            </p>
          </div>

          <div
            className="bg-white shadow rounded"
            style={{ width: 560, height: 350, marginTop: 30, marginLeft: 30 }}
          >
            <p
              className="text-gray-400"
              style={{ paddingLeft: 30, paddingTop: 30 }}
            >
              Activity Timeline
            </p>
            <div className="flex">
              <div className="relative col-span-1 w-full h-15 flex ml-10 m-4">
                <div className="h-full w-0.5 ml-3 mt-6 bg-gray-900"></div>
                <div className="absolute w-4 h-4 ml-1  rounded-full bg-gray-900 z-10 text-white  text-center"></div>
                <p
                  className="ml-3 text-gray-700"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Client Meeting
                </p>
                <p
                  className="text-gray-500"
                  style={{
                    marginLeft: -100,
                    fontFamily: "sans-serif",
                    fontSize: 12,
                  }}
                >
                  <br />
                  Project meeting with john @10:15am
                </p>
              </div>
              <div className="flex" style={{ marginTop: 60, marginLeft: -550 }}>
                <div>
                  <img
                    src="https://source.unsplash.com/random"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                </div>
                <div style={{ marginLeft: 10 }}>
                  <p
                    className="text-gray-700"
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: 13,
                    }}
                  >
                    Lester McCarthy {"("}Client{")"}
                  </p>
                  <p className="text-gray-500" style={{ fontSize: 12 }}>
                    CEO of Infibeam
                  </p>
                </div>
              </div>
            </div>

            <div className="flex">
              <div className="relative col-span-1 w-full h-7 flex ml-10 m-4">
                <div className="h-full w-0.5 ml-3 mt-6 bg-gray-900"></div>
                <div className="absolute w-4 h-4 ml-1 rounded-full bg-gray-900 z-10 text-white  text-center"></div>
                <p
                  className="ml-3 text-gray-700"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Create a new project for client
                </p>
                <p
                  className="text-gray-500"
                  style={{
                    marginLeft: -210,
                    fontFamily: "sans-serif",
                    fontSize: 12,
                  }}
                >
                  <br />
                  Add files to new design folder
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="relative col-span-1 w-full h-12 flex ml-10 m-4">
                <div className="h-full w-0.5 ml-3 mt-6 bg-gray-900"></div>
                <div className="absolute w-4 h-4 ml-1 rounded-full bg-gray-900 z-10 text-white  text-center"></div>
                <p
                  className="ml-3 text-gray-700"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Shared 2 New Project Files
                </p>
                <p
                  className="text-gray-500"
                  style={{
                    marginLeft: -190,
                    fontFamily: "sans-serif",
                    fontSize: 12,
                  }}
                >
                  <br />
                  Sent by Mollie Dixon
                </p>
                <div
                  className="flex text-gray-700"
                  style={{
                    marginTop: 40,
                    marginLeft: -100,
                    fontSize: 14,
                    fontFamily: "sans-serif",
                  }}
                >
                  App Guidelines Testing Results
                </div>
              </div>
            </div>

            <div className="flex">
              <div className="absolute w-4 h-4 ml-11 mt-3 rounded-full bg-gray-900 z-10 text-white  text-center"></div>
              <p
                className="text-gray-700"
                style={{
                  fontFamily: "sans-serif",
                  marginLeft: 70,
                  marginTop: 10,
                }}
              >
                Project status updated
              </p>
              <p
                className="text-gray-500"
                style={{
                  marginLeft: -160,
                  marginTop: 10,
                  fontFamily: "sans-serif",
                  fontSize: 12,
                }}
              >
                <br />
                Woocommerce iOS App Completed
              </p>
            </div>
          </div>
        </div>

        <div className="flex">
          <div
            className="bg-white shadow rounded"
            style={{ width: 230, height: 360, marginTop: -70, marginLeft: 330 }}
          >
            <p
              className="text-gray-700"
              style={{ paddingLeft: 30, paddingTop: 30 }}
            >
              <b>Connections</b>
            </p>
            <div className="flex" style={{ marginTop: 10, marginLeft: 10 }}>
              <div>
                <img
                  src="https://source.unsplash.com/random"
                  className="w-8 h-8 rounded-full object-cover"
                />
              </div>
              <div style={{ marginLeft: 10 }}>
                <p
                  className="text-gray-700"
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: 13,
                  }}
                >
                  Cecilia Payne
                </p>
                <p className="text-gray-500" style={{ fontSize: 12 }}>
                  45 Connections
                </p>
              </div>
              <div>
                <button
                  className="bg-gray-400 text-white rounded"
                  style={{ marginLeft: 50, width: 30, height: 30 }}
                >
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
            <div className="flex" style={{ marginTop: 10, marginLeft: 10 }}>
              <div>
                <img
                  src="https://source.unsplash.com/random"
                  className="w-8 h-8 rounded-full object-cover"
                />
              </div>
              <div style={{ marginLeft: 10 }}>
                <p
                  className="text-gray-700"
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: 13,
                  }}
                >
                  Curtis Fletcher
                </p>
                <p className="text-gray-500" style={{ fontSize: 12 }}>
                  1.32k Connections
                </p>
              </div>
              <div>
                <button
                  className="bg-gray-900 text-white rounded"
                  style={{ marginLeft: 36, width: 30, height: 30 }}
                >
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
            <div className="flex" style={{ marginTop: 10, marginLeft: 10 }}>
              <div>
                <img
                  src="https://source.unsplash.com/random"
                  className="w-8 h-8 rounded-full object-cover"
                />
              </div>
              <div style={{ marginLeft: 10 }}>
                <p
                  className="text-gray-700"
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: 13,
                  }}
                >
                  Alice Stone
                </p>
                <p className="text-gray-500" style={{ fontSize: 12 }}>
                  25 Connections
                </p>
              </div>
              <div>
                <button
                  className="bg-gray-900 text-white rounded"
                  style={{ marginLeft: 50, width: 30, height: 30 }}
                >
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
            <div className="flex" style={{ marginTop: 10, marginLeft: 10 }}>
              <div>
                <img
                  src="https://source.unsplash.com/random"
                  className="w-8 h-8 rounded-full object-cover"
                />
              </div>
              <div style={{ marginLeft: 10 }}>
                <p
                  className="text-gray-700"
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: 13,
                  }}
                >
                  Darrell Barnes
                </p>
                <p className="text-gray-500" style={{ fontSize: 12 }}>
                  456 Connections
                </p>
              </div>
              <div>
                <button
                  className="bg-gray-400 text-white rounded"
                  style={{ marginLeft: 42, width: 30, height: 30 }}
                >
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
            <div className="flex" style={{ marginTop: 10, marginLeft: 10 }}>
              <div>
                <img
                  src="https://source.unsplash.com/random"
                  className="w-8 h-8 rounded-full object-cover"
                />
              </div>
              <div style={{ marginLeft: 10 }}>
                <p
                  className="text-gray-700"
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: 13,
                  }}
                >
                  Eugenia Moore
                </p>
                <p className="text-gray-500" style={{ fontSize: 12 }}>
                  1.2k Connections
                </p>
              </div>
              <div>
                <button
                  className="bg-gray-400 text-white rounded"
                  style={{ marginLeft: 43, width: 30, height: 30 }}
                >
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>

            <p style={{ color: "blue", marginLeft: 20 }}>
              <br />
              View all connections
            </p>
          </div>

          <div
            className="bg-white shadow rounded"
            style={{ width: 300, height: 400, marginTop: -70, marginLeft: 30 }}
          >
            <p
              className="text-gray-700"
              style={{ paddingLeft: 30, paddingTop: 30 }}
            >
              <b>Teams</b>
              <div className="flex mt-6">
                <Image src={react} className="w-8 h-8 rounded-full " />
                <div>
                  <p style={{ fontSize: 15 }}>React Developers</p>
                  <p className="text-gray-500" style={{ fontSize: 12 }}>
                    72 Members
                  </p>
                </div>
                <div>
                  <button
                    className="text-red-500 bg-red-200 font-bold rounded w-200"
                    style={{ width: 100 }}
                  >
                    Developer
                  </button>
                </div>
              </div>

              <div className="flex mt-4">
                <Image src={support} className="w-8 h-8 rounded-full" />
                <div>
                  <p style={{ fontSize: 15 }}>Support Team</p>
                  <p className="text-gray-500" style={{ fontSize: 12 }}>
                    122 Members
                  </p>
                </div>
                <div>
                  <button
                    className="text-purple-500 bg-purple-200 font-bold rounded w-200"
                    style={{ width: 90, marginLeft: 31 }}
                  >
                    Support
                  </button>
                </div>
              </div>

              <div className="flex mt-4">
                <Image src={figma} className="w-8 h-8 rounded-full" />
                <div>
                  <p style={{ fontSize: 15 }}>UI Designer </p>
                  <p className="text-gray-500" style={{ fontSize: 12 }}>
                    7 Members
                  </p>
                </div>
                <div>
                  <button
                    className="text-green-500 bg-green-200 font-bold rounded w-200"
                    style={{ width: 90, marginLeft: 51 }}
                  >
                    Designer
                  </button>
                </div>
              </div>

              <div className="flex mt-4">
                <Image src={vue} className="w-8 h-8 rounded-full" />
                <div>
                  <p style={{ fontSize: 15 }}>Vue.js Developers</p>
                  <p className="text-gray-500" style={{ fontSize: 12 }}>
                    289 Members
                  </p>
                </div>
                <div>
                  <button
                    className="text-red-500 bg-red-200 font-bold rounded w-200"
                    style={{ width: 90, marginLeft: 5 }}
                  >
                    Developer
                  </button>
                </div>
              </div>

              <div className="flex mt-4">
                <Image src={twetter} className="w-8 h-8 rounded-full" />
                <div>
                  <p style={{ fontSize: 15 }}>Digital Marketing</p>
                  <p className="text-gray-500" style={{ fontSize: 12 }}>
                    24 Members
                  </p>
                </div>
                <div>
                  <button
                    className="text-gray-500 bg-gray-200 font-bold rounded w-200"
                    style={{ width: 90, marginLeft: 5 }}
                  >
                    Marketing
                  </button>
                </div>
              </div>
            </p>
            <p className="text-blue-500 ml-20 mt-5">View all teams</p>
          </div>
        </div>

        <div
          className="bg-white shadow rounded"
          style={{ width: 300, height: 160, marginTop: -300 }}
        >
          <p
            className="text-gray-400"
            style={{ paddingLeft: 30, paddingTop: 30 }}
          >
            OVERVIEW
          </p>
          <p
            className="text-gray-500"
            style={{
              paddingLeft: 30,
              fontFamily: "sans-serif",
              marginTop: -20,
            }}
          >
            <br />
            Task Compiled: 13.5k
          </p>
          <p
            className="text-gray-500"
            style={{
              paddingLeft: 30,
              fontFamily: "sans-serif",
              marginTop: -20,
            }}
          >
            <br />
            Connections: 897
          </p>
          <p
            className="text-gray-500"
            style={{
              paddingLeft: 30,
              fontFamily: "sans-serif",
              marginTop: -20,
            }}
          >
            <br />
            Projects Compiled: 146
          </p>
        </div>
      </div>

      <div
        className="bg-white flex"
        style={{ marginTop: 175, marginLeft: 340, width: 540, padding: 10 }}
      >
        <p
          className="text-gray-700"
          style={{ paddingLeft: 20, paddingTop: 10 }}
        >
          <b>
            Projects
            </b>
        </p>

        <input
          className="rounded"
          type="text"
          placeholder="Search User"
          style={{ marginLeft: 210 }}
        />
      </div>
      <div
        style={{
          width: 560,
          height: 400,
          marginTop: -10,
          marginLeft: 330,
          padding: 10,
        }}
      >
        <Project />
      </div>
    </div>
  );
};

export default Userprofile;
