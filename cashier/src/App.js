import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {

  // INPUT IS THE KEYBOARD INOUT
  const [input, setInput] = useState("");
  const [hasError, setErrors] = useState(false);
  // DATA IS THE RESPNSE FROM THE SERVER
  const [data, setData] = useState({});
  // PRICE CONTAINS THE TOTAL PRICE
  const [price, setPrice] = useState('');
  // ITEMS HOLD AN ARRAY OF ITEMS AND EACH ITEM CONTAINS THE NAME, QUANTITY AND PRICE
  const [items, setItems] = useState([])
  console.log(items)

  var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
  var targetUrl = "http://18.189.32.71:3000/barcode/"

  async function fetchData() {
    console.log(proxyUrl + targetUrl + input);
    fetch(proxyUrl + targetUrl + input)
      .then((response) => response.json())
      .then((json) => {
        json.map(item => {
          setPrice(item.price)
          console.log(`item.price ${item.price}`)
          item.items.map(again => {
            setItems(again.cartReducer)
            console.log(` again.cartReducer ${again.cartReducer}`);
          })
        })
        setData(json);
      })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    //alert(`Submitting Name ${input}`)
    console.log(targetUrl + input)
    fetchData();
  }

  const listItems = items.map((item) =>
  <li key={item.id}>
    {item.name}
    {item.price} 
    
  </li>
  
);

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>
          Cashier Web App for Quick Scan
      </h1>
        <form onSubmit={handleSubmit}>
          <label>
            Barcode 
        <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <ul>{listItems}</ul>
        <p> Total Price: 
          ${price} </p>
      </header>



    </div>
  );
}

export default App;
