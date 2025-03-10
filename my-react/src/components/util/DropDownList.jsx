import React, { useEffect, useState } from "react";
import DropDownItem from "./DropDownItem";
import "../../styles/dropdown.css";

export default function DropDownList({ props }) {
  const [open, setOpen] = useState(false);

  function dropdownHandler() {
    !open ? setOpen(true) : setOpen(false);
  }

  return (
    <div className={`dropdown ${open ? "on" : ""}`}>
      <ul className="dropdown-ul" onClick={() => dropdownHandler()}>
        {props.map((item, idx) => (
          <DropDownItem key={idx} item={item} />
        ))}
      </ul>
      <button className="dropdown-btn" onClick={() => dropdownHandler()}>
        {open ? "▲" : "▼"}
      </button>
    </div>
  );
}
