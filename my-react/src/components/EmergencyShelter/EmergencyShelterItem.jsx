export default function EmergencyShelterItem({ params }) {
  return (
    <>
      <li>
        <div className="list-header">
          <span className="chip">{params.ACMD_FCLTY_SE_CD}</span>
          <span className="chip">{params.VT_ACMD_PSBL_NMPR}명 수용</span>
          <span className="chip">
            {params.USE_SE_CD === "Y" ? "내진적용X" : "내진적용"}
          </span>
        </div>
        <h3 className="title">{params.VT_ACMD_FCLTY_NM}</h3>
        <h6 className="desc">{params.DTL_ADRES}</h6>
        <p className="tel">문의: {params.TEL_NO}</p>
      </li>
    </>
  );
}
