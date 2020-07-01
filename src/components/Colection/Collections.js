import React from 'react'
import PlaylistCard from '../PlaylistCard/PlaylistCard'
import './Collection.scss'
function Collections() {
    return (
        <div className="collection">
            <div className="collection-name">
                Name Collection
            </div>
            <div className="collection-list">
                <PlaylistCard/>
                <PlaylistCard/>
            </div>
            
        </div>
    )
}

export default Collections
