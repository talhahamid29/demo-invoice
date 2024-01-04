import React, { useState } from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";


const Standard = () => {
  const [content, setContent] =
    useState(`There was a road along with that open place. When the tiger saw any
    man passing by he said to him, “Brother, here is a good bangle. I
    wish to give it to you. Don’t fear. I am old and infirm now. I now
    pray to God five times a day and doing it will be useful to you.
    Don’t fear, come to me and take other religious acts. This bangle is
    useless to me. It will be useful to you. Don’t fear, come to me and
    take this.”`);

  const handleChange = (value) => {
    setContent(value);
  };

  return (
    <>
     

      <div
        className="bg-white rounded shadow"
        style={{ width: 1000, height: 350, marginTop: 70 }}
      >
        <h1 className="font-bold text-2xl pt-10 p-5">Standard Editor</h1>
        <hr />

        <div className="flex items-center space-x-2">
          <SunEditor
            setOptions={{
              buttonList: [
                ["undo", "redo"],
                ["font", "fontSize", "formatBlock"],
                [
                  "bold",
                  "underline",
                  "italic",
                  "strike",
                  "subscript",
                  "superscript",
                ],
                ["fontColor", "hiliteColor", "textStyle"],
                ["removeFormat"],
                ["outdent", "indent"],
                ["align", "horizontalRule", "list", "table"],
                ["link", "image", "video"],
                ["fullScreen", "showBlocks", "codeView"],
              ],
            }}
            defaultValue={content}
            onChange={(value) => setContent(value)}
          />
        </div>
      </div>
    </>
  );
};
  export default Standard;