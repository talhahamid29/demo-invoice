
import React from 'react'
import Unilever from "../../public/Unilever.png"
import Image from 'next/image'

const InvoiceTable = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
      <div className="card shadow-lg border lg:h-[1161px] h-[1581px] mx-auto md:h-[1190px]  border-black lg:w-[85%] w-full  mt-[25px] mb-[500px] text-[1rem]">
        <p className="text-center border-b border-black text-blue-500 font-bold">
          TAX INVOICE
        </p>
        <div className="lg:flex lg:flex-row flex flex-col">
          <div>
            <div className="border-b  border-black border-r lg:w-[600px] w-[416px] p-3 flex">
              <Image src={Unilever} height={200} width={120} />
              <div>
                <h2>Hindustan Uniliever</h2>
                <p>GSTIN 27AAACT2727Q1ZW</p>
                <p>64, Whitefield Main Rd, Palm Meadows,White Field,</p>
                <p>Bengaluru, 29-KARNATAKA 560066</p>
                <p>Mobile 9999999999</p>
              </div>
            </div>
            <div className="border-b border-black border-r lg:w-[600px] w-[416px] p-3">
              <p>Customer Details</p>
              <p>Gaurav Gupta</p>
              <p>Billing address</p>
              <p>Marathahahali-Sarajpur Outer Ring Road,</p>
              <p>Kadabeesanahali</p>
              <p>Bengaluru 29-KARNATAKA 560067</p>
              <p>Ph:9999999999</p>
            </div>
          </div>
          <div>
            <div className="flex h-[60px]">
              <div className="border-r border-b p-3 border-black lg:w-[170px] w-[210px] md:w-[10px]">
                <p>Invoice #</p>
                <p>INV-11</p>
              </div>
              <div className="border-b border-black lg:w-[176px] p-3 w-[280px]">
                <p>Invoice Date:</p>
                <p>28 Mar 2022</p>
              </div>
            </div>
            <div className="flex h-[60px]">
              <div className="border-r border-b p-3 border-black lg:w-[170px] w-[300px]">
                <p>Invoice #</p>
                <p>INV-11</p>
              </div>
              <div className="border-b border-black lg:w-[176px] p-3 w-[300px] ">
                <p>Invoice Date:</p>
                <p>28 Mar 2022</p>
              </div>
            </div>
            <div className="border-b border-black h-[218px] p-3">
              <p>Shipping address:</p>
              <p>Marathahali Solapur Outer Ring Road.</p>
              <p>Kadabeesanahali</p>
              <p>Bengaluru 29-KARNATAKA 560067</p>
            </div>
          </div>
        </div>

        <div>
          <table>
            <tr className="border-b border-black">
              <th className="text-sm w-[65px] border-r border-black">#</th>
              <th className="text-sm w-[1600px] text-left border-r border-black">
                Item
              </th>
              <th className="text-sm  border-r border-black">HSN/SAC</th>
              <th className="text-sm  w-[100px] border-r border-black">Qty</th>
              <th className="text-sm  w-[120px] border-r border-black">
                Rate/Item
              </th>
              <th className="text-sm w-[150px] border-r border-black">Per</th>
              <th className="text-sm w-[500px] text-right border-r border-black">
                Amount
              </th>
            </tr>
            <tr>
              <td>1</td>
              <td>Colgate 200gm</td>
              <td>33061020</td>
              <td className="text-right">16 Nos</td>
              <td className="text-right">76.27</td>
              <td className="text-right font-bold">Nos</td>
              <td className="text-right">1,220.34</td>
            </tr>
            <tr className="h-[100px]">
              <td className="">1</td>
              <td>Surf Excel Easy Wash Detergent Powder 1kg</td>
              <td>340119</td>
              <td className="text-right">5 Nos</td>
              <td className="text-right">
                108.61 <br />
                122.03(-11%)
              </td>
              <td className="text-right font-bold">Nos</td>
              <td className="text-right">543.05</td>
            </tr>

            <tr className="h-[200px] border-b border-black">
              <td></td>
              <td className="text-right font-bold">
                Taxable Amount <br /> CGST 9.0% <br /> SGST 9.0%{" "}
              </td>
              <td></td>
              <td className="text-right"></td>
              <td className="text-right"></td>
              <td className="text-right"></td>
              <td className="text-right font-bold">
                1,763.35 <br /> 158.71 <br /> 158.71
              </td>
            </tr>

            <tr className="border-b border-black">
              <td></td>
              <td className="text-right font-bold">Total</td>
              <td></td>
              <td className="text-right font-bold">21.00</td>
              <td></td>
              <td></td>
              <td className="text-right font-bold"> 2,081.00</td>
            </tr>
          </table>
        </div>
        <div className="border-b border-black">
          <p>
            Amount Chargable (in words) INR Two Thousand and eighty one rupees
            only
          </p>
        </div>
        <p className="text-right border-b border-black">
          Amount Payable 2,081.00
        </p>
        <div className="border-b border-black h-[190px] flex">
          <div className="flex justify-evenly  border-r border-black w-[65%] h-[190px]">
            <div className="p-3">
              <div>
                <p>Bank Details:</p>
                <p>
                  Bank: <span className="font-bold ml-3">Yes Bank</span>
                </p>
                <p>
                  Account#: <span className="font-bold ml-3">999999999999</span>
                </p>
                <p>
                  IFSC:<span className="font-bold ml-3">YES9999</span>
                </p>
                <p>
                  Branch: <span className="font-bold ml-3">Kodhihali</span>
                </p>
              </div>
            </div>
            <div>
              <p>Pay using UPI:</p>
              {/* <Image src={QR} width={120} /> */}
            </div>
          </div>
          <div className="p-3 flex flex-col items-center">
            <p className="text-center text-[0.9rem]"> For Hindustan Uniliver</p>
            {/* <Image src={sign} width={120} /> */}
          </div>
        </div>
        <div className="flex p-3">
          <div className="border-r border-black w-[50%]">
            <p>Notes:</p>
            <p>Thank you for the Business</p>
          </div>
          <div className="p-3">
            <p className="font-bold">Terms and Conditions:</p>
            <p>1.Goods once sold cannot be taken</p>
            <p>
              2.We are not the manufactureres , company <br /> will stand for
              warranty as per their terms
            </p>
            <p>3.Interest @24% p.a. will be Charged for undeclared bills</p>
            <p>4.Subject to local Juridication</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvoiceTable