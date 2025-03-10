import React, {useEffect} from 'react';
import "../../styles/paging.css";

export default function Pagination(props) {
  const pageNumbers = [];
  const pageNumbersCnt = Math.ceil(props.totalItems / props.itemsPerPage);

  for (let i = 1; i <= pageNumbersCnt; i++) {
    pageNumbers.push(i);
  }

  const indexOfLastItem = props.currentPage * props.itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - props.itemsPerPage;
  const currentItems = props.data.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => { 
    props.setCurrentItems(currentItems); // currentItems를 부모 컴포넌트로 전달 
  }, [props.currentPage, props.data, props.setCurrentItems]); // 의존성 배열 무한 루프를 피하기 위해 useEffect 안에 쓰인 currentItems는 제외하고, 대신 다른 필요한 상태들을 추가함

  return (
    <ul id="pagination">
      {pageNumbers.map(number => (
        <li 
          key={number} 
          className={`page-item ${props.currentPage === number ? 'active' : ''}`}
        >
          <a 
            onClick={() => props.setCurrentPage(number)} 
            href="#none" 
            className="page-link"
          >
            {number}
          </a>
        </li>
      ))}
    </ul>
  );
};
