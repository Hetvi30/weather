import React from 'react'
import Recent from './Recent';
import Loader from './Loader';

export default function Result(props) {
    const{weatherData: data}=props;
    function ktoc(k){
        return (k-273.15).toFixed(2)+" C"
    }

    function date(stamp){
        const date=new Date(stamp*1000)
        return date.toLocaleTimeString();
    }
    let showOnPage;
    if (data==null) {
        if(props.isSearch===true){
            showOnPage=<Loader></Loader>
        }
        else{
            showOnPage=(
            <div className='container'>
                <h1 className='text-center m-5'>Please search a city</h1>
            </div>
            )
        }
        
    }
    else{
        showOnPage=(
            <div className='row'>
        <div className='col'>
            <div className='card border-primary'>
                <div className='card-body'>
                    <div className='card-body'>
                        <h4 className='card-title'> <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} style={{color:'black'}}></img>{data.name} ({ktoc(data.main.temp)}) {data.weather[0].description}</h4>
                        <table className='table'>
                            <tbody>
                                <tr>
                                    <th>Feels Like</th>
                                    <td>{ktoc(data.main.feels_like)}</td>
                                </tr>
                                <tr>
                                    <th>Min Temp.</th>
                                    <td>{ktoc(data.main.temp_min)}</td>
                                </tr>
                                <tr>
                                    <th>Max Temp.</th>
                                    <td>{ktoc(data.main.temp_max)}</td>
                                </tr>
                                <tr>
                                    <th>Sunrise</th>
                                    <td>{date(data.sys.sunrise)}</td>
                                </tr>
                                <tr>
                                    <th>Sunset</th>
                                    <td>{date(data.sys.sunset)}</td>
                                </tr>
                            </tbody>
                          
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
        )
    }
    return (
        <>
        
        {showOnPage}
        </>
  )
}
