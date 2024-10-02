export default function EmergencyShelterItem({params}){
  return(
    <>
      <li>
        <div className="list-header">
          <span className="chip">{params.shel_div_type}</span>
          <span className="chip">{params.shel_av}명까지</span>
          <span className="chip">{params.seismic === "" ? "내진적용X" : "내진적용O"}</span>
        </div>
        <h3 className='title'>
          {params.shel_nm}
        </h3>
        <h6 className='desc'>
          {params.address}
        </h6>
        <p className="tel">문의: {params.manage_gov_nm} {params.tel}</p>
      </li>
    </>
  )
}