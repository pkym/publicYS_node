import earthquakeImg from '../assets/icon/earthquake.png'
import floodedImg from '../assets/icon/flooded.png'
import heilImg from '../assets/icon/heil.png'
import typoonImg from '../assets/icon/typoon.png'
import burningImg from '../assets/icon/burning.png'
import avalancheImg from '../assets/icon/avalanche.png'
import explosionImg from '../assets/icon/explosion.png'
import snowyImg from '../assets/icon/snowy.png'
import houImg from '../assets/icon/hou.png'
import collapseImg from '../assets/icon/collapse.png'


const ICONS = [
    {image: earthquakeImg, title:"지진"}, {image: floodedImg, title:"홍수"}, {image: heilImg,  title:"해일"}, {image: typoonImg,  title:"태풍"}, {image: burningImg,  title:"화재"}
    , {image: avalancheImg,  title:"산사태"}, {image: explosionImg,  title:"폭발"}, {image: snowyImg,  title:"대설"}, {image: houImg,  title:"호우"}, {image: collapseImg,  title:"붕괴"}
];

function Icons({ image, title}) {
  return (
    <button>
      <figure className="ico-wrap">
        <img src={image} alt="" />
      </figure>
      <span className='txt'>{title}</span>        
    </button>
  );
}

export default function IconList(){
  return(
    <div className='icon-box'>
      {ICONS.map((item)=>(
        <Icons key={item.title} {...item}/>
      ))}
    </div>
  )
}