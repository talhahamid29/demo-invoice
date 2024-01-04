import React from 'react'
import PaginationTable2 from "./PaginationTable2";

const List = () => {
  return (
    <div>
        <p>INVOICE LIST</p>
        <div className="grid grid-cols-4">
          <div className="card bg-white mt-10 w-[250px] h-[150px] shadow-lg">
            <div className="flex">
              <p className="text-sm mt-4 ml-5">INVOICES SENT</p>
              <div className="flex">
                <span className="text-sm mt-4 ml-2 text-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </span>
                <span className="text-sm mt-4 ml-2 text-green-500">
                  89.24 %
                </span>
              </div>
            </div>
            <p className="ml-5 mt-5 mb-5 text-xl font-bold">$559.25k</p>
            <div className="flex">
              <div>
                <p className="ml-5 text-sm bg-orange-400 text-white rounded pl-3 pr-3">
                  2,258
                </p>
              </div>
              <p className="ml-2 text-sm">Invoices sent</p>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10 text-blue-500 bg-gray-100 p-1 mt-[-10px] ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="card bg-white mt-10 w-[250px] h-[150px] shadow-lg">
            <div className="flex">
              <p className="text-sm mt-4 ml-5">PAID INVOICES</p>
              <div className="flex">
                <span className="text-sm mt-4 ml-2 text-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 text-red-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
                    />
                  </svg>
                </span>
                <span className="text-sm mt-4 ml-2 text-red-500">+8.09 %</span>
              </div>
            </div>
            <p className="ml-5 mt-5 mb-5 text-xl font-bold">$409.66k</p>
            <div className="flex">
              <div>
                <p className="ml-5 text-sm bg-orange-400 text-white rounded pl-3 pr-3">
                  1,958
                </p>
              </div>
              <p className="ml-2 text-sm">Paid by clients</p>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10 bg-gray-100 text-blue-500 mt-[-10px] ml-2 p-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="card bg-white mt-10 w-[250px] h-[170px] shadow-lg">
            <div className="flex">
              <p className="text-sm mt-4 ml-5">UNPAID INVOICES</p>
              <div className="flex">
                <span className="text-sm mt-4 ml-2 text-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 text-red-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
                    />
                  </svg>
                </span>
                <span className="text-sm mt-4 ml-2 text-red-500">-9.01 %</span>
              </div>
            </div>
            <p className="ml-5 mt-5 mb-5 text-xl font-bold">$136.98k</p>
            <div className="flex">
              <div>
                <p className="ml-5 text-sm bg-orange-400 text-white rounded pl-3 pr-3">
                  338
                </p>
              </div>
              <p className="ml-2 text-sm">
                Unpaid by
                <br /> clients
              </p>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10 bg-gray-100 text-blue-500 mt-[-10px] ml-10 p-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="card bg-white mt-10 w-[250px] h-[220px] shadow-lg">
            <div className="flex">
              <p className="text-sm mt-10 ml-5">
                CANCELLED <br />
                INVOICES
              </p>
              <div className="flex ">
                <span className="text-sm mt-4 ml-10 mt-[50px] text-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </span>
                <span className="text-sm mt-4 ml-2 mt-[50px] text-green-500">
                  7.55 %
                </span>
              </div>
            </div>
            <p className="ml-5 mt-5 mb-5 text-xl font-bold">$84.2k</p>
            <div className="flex mt-5">
              <div>
                <p className="ml-5 text-sm bg-orange-400 text-white rounded pl-3 pr-3">
                  502
                </p>
              </div>
              <p className="ml-2 text-sm">
                Cancelled by
                <br /> client
              </p>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10 text-blue-500 bg-gray-100 p-1 mt-[-10px] ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 ">
          <div className="shadow-lg">
            <div className="shadow-lg p-4 grid grid-cols-2 grid-row-3">
              <p>Invoices</p>
              <button className="text-white w-[170px] h-[40px] rounded ml-[350px] bg-orange-500">
                + Create Invoice
              </button>
              <hr className="w-[1100px]" />
              <br />
              <input
                type="text"
                placeholder="search for customer,email,country,status or something"
                className="w-[1070px] bg-gray-100 p-2 rounded"
              />
              <br />
              <input
                type="text"
                placeholder="select date"
                className="w-[300px] bg-gray-100 mt-5 p-2 rounded"
              />
              <select className="w-[300px] bg-gray-100 mt-5 ml-[-170px] p-2 rounded">
                <option>All</option>
              </select>
              <button className="text-white w-[300px] bg-blue-500 mt-[-40px] ml-[750px] p-2 rounded">
                <div className="flex ml-[100px]">
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
                      d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                    />
                  </svg>
                  Filter
                </div>
              </button>
            </div>
            <PaginationTable2/>
            </div>
            </div>
    </div>
  )
}

export default List
