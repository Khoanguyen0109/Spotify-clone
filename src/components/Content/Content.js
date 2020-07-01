import React from 'react'
import Collections from '../Colection/Collections'
import './content.scss'
function Content() {
    return (
        <div className='content'>
            <div className="content-collection"> 
                <Collections/>
                <Collections/>
                <Collections/>
            

            </div>
        </div>
    )
}

export default Content
