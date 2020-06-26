import React from 'react'

// components
import Navigation from '../../components/navigation/Navigation'
import CardsSection from '../../components/cards/Cards'
import Table from '../../components/table/Table'

// style
import './style.css'

//ui
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { Card } from '@uifabric/react-cards';

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
        }
    },
}


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
                </div>
            </div>
        </div>
    )
}

export default Dashboard