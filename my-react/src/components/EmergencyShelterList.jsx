import {useState, useEffect} from 'react';
import EmergencyShelterItem from './EmergencyShelterItem';

// Provided API key and parameters
const apiKey = 'Z67lDD5584KUF%2BGcDc2iij53yVrZ48k9IF62W7qZi0cg0N8tQz4EECztBTN3YhCbQN8j4VdztRhe3LEIKpyveQ%3D%3D';
const pageNo = '1'; //페이지번호
const numOfRows = '5'; //페이지당 개수

// API endpoint

export default function EmergencyShelterList({}){
  const [data, setData] = useState([]);
  
  const url = `https://apis.data.go.kr/1741000/TsunamiShelter4/getTsunamiShelter4List?serviceKey=${apiKey}&pageNo=${pageNo}&numOfRows=${numOfRows}&type=json`

  useEffect(() => {
    fetch(url)
    .then((response) => {
        console.log(response)
        if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        return response.json(); 
    })
    .then((data) => {
        setData(data.TsunamiShelter[1].row);
    })
    .catch((error) => {
        console.log("error:"+error)
    });
  }, [url]);
  
  return (
    <>
      {data ?
        (
            Object.values(data).map((values)=>(
                <EmergencyShelterItem params={values} key={values.id}/>
            ))
        ) : (
            <p>Loading...</p>
        )
      }
    </>
  )
}