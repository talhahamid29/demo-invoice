import React from "react";

const Kanban = () => {
  return (
    <>
      <div className="bg-gray-200 fixed" style={{ width: 1202, height: 70 }}>
        <h1 className="font-bold text-2xl p-3">Kanban Board</h1>
      </div>

      <div
        className="bg-white rounded shadow"
        style={{ width: 1000, height: 500, marginTop: 70 }}
      >
        {/* <h1 className="font-bold text-2xl p-5">Default Demo</h1>
        <hr /> */}
        {/* <div className="flex">
          <div
            className="bg-gray-100 rounded"
            style={{
              width: 275,
              height: 330,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              marginLeft: 40,
              marginTop: 30,
            }}
          >
            <div style={{ paddingTop: 20, paddingLeft: 20, marginBottom: 10 }}>
              <b className="p-7">Demo</b>
            </div>
            <hr />
            <div
              className="bg-white card shadow"
              style={{ width: 220, height: 120, marginLeft: 25, marginTop: 10 }}
            ></div>
            <div
              className="bg-white card shadow"
              style={{ width: 220, height: 120, marginLeft: 25, marginTop: 10 }}
            ></div>
          </div>
          <div
            className="bg-gray-100 rounded"
            style={{
              width: 275,
              height: 330,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              marginLeft: 40,
              marginTop: 30,
            }}
          >
            <div style={{ paddingTop: 20, paddingLeft: 20, marginBottom: 10 }}>
              <b className="p-7">Demo</b>
            </div>
            <hr />

            <div
              className="bg-white card shadow"
              style={{ width: 220, height: 120, marginLeft: 25, marginTop: 10 }}
            ></div>
            <div
              className="bg-white card shadow"
              style={{ width: 220, height: 120, marginLeft: 25, marginTop: 10 }}
            ></div>
          </div>
          <div
            className="bg-gray-100 rounded"
            style={{
              width: 275,
              height: 330,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              marginLeft: 40,
              marginTop: 30,
            }}
          >
            <div style={{ paddingTop: 20, paddingLeft: 20, marginBottom: 10 }}>
              <b className="p-7">Demo</b>
            </div>
            <hr />

            <div
              className="bg-white card shadow"
              style={{ width: 220, height: 120, marginLeft: 25, marginTop: 10 }}
            ></div>
            <div
              className="bg-white card shadow"
              style={{ width: 220, height: 120, marginLeft: 25, marginTop: 10 }}
            ></div>
          </div>
        </div> */}

        <div
          className="bg-white rounded shadow ml-10"
          style={{ width: 1000, height: 500, marginTop: 50 }}
        >
          <hr />
          <div className="flex">
            <div
              className="rounded"
              style={{
                width: 275,
                height: 410,
                marginLeft: 40,
                marginTop: 30,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                backgroundColor: "rgba(22, 199, 249, 0.3)",
              }}
            >
              <div
                style={{
                  backgroundColor: "#16C7F9 ",
                  width: 275,
                  height: 80,
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}
              >
                <div
                  style={{ paddingTop: 20, paddingLeft: 20, marginBottom: 10 }}
                >
                  <b className="p-4 text-white">
                    To Do{"("}Item only in
                    <p className="ml-4">Working{")"}</p>
                  </b>
                </div>
                <hr />
              </div>
              <hr />
              <div
                className="bg-white card shadow rounded"
                style={{
                  width: 220,
                  height: 170,
                  marginLeft: 25,
                  marginTop: 10,
                }}
              >
                <div className="flex">
                  <p className="text-sm pt-4 pl-4 text-gray-500">24/7/20</p>
                  <button
                    className="text-white w-20 h-6 mt-4 ml-14 text-sm rounded"
                    style={{ backgroundColor: "#16C7F9" }}
                  >
                    medium
                  </button>
                </div>
                <div>
                  <p className="pl-4 sans font-bold">Test Slidebar</p>
                </div>
                <div className="flex">
                  <img
                    src="https://source.unsplash.com/random"
                    className="ml-4 mt-1 w-5 h-5 rounded-full"
                  />
                  <p className="text-md mb-2 text-gray-500">
                    Theme Forest,
                    <br />
                    australia
                  </p>
                </div>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-5 ml-5 text-gray-400"
                  >
                    <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                    <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
                  </svg>
                  <p className="text-sm text-gray-500 ml-1">2</p>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 ml-1 text-gray-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.97 3.659a2.25 2.25 0 00-3.182 0l-10.94 10.94a3.75 3.75 0 105.304 5.303l7.693-7.693a.75.75 0 011.06 1.06l-7.693 7.693a5.25 5.25 0 11-7.424-7.424l10.939-10.94a3.75 3.75 0 115.303 5.304L9.097 18.835l-.008.008-.007.007-.002.002-.003.002A2.25 2.25 0 015.91 15.66l7.81-7.81a.75.75 0 011.061 1.06l-7.81 7.81a.75.75 0 001.054 1.068L18.97 6.84a2.25 2.25 0 000-3.182z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-sm text-gray-500 ml-1">2</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 mt-1 text-gray-400 ml-1"
                  >
                    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                    <path
                      fillRule="evenodd"
                      d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-sm text-gray-500 ml-10">+5</p>
                  <img
                    src="https://source.unsplash.com/random"
                    className=" ml-2 mt-1 w-4 h-4 rounded-full"
                  />
                  <img
                    src="https://source.unsplash.com/random"
                    className=" mt-1 w-4 h-4 rounded-full"
                  />
                  <img
                    src="https://source.unsplash.com/random"
                    className=" mt-1 w-4 h-4 rounded-full"
                  />
                </div>
              </div>

              <div
                className="bg-white card shadow rounded"
                style={{
                  width: 220,
                  height: 120,
                  marginLeft: 25,
                  marginTop: 10,
                }}
              >
                <div className="flex">
                  <p className="text-sm pt-4 pl-4 text-gray-500">24/7/20</p>
                  <button
                    className="text-white w-10 h-6 mt-4 ml-20 text-sm rounded"
                    style={{ backgroundColor: "green" }}
                  >
                    low
                  </button>
                </div>
                <div>
                  <p className="pl-4 sans font-bold">Dashboard issue</p>
                </div>
                <div className="flex">
                  <img
                    src="https://source.unsplash.com/random"
                    className="ml-4 mt-1 w-5 h-5 rounded-full"
                  />
                  <p className="text-md mb-2 text-gray-500">
                    Pixlstrap , New York
                  </p>
                </div>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-5 ml-5 text-gray-400"
                  >
                    <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                    <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
                  </svg>
                  <p className="text-sm text-gray-500 ml-1">2</p>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 ml-1 text-gray-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.97 3.659a2.25 2.25 0 00-3.182 0l-10.94 10.94a3.75 3.75 0 105.304 5.303l7.693-7.693a.75.75 0 011.06 1.06l-7.693 7.693a5.25 5.25 0 11-7.424-7.424l10.939-10.94a3.75 3.75 0 115.303 5.304L9.097 18.835l-.008.008-.007.007-.002.002-.003.002A2.25 2.25 0 015.91 15.66l7.81-7.81a.75.75 0 011.061 1.06l-7.81 7.81a.75.75 0 001.054 1.068L18.97 6.84a2.25 2.25 0 000-3.182z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-sm text-gray-500 ml-1">2</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 mt-1 text-gray-400 ml-1"
                  >
                    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                    <path
                      fillRule="evenodd"
                      d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-sm text-gray-500 ml-10">+5</p>
                  <img
                    src="https://source.unsplash.com/random"
                    className=" ml-2 mt-1 w-4 h-4 rounded-full"
                  />
                  <img
                    src="https://source.unsplash.com/random"
                    className=" mt-1 w-4 h-4 rounded-full"
                  />
                  <img
                    src="https://source.unsplash.com/random"
                    className=" mt-1 w-4 h-4 rounded-full"
                  />
                </div>
              </div>
            </div>

            <div
              className="rounded"
              style={{
                width: 275,
                height: 380,
                marginLeft: 40,
                marginTop: 30,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                backgroundColor: "rgba(255, 170, 5, 0.3) ",
              }}
            >
              <div
                style={{
                  backgroundColor: "#FFAA05",
                  width: 275,
                  height: 50,
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}
              >
                <div
                  style={{ paddingTop: 20, paddingLeft: 20, marginBottom: 10 }}
                >
                  <b className="p-4 text-white">Working</b>
                </div>
                <hr />
              </div>
              <hr />
              <div
                className="bg-white card shadow rounded"
                style={{
                  width: 220,
                  height: 170,
                  marginLeft: 25,
                  marginTop: 10,
                }}
              >
                <div className="flex">
                  <p className="text-sm pt-4 pl-4 text-gray-500">24/7/20</p>
                  <button
                    className="text-white w-15 p-2 pt-0 h-6 mt-4 ml-20 text-sm rounded"
                    style={{ backgroundColor: "red" }}
                  >
                    Argent
                  </button>
                </div>
                <div>
                  <p className="pl-4 sans font-bold">Test Slidebar</p>
                </div>
                <div className="flex">
                  <img
                    src="https://source.unsplash.com/random"
                    className="ml-4 mt-1 w-5 h-5 rounded-full"
                  />
                  <p className="text-md mb-2 text-gray-500">
                    Theme Forest,
                    <br />
                    australia
                  </p>
                </div>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-5 ml-5 text-gray-400"
                  >
                    <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                    <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
                  </svg>
                  <p className="text-sm text-gray-500 ml-1">2</p>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 ml-1 text-gray-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.97 3.659a2.25 2.25 0 00-3.182 0l-10.94 10.94a3.75 3.75 0 105.304 5.303l7.693-7.693a.75.75 0 011.06 1.06l-7.693 7.693a5.25 5.25 0 11-7.424-7.424l10.939-10.94a3.75 3.75 0 115.303 5.304L9.097 18.835l-.008.008-.007.007-.002.002-.003.002A2.25 2.25 0 015.91 15.66l7.81-7.81a.75.75 0 011.061 1.06l-7.81 7.81a.75.75 0 001.054 1.068L18.97 6.84a2.25 2.25 0 000-3.182z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-sm text-gray-500 ml-1">2</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 mt-1 text-gray-400 ml-1"
                  >
                    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                    <path
                      fillRule="evenodd"
                      d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-sm text-gray-500 ml-10">+5</p>
                  <img
                    src="https://source.unsplash.com/random"
                    className=" ml-2 mt-1 w-4 h-4 rounded-full"
                  />
                  <img
                    src="https://source.unsplash.com/random"
                    className=" mt-1 w-4 h-4 rounded-full"
                  />
                  <img
                    src="https://source.unsplash.com/random"
                    className=" mt-1 w-4 h-4 rounded-full"
                  />
                </div>
              </div>
              <div
                className="bg-white card shadow rounded"
                style={{
                  width: 220,
                  height: 120,
                  marginLeft: 25,
                  marginTop: 10,
                }}
              >
                <div className="flex">
                  <p className="text-sm pt-4 pl-4 text-gray-500">24/7/20</p>
                  <button
                    className="text-white w-10 h-6 mt-4 ml-20 text-sm rounded"
                    style={{ backgroundColor: "green" }}
                  >
                    low
                  </button>
                </div>
                <div>
                  <p className="pl-4 sans font-bold">Dashboard issue</p>
                </div>
                <div className="flex">
                  <img
                    src="https://source.unsplash.com/random"
                    className="ml-4 mt-1 w-5 h-5 rounded-full"
                  />
                  <p className="text-md mb-2 text-gray-500">
                    Pixlstrap , New York
                  </p>
                </div>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-5 ml-5 text-gray-400"
                  >
                    <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                    <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
                  </svg>
                  <p className="text-sm text-gray-500 ml-1">2</p>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 ml-1 text-gray-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.97 3.659a2.25 2.25 0 00-3.182 0l-10.94 10.94a3.75 3.75 0 105.304 5.303l7.693-7.693a.75.75 0 011.06 1.06l-7.693 7.693a5.25 5.25 0 11-7.424-7.424l10.939-10.94a3.75 3.75 0 115.303 5.304L9.097 18.835l-.008.008-.007.007-.002.002-.003.002A2.25 2.25 0 015.91 15.66l7.81-7.81a.75.75 0 011.061 1.06l-7.81 7.81a.75.75 0 001.054 1.068L18.97 6.84a2.25 2.25 0 000-3.182z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-sm text-gray-500 ml-1">2</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 mt-1 text-gray-400 ml-1"
                  >
                    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                    <path
                      fillRule="evenodd"
                      d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-sm text-gray-500 ml-10">+5</p>
                  <img
                    src="https://source.unsplash.com/random"
                    className=" ml-2 mt-1 w-4 h-4 rounded-full"
                  />
                  <img
                    src="https://source.unsplash.com/random"
                    className=" mt-1 w-4 h-4 rounded-full"
                  />
                  <img
                    src="https://source.unsplash.com/random"
                    className=" mt-1 w-4 h-4 rounded-full"
                  />
                </div>
              </div>
            </div>

            <div
              className="rounded"
              style={{
                width: 275,
                height: 405,
                marginLeft: 40,
                marginTop: 30,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                backgroundColor: "rgba(84, 186, 74, 0.3)",
              }}
            >
              <div
                style={{
                  backgroundColor: "#54BA4A",
                  width: 275,
                  height: 77,
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}
              >
                <div
                  style={{ paddingTop: 20, paddingLeft: 20, marginBottom: 10 }}
                >
                  <b className="p-4 text-white">
                    Done{"("}Item only in <br />
                    <p className="ml-4">Working{")"}</p>
                  </b>
                </div>
                <hr />
              </div>
              <hr />
              <div
                className="bg-white card shadow rounded"
                style={{
                  width: 220,
                  height: 170,
                  marginLeft: 25,
                  marginTop: 10,
                }}
              >
                <div className="flex">
                  <p className="text-sm pt-4 pl-4 text-gray-500">24/7/20</p>
                  <button
                    className="text-white w-15 p-2 pt-0 h-6 mt-4 ml-20 text-sm rounded"
                    style={{ backgroundColor: "red" }}
                  >
                    Argent
                  </button>
                </div>
                <div>
                  <p className="pl-4 sans font-bold">Test Slidebar</p>
                </div>
                <div className="flex">
                  <img
                    src="https://source.unsplash.com/random"
                    className="ml-4 mt-1 w-5 h-5 rounded-full"
                  />
                  <p className="text-md mb-2 text-gray-500">
                    Theme Forest,
                    <br />
                    australia
                  </p>
                </div>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-5 ml-5 text-gray-400"
                  >
                    <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                    <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
                  </svg>
                  <p className="text-sm text-gray-500 ml-1">2</p>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 ml-1 text-gray-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.97 3.659a2.25 2.25 0 00-3.182 0l-10.94 10.94a3.75 3.75 0 105.304 5.303l7.693-7.693a.75.75 0 011.06 1.06l-7.693 7.693a5.25 5.25 0 11-7.424-7.424l10.939-10.94a3.75 3.75 0 115.303 5.304L9.097 18.835l-.008.008-.007.007-.002.002-.003.002A2.25 2.25 0 015.91 15.66l7.81-7.81a.75.75 0 011.061 1.06l-7.81 7.81a.75.75 0 001.054 1.068L18.97 6.84a2.25 2.25 0 000-3.182z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-sm text-gray-500 ml-1">2</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 mt-1 text-gray-400 ml-1"
                  >
                    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                    <path
                      fillRule="evenodd"
                      d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-sm text-gray-500 ml-10">+5</p>
                  <img
                    src="https://source.unsplash.com/random"
                    className=" ml-2 mt-1 w-4 h-4 rounded-full"
                  />
                  <img
                    src="https://source.unsplash.com/random"
                    className=" mt-1 w-4 h-4 rounded-full"
                  />
                  <img
                    src="https://source.unsplash.com/random"
                    className=" mt-1 w-4 h-4 rounded-full"
                  />
                </div>
              </div>
              <div
                className="bg-white card shadow rounded"
                style={{
                  width: 220,
                  height: 120,
                  marginLeft: 25,
                  marginTop: 10,
                }}
              >
                <div className="flex">
                  <p className="text-sm pt-4 pl-4 text-gray-500">24/7/20</p>
                  <button
                    className="text-white w-10 h-6 mt-4 ml-20 text-sm rounded"
                    style={{ backgroundColor: "green" }}
                  >
                    low
                  </button>
                </div>
                <div>
                  <p className="pl-4 sans font-bold">Dashboard issue</p>
                </div>
                <div className="flex">
                  <img
                    src="https://source.unsplash.com/random"
                    className="ml-4 mt-1 w-5 h-5 rounded-full"
                  />
                  <p className="text-md mb-2 text-gray-500">
                    Pixlstrap , New York
                  </p>
                </div>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-5 ml-5 text-gray-400"
                  >
                    <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                    <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
                  </svg>
                  <p className="text-sm text-gray-500 ml-1">2</p>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 ml-1 text-gray-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.97 3.659a2.25 2.25 0 00-3.182 0l-10.94 10.94a3.75 3.75 0 105.304 5.303l7.693-7.693a.75.75 0 011.06 1.06l-7.693 7.693a5.25 5.25 0 11-7.424-7.424l10.939-10.94a3.75 3.75 0 115.303 5.304L9.097 18.835l-.008.008-.007.007-.002.002-.003.002A2.25 2.25 0 015.91 15.66l7.81-7.81a.75.75 0 011.061 1.06l-7.81 7.81a.75.75 0 001.054 1.068L18.97 6.84a2.25 2.25 0 000-3.182z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-sm text-gray-500 ml-1">2</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 mt-1 text-gray-400 ml-1"
                  >
                    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                    <path
                      fillRule="evenodd"
                      d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-sm text-gray-500 ml-10">+5</p>
                  <img
                    src="https://source.unsplash.com/random"
                    className=" ml-2 mt-1 w-4 h-4 rounded-full"
                  />
                  <img
                    src="https://source.unsplash.com/random"
                    className=" mt-1 w-4 h-4 rounded-full"
                  />
                  <img
                    src="https://source.unsplash.com/random"
                    className=" mt-1 w-4 h-4 rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div
        className="bg-white rounded shadow"
        style={{ width: 1000, height: 500, marginTop: 600 }}
      >
        <h1 className="font-bold text-2xl p-5">API</h1>
        <hr />
        <div className="flex">
          <div
            className="bg-gray-100 rounded"
            style={{
              width: 275,
              height: 330,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              marginLeft: 40,
              marginTop: 30,
            }}
          >
            <div style={{ paddingTop: 20, paddingLeft: 20, marginBottom: 10 }}>
              <b className="p-7">Demo</b>
            </div>
            <hr />
            <div
              className="bg-white card shadow"
              style={{ width: 220, height: 120, marginLeft: 25, marginTop: 10 }}
            ></div>
            <div
              className="bg-white card shadow"
              style={{ width: 220, height: 120, marginLeft: 25, marginTop: 10 }}
            ></div>
          </div>
          <div
            className="bg-gray-100 rounded"
            style={{
              width: 275,
              height: 330,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              marginLeft: 40,
              marginTop: 30,
            }}
          >
            <div style={{ paddingTop: 20, paddingLeft: 20, marginBottom: 10 }}>
              <b className="p-7">Demo</b>
            </div>
            <hr />

            <div
              className="bg-white card shadow"
              style={{ width: 220, height: 120, marginLeft: 25, marginTop: 10 }}
            ></div>
            <div
              className="bg-white card shadow"
              style={{ width: 220, height: 120, marginLeft: 25, marginTop: 10 }}
            ></div>
          </div>
          <div
            className="bg-gray-100 rounded"
            style={{
              width: 275,
              height: 330,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              marginLeft: 40,
              marginTop: 30,
            }}
          >
            <div style={{ paddingTop: 20, paddingLeft: 20, marginBottom: 10 }}>
              <b className="p-7">Demo</b>
            </div>
            <hr />

            <div
              className="bg-white card shadow"
              style={{ width: 220, height: 120, marginLeft: 25, marginTop: 10 }}
            ></div>
            <div
              className="bg-white card shadow"
              style={{ width: 220, height: 120, marginLeft: 25, marginTop: 10 }}
            ></div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Kanban;
