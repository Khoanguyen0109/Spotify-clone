import React from 'react'
import './track.scss'
function Track(props) {
    const {album, artists ,name,id ,duration_ms } = props.track
    return ( 
        <div className='track'>
            <div className="icon">
            <i  className="fas fa-play"></i>
            <i  className="fas fa-music"></i>
            <i  className="fas fa-pause"></i>

            </div>
            <div className="track__info">
                <div  className="track__info-name" >
                    {name}

                </div>
                <div  className="track__info-info" >
                    {artists.map(artist =>(
                        <p className='artist'>{artist.name}</p>
                    ))}
                    <p>{album.album_type}: {album.name}</p>

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
