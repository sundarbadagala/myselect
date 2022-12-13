import React, { useState } from "react";
import Select from "./select";
import { simpledata } from "./data";

function App() {
  const [option, setOption] = useState("");
  const [multiOption, setMultiOption] = useState([]);
  return (
    <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
      <div style={{ width: "300px" }}>
        <Select
          options={simpledata}
          value={option}
          label="first_name"
          keys="last_name"
          onChange={(val) => setOption(val)}
          headProps={{
            // startIcon: <img src={Icon} alt=''/>,
            // isChips: true,
            // isDisplayAll:true,
            // isClearable:true,
            chipType: "pill",
          }}
        />
      </div>
      <div style={{ width: "300px" }}>
        <Select
          options={simpledata}
          value={option}
          label="first_name"
          keys="last_name"
          onChange={(val) => setOption(val)}
          headProps={{
            // startIcon: <img src={Icon} alt=''/>,
            isChips: true,
            isDisplayAll: true,
            isClearable: true,
            chipType: "sqaure",
          }}
        />
      </div>
      <div style={{ width: "300px" }}>
        <Select
          isMulti
          options={simpledata}
          value={multiOption}
          label="first_name"
          keys="last_name"
          onChange={(val) => setMultiOption(val)}
          headProps={{
            isChips: true,
            startIcon: <i className="fa-solid fa-users"></i>,
            isDisplayAll: true,
            isClearable: true,
            chipType: "square",
          }}
        />
      </div>
      <div style={{ width: "300px" }}>
        <Select
          isMulti
          options={simpledata}
          value={multiOption}
          label="first_name"
          keys="last_name"
          onChange={(val) => setMultiOption(val)}
          headProps={{
            startIcon: (<i className="fa-solid fa-user" style={{ marginRight: "5px" }}></i>),
            isDisplayAll: true,
            isClearable: true,
            chipType: "square",
          }}
        />
      </div>
      <div style={{ width: "500px" }}>
        <Select
          isMulti
          options={simpledata}
          value={multiOption}
          label="first_name"
          keys="last_name"
          onChange={(val) => setMultiOption(val)}
          headProps={{
            isChips: true,
            isDisplayAll: true,
            isClearable: true,
            // chipType:'square',
            chipCloseIcon:<i className="fa-solid fa-user" style={{color:"white"}}></i>
          }}
          styles={{
            chipStyles: {
              container: {
                // padding: "4px",
              },
              title: {
                // padding: "3px",
              },
              close: {
                // padding: "12px",
                backgroundColor:"blue"
              },
            },
          }}
        />
      </div>
    </div>
  );
}

const data = [
  { label: "Microbes in Human Welfare", value: "jlaf9af" },
  { label: "Biotechnology and its Applications", value: "jla3s3" },
  { label: "Strategies for enhancement in food production", value: "8afjk3" },
  { label: "Biotechnology: Principles and Processes", value: "8afjk1" },
  { label: "Reproduction in Organisms", value: "8afjk2" },
  { label: "Molecular Basis of Inheritence", value: "8afjk4" },
  { label: "Principles of Inheritence and Variation", value: "8afjk5" },
  { label: "Environmental Issues", value: "8afjk7" },
  { label: "Ecosystem", value: "8afjk8" },
  { label: "Reproductive Health", value: "8afjk9" },
  { label: "Molecular Basis of Inheritence", value: "8afjk10" },
  { label: "Environmental Issues", value: "8afjk31" },
];

const data1 = [
  { label: "vijay", value: "jlaf9af" },
  { label: "vinay", value: "jla3s3" },
  { label: "kumar", value: "8afjk3" },
  { label: "ajay", value: "8afjk1" },
  { label: "vivek", value: "8afjk2" },
  { label: "raghav", value: "8afjk4" },
  { label: "raju", value: "8afjk5" },
  { label: "ram", value: "8afjk7" },
  { label: "vishal", value: "8afjk8" },
  { label: "vijay", value: "8afjk9" },
  { label: "kalyan", value: "8afjk10" },
  { label: "kiran", value: "8afjk31" },
];

export default App;
