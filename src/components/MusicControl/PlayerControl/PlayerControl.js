import React, { useState } from 'react'
import './playercontrol.scss'
import ProgressBar from '../ProgressBar/ProgressBar'
function PlayerControl(props) {
    const is_playing= props.is_playing;

  const progress_ms = props.progress_ms;
  const duration_ms = props.duration_ms;
    // const handlePlay =() =>{
    //     setIsPlayed(!isPlayed)
    // }
    return (
        <div className='player-control'>
            <div className="player-control__buttons">
                <div className="btn-random"><i class="fas fa-random"></i></div>
                <div className='btn-prev'>
                <i class="fas fa-step-backward"></i>
                </div>
                <div className="btn-play">
                    {is_playing ?<i class="far fa-pause-circle"></i>: <i class="far fa-play-circle"></i> }

                </div>
                <div className="btn-next"><i class="fas fa-step-forward"></i></div>
                <div className="btn-loop"><i class="fas fa-redo-alt"></i></div>
            </div>
            <div className="player-control__bar">
            <ProgressBar progress_ms={progress_ms} duration_ms={duration_ms}/>
            
            </div>
            
        </div>
    )
}

export default PlayerControl
