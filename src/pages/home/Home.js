import React, { Fragment } from 'react'

//components
import HeaderHomePage from '../../components/header/HeaderHomepage'
import AAILogo from '../../assets/logo.png'

//ui
import { Text, Stack } from 'office-ui-fabric-react';
import { Icon } from '@fluentui/react/lib/Icon';

//style 
import './style.css'

const stackTokens = { childrenGap: 20 };

function Home() {
    return (
        <div id="home">
            <div style={{padding:'0em',margin:'0'}} className="ms-Grid" dir="ltr">
                <div className="ms-Grid-row">
                    <HeaderHomePage/>
                </div>
                <div style={{padding:'5em'}}>
                    <div style={{minHeight:"650px"}} className="ms-Grid-row">
                        <div class="ms-Grid-col ms-sm6 ms-sm6">
                            <Text style={{color:'#ffffff',height:'100%', fontSize:'100px'}} variant={'xxLarge'}><div className="portal">Aerodrome<br/> Licensing <br/> Portal</div></Text>
                        </div>
                        <div class="ms-Grid-col ms-sm6 ms-sm6">
                            <img src={AAILogo} width="95%" alt="Airports Authority of India"/>
                        </div>
                    </div>
                </div>
                <div className="ms-Grid-row" style={{minHeight:'384px',backgroundColor:'#CF8FFF'}}>
                    <div class="ms-Grid-col ms-sm6 ms-sm6">
                        <br/>
                        <br/>
                        <Text style={{marginLeft:"80px",paddingTop:"80px",height:'100%',color:'#000000'}} variant={'mega'}>Features</Text>
                    </div>
                    <div class="ms-Grid-col ms-sm6 ms-sm6">
                        <div style={{marginTop:"100px"}}>
                            <Stack tokens={stackTokens}>
                                <Fragment>
                                    <Text variant={'xxLarge'} style={{color:'#000000',marginBottom:"10px"}}><Icon iconName="Forward" style={{fontSize:"28px"}} className="ms-IconExample" /> Immutable Records</Text>
                                    <Text variant={'xxLarge'} style={{color:'#000000',marginBottom:"10px"}}><Icon iconName="Forward" style={{fontSize:"28px"}} className="ms-IconExample" /> Two-Factor Authentication</Text>
                                    <Text variant={'xxLarge'} style={{color:'#000000',marginBottom:"10px"}}><Icon iconName="Forward" style={{fontSize:"28px"}} className="ms-IconExample" /> E-Signatures and Online Approvals</Text>
                                    <Text variant={'xxLarge'} style={{color:'#000000',marginBottom:"10px"}}><Icon iconName="Forward" style={{fontSize:"28px"}} className="ms-IconExample" /> Online E-License Generation</Text>
                                </Fragment>    
                            </Stack>
                            
                        {/* <div style = {{padding:'10em'}}>
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
                        </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
