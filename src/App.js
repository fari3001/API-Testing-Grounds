import logo from './logo.svg';
import './App.css';
import { getAirportImage } from './api'
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // getAirportImage().then((data) => {
    // console.log(data)
    getAirportImage().then((data) => {
      setData(data)

    })
  }, [])

  useEffect(() => {
    console.log(data.length)
    if (data.length !== 0) {
      setIsLoading(false)
    }
  }, [isLoading])
  console.log(data)

  return (
    <div className="App">
      { isLoading ? (
        <h1>Loading...</h1>
      ) : (
        data?.map((el) => (
          <div className='card-wrapper'>
              
          </div>
      ))
      )}
    </div>
  );
}

export default App;
