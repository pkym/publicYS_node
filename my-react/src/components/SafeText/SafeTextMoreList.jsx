import { useState, useEffect } from "react";
import SafeTextItem from "./SafeTextItem";
import getToday from "../util/date";
import Pagination from "../util/Pagination";

const apiKey = "ST9W4WW508Z6XV06";

export default function SafeTextMoreList(props) {
  const [sidoData, setSidoData] = useState([]);
  const [sidoName, setSidoName] = useState("");
  const [date, setDate] = useState(props.date);
  const [filteringDate, setFilteringDate] = useState("");
  const [data, setData] = useState([]);
  const todayDate = getToday();

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);
  const itemsPerPage = 5; // 페이지당 아이템 수

  let url = `safeText/V2/api/DSSP-IF-00247?serviceKey=${apiKey}&pageNo=${props.pageNo}&crtDt=${date}&numOfRows=30`;
  url += sidoName ? `&rgnNm=${sidoName}` : "";

  function selectSidoHandler() {
    const sidoUrl =
      "shelter/idsiSFK/neo/ext/json/arcd/bd/bd_sido.json?_=1728528610168";
    fetch(sidoUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setSidoData(data);
      })
      .catch((error) => {
        console.log("error:" + error);
      });
  }

  function setSidoNameHandler(e) {
    const selectedSido = e.target.selectedOptions[0].text;
    if (selectedSido === "전체") return;
    setSidoName(selectedSido);
  }

  function setDateHandler(e) {
    setDate(e.target.value.replace(/-/g, ""));
    setFilteringDate(e.target.value.replace(/-/g, "/"));
  }

  function searchSafeTextHandler() {
    fetchData(url);
  }

  function fetchData(url) {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        if (
          data.header.resultMsg ===
          "LIMITED NUMBER OF SERVICE REQUESTS EXCEEDS ERROR"
        ) {
          setData(data.header.resultMsg);
        } else {
          if (!data.body) {
            setData([""]);
          } else if (!filteringDate) {
            setData(data.body);
          } else if (filteringDate) {
            const dateFilteredData = Object.values(data.body).filter(
              (values) => values.CRT_DT.split(" ")[0] === filteringDate
            );
            setData(dateFilteredData);
          }
        }
      })
      .catch((error) => {
        console.log("error:" + error);
      });
  }

  useEffect(() => {
    fetchData(url);
    selectSidoHandler(); // 초기 렌더링 시 전체 시,도 데이터 불러오기
  }, []);

  return (
    <>
      <div className="form-wrap">
        <div className="form-options">
          <select
            className="form-select"
            name="sido"
            id="sido"
            onChange={setSidoNameHandler}
            onClick={(e) => (e.target.options[0].text = "발송 지역")}
          >
            <option value="1" disabled>
              발송 지역
            </option>
            <option value="all">전체</option>
            {sidoData.map((data) => (
              <option key={data.SIDO_CD} value={data.SIDO_CD}>
                {data.SIDO_NM}
              </option>
            ))}
          </select>
          <input
            className="form-control"
            type="date"
            name="dateInput"
            id="dateInput"
            placeholder="날짜 입력"
            max={todayDate}
            onChange={setDateHandler}
          />
        </div>
        <button
          type="button"
          className="btn-search"
          onClick={searchSafeTextHandler}
        >
          검색
        </button>
      </div>
      <ul className="safe-text-ul">
        {/* {data === "LIMITED NUMBER OF SERVICE REQUESTS EXCEEDS ERROR" ? (
          <p>API 요청 일일 제한 횟수를 초과했습니다.</p>
        ) : !emptyData ? (
          Object.values(data).map((values) => (
            <SafeTextItem params={values} key={values.SN} />
          ))
        ) : (
          <p>데이터가 없습니다.</p>
        )} */}
        {data && data.length > 0 ? (
          Object.values(currentItems)
            .sort((a, b) => b.SN - a.SN)
            .map((values) => <SafeTextItem props={values} key={values.SN} />)
        ) : (
          <p>데이터가 없습니다.</p>
        )}
      </ul>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={data.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        data={data}
        setCurrentItems={setCurrentItems}
      />
    </>
  );
}
