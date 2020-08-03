import React, {useEffect, useState} from 'react'
import { useLazyQuery } from '@apollo/react-hooks';
import { gql } from '@apollo/react-hooks';
import axios from "axios";
import { CompoundButton } from 'office-ui-fabric-react';

const file = async (url) => {
    const data = await axios.get(url);
    return data.data;
};

function Download(props) {
    const [generateLicense, { loading, data }] = useLazyQuery(LICENSE);
    const [download, setDownload] = useState(null);
    useEffect(()=> {
        if(data){
            (async () => setDownload(await file(data.generateLicense.license)))();
        }
    }, [data]);

    
    if(loading)
        return 'loading'

    if(download){
        return (<div style={{paddingLeft:'550px'}} className="ms-Grid-row">
                    <a download="Doc.pdf" href={`data:application/pdf;base64,${download}`}>Download Now</a>
                </div>);
    }
    if(data)console.log(data);
    return (
        <div className="ms-Grid-row">
            <div style={{textAlign: "center",margin:"0 auto"}}>
                <CompoundButton primary secondaryText="Click to generate link" onClick={() => {
                    generateLicense({ variables: {id: props.id,year: 20} })
                }}>
                    Download License
                </CompoundButton>    
            </div>
        </div>
    )
}

export default Download

const LICENSE=gql`
query generateLicense($id: String!,$expiryYears: Int) {
	generateLicense(id:$id,expiryYears:$expiryYears) {
    license
  }
}
`;
