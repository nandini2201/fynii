import React from "react";
import { useState } from "react";
import RichTextEditor from "./RichTextEditor";

export default function Texteditor() {
    const [value, setValue] = useState("");
  return (
    <div className='row'>
            <div style={{ marginLeft: "35%", margin: "auto", marginTop: "50px" }}>
        <from className="form">
          <h2 style={{ marginLeft: "48%",marginTop:"5%" }}>Topic</h2>
          <input style={{ width: "30%",marginLeft:"35%" }}></input>
        </from>
      </div>
      <div className="col-md-6" style={{ margin: "auto", marginTop: "50px" }}>
        <div style={{ margin:"0 auto" }}>
          <h3>Fynii Text Editor</h3>
        </div>
        <RichTextEditor initialValue="" getValue={()=>{setValue(value)}} />
        <br />
        <div>{value}</div>
      </div>
    </div>
  )
}