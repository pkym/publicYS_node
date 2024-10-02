import boxImg from "../assets/img/box.png";
import runImg from "../assets/img/run.png";
import warnImg from "../assets/img/warn.png";
import mainCopyImg from "../assets/img/main_copy.png";
import InfoList from "./InfoList";

const INFOS = [
  {
    image: boxImg,
    title: "지역별 재난 정보를 모아놨어요",
    content: (
      <b>
        우리 동네 재난 정보, 궁금하지 않으셨나요?
        <br />
        위치 선택으로 다른 지역의 정보도 볼 수 있어요.
      </b>
    ),
  },
  {
    image: runImg,
    title: "근처 대피소를 알려줘요",
    content: (
      <b>
        선택한 위치 주변 대피소들을
        <br />
        가까운 거리순으로 확인할 수 있어요.
      </b>
    ),
  },
  {
    image: warnImg,
    title: "대피 요령 정보를 한눈에",
    content: (
      <b>
        반드시 알아야 할 대피 요령 정보들을
        <br />
        위급한 순간 바로 확인하고 대피하세요.
      </b>
    ),
  },
];

export default function LeftSection() {
  return (
    <section className="left">
      <h2 className="title">
        <img
          src={mainCopyImg}
          alt="우리 동네 재난 내역, 보관함에서 확인하세요."
        />
      </h2>
      <ul className="info-ul">
        {INFOS.map((item) => (
          <InfoList key={item.title} {...item} />
        ))}
      </ul>
    </section>
  );
}
