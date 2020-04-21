import React , { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const [hasError, setErrors] = useState(false);
  const [data, setData] = useState({});
  // function getBarcode(barcodeID) {
  //   console.log("get barcode successfully");
  //   fetch("http://18.189.32.71:3000/barcode/", {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("Success:", data);
        
  //     });
  // }
  var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
  var targetUrl = "http://18.189.32.71:3000/barcode/"
  useEffect(() => {
    
    async function fetchData() {
      const res = await fetch(proxyUrl + targetUrl);
      res
        .json()
        .then(res => setData(res))
        .catch(err => setErrors(err));
    }

    fetchData();
  });

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>
          Cashier Web App for Quick Scan
        </h1>

        {/* <input onChange={event => getBarcode(event.target.value)} /> */}
        <span>{JSON.stringify(data)}</span>
      </header>



</div>
  );
}

export default App;
