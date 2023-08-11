import React from 'react'

export default function Search(props) {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-lg-5'>
                <p>Type City Name</p>
                <input type='text' name='city' onChange={props.change} value={props.city} style={{width:"100%"}}></input>
            </div>
            <div className='col-lg-1 p-3'>
                <br></br>
                <b>OR</b>
            </div>
            <div className='col-lg-5'>
                <label>Get Co-ordinates</label>
                <button onClick={props.getLoc} className='btn shadow-none'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-fill " viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"/>
                </svg>
                </button>
                <div className="input-group flex-nowrap">
                    <span className="input-group-text bg-dark text-light " id="addon-wrapping">Lat.</span>
                    <input type="number" className="form-control" name='lat'  onChange={props.change} value={props.lat} aria-describedby="addon-wrapping"/>
                    <span className="input-group-text bg-dark text-light ml-2" id="addon-wrapping">Lon.</span>
                    <input type="number" className="form-control" name='lon' onChange={props.change} value={props.lon} aria-describedby="addon-wrapping"/>
                </div>
            </div>
            <div className='col-lg-1'>
                <p>Search</p>
                <button onClick={props.search} className='btn btn-primary'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
                </button>
            </div>
        </div>
    </div>
  )
}
