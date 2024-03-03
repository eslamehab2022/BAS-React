import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default function TextEditor({placeholder , setValue}) {
  return (
    <CKEditor
      onChange={(event, editor) => {
        const data = editor.getData();
        setValue(data)
        // console.log({ event, editor, data });
      }}
      editor={ClassicEditor}
      config={{
        placeholder: placeholder,
        autoGrow: true,
        style: { color: "#FFFFFF" },
        height: "200px",
        language: "ar",
      }}
      onBlur={(event, editor) => {
        const data = editor.getData();
        console.log({ event, editor, data });
      }}
    />
  );
}
