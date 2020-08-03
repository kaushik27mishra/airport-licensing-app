import React from 'react'
import { useLazyQuery } from '@apollo/react-hooks';
import { gql } from '@apollo/react-hooks';

function Download(props) {
    const [generateLicense, { loading, data }] = useLazyQuery(LICENSE);
    if(loading)
        return 'loading'

    generateLicense({ variables: {id: props.id,year: 2030} })

    if(data) {
        
    }
    
    return (
        <div className="ms-Grid-row">
            <button onClick={() => {
                

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
