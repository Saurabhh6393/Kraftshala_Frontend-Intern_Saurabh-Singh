import React, { useState ,useEffect } from 'react';
import axios from 'axios';
import { CiSearch } from "react-icons/ci";
import moment from 'moment';


function Home() {
   
    const[data ,setdata] = useState({
        celcius:10,
        name: "London",
        humidity : 10,
        speed :2,
        image:"clouds.png"
    });

    
    const[name , setName] = useState("");

    const theme =localStorage.getItem('theme')
    //const API_KEY = "23b73d8aa858248c9a90fbf7a80d4737";
    //const url = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}"

    const handleClick = () =>{
       
        if(name !== ""){

            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=833c32f0c838900cb8dce155af5d84b0&&units=metric`;
             axios.get(apiUrl).then(res => {
                let imagePath ="";

                if(res.data.weather[0].main == "Clouds"){
                    imagePath = "clouds.png";
                }
                else if(res.data.weather[0].main == "Clear"){
                    imagePath = "clear.png";
                }
                else if(res.data.weather[0].main == "Rain"){
                    imagePath = "rain.png";
                }
                else if(res.data.weather[0].main == "Drizzle"){
                    imagePath = "drizzle.png";
                }
                else if(res.data.weather[0].main == "Mist"){
                    imagePath = "mist.png";
                }
                else if(res.data.weather[0].main == "Snow"){
                    imagePath = "snow.png";
                }
                else{
                    imagePath ="clouds.png";
                }
                console.log(res.data)
            setdata({...data , celcius: res.data.main.temp ,name: res.data.name ,humidity: res.data.main.humidity , speed:res.data.wind.speed , image : imagePath})
            })
            .catch(err => console.log(err));
        }
    }

    const handleChange = (e) => {
        setName(e.target.value)
    }

    
    

    return (
        <>
        <div className='w-full max-w-md mx-auto bg-white-700 relative shadow-md rounded-xl p-4 lg:ml-[450px] mt-6  border border-sky-500 '>
            <div className="flex flex-col sm:flex-row items-center">
                <div className='relative w-full sm:w-[350px] mb-4 sm:mb-0'>
                    <input
                        type='text'
                        className='py-3 px-6 w-full text-lg rounded-3xl border border-gray-200 text-gray-600 shadow-md pr-12 md:ml-8'
                        placeholder='Enter Location'
                        value={name}
                        onChange={handleChange}
                        
                    />
                    <button
                        className="absolute top-1/2 transform -translate-y-1/2 right-3 text-3xl text-gray-600 p-2 rounded-full bg-white hover:bg-gray-100 focus:outline-none"
                        onClick={handleClick}
                    >
                        <CiSearch />
                    </button>
                </div>
            </div>

            <div className="flex flex-col items-center sm:items-start mt-8">
                <img src={data.image} alt="" className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] mb-4 sm:mb-0 md:ml-28 " />
                <h1 className="text-4xl   sm:ml-[200px]">{data.celcius}°c</h1>
                <h2 className="text-3xl   sm:ml-[200px]">{data.name}</h2>
                <div className="flex flex-row gap-8 items-center px-12 py-[20px] mt-4 sm:mt-0 sm:ml-[140px]">
                    <div className="flex flex-col items-center">
                    <img src="humidityblack.jpg" alt="" className="w-[45px]" />
                      {/* {theme === 'dark' ?  <img src="humidity.png" alt="" className="w-[45px]"/> :  <img src="humidityblack.jpg" alt="" className="w-[45px]"/> }*/}   
                        <div className=" text-center">
                            <p>{data.humidity}%</p>
                            <p>Humidity</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="windblack.jpg" alt="" className="w-[45px]" />
                        {/*{theme === 'dark' ?  <img src="wind.png" alt="" className="w-[45px]"/> :  <img src="windblack.jpg" alt="" className="w-[45px]"/> }*/} 
                        <div className=" text-center">
                            <p>{data.speed}km/h</p>
                            <p>Wind</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div>
              {moment().format(' h:mm:ss a')}
              <br/>
              {moment().format('MMMM Do YYYY')}
            </div>
       </div>
       <div>
        
       </div>
       
       

       </>
    );
    
};


// export default WeatherComponent;

export default Home
