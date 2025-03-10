import React from "react";
import EmergencyShelterMoreList from "../components/EmergencyShelter/EmergencyShelterMoreList";

export default function ShelterInfoPage() {
  return (
    <>
      <h2>대피소 정보</h2>
      <div className="emergency-shelter-wrap">
        <EmergencyShelterMoreList
          numOfRows={undefined}
        />
      </div>
    </>
  );
}
