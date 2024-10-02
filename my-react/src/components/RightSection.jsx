import logoImg from "../assets/img/logo_wt.png";
import homeImg from "../assets/icon/home-active.svg"
import archiveImg from "../assets/icon/archive-stack-line.svg"
import runImg from "../assets/icon/run-fill.svg"
import alarmImg from "../assets/icon/alarm-warning-line.svg"
import peopleImg from "../assets/icon/group-line.svg"
import IconList from "./IconList";
import SafeTextList from "./SafeTextList"
import EmergencyShelterList from "./EmergencyShelterList";

export default function RightSection() {
  return (
    <section className="right">
      <h2 className="logo">
        <img src={logoImg} alt="재난 보관함" />
      </h2>
      <div className="content">
        <h4>대피 요령</h4>
        <IconList />
        <h4>최근 재난 문자</h4>
        <div className="box">
          <ul className="safe-text-ul">
            <SafeTextList pageNo='1' numOfRows='3'/>
          </ul>
          <button type="button" className="btn-more">더보기</button>
        </div>
        <h4>긴급 대피소</h4>
        <div className="box">
          <ul className="emergency-shelter-ul">
            <EmergencyShelterList/>
          </ul>
          <button type="button" className="btn-more">더보기</button>
        </div>
      </div>

      <nav className="dockbar">
        <button type="button" className="active">
          <img src={homeImg} alt=""/>
          <span>메인</span>
        </button>
        <button type="button">
          <img src={archiveImg} alt=""/>
          <span>재난 문자</span>
        </button>
        <button type="button">
          <img src={runImg} alt=""/>
          <span>대피소 정보</span>
        </button>
        <button type="button">
          <img src={alarmImg} alt=""/>
          <span>대피 요령</span>
        </button>
        <button type="button">
          <img src={peopleImg} alt=""/>
          <span>커뮤니티</span>
        </button>
      </nav>
    </section>
  );
}
