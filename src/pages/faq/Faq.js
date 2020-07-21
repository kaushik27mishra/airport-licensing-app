import React from 'react'

//components
import HeaderHomePage from '../../components/header/HeaderHomepage'
//ui
import { Text} from 'office-ui-fabric-react';
import { Card } from '@uifabric/react-cards';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';

//style
import './style.css'

const styles = {
    cardStyles: {
        root: {
          background: 'white',
          paddingTop: 30,
          paddingLeft: 50,
          paddingRight: 50,
          paddingBottom: 50,
          width: '100%',
          maxWidth: '100%',
          margin: 'auto',
          marginTop: 60,
        }
    },
    textFieldStyles: {
        root: {
            width:'100%',
        }
    }
}

const classNames = mergeStyleSets({
    pivot: {
        margin: 'auto',
    }
    
});




const faq  = () =>   (

    <div id="faq">
            <div className="ms-Grid-row" style={{paddingBottom:'100px'}}>
                <div className="ms-Grid-row">
                    <HeaderHomePage/>
                </div>
                    
                    {/*<Card.Section>
                        <div style={{
                                paddingLeft:'80px',
                                paddingTop:"5px",
                                paddingBottom:"10px",
                                marginTop:'40px',
                                color:'white'
                        }}>
                            <Text variant='xxLarge'>
                                Frequently Asked Questions (FAQs)
                            </Text>
                        </div>
                    </Card.Section>*/}
                
                <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.pivot}`}>
                    <Card styles={styles.cardStyles}>
                        <Card.Section>
                            <Text 
                                variant='xLarge'>
                                    What is the duration of the process?
                            </Text>
                        </Card.Section>
                        <Card.Section>
                        <Text 
                            variant='large'>
                                The process is of 90 days.
                            </Text>
                        </Card.Section>
                    </Card>

                    <Card styles={styles.cardStyles}>
                        <Card.Section>
                            <Text 
                                variant='xLarge'>
                                    Who can tell me the documents required for licensing?
                            </Text>
                        </Card.Section>
                        <Card.Section>
                        <Text 
                            variant='large'>
                                You can visit <u><a className='css-54' href="http://dgca.nic.in/manuals/ProceMan_Aero.pdf">here</a></u> to get all the process details.
                            </Text>
                        </Card.Section>
                    </Card>

                    <Card styles={styles.cardStyles}>
                        <Card.Section>
                            <Text 
                                variant='xLarge'>
                                    Do we provide a license for both public and private use?
                            </Text>
                        </Card.Section>
                        <Card.Section>
                        <Text 
                            variant='large'>
                                Yes.
                            </Text>
                        </Card.Section>
                    </Card>

                    <Card styles={styles.cardStyles}>
                        <Card.Section>
                            <Text 
                                variant='xLarge'>
                                    Who will inspect us onsite?
                            </Text>
                        </Card.Section>
                        <Card.Section>
                        <Text 
                            variant='large'>
                                Director General of Civil Aviation will assign an Aerodrome Inspector with his team, who will be responsible for onsite inspection.
                            </Text>
                        </Card.Section>
                    </Card>

                    <Card styles={styles.cardStyles}>
                        <Card.Section>
                            <Text 
                                variant='xLarge'>
                                    Who will provide us a license?
                            </Text>
                        </Card.Section>
                        <Card.Section>
                        <Text 
                            variant='large'>
                              Once DOAS recommend DGCA for grant of a license, DOAS generate license number and update license register, then an online license is generated.
                            </Text>
                        </Card.Section>
                    </Card>

                    <Card styles={styles.cardStyles}>
                        <Card.Section>
                            <Text 
                                variant='xLarge'>
                                    What if our application for new application is rejected at any phase?
                            </Text>
                        </Card.Section>
                        <Card.Section>
                        <Text 
                            variant='large'>
                              The Aerodrome Inspector will recommend changes and action plan.
                            </Text>
                        </Card.Section>
                    </Card>

                    <Card styles={styles.cardStyles}>
                        <Card.Section>
                            <Text 
                                variant='xLarge'>
                                    After how many days we have to renew the license?
                            </Text>
                        </Card.Section>
                        <Card.Section>
                        <Text 
                            variant='medium'>
                              The license should be renewed in every two years.
                            </Text>
                        </Card.Section>
                    </Card>
                    
                </div>
            </div>
    </div>
            
        )
    
export default faq
