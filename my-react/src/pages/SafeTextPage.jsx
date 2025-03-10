import React from "react";
import SafeTextMoreList from "../components/SafeText/SafeTextMoreList";
import getToday from "../components/util/date";

export default function SafeTextPage() {
  const todayDate = getToday();

  return (
    <>
      <h2>재난 문자</h2>
      <div className="safeText-wrap">
        <SafeTextMoreList pageNo="1" date={todayDate} />
      </div>
    </>
  );
}
