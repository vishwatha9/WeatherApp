import React, { useEffect, useState } from 'react';
import "./css/style.css";
const Tempapp = () => {
     
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("HYDERABAD");
    useEffect(() => {
        const fetchApi = async() => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=4cfdfcabc23aec5bd2a068ca6090a5c2`
                   const response = await fetch(url);
                //    4cfdfcabc23aec5bd2a068ca6090a5c2
            // console.log(response);
            const resJson = await response.json();
            setCity(resJson.main);
        }
        
        fetchApi();
    },[search])
  return (
    <>
    <div className='box'>
      <div className='inputData'>
        <input 
        type= "search" 
        className='input'
        onChange={(event) => {
            setSearch(event.target.value)
        }} />
      </div>
      {
        !city ? (
            <p>No Data Found</p>
        ) : (
            <div>
            <div className='info'>
        <h2 className='location'>
        <i className="fa-solid fa-street-view"></i>{search}
        </h2>
        <h1 className='temp'>
        {city.temp}°Cel
        </h1>
        <h3 className='temp'>Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel </h3>
      </div>
       <div className='wave1'></div>
       <div className='wave2'></div>
       <div className='wave3'></div>
            </div>
        )
      }
      
     
    </div>
    </>
  )
}

export default Tempapp
