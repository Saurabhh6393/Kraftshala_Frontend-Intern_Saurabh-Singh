import React ,{useEffect, useState} from 'react'
import axios from 'axios';

function Table() {

  const [data ,setdata] = useState({
    
    celcius:'',
    mintemp:'',
    maxtemp:'',
    sunrise:'',
    sunset:'',
    humidity:'',
    speed :'',
    }); 

    const getDelhiData = () =>{
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=833c32f0c838900cb8dce155af5d84b0&&units=metric`;
    axios.get(apiUrl).then(res => { 

        console.log("working")
    setdata({...data , celcius: res.data.main.temp , mintemp: res.data.main.temp_min , maxtemp:res.data.main.temp_max , humidity: res.data.main.humidity , speed:res.data.wind.speed , sunrise: res.data.sys.sunrise, sunset:res.data.sys.sunset })
        }).catch(err => console.log(err));

    }

    useEffect(()=>{
        getDelhiData()
    })

    const [bdata ,bsetdata] = useState({
    
        celcius:'',
        mintemp:'',
        maxtemp:'',
        sunrise:'',
        sunset:'',
        humidity:'',
        speed :'',
        });

        const getBanglaruData = () =>{
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Bengaluru&appid=833c32f0c838900cb8dce155af5d84b0&&units=metric`;
        axios.get(apiUrl).then(res => { 
    
            console.log("working")
        bsetdata({...bdata , celcius: res.data.main.temp , mintemp: res.data.main.temp_min , maxtemp:res.data.main.temp_max , humidity: res.data.main.humidity , speed:res.data.wind.speed , sunrise: res.data.sys.sunrise, sunset:res.data.sys.sunset   })
            }).catch(err => console.log(err));
    
        }
    
        useEffect(()=>{
            getBanglaruData()
        })

        const [mdata ,msetdata] = useState({
    
            celcius:'',
            mintemp:'',
            maxtemp:'',
            sunrise:'',
            sunset:'',
            humidity:'',
            speed :'',
            });
    
            const getMumbaiData = () =>{
                const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=833c32f0c838900cb8dce155af5d84b0&&units=metric`;
                axios.get(apiUrl).then(res => { 
        
                console.log("working")
                msetdata({...bdata , celcius: res.data.main.temp , mintemp: res.data.main.temp_min , maxtemp:res.data.main.temp_max , humidity: res.data.main.humidity , speed:res.data.wind.speed , sunrise: res.data.sys.sunrise, sunset:res.data.sys.sunset   })
                }).catch(err => console.log(err));
        
            }
        
            useEffect(()=>{
                getMumbaiData()
            })
        
            
  return (
    <div className="container mx-auto p-4 mt-8">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">City</th>
              <th className="py-3 px-6 text-left">Temperature</th>
              <th className="py-3 px-6 text-left">MinTemperature</th>
              <th className="py-3 px-6 text-left">MaxTemperature</th>
              <th className="py-3 px-6 text-left">Sunrise</th>
              <th className="py-3 px-6 text-left">Sunset</th>
              <th className="py-3 px-6 text-left">Humidity</th>
              <th className="py-3 px-6 text-left">Wind</th>
              {/* Add more headers as needed */}
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-semibold">
            
              <tr  className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">Delhi</td>
                <td className="py-3 px-6 text-left">{data.celcius}</td>
                <td className="py-3 px-6 text-left">{data.mintemp}</td>
                <td className="py-3 px-6 text-left">{data.maxtemp}</td>
                <td className="py-3 px-6 text-left">{data.sunrise}</td>
                <td className="py-3 px-6 text-left">{data.sunset}</td>
                <td className="py-3 px-6 text-left">{data.humidity}</td>
                <td className="py-3 px-6 text-left">{data.speed}</td>
                {/* Add more columns as needed */}
              </tr>

              <tr  className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">Banglore</td>
                <td className="py-3 px-6 text-left">{bdata.celcius}</td>
                <td className="py-3 px-6 text-left">{bdata.mintemp}</td>
                <td className="py-3 px-6 text-left">{bdata.maxtemp}</td>
                <td className="py-3 px-6 text-left">{bdata.sunrise}</td>
                <td className="py-3 px-6 text-left">{bdata.sunset}</td>
                <td className="py-3 px-6 text-left">{bdata.humidity}</td>
                <td className="py-3 px-6 text-left">{bdata.speed}</td>
                {/* Add more columns as needed */}
              </tr>

              <tr  className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">Mumbai</td>
                <td className="py-3 px-6 text-left">{mdata.celcius}</td>
                <td className="py-3 px-6 text-left">{mdata.mintemp}</td>
                <td className="py-3 px-6 text-left">{mdata.maxtemp}</td>
                <td className="py-3 px-6 text-left">{mdata.sunrise}</td>
                <td className="py-3 px-6 text-left">{mdata.sunset}</td>
                <td className="py-3 px-6 text-left">{mdata.humidity}</td>
                <td className="py-3 px-6 text-left">{mdata.speed}</td>
                {/* Add more columns as needed */}
              </tr>
            
          </tbody>
        </table>
      </div>
    </div>
     
  )
}

export default Table
