import React from 'react'
import './track.scss'
function Track() {
    return (
        <div className='track'>
            <div className="icon">
            <i  className="fas fa-play"></i>
            <i  className="fas fa-music"></i>
            <i  className="fas fa-pause"></i>

            </div>
            <div className="track__info">
                <div  className="track__info-name" >
                    Track Name

                </div>
                <div  className="track__info-info" >
                    <p>Singer</p>
                    <p>Album</p>

                </div>
            </div>
            <div className="track__time">
                <div>
                Time
                </div>
                
            </div>

            
        </div>
    )
}

export default Track
