import {React} from 'react';
import { useNavigate } from 'react-router-dom';
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
    {id: 1, image: earthquakeImg, title:"지진"}, {id: 2, image: floodedImg, title:"홍수"}, {id: 3, image: heilImg,  title:"해일"}, {id: 4, image: typoonImg,  title:"태풍"}, {id: 5, image: burningImg,  title:"화재"}
    , {id: 6, image: avalancheImg,  title:"산사태"}, {id: 7, image: explosionImg,  title:"폭발"}, {id: 8, image: snowyImg,  title:"대설"}, {id: 9, image: houImg,  title:"호우"}, {id: 10, image: collapseImg,  title:"붕괴"}
];

function Icons(item) {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate(`escapeTip/${item.id}`, {
      state: {
        itemId: item.id
      }
    })
  }

  return (
    <button onClick={navigateHandler}>
      <figure className="ico-wrap">
        <img src={item.image} alt="" />
      </figure>
      <span className='txt'>{item.title}</span>        
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