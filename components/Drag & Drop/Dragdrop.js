import React from "react";

import { useDrag, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

// Define the draggable component
const DraggableCard = ({ children }) => {
  const [, drag] = useDrag({
    type: "CARD",
  });

  return <div ref={drag}>{children}</div>;
};

const Editor = () => {
  return (
    <>
      <div>Dashboard/Drag & Drop</div>

      <DndProvider backend={HTML5Backend}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">

        <div
          className="bg-white rounded"
          style={{ width: 1000, height: 500, marginTop: 70 }}
        >
          <h1 className="font-bold text-2xl p-5">Sortable</h1>
          <hr />

          <div className="flex">
            <DraggableCard>
              <div
                className="bg-white shadow"
                style={{
                  width: 400,
                  marginLeft: 50,
                  marginTop: 50,
                  height: 100,
                  border: "1px solid",
                  padding: 10,
                }}
              >
                <div
                  className="flex"
                  style={{
                    marginLeft: 10,
                    paddingTop: 10,
                    alignItems: "center",
                  }}
                >
                  <div>
                    <img
                      src="https://source.unsplash.com/random"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  </div>
                  <div style={{ marginLeft: 20 }}>
                    <p>Need to be approved</p>
                    <p className="text-gray-500" style={{ fontSize: 13 }}>
                      Kelly Young
                    </p>
                  </div>
                  <button
                    className="shadow rounded bg-gray-900"
                    style={{
                      marginLeft: 20, // Adjusted the margin here
                      width: 100,
                      height: 40,
                      color: "white",
                    }}
                  >
                    View
                  </button>
                </div>
              </div>
            </DraggableCard>

            <div className="flex">
              <DraggableCard>
                <div
                  className="bg-white shadow"
                  style={{
                    width: 400,
                    marginLeft: 50,
                    marginTop: 50,
                    height: 100,
                    border: "1px solid",
                    padding: 10,
                  }}
                >
                  <div
                    className="flex"
                    style={{
                      marginLeft: 10,
                      paddingTop: 10,
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <img
                        src="https://source.unsplash.com/random"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    </div>
                    <div style={{ marginLeft: 20 }}>
                      <p>Need to be approved</p>
                      <p className="text-gray-500" style={{ fontSize: 13 }}>
                        Kelly Young
                      </p>
                    </div>
                    <button
                      className="shadow rounded bg-gray-900"
                      style={{
                        marginLeft: 20, // Adjusted the margin here
                        width: 100,
                        height: 40,
                        color: "white",
                      }}
                    >
                      View
                    </button>
                  </div>
                </div>
              </DraggableCard>
            </div>
          </div>

          <div className="flex">
            <div className="flex">
              <DraggableCard>
                <div
                  className="bg-white shadow"
                  style={{
                    width: 400,
                    marginLeft: 50,
                    marginTop: 50,
                    height: 100,
                    border: "1px solid",
                    padding: 10,
                  }}
                >
                  <div
                    className="flex"
                    style={{
                      marginLeft: 10,
                      paddingTop: 10,
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <img
                        src="https://source.unsplash.com/random"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    </div>
                    <div style={{ marginLeft: 20 }}>
                      <p>Meeting with client</p>
                      <p className="text-gray-500" style={{ fontSize: 13 }}>
                        Andy King
                      </p>
                    </div>
                    <button
                      className="shadow rounded bg-gray-900"
                      style={{
                        marginLeft: 30, // Adjusted the margin here
                        width: 100,
                        height: 40,
                        color: "white",
                      }}
                    >
                      View
                    </button>
                  </div>
                </div>
              </DraggableCard>
            </div>
            <div className="flex">
              <DraggableCard>
                <div
                  className="bg-white shadow"
                  style={{
                    width: 400,
                    marginLeft: 50,
                    marginTop: 50,
                    height: 100,
                    border: "1px solid",
                    padding: 10,
                  }}
                >
                  <div
                    className="flex"
                    style={{
                      marginLeft: 10,
                      paddingTop: 10,
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <img
                        src="https://source.unsplash.com/random"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    </div>
                    <div style={{ marginLeft: 20 }}>
                      <p>Meeting with client</p>
                      <p className="text-gray-500" style={{ fontSize: 13 }}>
                        Andy King
                      </p>
                    </div>
                    <button
                      className="shadow rounded bg-gray-900"
                      style={{
                        marginLeft: 30, // Adjusted the margin here
                        width: 100,
                        height: 40,
                        color: "white",
                      }}
                    >
                      View
                    </button>
                  </div>
                </div>
              </DraggableCard>
            </div>
          </div>
        </div>

        <div
          className="bg-white rounded shadow"
          style={{ width: 1000, height: 500, marginTop: 50 }}
        >
          <h1 className="font-bold text-2xl p-5">Icon Change</h1>
          <hr />
          <div className="flex">
            <div
              className="bg-white shadow"
              style={{
                width: 400,
                marginLeft: 50,
                marginTop: 50,
                height: 100,
                border: "1px solid",
              }}
            ></div>
            <div
              className="bg-white shadow"
              style={{
                width: 400,
                marginLeft: 50,
                marginTop: 50,
                height: 100,
                border: "1px solid",
              }}
            ></div>
          </div>

          <div className="flex">
            <div
              className="bg-white shadow"
              style={{
                width: 400,
                marginLeft: 50,
                marginTop: 50,
                height: 100,
                border: "1px solid",
              }}
            ></div>
            <div
              className="bg-white shadow"
              style={{
                width: 400,
                marginLeft: 50,
                marginTop: 50,
                height: 100,
                border: "1px solid",
              }}
            ></div>
          </div>
        </div>

        <div
          className="bg-white rounded"
          style={{ width: 1000, height: 500, marginTop: 50 }}
        >
          <h1 className="font-bold text-2xl p-5">Handler</h1>
          <hr />
          <div className="flex">
            <div
              className="bg-white shadow"
              style={{
                width: 400,
                marginLeft: 50,
                marginTop: 50,
                height: 100,
                border: "1px solid",
              }}
            ></div>
            <div
              className="bg-white shadow"
              style={{
                width: 400,
                marginLeft: 50,
                marginTop: 50,
                height: 100,
                border: "1px solid",
              }}
            ></div>
          </div>

          <div className="flex">
            <div
              className="bg-white shadow"
              style={{
                width: 400,
                marginLeft: 50,
                marginTop: 50,
                height: 100,
                border: "1px solid",
              }}
            ></div>
            <div
              className="bg-white shadow"
              style={{
                width: 400,
                marginLeft: 50,
                marginTop: 50,
                height: 100,
                border: "1px solid",
              }}
            ></div>
          </div>
        </div>

        <div
          className="bg-white rounded shadow"
          style={{ width: 1000, height: 500, marginTop: 50 }}
        >
          <h1 className="font-bold text-2xl p-5">Multiple Drag</h1>
          <hr />
          <div className="flex">
            <div
              className="bg-white shadow"
              style={{
                width: 400,
                marginLeft: 50,
                marginTop: 50,
                height: 100,
                border: "1px solid",
              }}
            ></div>
            <div
              className="bg-white shadow"
              style={{
                width: 400,
                marginLeft: 50,
                marginTop: 50,
                height: 100,
                border: "1px solid",
              }}
            ></div>
          </div>

          <div className="flex">
            <div
              className="bg-white shadow"
              style={{
                width: 400,
                marginLeft: 50,
                marginTop: 50,
                height: 100,
                border: "1px solid",
              }}
            ></div>
            <div
              className="bg-white shadow"
              style={{
                width: 400,
                marginLeft: 50,
                marginTop: 50,
                height: 100,
                border: "1px solid",
              }}
            ></div>
          </div>
        </div>

        <div
          className="bg-white rounded shadow"
          style={{ width: 1000, height: 500, marginTop: 50 }}
        >
          <h1 className="font-bold text-2xl p-5">News Feed</h1>
          <hr />
          <div className="flex">
            <div
              className="bg-white shadow"
              style={{
                width: 400,
                marginLeft: 50,
                marginTop: 50,
                height: 100,
                border: "1px solid",
              }}
            ></div>
            <div
              className="bg-white shadow"
              style={{
                width: 400,
                marginLeft: 50,
                marginTop: 50,
                height: 100,
                border: "1px solid",
              }}
            ></div>
          </div>

          <div className="flex">
            <div
              className="bg-white shadow"
              style={{
                width: 400,
                marginLeft: 50,
                marginTop: 50,
                height: 100,
                border: "1px solid",
              }}
            ></div>
            <div
              className="bg-white shadow"
              style={{
                width: 400,
                marginLeft: 50,
                marginTop: 50,
                height: 100,
                border: "1px solid",
              }}
            ></div>
          </div>
        </div>

        <div
          className="bg-white rounded shadow"
          style={{ width: 1000, height: 500, marginTop: 50 }}
        >
          <h1 className="font-bold text-2xl p-5">Delete Users</h1>
          <hr />
          <div className="flex">
            <div
              className="bg-white shadow"
              style={{
                width: 400,
                marginLeft: 50,
                marginTop: 50,
                height: 100,
                border: "1px solid",
              }}
            ></div>
            <div
              className="bg-white shadow"
              style={{
                width: 400,
                marginLeft: 50,
                marginTop: 50,
                height: 100,
                border: "1px solid",
              }}
            ></div>
          </div>

          <div className="flex">
            <div
              className="bg-white shadow"
              style={{
                width: 400,
                marginLeft: 50,
                marginTop: 50,
                height: 100,
                border: "1px solid",
              }}
            ></div>
            <div
              className="bg-white shadow"
              style={{
                width: 400,
                marginLeft: 50,
                marginTop: 50,
                height: 100,
                border: "1px solid",
              }}
            ></div>
          </div>
        </div>

        <div
          className="bg-white rounded shadow"
          style={{ width: 1000, height: 500, marginTop: 50 }}
        >
          <h1 className="font-bold text-2xl p-5">Grid drag</h1>
          <hr />
          <div className="flex">
            <div
              className="bg-white shadow"
              style={{
                width: 400,
                marginLeft: 50,
                marginTop: 50,
                height: 100,
                border: "1px solid",
              }}
            ></div>
            <div
              className="bg-white shadow"
              style={{
                width: 400,
                marginLeft: 50,
                marginTop: 50,
                height: 100,
                border: "1px solid",
              }}
            ></div>
          </div>

          <div className="flex">
            <div
              className="bg-white shadow"
              style={{
                width: 400,
                marginLeft: 50,
                marginTop: 50,
                height: 100,
                border: "1px solid",
              }}
            ></div>
            <div
              className="bg-white shadow"
              style={{
                width: 400,
                marginLeft: 50,
                marginTop: 50,
                height: 100,
                border: "1px solid",
              }}
            ></div>
          </div>
        </div>

        <div
          className="bg-white rounded shadow"
          style={{ width: 1000, height: 500, marginTop: 50 }}
        >
          <h1 className="font-bold text-2xl p-5">Swap</h1>
          <hr />
          <div className="flex">
            <div
              className="bg-white shadow"
              style={{
                width: 400,
                marginLeft: 50,
                marginTop: 50,
                height: 100,
                border: "1px solid",
              }}
            ></div>
            <div
              className="bg-white shadow"
              style={{
                width: 400,
                marginLeft: 50,
                marginTop: 50,
                height: 100,
                border: "1px solid",
              }}
            ></div>
          </div>

          <div className="flex">
            <div
              className="bg-white shadow"
              style={{
                width: 400,
                marginLeft: 50,
                marginTop: 50,
                height: 100,
                border: "1px solid",
              }}
            ></div>
            <div
              className="bg-white shadow"
              style={{
                width: 400,
                marginLeft: 50,
                marginTop: 50,
                height: 100,
                border: "1px solid",
              }}
            ></div>
          </div>
        </div>
        </div>
      </DndProvider>
    </>
  );
};

export default Editor;
