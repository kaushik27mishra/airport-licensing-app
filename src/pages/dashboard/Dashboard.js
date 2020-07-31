import React, { Component } from 'react'

// components
import CardsSection from '../../components/cards/Cards'
import Table from '../../components/table/Table'

// style
import './style.css'

//ui
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { Card } from '@uifabric/react-cards';

// role
import {roleHandler}  from "../../utils/roleHandler";

//page
import FormCards from '../FormsCards';
import TableRO from '../../components/table/TableRO';

const classNames = mergeStyleSets({
    pivot: {
        margin: 'auto',
    }
});

const styles = {
    cardStyles: {
        root: {
          background: 'white',
          padding: 20,
          width: '100%',
          maxWidth: '100%',
          margin: 'auto',
          borderTop: '5px solid #0078d4'
        }
    },
}

class Dashboard extends Component {
    constructor(props) {
        super(props)
        
    }
    render (){
        switch(this.props.userRole.role){
            case "DGCA" : return(
                <>  
                <div className="ms-Grid-row">
                    <CardsSection/>
                </div>
                <div className="ms-Grid-row">
                    <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.pivot}`}>
                        <Card styles={styles.cardStyles}>
                            <Card.Section>
                                <Card.Item>
                                    <Pivot styles={styles.pivotStyles}>
                                        <PivotItem
                                            headerText="All Applications"
                                            headerButtonProps={{
                                              'data-order': 1,
                                            }}
                                        >
                                            <Table/>
                                        </PivotItem>
                                        <PivotItem headerText="Completed Applications">
                                            <Table/>
                                        </PivotItem>
                                        <PivotItem headerText="Ongoing Applications">
                                            <Table/>
                                        </PivotItem>
                                    </Pivot>
                                </Card.Item>
                            </Card.Section>
                        </Card>
                    </div>
                </div>
                <div style={{paddingTop:'100px',paddingBottom:'100px'}} className="ms-Grid-row">
                    <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.pivot}`}>
                        <Card styles={styles.cardStyles}>
                            <Card.Section>
                                <Card.Item>
                                    <Pivot styles={styles.pivotStyles}>
                                        <PivotItem
                                            headerText="All Applications"
                                            headerButtonProps={{
                                              'data-order': 1,
                                            }}
                                        >
                                            <Table/>
                                        </PivotItem>
                                        <PivotItem headerText="Completed Applications">
                                            <Table/>
                                        </PivotItem>
                                        <PivotItem headerText="Ongoing Applications">
                                            <Table/>
                                        </PivotItem>
                                    </Pivot>
                                </Card.Item>
                            </Card.Section>
                        </Card>
                    </div>
                </div>
            </>
            )
            case "Operator" : return (
                <>
                    <h1>{this.props.userRole.id}</h1>
                    <FormCards history={this.props.history}/>
                </>
            )
            case "RegionalOfficeHead" : return (
                <>
                    <div className="ms-Grid-row">
                        <CardsSection/>
                    </div>
                    <div className="ms-Grid-row">
                        <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.pivot}`}>
                            <Card styles={styles.cardStyles}>
                                <Card.Section>
                                    <Card.Item>
                                        <Pivot styles={styles.pivotStyles}>
                                            <PivotItem
                                                headerText="All Applications"
                                                headerButtonProps={{
                                                'data-order': 1,
                                                }}
                                            >
                                                <TableRO/>
                                            </PivotItem>
                                            <PivotItem headerText="Completed Applications">
                                                <TableRO/>
                                            </PivotItem>
                                            <PivotItem headerText="Ongoing Applications">
                                                <TableRO/>
                                            </PivotItem>
                                        </Pivot>
                                    </Card.Item>
                                </Card.Section>
                            </Card>
                        </div>
                    </div>
                </>
            )
            default: return(
                <h1>Loading...</h1>
            )
        }
            
       
    }

}
export default roleHandler(Dashboard);