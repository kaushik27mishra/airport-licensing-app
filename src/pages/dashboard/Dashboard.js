import React from 'react'

// components
import Navigation from '../../components/navigation/Navigation'

// style
import './style.css'

function Dashboard() {
    return (
        <div style={{padding:'0em',margin:'0'}} className="ms-Grid" dir="ltr">
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm2 ms-xl2">
                  <Navigation />
                </div>
                <div className="main-element ms-Grid-col ms-sm10 ms-xl10">
                    <div className="ms-Grid-row">
        
                    </div>
                    <div className="ms-Grid-row">
        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard