"use client"
import React,{ useState } from "react";
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';  
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";


// SubtaskTable component for rendering subtask tables
const SubtaskTable = ({ data, updateSubtask }) => {
  const updateSubtaskCell = (subtaskIndex, colIndex, value) => {
    const newSubtaskData = [...data];
    newSubtaskData[subtaskIndex][colIndex] = value;
    updateSubtask(newSubtaskData);
  };

  const addSubtaskRow = () => {
    const newSubtaskRow = new Array(data[0].length).fill("");
    updateSubtask([...data, newSubtaskRow]);
  };

  return (
    <table className="subtask-table">
      <tbody>
        {data.map((row, subtaskIndex) => (
          <div className="flex">
            <input type="radio" style={{ marginLeft: 100}} />
            <tr key={subtaskIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex}>
                  <div
                    contentEditable
                    onBlur={(e) =>
                      updateSubtaskCell(
                        subtaskIndex,
                        colIndex,
                        e.target.textContent
                      )
                    }
                    dangerouslySetInnerHTML={{ __html: cell }}
                    style={{ width: 400 }}
                  />
                   <hr style={{ marginLeft: 100 }} />
                </td>
              ))}
            </tr>
          </div>
        ))}


      </tbody>
    </table>
  );
};


export default function Table() {
  const [data, setData] = useState({
    headers: ["Task", "Due Date"],
    rows: [
      ["Learn Html from the document", "2/9/2023"],
      ["Learn CSS from the document", "3/09/2023"],
      ["Learn JS from the document", "4/09/2023"],
    ],
  });

  const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);
  const [subtasks, setSubtasks] = useState([]);



  const addRow = () => {
    const newRow = new Array(data.headers.length).fill("");
    setData({ ...data, rows: [...data.rows, newRow] });
  };

  const addColumn = () => {
    const newHeaders = [...data.headers, `Column ${data.headers.length + 1}`];
    const newRows = data.rows.map((row) => [...row, ""]);
    setData({ headers: newHeaders, rows: newRows });
  };

  const updateCell = (rowIndex, colIndex, value) => {
    const newRows = [...data.rows];
    newRows[rowIndex][colIndex] = value;
    setData({ ...data, rows: newRows });
  };

  const updateHeader = (colIndex, value) => {
    const newHeaders = [...data.headers];
    newHeaders[colIndex] = value;
    setData({ ...data, headers: newHeaders });
  };

  const handleCellEdit = (e, rowIndex, colIndex) => {
    const value = e.target.textContent;
    updateCell(rowIndex, colIndex, value);
    // Ensure the cursor is at the end after editing
    e.target.focus();
    const range = document.createRange();
    range.selectNodeContents(e.target);
    range.collapse(false);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  };

  const handleHeaderEdit = (e, colIndex) => {
    const value = e.target.textContent;
    updateHeader(colIndex, value);
    // Ensure the cursor is at the end after editing
    e.target.focus();
    const range = document.createRange();
    range.selectNodeContents(e.target);
    range.collapse(false);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  };

  const swapRows = (sourceIndex, destinationIndex) => {
    const newRows = [...data.rows];
    const [removed] = newRows.splice(sourceIndex, 1);
    newRows.splice(destinationIndex, 0, removed);
    setData({ ...data, rows: newRows });
  };







  const updateSubtask = (subtaskData) => {
    if (selectedTaskIndex !== null) {
      const newSubtasks = [...subtasks];
      newSubtasks[selectedTaskIndex] = { data: subtaskData };
      setSubtasks(newSubtasks);
    }
  };

  const handleTaskClick = (rowIndex) => {
    setSelectedTaskIndex(rowIndex);
  };

  const handleAddSubtaskClick = (rowIndex) => {
    handleTaskClick(rowIndex);
    setSubtasks([...subtasks, { data: [["Subtask", "Due Date"]] }]);
  };

  

  const addSubtaskTable = (rowIndex) => {
    const newSubtasks = [
      ...subtasks,
      { rowIndex, data: [["", ""]] },
    ];
    setSubtasks(newSubtasks);
  };

  const onDragEnd = (result) => {
    if (!result.destination) return; // Dragged outside the droppable area

    const newHeadersOrder = Array.from(data.headers);
    const [removed] = newHeadersOrder.splice(result.source.index, 1);
    newHeadersOrder.splice(result.destination.index, 0, removed);

    // Update the state with the new order of headers
    // (you need to have a state and a function to update it)
    updateHeadersOrder(newHeadersOrder);
  };

  return (
    <div style={{ height: "100vh", marginTop: -70 }}>
      <div
        className="contianer bg-white pl-8 pr-10 h-screen"
        style={{ height: 275 }}
      >
        <h1
          style={{
            fontSize: 30,
            fontWeight: "bold",
            paddingTop: 90,
            paddingBottom: 20,
            fontFamily: "sans-serif",
          }}
        >
          Saad
          <button
            style={{
              float: "right",
              width: 100,
              fontSize: 15,
              marginLeft: 100,
              backgroundColor: "#262626",
              color: "white",
              padding: "5px",
              borderRadius: "5px",
              textAlign: "center",
            }}
          >
            Add Task
          </button>
        </h1>
        <ul className="items-center space-x-2 mt-5">
          <li className="inline-block">
            <p
              style={{
                fontFamily: "sans-serif",
                fontSize: 14,
              }}
              className="text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 inline-block mr-2"
              >
                <path d="M14 17h2.75A2.25 2.25 0 0019 14.75v-9.5A2.25 2.25 0 0016.75 3H14v14zM12.5 3h-5v14h5V3zM3.25 3H6v14H3.25A2.25 2.25 0 011 14.75v-9.5A2.25 2.25 0 013.25 3z" />
              </svg>
              Board
            </p>
          </li>

          <li className="inline-block">
            <p
              style={{
                fontFamily: "sans-serif",
                fontSize: 14,
              }}
              className="text-gray-700 pl-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-6 h-6 inline-block mr-2"
              >
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z" />
              </svg>
              Team
            </p>
          </li>

          <li className="inline-block">
            <p
              style={{
                fontFamily: "sans-serif",
                fontSize: 14,
              }}
              className="text-gray-700 pl-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 inline-block mr-2"
              >
                <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                <path
                  fillRule="evenodd"
                  d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                  clipRule="evenodd"
                />
              </svg>
              Calendar
            </p>
          </li>

          <li className="inline-block">
            <p
              style={{
                fontFamily: "sans-serif",
                fontSize: 14,
              }}
              className="text-gray-700 pl-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 inline-block mr-2"
              >
                <path
                  fillRule="evenodd"
                  d="M2.625 6.75a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0A.75.75 0 018.25 6h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75zM2.625 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12A.75.75 0 017.5 12zm-4.875 5.25a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
              List
            </p>
          </li>

          <li className="inline-block">
            <p
              style={{
                fontFamily: "sans-serif",
                fontSize: 14,
              }}
              className="text-gray-700 pl-2"
            >
              6more..
            </p>
          </li>

          <li className="inline-block">
            <p
              style={{
                fontFamily: "sans-serif",
                fontSize: 14,
              }}
              className="text-gray-700 pl-2"
            >
              | +View
            </p>
          </li>

          <li className="inline-block" style={{ float: "right" }}>
            <p
              style={{
                fontFamily: "sans-serif",
                fontSize: 14,
              }}
              className="text-gray-700 pl-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 inline-block mr-2"
              >
                <path
                  fillRule="evenodd"
                  d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 01-.517.608 7.45 7.45 0 00-.478.198.798.798 0 01-.796-.064l-.453-.324a1.875 1.875 0 00-2.416.2l-.243.243a1.875 1.875 0 00-.2 2.416l.324.453a.798.798 0 01.064.796 7.448 7.448 0 00-.198.478.798.798 0 01-.608.517l-.55.092a1.875 1.875 0 00-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 01-.064.796l-.324.453a1.875 1.875 0 00.2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 01.796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 01.517-.608 7.52 7.52 0 00.478-.198.798.798 0 01.796.064l.453.324a1.875 1.875 0 002.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 01-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 001.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 01-.608-.517 7.507 7.507 0 00-.198-.478.798.798 0 01.064-.796l.324-.453a1.875 1.875 0 00-.2-2.416l-.243-.243a1.875 1.875 0 00-2.416-.2l-.453.324a.798.798 0 01-.796.064 7.462 7.462 0 00-.478-.198.798.798 0 01-.517-.608l-.091-.55a1.875 1.875 0 00-1.85-1.566h-.344zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                  clipRule="evenodd"
                />
              </svg>
              Customize
            </p>
          </li>

          <li className="inline-block" style={{ float: "right" }}>
            <p
              style={{
                fontFamily: "sans-serif",
                fontSize: 14,
              }}
              className="text-gray-700 pl-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 inline-block mr-2"
              >
                <path d="M18.75 12.75h1.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5zM12 6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 6zM12 18a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 18zM3.75 6.75h1.5a.75.75 0 100-1.5h-1.5a.75.75 0 000 1.5zM5.25 18.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM3 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 013 12zM9 3.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM9 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
              </svg>
              Hide
            </p>
          </li>

          <li className="inline-block" style={{ float: "right" }}>
            <p
              style={{
                fontFamily: "sans-serif",
                fontSize: 14,
              }}
              className="text-gray-700 pl-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 inline-block mr-2"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                  clipRule="evenodd"
                />
              </svg>
              Search
            </p>
          </li>
        </ul>

        <hr className="my-4" />
        <ul className="flex items-center space-x-4">
          <li className="inline-block">
            <button
              className="text-sm p-1 border rounded-full"
              style={{ fontSize: 13 }}
            >
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z" />
                  <path d="M3.265 10.602l7.668 4.129a2.25 2.25 0 002.134 0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z" />
                  <path d="M10.933 19.231l-7.668-4.13-1.37.739a.75.75 0 000 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 000-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 01-2.134-.001z" />
                </svg>

                <b>Group:Stat...</b>
              </div>
            </button>
          </li>
          <li className="inline-block">
            <button
              className="text-sm p-1 border rounded-full"
              style={{ fontSize: 13 }}
            >
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                    clipRule="evenodd"
                  />
                </svg>

                <b>Subtasks:Collapse...</b>
              </div>
            </button>
          </li>
          <li className="inline-block">
            |
            <button
              className="text-sm p-1 border rounded-full"
              style={{ fontSize: 13 }}
            >
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75H12a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
                Filters
              </div>
            </button>
          </li>
          <li className="inline-block">
            <button
              className="text-sm p-1 border rounded-full"
              style={{ fontSize: 13 }}
            >
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                    clipRule="evenodd"
                  />
                </svg>
                Me mode
              </div>
            </button>
          </li>
          <li className="inline-block">
            <button
              className="text-sm p-1 border rounded-full"
              style={{ fontSize: 13 }}
            >
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                </svg>
                Assigne
              </div>
            </button>
          </li>
          <li className="inline-block">
            <button
              className="text-sm p-1 border rounded-full"
              style={{ fontSize: 13 }}
            >
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>

                <b>Show closed</b>
              </div>
            </button>
          </li>
        </ul>
        <br />
      </div>
      <div>
        <div
          style={{
            overflow: "scroll",
            scrollbarColor: "white white",
            scrollbarWidth: "thin",
            height: 230,
          }}
        >
          <DragDropContext onDragEnd={onDragEnd}>
            <table className="w-full mb-4 border-collapse bg-white mt-10 ml--2 mr--2">
              <thead>
                <Droppable droppableId="headers" direction="horizontal">
                  {(provided) => (
                    <tr {...provided.droppableProps} ref={provided.innerRef}>
                      <td style={{ width: 30 }}></td>
                      {data.headers.map((header, colIndex) => (
                        <Draggable
                          key={colIndex}
                          draggableId={`header-${colIndex}`}
                          index={colIndex}
                        >
                          {(provided) => (
                            <td
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={{
                                width: colIndex === 0 ? 450 : 150,
                                fontSize: 13,
                                resize: "horizontal",
                                overflow: "auto",
                                fontFamily: "sans-serif",
                              }}
                            >
                              <div
                                contentEditable
                                onBlur={(e) =>
                                  updateHeader(colIndex, e.target.textContent)
                                }
                                className="outline-none"
                                dangerouslySetInnerHTML={{ __html: header }}
                              />
                              <hr />
                            </td>
                          )}
                        </Draggable>
                      ))}
                      <td>
                        <div className="ml-auto">
                          <button
                            onClick={addColumn}
                            className="bg-white text-black py-2 px-4 rounded hover:bg-gray-200 transition"
                          >
                            +
                          </button>
                        </div>
                      </td>
                    </tr>
                  )}
                </Droppable>
              </thead>

              <tbody>
                {data.rows.map((row, rowIndex) => (
                  <React.Fragment key={rowIndex}>
                    <tr onClick={() => handleTaskClick(rowIndex)}>
                      <td>
                        <div className="flex">
                          <input type="radio" style={{ marginLeft: 20 }} />
                          <button
                            className="opacity-0 hover:opacity-100 pl-2 pr-4"
                            onClick={() => handleAddSubtaskClick(rowIndex)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                      {row.map((cell, colIndex) => (
                        <td key={colIndex}>
                          <div
                            contentEditable
                            onBlur={(e) =>
                              updateCell(
                                rowIndex,
                                colIndex,
                                e.target.textContent
                              )
                            }
                            dangerouslySetInnerHTML={{ __html: cell }}
                          />
                          <hr />
                        </td>
                      ))}
                    </tr>
                    {selectedTaskIndex === rowIndex && (
                      <tr>
                        <td colSpan={data.headers.length + 1}>
                          <SubtaskTable
                            data={subtasks[selectedTaskIndex]?.data || []}
                            updateSubtask={updateSubtask}
                          />
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
                <tr>
                  <td colSpan={data.headers.length + 1}>
                    <button
                      onClick={addRow}
                      style={{ fontSize: 13 }}
                      className="bg-white py-2 px-4 mt-2 rounded hover:bg-gray-200 transition"
                    >
                      + New Task
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </DragDropContext>
        </div>
      </div>
    </div>
  );
}






