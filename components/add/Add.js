import React, { useState } from 'react'
import Table2 from '../Table/Table2';
import PaginationTable2 from '../list/PaginationTable2';

const Add = () => {
    const [rows, setRows] = useState([
      {
        id: 1,
        itemName: "",
        itemDetail: "",
        hsnSac: "",
        qty: "",
        rate: "",
        per: "",
        discount: "",
        gst: "",
        amount: "",
      },
    ]);

    // Function to add a new row
    const addRow = () => {
      setRows((prevRows) => [
        ...prevRows,
        {
          id: prevRows.length + 1,
          itemName: "",
          itemDetail: "",
          hsnSac: "",
          qty: "",
          rate: "",
          per: "",
          discount: "",
          gst: "",
          amount: "",
        },
      ]);
    };

    // Function to delete a row
    const deleteRow = (id) => {
      setRows((prevRows) => prevRows.filter((row) => row.id !== id));
    };

   

  return (
    <div>
      <p>Create Invoice </p>
      <div className="shadow-lg ml-[50px] mt-[30px] w-[1100px] h-[2000px]">
        <p className="text-4xl font-bold p-4 mt-10 ml-5">OXCYAPP</p>

        <div className="p-10">
          <p>Address</p>
          <textarea
            className="bg-gray-100 w-[300px] h-[100px] p-2 mt-2"
            placeholder="Company Address"
          ></textarea>
          <br />
          <input
            type="text"
            placeholder="Enter Postal Code"
            className="bg-gray-100 w-[300px] h-[40px] p-2 mt-2"
          />
        </div>
        <hr />

        <div className="mt-[-300px] ml-[750px]">
          <input
            type="text"
            placeholder="Legal Registration No"
            className="bg-gray-100 w-[300px] h-[40px] p-2 mt-2"
          />
          <input
            type="text"
            placeholder="Email Address"
            className="bg-gray-100 w-[300px] h-[40px] p-2 mt-2"
          />
          <input
            type="text"
            placeholder="Website"
            className="bg-gray-100 w-[300px] h-[40px] p-2 mt-2"
          />
          <input
            type="text"
            placeholder="Contact No"
            className="bg-gray-100 w-[300px] h-[40px] p-2 mt-2"
          />
        </div>

        <div className="mt-[125px] ml-[40px] flex">
          <div>
            Invoice No
            <br />
            <input
              type="text"
              placeholder="#VL87390238"
              className="bg-gray-100 h-[35px] w-[220px] mt-2 p-2"
            />
          </div>
          <div className="ml-10">
            Date
            <br />
            <input
              type="text"
              placeholder="Select Date-time"
              className="bg-gray-100 h-[35px] w-[220px] mt-2 p-2"
            />
          </div>

          <div className="ml-10">
            Payment Status
            <br />
            <select className="bg-gray-100 h-[55px] w-[220px] mt-2 p-2">
              <option>Select Payment Status</option>
            </select>
          </div>

          <div className="ml-10">
            Total Amount
            <br />
            <input
              type="text"
              placeholder="$0.00"
              className="bg-gray-100 h-[35px] w-[220px] mt-2 p-2"
            />
          </div>
        </div>
        <br />
        <hr />

        <div className="flex">
          <div>
            <p className="p-4 ml-10">Billing Address</p>
            <input
              type="text"
              placeholder="Full Name"
              className="bg-gray-100 h-[35px] w-[300px] mt-2 p-2 ml-[50px]"
            />
            <br />
            <textarea
              placeholder="Address"
              className="bg-gray-100 w-[300px] h-[100px] mt-2 p-2 ml-[50px]"
            ></textarea>
            <br />
            <input
              type="text"
              placeholder="(123)456-7890"
              className="bg-gray-100 h-[35px] w-[300px] mt-2 p-2 ml-[50px]"
            />
            <br />
            <input
              type="text"
              placeholder="Tax Number"
              className="bg-gray-100 h-[35px] w-[300px] mt-2 p-2 ml-[50px]"
            />
            <br />
            <input type="checkbox" className="ml-[50px] mt-[20px]" />
            Will your Billing and Shipping address same?
          </div>

          <div className="ml-[100px]">
            <p className="p-4 ml-10">Shipping Address</p>
            <input
              type="text"
              placeholder="Full Name"
              className="bg-gray-100 h-[35px] w-[300px] mt-2 p-2 ml-[50px]"
            />
            <br />
            <textarea
              placeholder="Address"
              className="bg-gray-100 w-[300px] h-[100px] mt-2 p-2 ml-[50px]"
            ></textarea>
            <br />
            <input
              type="text"
              placeholder="(123)456-7890"
              className="bg-gray-100 h-[35px] w-[300px] mt-2 p-2 ml-[50px]"
            />
            <br />
            <input
              type="text"
              placeholder="Tax Number"
              className="bg-gray-100 h-[35px] w-[300px] mt-2 p-2 ml-[50px]"
            />
          </div>
        </div>
        <br />
        <hr />

        <div>
          <table className="ml-5 mt-5">
            <tr className="bg-gray-100 h-[50px] p-2 ">
              <td>#</td>
              <td className="ml-10">ITEM</td>
              <td>HSN/SAC</td>
              <td>QTY</td>
              <td>RATE/ITEM</td>
              <td>PER</td>
              <td>DISCOUNT</td>
              <td>GST</td>
              <td>AMOUNT</td>
            </tr>
            {rows.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>
                  <input
                    type="text"
                    placeholder="Item Name"
                    className="bg-gray-100 h-[35px] w-[200px] mt-2 p-2 ml-[10px]"
                  />
                  <br />
                  <textarea
                    type="text"
                    placeholder="Item Detail"
                    className="bg-gray-100 h-[50px] w-[200px] mt-2 p-2 ml-[10px]"
                  ></textarea>
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="0.00"
                    className="bg-gray-100 h-[35px] w-[100px] p-2 ml-[10px]"
                  />
                </td>
                <td className='w-[100px]'> 
                  <button className="ml-2 bg-gray-100 p-2">+</button>
                  <input
                    type="text"
                    placeholder="0"
                    className="h-[35px] w-[30px] p-2 ml-[10px]"
                  />
                  <button className="bg-gray-100 p-2">-</button>
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="0 Nos"
                    className="bg-gray-100 h-[35px] w-[100px] p-2 ml-[10px]"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="0"
                    className="bg-gray-100 h-[35px] w-[100px] p-2 ml-[10px]"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="0"
                    className="bg-gray-100 h-[35px] w-[100px] p-2 ml-[10px]"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="0"
                    className="bg-gray-100 h-[35px] w-[100px] p-2 ml-[10px]"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="0"
                    className="bg-gray-100 h-[35px] w-[100px] p-2 ml-[10px]"
                  />
                </td>
                <td>
                  <button
                    className="bg-blue-500 w-[65px] text-white rounded p-2 ml-2"
                    //onClick={handleEdit}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 mt-3 text-white rounded p-2 ml-2"
                    onClick={() => deleteRow(row.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </table>
          <br />
          <button
            className="ml-5 bg-red-200 p-2 text-red-500 hover:bg-red-500 hover:text-white w-[100px] rounded"
            onClick={addRow}
          >
            + Add Item
          </button>
        </div>
        <br />
        <hr />

        <div className="ml-[600px]">
          Sub Total
          <input
            type="text"
            placeholder="$0.00"
            className="bg-gray-100 h-[35px] w-[140px] mt-2 p-2 ml-[100px]"
          />
          <br />
          Estimated Tax{"("}12.5%{")"}
          <input
            type="text"
            placeholder="$0.00"
            className="bg-gray-100 h-[35px] w-[140px] mt-2 p-2 ml-[10px]"
          />
          <br />
          Discount{"("}VELZON15{")"}
          <input
            type="text"
            placeholder="$0.00"
            className="bg-gray-100 h-[35px] w-[140px] mt-2 p-2 ml-[15px]"
          />
          <br />
          Shipping Charge
          <input
            type="text"
            placeholder="$0.00"
            className="bg-gray-100 h-[35px] w-[140px] mt-2 p-2 ml-[48px]"
          />
          <br />
          <hr />
          Total Amount
          <input
            type="text"
            placeholder="$0.00"
            className="bg-gray-100 h-[35px] w-[140px] mt-2 p-2 ml-[73px]"
          />
          <br />
        </div>

        <div>
          <p className="ml-[20px]">PAYMENT DETAILS</p>
          <br />
          <select className="bg-gray-100 h-[35px] w-[300px] mt-[-40px] p-2 ml-[20px]">
            <option>Payment Method</option>
          </select>
          <br />
          <input
            type="text"
            placeholder="Card Holder Name"
            className="bg-gray-100 h-[35px] w-[300px] mt-2 p-2 ml-[20px]"
          />
          <br />
          <input
            type="text"
            placeholder="xxxx xxxx xxxx xxxx"
            className="bg-gray-100 h-[35px] w-[300px] mt-2 p-2 ml-[20px]"
          />
          <br />
          <input
            type="text"
            placeholder="$0.00"
            className="bg-gray-100 h-[35px] w-[300px] mt-2 p-2 ml-[20px]"
          />
          <br />
          <p className="p-6">NOTES</p>
          <textarea className="bg-blue-200 h-[100px] w-[1050px] p-2 ml-[20px]">
            All accounts are to be paid within 7 days from receipt of invoice.
            To be paid by cheque or credit card or direct payment online. If
            account is not paid within 7 days the credits details supplied as
            confirmation of work undertaken will be charged the agreed quoted
            fee noted above.
          </textarea>

          <div className="ml-[700px] mt-10 mb-20">
            <button className=" bg-green-500 text-white rounded p-2">
              <div className="flex">
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
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                  />
                </svg>
                Save
              </div>
            </button>
            <button className="ml-3 bg-blue-500 text-white rounded  p-2">
              <div className="flex">
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
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                Download Invoice
              </div>
            </button>
            <button className="ml-3  bg-orange-500 text-white rounded  p-2">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4  "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                  />
                </svg>
                Send Invoice
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 card shadow-lg w-[1300px] h-[50px] sticky bottom-0">
        <div className="ml-[800px] mt-10 mb-20 p-2">
          <button className=" bg-green-500 text-white rounded p-2">
            <div className="flex">
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
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                />
              </svg>
              Save
            </div>
          </button>
          <button className="ml-3 bg-blue-500 text-white rounded  p-2">
            <div className="flex">
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
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              Download Invoice
            </div>
          </button>
          <button className="ml-3  bg-orange-500 text-white rounded  p-2">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4  "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
              Send Invoice
            </div>
          </button>
        </div>
      </div>

      
    </div>
  );
}

export default Add
