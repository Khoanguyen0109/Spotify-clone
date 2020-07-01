import React from 'react'
import NowPlaying from './NowPlaying/NowPlaying'
import PlayerControl from './PlayerControl/PlayerControl'
import ToolBar from './ToolsBar/ToolBar'
import './musiccontrol.scss'
function MusicControl() {
    return (
        <div className="control-bar">
          
            <NowPlaying/>
            <PlayerControl/>
            <ToolBar/>
        </div>
    )
}

export default MusicControl
