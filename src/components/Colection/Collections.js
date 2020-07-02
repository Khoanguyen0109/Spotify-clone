import React from 'react'
import PlaylistCard from '../PlaylistCard/PlaylistCard'
import './Collection.scss'
function Collections(props) {
    const { id,description, image, name, tracks } = props.collection
    // console.log('id :>> ', name);
    
    return (
        <div className="collection">
            <div className="collection-name">
                {name}
            </div>
            <div className="collection-des">
                {description}
            </div>
            <div className="collection-list">


            </div>
            
        </div>
    )
}

export default Collections
