import React, {Component} from 'react';

import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';

import { ScrollablePane, ScrollbarVisibility } from 'office-ui-fabric-react/lib/ScrollablePane';
import { Sticky, StickyPositionType } from 'office-ui-fabric-react/lib/Sticky';
import { PrimaryButton } from 'office-ui-fabric-react';

import JSONViewer from 'react-json-viewer';


import gql from 'graphql-tag';
import { client } from '../..';

const classNames = mergeStyleSets({
    pivot: {
        margin: 'auto',
    }
});

class HistoryTablePage extends Component{
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

        // console.log(this.state.history_json_array)

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
                                    {/* <Text variant={'xxLarge'}>History</Text> */}
                        <div className={`"ms-Grid"`}>
                            <div className={`ms-Grid-row`} style={{minHeight:'700px'}}>
                                    <div className={classNames.wrapper}>
                                        <ScrollablePane scrollbarVisibility={ScrollbarVisibility.auto}>
                                            <Sticky stickyPosition={StickyPositionType.Header}>
                                                <h1 className={classNames.header}>History</h1>
                                                <PrimaryButton text="Switch to List View" allowDisabledFocus />
                                            </Sticky>
                                            <JSONViewer json = {this.state.history_json_array}/>
                                        </ScrollablePane>
                                    </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}
export default HistoryTablePage;