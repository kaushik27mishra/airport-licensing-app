import React from 'react'

// components
import Navigation from '../../components/navigation/Navigation'
import CardsSection from '../../components/cards/Cards'
import OperationsTable from '../../components/table/DetailsList'

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
                        <CardsSection/>
                    </div>
                    <div className="ms-Grid-row">
                        <OperationsTable/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard