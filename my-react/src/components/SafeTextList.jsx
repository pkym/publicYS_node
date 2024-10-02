import {useState, useEffect} from 'react';
import SafeTextItem from "./SafeTextItem"

// Provided API key and parameters
const apiKey = 'ST9W4WW508Z6XV06';
// const pageNo = '1'; //페이지번호
// const numOfRows = '100'; //페이지당 개수
// const crtDt = '20240101'; //조회시작일자
// const rgnNm = '1'; //지역명

// API endpoint

export default function SafeTextList({pageNo, numOfRows, date, regNum}){
    const [data, setData] = useState([]);
    
    const url = `safeText/V2/api/DSSP-IF-00247?serviceKey=${apiKey}&pageNo=${pageNo}&numOfRows=${numOfRows}`;

    useEffect(() => {
        console.log('Fetching URL:', url);
        fetch(url)
        .then((response) => {
            console.log(response)
            if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
            return response.json(); 
        })
        .then((data) => {
            setData(data.body);
        })
        .catch((error) => {
            console.log("error:"+error)
        });
    }, [url]);
    
    return(
        <>
            {data ? 
                // Display fetched data
                (
                    Object.values(data).map((values)=>(
                        <SafeTextItem params={values} key={values.SN}/>
                    ))
                ) : (
                    <p>Loading...</p> // Show loading message while fetching
                )
            }
        </>
    )
}