import React from 'react'
import Collections from '../../components/Colection/Collections'
import './homepage.scss'
function Homepage() {
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

export default Homepage
