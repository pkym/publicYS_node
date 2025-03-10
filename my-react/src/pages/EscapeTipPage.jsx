import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import data from "../db.json";
import earthquakeImg from "../assets/img/img_escape_earthquake.png";
import floodImg from "../assets/img/img_escape_flood.png";
import typoonImg from "../assets/img/img_escape_th.jpg";
import tsunamiImg from "../assets/img/img_escape_tsunami.jpg";
import fireImg from "../assets/img/img_escape_fire.png";
import avalancheImg from "../assets/img/img_escape_avalanche.jpg";
import explosionImg from "../assets/img/img_escape_explosion.png";
import heavysnowImg from "../assets/img/img_escape_heavySnow.png";
import breakdownImg from "../assets/img/img_escape_breakdown.jpg";

export default function EscapeTipPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState();
  const [escapeImg, setEscapeImg] = useState(earthquakeImg);
  const pathname = location.pathname;
  const pathId = pathname.substring(pathname.lastIndexOf('/')+1)*1;

  function activeTabHandler(title, id) {
    setActiveTab(title);
    navigate(`/escapeTip/${id}`);
    
  }

  useEffect(() => {
    switch(pathId) {
      case 1: setEscapeImg(earthquakeImg); break;
      case 2: setEscapeImg(floodImg); break;
      case 3: setEscapeImg(tsunamiImg); break;
      case 4: case 9: setEscapeImg(typoonImg); break;
      case 5: setEscapeImg(fireImg); break;
      case 6: setEscapeImg(avalancheImg); break;
      case 7: setEscapeImg(explosionImg); break;
      case 8: setEscapeImg(heavysnowImg); break;
      case 10: setEscapeImg(breakdownImg); break;
      default: break;
    }
  }, [pathId])

  return (
    <>
      <h2>대피 요령</h2>
      <div className="tab-btns">
        {[...data].map((tab, idx) => (
          <button 
            key={idx}
            className={pathId === tab.id ? 'active' : undefined} 
            onClick={() => activeTabHandler(tab.title, tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tab-content">
        <img src={escapeImg} alt={`${data[pathId-1].title} 대피 요령`}/>
      </div>
    </>
  )
}