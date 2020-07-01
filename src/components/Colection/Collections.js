import React from 'react'
import Playlist from '../Playlist/Playlist'
import './Collection.scss'
function Collections() {
    return (
        <div className="collection">
            <div className="collection-name">
                Name Collection
            </div>
            <div className="collection-list">
                <Playlist/>
                <Playlist/>
            </div>
            
        </div>
    )
}

export default Collections
