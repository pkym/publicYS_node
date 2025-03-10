import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import IconList from "../components/IconList";
import SafeTextList from "../components/SafeText/SafeTextList";
import EmergencyShelterList from "../components/EmergencyShelter/EmergencyShelterList";
import { DataContext } from "../context/context";
import getToday from "../components/util/date";

export default function MainPage() {
  const { setShelterCtxData, setShelterCtxDataOps, setSafeTextData } =
    useContext(DataContext); // context 파일에서 설정한 변수/함수명과 다르면 안됨
  const [safeTextMoreData, setSafeTextMoreData] = useState(null);
  const [shelterMoreBtn, setShelterMoreBtn] = useState(false);
  const [shelterMoreData, setShelterMoreData] = useState(null);
  const [locationRefs, setLocationRefs] = useState(null);
  const navigate = useNavigate();
  const todayDate = getToday();

  function safeTextMoreHandler() {
    setSafeTextData(safeTextMoreData);
    navigate("/safeText");
  }

  function shelterMoreHandler() {
    setShelterCtxData(shelterMoreData);
    setShelterCtxDataOps(locationRefs);
    navigate("/shelterInfo");
  }

  return (
    <>
      <h4>대피 요령</h4>
      <IconList />
      <h4>최근 재난 문자</h4>
      <div className="box">
        <ul className="safe-text-ul">
          <SafeTextList
            setSafeTextMoreData={setSafeTextMoreData}
            pageNo="1"
            numOfRows="3"
            date={todayDate}
          />
        </ul>
        <button
          type="button"
          className="btn-more"
          onClick={safeTextMoreHandler}
        >
          더보기
        </button>
      </div>
      <h4>긴급 대피소</h4>
      <p className="tip">
        * 3개까지만 표시됩니다. 자세한 정보는 '대피소 정보'를 확인해주세요.
      </p>
      <div className="box">
        <div className="emergency-shelter-wrap">
          <EmergencyShelterList
            numOfRows="3"
            setShelterMoreBtn={setShelterMoreBtn}
            setShelterMoreData={setShelterMoreData}
            setLocationRefs={setLocationRefs}
          />
        </div>
        {shelterMoreBtn && (
          <button
            type="button"
            className="btn-more"
            onClick={shelterMoreHandler}
          >
            더보기
          </button>
        )}
      </div>
    </>
  );
}
