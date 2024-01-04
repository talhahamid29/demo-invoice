"use client"
import { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white p-4 mb-4 rounded shadow-md">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">{question}</h2>
        </div>
        <button
          className="text-blue-500 focus:outline-none"
          onClick={toggleAnswer}
        >
          {isOpen ? "^" : ">"}
        </button>
      </div>
      {isOpen && <p className="mt-2">{answer}</p>}
    </div>
  );
};

const FAQ = () => {
const faqData = {
  Payment: [
    { question: "Payment Question 1?", answer: "Payment Answer 1." },
    { question: "Payment Question 2?", answer: "Payment Answer 2." },
  ],
  Delivery: [
    { question: "Delivery Question 1?", answer: "Delivery Answer 1." },
    { question: "Delivery Question 2?", answer: "Delivery Answer 2." },
  ],
  "Cancel & Return": [
    {
      question: "Cancel & Return Question 1?",
      answer: "Cancel & Return Answer 1.",
    },
    {
      question: "Cancel & Return Question 2?",
      answer: "Cancel & Return Answer 2.",
    },
  ],
  "My Orders": [
    { question: "My Orders Question 1?", answer: "My Orders Answer 1." },
    { question: "My Orders Question 2?", answer: "My Orders Answer 2." },
  ],
  "Product & Services": [
    {
      question: "Product & Services Question 1?",
      answer: "Product & Services Answer 1.",
    },
    {
      question: "Product & Services Question 2?",
      answer: "Product & Services Answer 2.",
    },
  ],
};

const [activeMenu, setActiveMenu] = useState("Payment");

const handleMenuClick = (menu) => {
  setActiveMenu(menu);
};
  return (
    <>
      <div className="bg-gray-900 shadow" style={{ width: 900, height: 400 }}>
        <h1
          className="text-2xl text-white mb-4"
          style={{ marginLeft: 300, paddingTop: 150 }}
        >
          Hello, how can we help?
        </h1>
        <input
          type="text"
          className="border rounded  p-2 mb-4"
          placeholder="Search..."
          style={{ marginLeft: 100, width: 700 }}
        />
        <p
          className="text-white"
          style={{ fontFamily: "sans-serif", paddingLeft: 250 }}
        >
          or choose a category to quickly find the help you need
        </p>
      </div>

      <div className="flex">
        <div className="w-1/4 p-4">
          <ul>
            {Object.keys(faqData).map((menu, index) => (
              <li
                key={index}
                className={`${
                  activeMenu === menu
                    ? "bg-gray-900 text-white"
                    : "hover:bg-gray-900 hover:text-white"
                } mt-2 rounded py-2 px-4 cursor-pointer`}
                onClick={() => handleMenuClick(menu)}
              >
                {menu}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-3/4 p-4">
          <div className="space-y-4">
            {faqData[activeMenu].map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>

      <div>
        <b
          className="bg-gray-900 text-white px-1 py-1 justify-center"
          style={{ marginLeft: 330 }}
        >
          Question
        </b>
        <h2
          className="text-2xl font-bold mb-2 mt-3 text-gray-700"
          style={{ marginLeft: 210 }}
        >
          You still have a question?
        </h2>
        <p className="text-gray-500">
          If you cannot find a question in our FAQ, you can always contact us.
          We will answer to you shortly!
        </p>
        <div className="flex">
          <div className="bg-gray-300 shadow rounded" style={{width:400}}>
            <h1 className="text-2xl pt-10 pl-20 p-2">+ (810) 2548 2568</h1>
            <p className="pl-20">We are always happy to help!</p>
          </div>
          <div className="bg-gray-300 shadow rounded" style={{width:400,marginLeft:100}}>
            <p className="text-2xl pt-10 pl-20 p-2">hello@help.com</p>
            <p className="pl-20">Best way to get answer faster!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
