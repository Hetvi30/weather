import React, { Component } from 'react'
import Search from './Search'
import Result from './Result'
import axios from 'axios'
import Loader from './Loader'
import Recent from './Recent'

class Weather extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         lat:"",
         lon:"",
         weatherData:null,
         city:"",
         isSearch:false,
         recent:[]

      }
    }

    changeHandler=(event)=>{
        event.preventDefault()
        const name=event.target.name;
        if(name==='city'){
            this.setState({
                city: event.target.value
            })
        }
        else if(name==='lat'){
            this.setState({
                lat: event.target.value
            },console.log(this.state))
        }
        else if(name==='lon'){
            this.setState({
                lon: event.target.value
            })
        }
    }

    locHandler = (event) => {
        event.preventDefault();
        this.setState({
            weatherData:null,
            isSearch:true,
            city:"",
        })
      
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (res) => {
                const latitude = res.coords.latitude;
                const longitude = res.coords.longitude;
                setTimeout(()=>{
            
                    this.setState({ lat: latitude, lon: longitude }, () => {
            
                      axios
                        .get(
                          `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=7cfd198ddb3b5afd6a102eda03d3780b`
                        )
                        .then((result) => {
                          this.setState({ city: result.data.name ,
                            weatherData:result.data,
                        },()=>{
                            this.addRecent();
                        });
                        })
                        .catch((error) => {
                          console.log(error);
                        });
                    })
                    
                } ,500)
            },
            (error) => {
              console.log(error);
            }
          );
        } else {
          console.log('Location not available');
        }
      };

      searchHandler=()=>{
        this.setState({
            isSearch:true,
            weatherData:null,

        }
        )
        axios
            .get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&q=${this.state.city}&appid=7cfd198ddb3b5afd6a102eda03d3780b`
                )
           .then((result) => {
              this.setState({ city: result.data.name ,
                    lat: result.data.coord.lat,
                    lon:result.data.coord.lon,
                    weatherData:result.data,
                    },()=>{
                        this.addRecent();
                    });
                })
            .catch((error) => {
              console.log(error);
            });

      }
                    
    addRecent=()=>{
        let recent=this.state.recent;
        recent.push({
            lat:this.state.lat,
            lon:this.state.lon,
            city:this.state.city
        });
        this.setState({recent},()=>{
            window.localStorage.setItem('recent',JSON.stringify(this.state.recent));
        });
    };

    componentDidMount(){
        const data=window.localStorage.getItem('recent');
        let recent=data===null ? [] : JSON.parse(data);
        this.setState({recent})

    }

    researchHandler = (lat, lon) => {
      this.setState({ lat, lon, weatherData:null,}, async () => {
          try {
            const result = await axios.get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=7cfd198ddb3b5afd6a102eda03d3780b`
            );
      
            this.setState(
              {
                city: result.data.name,
                weatherData: result.data,
              },
              () => {
                console.log(this.state);
              }
            );
          } catch (error) {
            console.log(error);
          }
        });
      };
      

  render() {
    return (
      <div className='container pt-4' style={{height:"500px"}}>
        <Recent recent={this.state.recent} research={this.researchHandler}></Recent>
        <Search
        lat={this.state.lat}
        lon={this.state.lon}
        weatherData={this.state.weatherData}
        city={this.state.city}
        change={this.changeHandler}
        getLoc={this.locHandler}
        search={this.searchHandler}
        ></Search>
        <Result weatherData={this.state.weatherData} isSearch={this.state.isSearch}></Result>
      </div>
    )
  }
}

export default Weather