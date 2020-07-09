import React from 'react'
import './progressbar.scss'
const readableDuration = mseconds => {
    let sec = Math.floor(mseconds /1000);
    let min = Math.floor(sec / 60);
    min = min >= 10 ? min : "0" + min;
    sec = Math.floor(sec % 60);
    sec = sec >= 10 ? sec : "0" + sec;
    return min + ":" + sec;
  };
function ProgressBar(props) {

  const progress_ms = props.progress_ms;
  const duration_ms = props.duration_ms;
    return (
        <div className="progress-container">
        <div className="duration">
          <div className="duration__current">{readableDuration(progress_ms)}</div>
          <div className="duration__total">{readableDuration(duration_ms)}</div>
        </div>
        <div className="progress">
          <div
            className="progress__bar"
            style={{ width: `${(progress_ms + 0.25) / duration_ms * 100}%` }}
          />
          <div className="progress__pointer" />
        </div>
      </div>
    )
}

export default ProgressBar
