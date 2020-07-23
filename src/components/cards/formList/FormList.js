import React from 'react';

//ui
import { Text, initializeIcons } from '@fluentui/react';
import { Card } from '@uifabric/react-cards';

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
  },
  percentage: {
    root: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#0078d4',
    }
  }
};

const cards_one_two_three = [
  {
    title: 'Details of Licensee',
    status: 'Submitted',
    icon: 'Forward',
    percentage: '100%'
  },
  {
    title: 'Details of Aerodrome',
    status: 'Submitted',
    icon: 'Forward',
    percentage: '100%'
  },
  {
    title: 'Aerodrome Activities',
    status: 'Processing',
    icon: 'Forward',
    percentage: '75%'
  }
]

const cards_four_five_six = [
    {
      title: 'Control of the Aerodrome',
      status: 'Submitted',
      icon: 'Forward',
      percentage: '100%'
    },
    {
      title: 'Permissions and Approvals',
      status: 'Submitted',
      icon: 'Forward',
      percentage: '100%'
    },
    {
      title: 'Aerodrome Management Personnel',
      status: 'Processing',
      icon: 'Forward',
      percentage: '75%'
    }
  ]

  const cards_seven_eight_nine = [
    {
      title: 'Aerodrome Manual',
      status: 'Submitted',
      icon: 'Forward',
      percentage: '100%'
    },
    {
      title: 'Details of Fees',
      status: 'Submitted',
      icon: 'Forward',
      percentage: '100%'
    },
    {
      title: 'Any Other Information',
      status: 'Processing',
      icon: 'Forward',
      percentage: '75%'
    }
  ]

const CardsSection = (props) => {
  initializeIcons();
  return (
      <>
        <div style={container}>
        {cards_one_two_three.map((cards_one_two_three) => (
            <div className="s-Grid-col ms-sm3 ms-xl3">
            <Card styles={styles.cardStyles}>
                <Card.Section>
                <Card.Item>
                    <i style={icon} className={`ms-Icon ms-Icon--${cards_one_two_three.icon}`} aria-hidden="true"></i>
                    <Text styles={styles.header}>{cards_one_two_three.title}</Text>
                </Card.Item>
                {
                    props.user_type==="dgca" ?
                    <>
                        <Card.Item>
                            <Text styles={styles.status}>Form status - {cards_one_two_three.status}</Text>
                        </Card.Item>
                        <Card.Item>
                            <Text styles={styles.percentage}>{cards_one_two_three.percentage}</Text>
                        </Card.Item>
                    </>
                    :
                    <>
                        {props.submission!=null ?
                        <>
                            <Card.Item>
                                <Text styles={styles.status}>Approval Status - {cards_one_two_three.status}</Text>
                            </Card.Item>
                            <Card.Item>
                                <Text styles={styles.percentage}>{cards_one_two_three.percentage}</Text>
                            </Card.Item>
                        </>
                        :
                        <>
                            <Card.Item>
                                <Text styles={styles.status}>Filling Status - {cards_one_two_three.status}</Text>
                            </Card.Item>
                            <Card.Item>
                                <Text styles={styles.percentage}>{cards_one_two_three.percentage}</Text>
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
                    <i style={icon} className={`ms-Icon ms-Icon--${cards_four_five_six.icon}`} aria-hidden="true"></i>
                    <Text styles={styles.header}>{cards_four_five_six.title}</Text>
                </Card.Item>
                {
                    props.user_type==="dgca" ?
                    <>
                        <Card.Item>
                            <Text styles={styles.status}>Form status - {cards_four_five_six.status}</Text>
                        </Card.Item>
                        <Card.Item>
                            <Text styles={styles.percentage}>{cards_four_five_six.percentage}</Text>
                        </Card.Item>
                    </>
                    :
                    <>
                        {props.submission!=null ?
                        <>
                            <Card.Item>
                                <Text styles={styles.status}>Approval Status - {cards_four_five_six.status}</Text>
                            </Card.Item>
                            <Card.Item>
                                <Text styles={styles.percentage}>{cards_four_five_six.percentage}</Text>
                            </Card.Item>
                        </>
                        :
                        <>
                            <Card.Item>
                                <Text styles={styles.status}>Filling Status - {cards_four_five_six.status}</Text>
                            </Card.Item>
                            <Card.Item>
                                <Text styles={styles.percentage}>{cards_four_five_six.percentage}</Text>
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
                    <i style={icon} className={`ms-Icon ms-Icon--${cards_seven_eight_nine.icon}`} aria-hidden="true"></i>
                    <Text styles={styles.header}>{cards_seven_eight_nine.title}</Text>
                </Card.Item>
                {
                    props.user_type==="dgca" ?
                    <>
                        <Card.Item>
                            <Text styles={styles.status}>Form status - {cards_seven_eight_nine.status}</Text>
                        </Card.Item>
                        <Card.Item>
                            <Text styles={styles.percentage}>{cards_seven_eight_nine.percentage}</Text>
                        </Card.Item>
                    </>
                    :
                    <>
                        {props.submission!=null ?
                        <>
                            <Card.Item>
                                <Text styles={styles.status}>Approval Status - {cards_seven_eight_nine.status}</Text>
                            </Card.Item>
                            <Card.Item>
                                <Text styles={styles.percentage}>{cards_seven_eight_nine.percentage}</Text>
                            </Card.Item>
                        </>
                        :
                        <>
                            <Card.Item>
                                <Text styles={styles.status}>Filling Status - {cards_seven_eight_nine.status}</Text>
                            </Card.Item>
                            <Card.Item>
                                <Text styles={styles.percentage}>{cards_seven_eight_nine.percentage}</Text>
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
    
  );
}

export default CardsSection;