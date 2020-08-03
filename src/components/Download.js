import React, {useEffect, useState} from 'react'
import { useLazyQuery } from '@apollo/react-hooks';
import { gql } from '@apollo/react-hooks';
import axios from "axios";

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
        return (<a download="Doc.pdf" href={`data:application/pdf;base64,${download}`}>Download Now</a>);
    }
    if(data)console.log(data);
    return (
        <div className="ms-Grid-row">
            <button onClick={() => {
                generateLicense({ variables: {id: props.id,year: 20} })
            }}>
                Download now
            </button>     
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
