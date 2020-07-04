import React from 'react'

//components
import HeaderHomePage from '../../components/header/HeaderHomepage'
import Banner from '../../components/banner/Banner'

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
                    <Banner/>
                </div>
            </div>
        </div>
    )
}

export default Home
