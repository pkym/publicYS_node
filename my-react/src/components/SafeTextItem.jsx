export default function SafeTextItem({params}){
  return(
    <>
      <li className='text-item'>
          <div className="text-item-header">
              <span className="text-type">{params.EMRG_STEP_NM}문자</span>
              <span className="text-date">{params.CRT_DT}</span>
          </div>
          <p className="text-item-content">
            {params.MSG_CN}
          </p>
      </li>
    </>
  )
}