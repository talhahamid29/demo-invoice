// import React, { useState } from "react";
// import SunEditor from "suneditor-react";
// import "suneditor/dist/css/suneditor.min.css";

// const SnowTheme = () => {
//   const [content, setContent] =
//     useState(`As a web designer, your role is crucial in creating visually
//             appealing and user-friendly websites. You are responsible for
//             designing the layout, selecting color schemes, and creating an
//             intuitive user interface. You work closely with clients to
//             understand their requirements and translate them into stunning
//             website designs. Your expertise lies in using HTML, CSS, and
//             JavaScript to bring these designs to life. You pay attention to
//             detail, ensuring that every element is pixel-perfect and responsive
//             across different devices. <br />
//             1.Artist <br />
//             2.Developer
//             <br />
//             3.Musician <br />
//             <ul style={{ listStyle: "inherit", marginLeft: 20 }}>
//               <li>Web-designer</li>
//               <li>UI-UX designer</li>
//               <li>Software engineer</li>
//             </ul>`);

//   const handleChange = (value) => {
//     setContent(value);
//   };

//   return (
//     <>

//       <div
//         className="bg-white rounded shadow"
//         style={{ width: 1000, height: 500, marginTop: 70 }}
//       >
//         <h1 className="font-bold text-2xl pt-10 p-5 ">Standard Editor</h1>
//         <hr />

//         <div className="flex items-center space-x-2">
//           <SunEditor
//             setOptions={{
//               buttonList: [
//                 ["undo", "redo"],
//                 ["font", "fontSize", "formatBlock"],
//                 [
//                   "bold",
//                   "underline",
//                   "italic",
//                   "strike",
//                   "subscript",
//                   "superscript",
//                 ],
//                 ["fontColor", "hiliteColor", "textStyle"],
//                 ["removeFormat"],
//                 ["outdent", "indent"],
//                 ["align", "horizontalRule", "list", "table"],
//                 ["link", "image", "video"],
//                 ["fullScreen", "showBlocks", "codeView"],
//               ],
//             }}
//             defaultValue={content}
//             onChange={(value) => setContent(value)}
//           />
//         </div>
//       </div>
//     </>
//   );
// };
// export default SnowTheme;
import React from 'react'

const SnowTheme = () => {
  return (
    <div>
      snowTheme under Development
    </div>
  )
}

export default SnowTheme
