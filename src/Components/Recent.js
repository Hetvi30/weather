import React from 'react'
import LoaderCSS from '../Assets/loader.module.css'

export default function Recent(props) {
    let data;
    if (props.recent == null) {
      data = "";
    } else {
      data = props.recent.map((recentData) => {
        console.log(recentData)
        return(
        <li>
            <button  onClick={()=>props.research(recentData.lat, recentData.lon)}
          key={recentData.id} className='btn mt-2 btn-dark'>

          {recentData.city}
            </button>
        </li>
        )
        });
    }
    
  return (
    <div className={LoaderCSS.sidebar}>
        <h3 style={{boxShadow:'5px'}}>Recent</h3>
        <ul className=' list-unstyled'>
           {data}
        </ul>
    </div>
  )
}
