import React, { useEffect, useState } from 'react';

//ui
import { Text, initializeIcons, PrimaryButton } from '@fluentui/react';
import { Card } from '@uifabric/react-cards';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';

//auth
import { roleHandler } from '../../../utils/roleHandler'

import { useParams } from 'react-router-dom'
import { gql } from '@apollo/react-hooks';
import { Mutation } from '@apollo/react-components';
import Download from '../../Download';

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

  const [status, setStatus] = useState("");
  const cards_one_two_three = [
    {
      title: 'Details of Aerodrome',
      status: 'Submitted',
      dgcaLink: `/form/aerodrome_detail_form`,
      operatorLink: '/aerodrome_detail_form',
    },
    {
      title: 'Aerodrome Activities',
      status: 'Processing',
      dgcaLink: `/form/aerodrome_activities`,
      operatorLink: '/aerodrome_activities',
    },
    {
      title: 'Control of the Aerodrome',
      status: 'Submitted',
      dgcaLink: `/form/control_of_aerodrome`,
      operatorLink: '/control_of_aerodrome',
    }
  ]
  
  const cards_four_five_six = [
      
      {
        title: 'Permissions and Approvals',
        status: 'Submitted',
        dgcaLink: `/form/permissions_and_approvals`,
        operatorLink: '/permissions_and_approvals',
      },
      /*{
        title: 'Aerodrome Management Personnel',
        status: 'Processing',
        dgcaLink: `/form/aerodrome_management_personnel`,
        operatorLink: '/aerodrome_management_personnel',
      },*/
      {
        title: 'Aerodrome Manual',
        status: 'Submitted',
        dgcaLink: `/form/aerodrome_manual`,
        operatorLink: '/aerodrome_manual',
      },
      {
        title: 'Details of Fees',
        status: 'Submitted',
        dgcaLink: `/form/details_of_fees`,
        operatorLink: '/details_of_fees',
      },
    ]
  
    const cards_seven_eight = [
      
      /*{
        title: 'Details of Fees',
        status: 'Submitted',
        dgcaLink: `/form/details_of_fees`,
        operatorLink: '/details_of_fees',
      },*/
      {
        title: 'Any Other Information',
        status: 'Processing',
        dgcaLink: `/form/further_info`,
        operatorLink: '/further_info',
      },
      
    ]
    const history_card = {
      title: "License History",
      status: "fwd",
      dgcaLink:'/form/history'
    }

    
  initializeIcons();

  const statusOptions = [
    { key: 'Approved', text: 'Approved',},
    { key: 'Rejected', text: 'Rejected' },
    { key: 'UnderInspection', text: 'UnderInspection' },
    { key: 'Correct_Data', text: 'Correct_Data' },
    { key: 'Waiting_for_misitries_approval', text: 'Waiting_for_misitries_approval' },
    { key: 'Waiting_For_Data', text: 'Waiting_For_Data' },
  ];

  const { id } = useParams();
  return (
      <>
        <div style={container}>
        {cards_one_two_three.map((cards_one_two_three) => (
            <div className="s-Grid-col ms-sm3 ms-xl3">
            <Card styles={styles.cardStyles} onClick={() => {
                if(props.userRole.role==="DGCA") {
                  props.history.push(`/app/dgca/license/${id}${cards_one_two_three.dgcaLink}`)
                }
                else if(props.userRole.role==="Operator") {
                  props.history.push(`/app/operator/license/${id}${cards_one_two_three.operatorLink}`)
                }
              }}>
                <Card.Section>
                <Card.Item>
                    <i style={icon} className={`ms-Icon ms-Icon--${receiveIcon(cards_one_two_three.status)}`} aria-hidden="true"></i>
                    <Text styles={styles.header}>{cards_one_two_three.title}</Text>
                </Card.Item>
                {
                    props.userRole.role==="DGCA" ?
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
            <Card styles={styles.cardStyles}
              onClick={() => {
                if(props.userRole.role==="DGCA") {
                  props.history.push(`/app/dgca/license/${id}${cards_four_five_six.dgcaLink}`)
                }
                else if(props.userRole.role==="Operator") {
                  props.history.push(`/app/operator/license/${id}${cards_four_five_six.operatorLink}`)
                }
              }}>
                <Card.Section>
                <Card.Item>
                    <i style={icon} className={`ms-Icon ms-Icon--${receiveIcon(cards_four_five_six.status)}`} aria-hidden="true"></i>
                    <Text styles={styles.header}>{cards_four_five_six.title}</Text>
                </Card.Item>
                {
                    props.userRole.role==="DGCA" ?
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
        {cards_seven_eight.map((cards_seven_eight) => (
            <div className="s-Grid-col ms-sm3 ms-xl3">
            <Card styles={styles.cardStyles}
              onClick={() => {
                if(props.userRole.role==="DGCA") {
                  props.history.push(`/app/dgca/license/${id}${cards_seven_eight.dgcaLink}`)
                }
                else if(props.userRole.role==="Operator") {
                  props.history.push(`/app/operator/license/${id}${cards_seven_eight.operatorLink}`)
                }
              }}>
                <Card.Section>
                <Card.Item>
                    <i style={icon} className={`ms-Icon ms-Icon--${receiveIcon(cards_seven_eight.status)}`} aria-hidden="true"></i>
                    <Text styles={styles.header}>{cards_seven_eight.title}</Text>
                </Card.Item>
                {
                    props.userRole.role==="DGCA" ?
                    <>
                        <Card.Item>
                            <Text styles={styles.status}>Form status - {cards_seven_eight.status}</Text>
                        </Card.Item>
                    </>
                    :
                    <>
                        {props.submission!=null ?
                        <>
                            <Card.Item>
                                <Text styles={styles.status}>Approval Status - {cards_seven_eight.status}</Text>
                            </Card.Item>
                        </>
                        :
                        <>
                            <Card.Item>
                                <Text styles={styles.status}>Filling Status - {cards_seven_eight.status}</Text>
                            </Card.Item>
                        </>
                        }
                </>
                }
                </Card.Section>
            </Card>

            {
              props.userRole.role==="DGCA" ?
              <>
                        <br/><br/>
                            <Card styles={styles.cardStyles}
                        onClick={() => {
                            props.history.push(`/app/dgca/license/${id}/history`)
                        }}>
                        <Card.Section>
                            <Card.Item>
                                  <i style={icon} className={`ms-Icon ms-Icon--${receiveIcon(history_card.status)}`} aria-hidden="true"></i>
                                  <Text styles={styles.header}>{history_card.title}</Text>
                              </Card.Item>
                              <Card.Item>
                                  <Text styles={styles.status}>Click to view complete history of this license</Text>
                              </Card.Item>
                          </Card.Section>
                        </Card>
              </>:null
            }
            </div>
        ))}
        </div>
        <div className="ms-Grid-row">
            <div className="s-Grid-col ms-sm3 ms-xl3">
            {props.userRole.role==="DGCA"?
              <Mutation mutation={MUTATION}>
                {(formstatus,{loading,data,error}) => {
                  if(loading) return 'loading';
                  if(error) return 'error';

                  return (
                    <td style={{textAlign:"center",paddingLeft:'550px'}}>
                      <Dropdown
                        placeholder="Do you approve this application?"
                        label="Select an option"
                        options={statusOptions}
                        onChange={(e,i) => setStatus(i.key)}
                      />
                        <br/>
                      <PrimaryButton 
                        onClick={() => {
                          formstatus({
                            variables: {id: id,status: status }
                          })
                        }}
                        text="Submit" 
                        allowDisabledFocus/>
                    </td>
              )}}
              </Mutation>
            :null}
            <Download id={id}/>
          </div>
        </div>

      </>
    
  )
}

export default roleHandler(CardsSection);

const MUTATION=gql`
mutation UpdateStatus($id: String!, $status: LicenseStatus!) {
  updateStatus(id: $id, status: $status)
}
`;

