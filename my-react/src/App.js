import './App.css';
import {useState, useEffect} from 'react';


function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // Provided API key and parameters
  const apiKey = 'ST9W4WW508Z6XV06';
  const pageNo = '1';
  const numOfRows = '10';
  const crtDt = '20240101';
  const rgnNm = '1';

  // API endpoint
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
        setData(data); 
      })
      .catch((error) => {
        setError(error.message); 
      });
  }, [url]);



  return (
    <div>
      <h1>Data Fetcher</h1>
      {error && <p>Error: {error}</p>}
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre> // Display fetched data
      ) : (
        <p>Loading...</p> // Show loading message while fetching
      )}
    </div>
  );
};

export default App;