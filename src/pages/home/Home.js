import React from 'react'

//components
import HeaderHomePage from '../../components/header/HeaderHomepage'
import Banner from '../../components/banner/Banner'
import AAILogo from '../../assets/logoWithName.png'
import TechStack from '../../assets/TechStack.png'

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
                
                <div style = {{padding:'5em'}}>
                <div class="ms-Grid-col ms-sm6 ms-smPush6">
                        <img src={AAILogo} alt="Airports Authority of India"/>
                    </div>
                    <div class="ms-Grid-col ms-sm6 ms-smPull6">
                        <h1 style={{color:'#4fe5ff',paddingLeft:'20px',height:'100%', fontSize:'80px'}}>
                            Aerodrome <br/>Licensing <br/>Portal 
                        </h1>
                    </div>
                </div>
                <div class="ms-Grid-col ms-sm7 ms-smPush6">
                    <div style = {{padding:'10em'}}>
                        <h1 style={{color: 'white', fontSize:'40px'}}>
                            Features
                        </h1>
                        <ul style={{color: 'white', fontSize:'30px'}}>
                            <li>Immutable Records</li>
                            <li>Data Integrity</li>
                            <li>Online E-License Generation</li>
                            <li>E-Signatures and Online Approvals</li>
                            <li>completely Online Form filling</li>
                            <li>Integration of Ministry of Defence and ministry of Home Affairs</li>
                            <li>Two-Factor Authentication</li>
                            <li>Notification Services</li>
                            <li>Dedicated Dashboards to all Users with Restricted Access</li>
                            <li>Transparency with Speed</li>
                        </ul>
                    </div>
                    </div>
                    <div class="ms-Grid-col ms-sm5 ms-smPull6">
                        <h1 style={{color:'#4fe5ff',paddingLeft:'20px',height:'90%', fontSize:'80px'}}>
                            <img src={TechStack} alt="Tech stack" style={{width:'100%'}}/>
                        </h1>
                    </div>
                
            </div>
        </div>
    )
}

export default Home
