import React, { useEffect, useState } from "react";
import DropDownList from "../util/DropDownList";

export default function SafeTextItem({ props }) {
  const [rcpRegions, setRcpRegions] = useState([]);

  useEffect(() => {
    if (props.RCPTN_RGN_NM) {
      setRcpRegions(props.RCPTN_RGN_NM.split(","));
    }
  }, []);

  return (
    <>
      <li className="text-item">
        <div className="text-item-header">
          <span className="text-type">{props.EMRG_STEP_NM}문자</span>
          <span className="text-date">{props.CRT_DT}</span>
        </div>
        <div className="text-item-content">
          <p>{props.MSG_CN}</p>
          <div className="sm">
            수신지역:
            {rcpRegions.length > 3 ? (
              <DropDownList props={Object.values(rcpRegions)} />
            ) : (
              <span className="txt">{props.RCPTN_RGN_NM}</span>
            )}
          </div>
        </div>
      </li>
    </>
  );
}
