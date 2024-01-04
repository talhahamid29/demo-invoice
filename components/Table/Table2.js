"use client"
import React,{ useState } from "react";
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';  


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

        <tr>
          <td colSpan={data[0].length}>
            <button onClick={addSubtaskRow} style={{ marginLeft: 100 }}>
              {" "}
              +{" "}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};


export default function Table2() {
  const [data, setData] = useState({
    headers: ["Item", "HSN/SAC" , "Qty" , "Rate/Item" , "Per" , "Amount"],
    rows: [
      ["Colgate 200gm", "33061020" , "16 Nos" , "76.27" , "Nos" , "1,220.34"],
      ["Surf Excel Easy Wash Detergent 1kg", "340119", "5 Nos", "108.61", "Nos", "543.05"],
      ["", "", "", "", "122.03(-11%)",""],
      ["", "", "", "", "",""],
      ["", "", "", "", "",""],
      ["Taxable Amount", "", "", "", "", "1,763.35"],
      ["GST 9.0%" ,"" ,"" ,"","", "158.71"],
      ["SGST 9.0%", "", "", "", "", "158.71"],
      ["Total","","21.00","","","2,081.00"]

      

    ],
  });

  const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);
  const [subtasks, setSubtasks] = useState([]);

  const updateCell = (rowIndex, colIndex, value) => {
    const newRows = [...data.rows];
    newRows[rowIndex][colIndex] = value;
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

  const addRow = () => {
    const newRow = new Array(data.headers.length).fill("");
    setData({ ...data, rows: [...data.rows, newRow] });
  };

  const addColumn = () => {
    const newHeaders = [...data.headers, `Column ${data.headers.length + 1}`];
    const newRows = data.rows.map((row) => [...row, ""]);
    setData({ headers: newHeaders, rows: newRows });
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


  const addSubtaskTable = (rowIndex) => {
    const newSubtasks = [
      ...subtasks,
      { rowIndex, data: [["", ""]] },
    ];
    setSubtasks(newSubtasks);
  };

  return (
    <div style={{  marginTop: -70 }}>
     
      <div>
        <div
          style={{
            overflow: "scroll",
            scrollbarColor: "white white",
            scrollbarWidth: "thin",
            height: 230,
          }}
        >
          <table className="w-full mb-4 border-collapse bg-white mt-10 ml--2 mr--2">
            <thead>
              <tr>
                <td style={{ width: 30 }}></td>
                {data.headers.map((header, colIndex) => (
                  <td
                    style={{
                      width: colIndex === 0 ? 450 : 150,
                      fontSize: 13,
                      resize: "horizontal",
                      overflow: "auto",
                      fontFamily: "sans-serif",
                    }}
                    key={colIndex}
                    id={`header-${colIndex}`}
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
            </thead>

            <tbody>
              {data.rows.map((row, rowIndex) => (
                <React.Fragment key={rowIndex}>
                  <tr onClick={() => handleTaskClick(rowIndex)}>
                    <td>
                      <div className="flex">
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
                            updateCell(rowIndex, colIndex, e.target.textContent)
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
        </div>
      </div>
    </div>
  );
}








