import React from "react";

const Dashboard = ({ isDrawerOpen }) => {
  const cardData = [
    { title: "Total Users", value: 100 },
    { title: "Active Users", value: 75 },
    { title: "Pending Requests", value: 5 },
    { title: "Revenue", value: "$10,000" },
  ];

  const tableData = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Doe", email: "jane@example.com", role: "User" },
  ];

  return (
    <div className="transition-all duration-300">
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-md shadow-md"
            style={{
              width: isDrawerOpen ? "300px" : "220px",
              marginRight: isDrawerOpen ? 0 : 90,
            }}
          >
            <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
            <p className="text-xl">{card.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">User Table</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto bg-white">
            <thead>
              <tr>
                <th className="border px-4 py-2">ID</th>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Role</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr key={row.id}>
                  <td className="border px-4 py-2">{row.id}</td>
                  <td className="border px-4 py-2">{row.name}</td>
                  <td className="border px-4 py-2">{row.email}</td>
                  <td className="border px-4 py-2">{row.role}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="bg-gray-100 card shadow-lg w-[1100px] h-[70px]  mt-10 ml-5">
            <div className="flex">
              <a href="/tables" className="ml-10 mt-5 bg-white p-2 shadow">
                Table
              </a>
              <a href="/forms" className="mt-5 bg-white p-2 shadow">
                Form
              </a>
              <a href="/signups" className="mt-5 bg-white p-2 shadow">
                Register
              </a>
              <a href="/auth" className="mt-5 bg-white p-2 shadow">
                Login
              </a>
              <a href="/kanban" className="mt-5 bg-white p-2 shadow">
                Kanban
              </a>
              <a href="/userprofile" className="mt-5 bg-white p-2 shadow">
                User Profile
              </a>
              <a href="/useraccount" className="mt-5 bg-white p-2 shadow">
                User Account
              </a>
              <a href="/drag&drop" className="mt-5 bg-white p-2 shadow">
                Drag&Drop
              </a>
              <a href="/role&permissions" className="mt-5 bg-white p-2 shadow">
                Role&Permissions
              </a>
              <a href="/editor" className="mt-5 bg-white p-2 shadow">
                Editors
              </a>
              <a href="/faq" className="mt-5 bg-white p-2 shadow">
                FAQ
              </a>
              <a href="/calendars" className="mt-5 bg-white p-2 shadow ">
                Calander
              </a>
            </div>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
