import React from 'react';

//ui
import { Text, initializeIcons } from '@fluentui/react';
import { Card } from '@uifabric/react-cards';

//auth
import { roleHandler } from '../../../utils/roleHandler'

const container = {
  display: 'flex',
  justifyContent: 'center',
  margin: '10vh 0',
};

const icon = {
  fontSize: 24,
  padding: 15,
  verticalAlign: 'middle',
  paddingLeft: 0,
  color: '#0078d4'
}

const styles = {
  cardStyles: {
    root: {
      background: 'white',
      padding: 20,
      borderTop: '5px solid #0078d4',
      width: '90%',
      maxWidth: '90%',
      margin: 'auto',
    }
  },
  header: {
    root: {
      fontSize: 20,
      fontWeight: 'bold',
    }
  },
  status: {
    root: {
      fontSize: 20,
      paddingBottom: 20,
      paddingTop: 30,
    }
  }
};

   const receiveIcon = (status) =>
  {
      switch(status){
        case "Submitted" : return 'Accept'
        case "Edited" : return 'EditSolidMirrored12'
        case "Processing" : return 'DelveAnalyticsLogo'
        case "Not Approved" :return 'Clear'
        case "Approved" : return 'AcceptMedium'
        default : return 'Forward'

      }
  }



const CardsSection = (props) => {
  const cards_one_two_three = [
    {
      title: 'Details of Licensee',
      status: 'Submitted',
      dgcaLink: '',
      operatorLink: '',
    },
    {
      title: 'Details of Aerodrome',
      status: 'Submitted',
      dgcaLink: `/form/aerodrome_detail_form`,
      operatorLink: '/aerodrome_detail_form',
    },
    {
      title: 'Aerodrome Activities',
      status: 'Processing',
      dgcaLink: `/form/aerodrome_detail_form`,
      operatorLink: '/aerodrome_detail_form',
    }
  ]
  
  const cards_four_five_six = [
      {
        title: 'Control of the Aerodrome',
        status: 'Submitted',
        dgcaLink: `/form/aerodrome_detail_form`,
        operatorLink: '/aerodrome_detail_form',
      },
      {
        title: 'Permissions and Approvals',
        status: 'Submitted',
        dgcaLink: `/form/aerodrome_detail_form`,
        operatorLink: '/aerodrome_detail_form',
      },
      {
        title: 'Aerodrome Management Personnel',
        status: 'Processing',
        dgcaLink: `/form/aerodrome_detail_form`,
        operatorLink: '/aerodrome_detail_form',
      }
    ]
  
    const cards_seven_eight_nine = [
      {
        title: 'Aerodrome Manual',
        status: 'Submitted',
        dgcaLink: `/form/aerodrome_detail_form`,
        operatorLink: '/aerodrome_detail_form',
      },
      {
        title: 'Details of Fees',
        status: 'Submitted',
        dgcaLink: `/form/aerodrome_detail_form`,
        operatorLink: '/aerodrome_detail_form',
      },
      {
        title: 'Any Other Information',
        status: 'Processing',
        dgcaLink: `/form/aerodrome_detail_form`,
        operatorLink: '/aerodrome_detail_form',
      }
    ]

  initializeIcons();
  return (
      <>
        <div style={container}>
        {cards_one_two_three.map((cards_one_two_three) => (
            <div className="s-Grid-col ms-sm3 ms-xl3">
            <Card styles={styles.cardStyles} onClick={() => {
                if(props.userRole.role==="DGCA") {
                  props.history.push(`/app/dgca/license/${1}${cards_one_two_three.dgcaLink}`)
                }
                else if(props.userRole.role==="Operator") {
                  props.history.push(`/app/operator${cards_one_two_three.operatorLink}`)
                }
              }}>
                <Card.Section>
                <Card.Item>
                    <i style={icon} className={`ms-Icon ms-Icon--${receiveIcon(cards_one_two_three.status)}`} aria-hidden="true"></i>
                    <Text styles={styles.header}>{cards_one_two_three.title}</Text>
                </Card.Item>
                {
                    props.user_type==="dgca" ?
                    <>
                        <Card.Item>
                            <Text styles={styles.status}>Form status - {cards_one_two_three.status}</Text>
                        </Card.Item>
                    </>
                    :
                    <>
                        {props.submission!=null ?
                        <>
                            <Card.Item>
                                <Text styles={styles.status}>Approval Status - {cards_one_two_three.status}</Text>
                            </Card.Item>
                        </>
                        :
                        <>
                            <Card.Item>
                                <Text styles={styles.status}>Filling Status - {cards_one_two_three.status}</Text>
                            </Card.Item>
                        </>
                        }
                </>
                }
                </Card.Section>
            </Card>
            <br/>
        </div>
        ))}
        </div>
        <div style={container}>
        {cards_four_five_six.map((cards_four_five_six) => (
            <div className="s-Grid-col ms-sm3 ms-xl3">
            <Card styles={styles.cardStyles}>
                <Card.Section>
                <Card.Item>
                    <i style={icon} className={`ms-Icon ms-Icon--${receiveIcon(cards_four_five_six.status)}`} aria-hidden="true"></i>
                    <Text styles={styles.header}>{cards_four_five_six.title}</Text>
                </Card.Item>
                {
                    props.user_type==="dgca" ?
                    <>
                        <Card.Item>
                            <Text styles={styles.status}>Form status - {cards_four_five_six.status}</Text>
                        </Card.Item>
                    </>
                    :
                    <>
                        {props.submission!=null ?
                        <>
                            <Card.Item>
                                <Text styles={styles.status}>Approval Status - {cards_four_five_six.status}</Text>
                            </Card.Item>
                        </>
                        :
                        <>
                            <Card.Item>
                                <Text styles={styles.status}>Filling Status - {cards_four_five_six.status}</Text>
                            </Card.Item>
                        </>
                        }
                </>
                }
                
                </Card.Section>
            </Card>
            <br/>
            </div>
        ))}
        <br/>  
        </div>
        <div style={container}>
        {cards_seven_eight_nine.map((cards_seven_eight_nine) => (
            <div className="s-Grid-col ms-sm3 ms-xl3">
            <Card styles={styles.cardStyles}>
                <Card.Section>
                <Card.Item>
                    <i style={icon} className={`ms-Icon ms-Icon--${receiveIcon(cards_seven_eight_nine.status)}`} aria-hidden="true"></i>
                    <Text styles={styles.header}>{cards_seven_eight_nine.title}</Text>
                </Card.Item>
                {
                    props.user_type==="dgca" ?
                    <>
                        <Card.Item>
                            <Text styles={styles.status}>Form status - {cards_seven_eight_nine.status}</Text>
                        </Card.Item>
                    </>
                    :
                    <>
                        {props.submission!=null ?
                        <>
                            <Card.Item>
                                <Text styles={styles.status}>Approval Status - {cards_seven_eight_nine.status}</Text>
                            </Card.Item>
                        </>
                        :
                        <>
                            <Card.Item>
                                <Text styles={styles.status}>Filling Status - {cards_seven_eight_nine.status}</Text>
                            </Card.Item>
                        </>
                        }
                </>
                }
                
                </Card.Section>
            </Card>
            <br/>
            </div>
        ))}
        <br/>  
        </div>
      </>
    
  )
}

export default roleHandler(CardsSection);