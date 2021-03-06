import React, { Component } from 'react'
import Loader from "../../components/loader/Loader"

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
import TableRO from '../../components/table/TableRO';
import TableOperator from '../../components/table/TableOperator';
import TableMinsitry from '../../components/table/TableMinistry'

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
        this.state ={
            role: ""
        }
    }

    componentDidMount() {
        this.setState({
            role: this.props.userRole.role
        })
    }

    componentDidUpdate(prevProps) {
        if(this.props.userRole.role!==prevProps.userRole.role) {
            this.setState({
                role: this.props.userRole.role
            })
        }
    }

    render (){
        console.log(this.props.userRole.role);
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
                                        <PivotItem headerText="Ongoing Applications">
                                            <Table status="Waiting_For_Data" history={this.props.history} />
                                        </PivotItem>
                                        <PivotItem headerText="Ministry Approvals">
                                            <Table status="Waiting_for_misitries_approval" history={this.props.history} />
                                        </PivotItem>
                                        <PivotItem headerText="Completed Applications">
                                            <Table status="Approved" history={this.props.history} />
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
                                        <PivotItem headerText="Inspector Assigned">
                                            <Table status="UnderInspection" history={this.props.history} />
                                        </PivotItem>
                                        <PivotItem headerText="Inspector Unassigned">
                                            <Table status="Waiting_For_Data" history={this.props.history} />
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
                    <div className="ms-Grid-row">
                        <CardsSection/>
                    </div>
                    <div className="ms-Grid-row">
                        <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.pivot}`}>
                            <Card styles={styles.cardStyles}>
                                <Card.Section>
                                    <Card.Item>
                                        <TableOperator history={this.props.history} id={this.props.userRole.id}/>
                                    </Card.Item>
                                </Card.Section>
                            </Card>
                        </div>
                    </div>
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
                                                headerText="Under Inspection"
                                                headerButtonProps={{
                                                'data-order': 1,
                                                }}
                                            >
                                                <TableRO status="UnderInspection" history={this.props.history}/>
                                            </PivotItem>
                                            <PivotItem headerText="Completed Applications">
                                                <TableRO status="UnderInspection" history={this.props.history}/>
                                            </PivotItem>
                                            <PivotItem  status="Waiting_For_Data" headerText="Ongoing Applications">
                                                <TableRO history={this.props.history}/>
                                            </PivotItem>
                                        </Pivot>
                                    </Card.Item>
                                </Card.Section>
                            </Card>
                        </div>
                    </div>
                </>
            )
            case "DefenceMinistry" : 
            case "HomeMinistry" :
                return (
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
                                                <PivotItem headerText="Ongoing Applications">
                                                    <TableMinsitry status="Waiting_for_misitries_approval" role={this.props.userRole.role} />
                                                </PivotItem>
                                                <PivotItem headerText="Completed Applications">
                                                    <TableMinsitry status="Approved" role={this.props.userRole.role} />
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
                <Loader/>
            )
        }
            
       
    }

}
export default roleHandler(Dashboard);