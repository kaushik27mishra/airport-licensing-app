import React, {Component} from 'react';

import { Text } from 'office-ui-fabric-react';
import { Card } from '@uifabric/react-cards';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';

import { ScrollablePane, ScrollbarVisibility } from 'office-ui-fabric-react/lib/ScrollablePane';
import { Sticky, StickyPositionType } from 'office-ui-fabric-react/lib/Sticky';
import { DefaultButton, PrimaryButton, Stack, IStackTokens } from 'office-ui-fabric-react';

import ReactJson from 'react-json-view';
import JSONViewer from 'react-json-viewer';


import gql from 'graphql-tag';
import { Mutation, Query } from '@apollo/react-components';
import { client } from '../..';

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

class HistoryListPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            index:0,
            data_len:0,
            history_json_array: null,
        }
    }
    componentDidMount() {
        // const id = this.props.match.params.id;
        const id = "5e7f4c1f-ad9b-49d4-9760-69625c2bbe30";
        client.query({
            query : gql`
            query LicenseHistory($id: String!){
                licenseHistory(id: $id)
              }`,
              variables: { id: id }
        }).then(res =>{
            res=res.data.licenseHistory;
            var obj_list = [];

            console.log("successfully fetched");
            
            for(var i=0;i<res.length;i++)
            {
                var obj = {};
                obj.s_no = i+1;
                obj.transaction_id = res[i].txId;
                obj.DateTime = Date(res[i].timestamp.seconds*1000);
                obj.data = JSON.parse(res[i].data);
                // console.log(JSON.parse(temp[i].data));
                // console.log(Date(temp[i].timestamp.seconds*1000));
                obj_list.push(obj);
            }
            console.log(obj_list);
            

            this.setState({
                history_json_array:obj_list,
                data_len : obj_list.length,
            })
        })
    }

    render(){

        var json_data = [
            {
                "id": "7dd8ef90-efba-4b6b-9963-5465f17ccc4a",
                "aerodrome": {
                  "placeName": "askdbakjsd",
                  "state": "sdassd",
                  "city": "asdas",
                  "situation": "asdasd",
                  "grid": "https://ipfs.infura.io:5001/api/v0/cat?arg=QmYXZxaVGRcXp4zU7JjFipbKi8S2hYrSkndZY5JPa1nqfj",
                  "runways": [
                    {
                      "orentatation": "vsbdjhv",
                      "length": "asdvadsuhv"
                    }
                  ],
                  "owner": "",
                  "lat": "dasd",
                  "long": "sdfsdf",
                  "status": "Edited"
                },
                "operator": "2c118914-5a3e-46b9-8e4b-4935a5cbd5be",
                "status": "Waiting_For_Data",
                "inspector": "43bf0902-66b4-45a2-8776-b15af20f1dad",
                "handbookForm1": {
                  "rwstrip": {
                    "dataV": 1,
                    "dataS": "f"
                  },
                  "rwlen": {
                    "dataV": 2,
                    "dataS": "fh"
                  },
                  "rwwid": {
                    "dataV": 1,
                    "dataS": "fhgj"
                  },
                  "rwobj": {
                    "dataV": 1,
                    "dataS": "t"
                  },
                  "rwjun": {
                    "dataV": 2,
                    "dataS": "gh"
                  },
                  "status": "Submmited"
                },
                "handbookForm2": {
                  "indwin": {
                    "dataV": 3,
                    "dataS": "gj"
                  },
                  "indamp": {
                    "dataV": 2,
                    "dataS": "charcha"
                  },
                  "indsig": {
                    "dataV": 2,
                    "dataS": " vb"
                  },
                  "status": "Submmited"
                },
                "handbookForm5": {
                  "sgaps": {
                    "data": "th"
                  },
                  "adequa": {
                    "data": "dg"
                  },
                  "lstapl": {
                    "data": "fh"
                  },
                  "sfypro": {
                    "data": "cvu"
                  },
                  "hccmpilnt": {
                    "data": "cv"
                  },
                  "status": "Submmited"
                },
                "handbookForm4": {
                  "bdwall1": {
                    "dataL": false,
                    "dataS": "yr"
                  },
                  "bdwall2": {
                    "dataL": false,
                    "dataS": "fh"
                  },
                  "drainage": {
                    "dataL": true,
                    "dataS": "dg"
                  },
                  "cpit": {
                    "dataL": false,
                    "dataS": "chh"
                  },
                  "status": "Submmited"
                },
                "handbookForm6": {
                  "rwrgme": {
                    "data": "ty"
                  },
                  "flded": {
                    "data": "ryh"
                  },
                  "rwdsusd": {
                    "data": "dg"
                  },
                  "eseils": {
                    "data": "xvb"
                  },
                  "status": "Submmited"
                },
                "handbookForm3": {
                  "orien": {
                    "dataL": true,
                    "dataS": "hj"
                  },
                  "surcon": {
                    "dataL": false,
                    "dataS": "hj"
                  },
                  "slope": {
                    "dataL": true,
                    "dataS": "hjk"
                  },
                  "signages": {
                    "dataL": false,
                    "dataS": "bhn"
                  },
                  "status": "Submmited"
                }
              },
              {
                "id": "7dd8ef90-efba-4b6b-9963-5465f17ccc4a",
                "aerodrome": {
                  "placeName": "askdbakjsd",
                  "state": "sdassd",
                  "city": "asdas",
                  "situation": "asdasd",
                  "grid": "https://ipfs.infura.io:5001/api/v0/cat?arg=QmYXZxaVGRcXp4zU7JjFipbKi8S2hYrSkndZY5JPa1nqfj",
                  "runways": [
                    {
                      "orentatation": "vsbdjhv",
                      "length": "asdvadsuhv"
                    }
                  ],
                  "owner": "",
                  "lat": "dasd",
                  "long": "sdfsdf",
                  "status": "Edited"
                },
                "operator": "2c118914-5a3e-46b9-8e4b-4935a5cbd5be",
                "status": "Waiting_For_Data",
                "inspector": "43bf0902-66b4-45a2-8776-b15af20f1dad",
                "handbookForm1": {
                  "rwstrip": {
                    "dataV": 1,
                    "dataS": "f"
                  },
                  "rwlen": {
                    "dataV": 2,
                    "dataS": "fh"
                  },
                  "rwwid": {
                    "dataV": 1,
                    "dataS": "fhgj"
                  },
                  "rwobj": {
                    "dataV": 1,
                    "dataS": "t"
                  },
                  "rwjun": {
                    "dataV": 2,
                    "dataS": "gh"
                  },
                  "status": "Submmited"
                },
                "handbookForm2": {
                  "indwin": {
                    "dataV": 3,
                    "dataS": "gj"
                  },
                  "indamp": {
                    "dataV": 2,
                    "dataS": "charcha"
                  },
                  "indsig": {
                    "dataV": 2,
                    "dataS": " vb"
                  },
                  "status": "Submmited"
                },
                "handbookForm5": {
                  "sgaps": {
                    "data": "th"
                  },
                  "adequa": {
                    "data": "dg"
                  },
                  "lstapl": {
                    "data": "fh"
                  },
                  "sfypro": {
                    "data": "cvu"
                  },
                  "hccmpilnt": {
                    "data": "cv"
                  },
                  "status": "Submmited"
                },
                "handbookForm4": {
                  "bdwall1": {
                    "dataL": false,
                    "dataS": "yr"
                  },
                  "bdwall2": {
                    "dataL": false,
                    "dataS": "fh"
                  },
                  "drainage": {
                    "dataL": true,
                    "dataS": "dg"
                  },
                  "cpit": {
                    "dataL": false,
                    "dataS": "chh"
                  },
                  "status": "Submmited"
                },
                "handbookForm6": {
                  "rwrgme": {
                    "data": "ty"
                  },
                  "flded": {
                    "data": "ryh"
                  },
                  "rwdsusd": {
                    "data": "dg"
                  },
                  "eseils": {
                    "data": "xvb"
                  },
                  "status": "Submmited"
                },
                "handbookForm3": {
                  "orien": {
                    "dataL": true,
                    "dataS": "hj"
                  },
                  "surcon": {
                    "dataL": false,
                    "dataS": "hj"
                  },
                  "slope": {
                    "dataL": true,
                    "dataS": "hjk"
                  },
                  "signages": {
                    "dataL": false,
                    "dataS": "bhn"
                  },
                  "status": "Submmited"
                }
              }
        ]

        var ind = parseInt(this.state.index)

        const backhandler = () =>{
            var ind = this.state.index;
            if(ind>=1)
            {
                this.setState({
                    index:ind-1
                })
                console.log("back");
            }
        }

        const nexthandler = () =>{
            var ind = this.state.index;
            if(ind<(this.state.data_len-1))
            {
                this.setState({
                    index:ind+1
                })
                console.log("next");
            }
        }

        console.log(this.state.history_json_array)

        if(this.state.data_len===0)
        {
        return(
            <h1>Loading data</h1>
        )
        }

        return(
            <div>
                <div className="ms-Grid-row" style={{paddingBottom:'100px'}}>
                    <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.pivot}`}>
                        <Card styles={styles.cardStyles}>
                            <Card.Section>
                                    <Text variant={'xxLarge'}>History</Text>
                                    <div className={`"ms-Grid"`}>
                                    <div>
                                        <h2>Block No.{ind+1}</h2>
                                        <h3>Transaction Id:</h3>
                                        <h4>{this.state.history_json_array[ind].transaction_id}</h4>
                                        <h3>Transaction Date:</h3>
                                        <h4>{this.state.history_json_array[ind].DateTime}</h4>
                                    </div>
                                    <div className={`ms-Grid-row`}>
                                        <div className={`ms-Grid-col ms-sm1 ms-md1 ms-lg1`}>
                                        <PrimaryButton text="Back" onClick={backhandler} allowDisabledFocus />
                                        </div>
                                        <div className={`ms-Grid-col ms-sm10 ms-md10 ms-lg10`}>
                                            <ReactJson src={this.state.history_json_array[ind].data}  
                                            displayDataTypes={false}
                                            collapseStringsAfterLength={15}
                                            collapsed={2}
                                            name={`Block `+(ind+1)}/>
                                        
                                        </div>
                                        <div className={`ms-Grid-col ms-sm1 ms-md1 ms-lg1`}
                                        style={{marginTop:"auto",marginBottom:"auto"}}
                                        >
                                        <PrimaryButton text="Next" onClick={nexthandler} allowDisabledFocus />
                                        </div>
                                    </div>
                                </div>
                            </Card.Section>
                            <PrimaryButton text="Switch to Tabular View" allowDisabledFocus />
                        </Card>
                    </div>
                    
                </div>
            </div>
        );
    }
}
export default HistoryListPage;