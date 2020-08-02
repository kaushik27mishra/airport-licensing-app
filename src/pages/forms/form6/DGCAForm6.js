import React, { Component } from 'react'

//ui
import { Text, PrimaryButton, Stack, DefaultButton, Checkbox } from 'office-ui-fabric-react';
import { TextField} from 'office-ui-fabric-react/lib/TextField';
import { Card } from '@uifabric/react-cards';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';

//style
import '../style.css'
import gql from 'graphql-tag';
import { Mutation } from '@apollo/react-components';
import { client } from '../../..';

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
    }
}

const classNames = mergeStyleSets({
    pivot: {
        margin: 'auto',
    }
});


const stackTokens = { childrenGap: 20 };

export default class DGCAForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            manual:{
                data: null,
                suggestion:"",
                checked:false
            },
            enclosed: true,
            indicateDGCA: "soon",
            status: "Submitted"

        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        client.query({
            query: gql`
            query License($id: String!) {
                license(id: $id) {
                  form6 {
                    manual {
                      data
                      suggestion
                      checked
                    }
                    enclosed
                    indicateDGCA
                  }
                }
              }
              `,
            variables: { id: id }
        }).then( res => {
            const { form6 } = res.data.license;
            if(form6!==null) {
                this.setState({
                  data: true,
                 // saare variables 
                  manual:{
                      data: form6.manual.data,
                      suggestion: form6.manual.suggestion,
                      checked: form6.manual.checked
                  },
                  enclosed: form6.enclosed,
                  indicateDGCA: form6.indicateDGCA,
                  status: true //dont know what to add
                })
            }
            else {
                this.setState({
                    data: false
                })
            }
        })

    }

    handleManualValueChange = (e) => {
        this.setState({
            manual: {
                ...this.state.manual,
                suggestion: e.target.value,
            }
        })
    }

    handleManualCheckboxChange = (e,checked) => {
        this.setState({
            manual : {
                ...this.state.manual,
                suggestion:"",
                checked: !!checked
            }
        })
    }

    statusOptions = [
        { key: 'Submitted', text: 'Submitted',},
        { key: 'Edited', text: 'Edited' },
        { key: 'NotAproved', text: 'Not Approved' },
        { key: 'Approved', text: 'Approved' },
      ];

    render() {
        const { data, indicateDGCA, enclosed, manual,status } = this.state;

        if(!data)
            return <h1>Form yet to be filled</h1>
            
        return (
            <Mutation muatation={FORM6}>
            {(form6funstion,{loading, data_res, error}) => {
                if(loading) return 'loading'
                if(error) console.log(error);
                return (
                    <div className="ms-Grid-row" style={{paddingBottom:'100px'}}>
                <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.pivot}`}>
                    <Card styles={styles.cardStyles}>
                        <Card.Section>
                                <Text variant={'xxLarge'}>AERODROME MANUAL</Text>
                                <table style={{width:"100%"}}>
                                    <thead>
                                        <th style={{textAlign:'left'}}>Field</th>
                                        <th style={{textAlign:'left'}}>Value Filled</th>
                                        <th style={{textAlign:'left'}}>Error</th>
                                        <th style={{textAlign:'left'}}>Remarks</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={{maxWidth:"150px"}}>
                                                <Text variant={'large'}>Is an Aerodrome Manual enclosed with this application?</Text>
                                            </td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{enclosed===true?'Yes':'No'}</em> {/* Fix spelling in db*/}
                                                </Text>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{maxWidth:"150px"}}>
                                                <Text variant={'large'}>Aerodrome Manual</Text>
                                            </td>
                                            <td>
                                                <div class="button-wrap">
                                                    <form method="get">
                                                        <a href={manual}>Download Manual</a>
                                                    </form>
                                                </div>
                                            </td>
                                            <td style={{textAlign:'center'}}>
                                                <Checkbox checked={manual.checked} 
                                                    onChange={this.handleManualCheckboxChange} />
                                            </td>
                                            <td>
                                                <TextField 
                                                    name="suggestion"
                                                    onChange={this.handleManualValueChange}
                                                    value={manual.suggestion}
                                                    disabled={!manual.checked}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{maxWidth:"150px"}}>
                                                <Text variant={'large'}>If no, when this is likely to be submitted to DGCA.</Text>
                                            </td>
                                            <td>
                                                <Text variant={'large'}><em>{indicateDGCA}</em></Text>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{maxWidth:"150px"}}>
                                                <Text variant={'large'}>Approval Status</Text>
                                            </td>
                                            <td>
                                            <Dropdown
                                                    placeholder="Select Status"
                                                    options={this.statusOptions}
                                                    onChange={(e,i) => this.setState({status: i.key})}
                                                    />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <Stack horizontal tokens={stackTokens}>
                                    <DefaultButton text="Back" allowDisabledFocus/>

                                    <PrimaryButton 
                                        onClick={()=> {
                                            form6funstion({
                                                variables: {
                                                    //all member including defect and error
                                                    id: this.props.match.params.id,
                                                    manual: manual.data,
                                                    manual_defect: manual.checked,
                                                    manual_error: manual.suggestion,
                                                    enclosed: enclosed,
                                                    indicateDGCA: indicateDGCA,
                                                    status: status
                                                }
                                            })
                                            
                                        }}
                                        text="Next" 
                                        allowDisabledFocus />
                                </Stack>
                        </Card.Section>
                    </Card>
                </div>
            </div>
                    )
                }
            }
            </Mutation>
        )
    }
}

const FORM6 = gql`
mutation UpdateForm6(
    $id: String!
    $manual: String
    $manual_defect: Boolean
    $manual_error: String
    $enclosed: Boolean
    $indicateDGCA: String
    $status: FormStatus
  ) {
    updateForm6(
      id: $id
      input: {
        manual: {
          data: $manual
          checked: $manual_defect
          suggestion: $manual_error
        }
        enclosed: $enclosed
        indicateDGCA: $indicateDGCA
        status: $status
      }
    )
  }
  
`;
