import React from 'react'

//components
import HeaderHomePage from '../../components/header/HeaderHomepage'

//style 
import './style.css'

function Home() {
    return (
        <div id="home">
            <div style={{padding:'0em',margin:'0'}} className="ms-Grid" dir="ltr">
                <div className="ms-Grid-row">
                    <HeaderHomePage/>
                </div>
                <div className="ms-Grid-row">

                </div>
            </div>
        </div>
    )
}

export default Home
