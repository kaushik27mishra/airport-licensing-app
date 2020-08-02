import React from 'react';

//ui
import { DetailsList } from '@fluentui/react';

import { Query, gql } from '@apollo/react-components'

//columns blueprint
const columns = [
    { key: 'column1', iconName: 'Airplane' ,name: 'Name', fieldName: 'airport', minWidth: 100, maxWidth: 250, isResizable: true },
    { key: 'column2', name: 'City', fieldName: 'city', minWidth: 100, maxWidth: 150, isResizable: true },
    { key: 'column3', name: 'State', fieldName: 'state', minWidth: 100, maxWidth: 150, isResizable: true },
    { key: 'column4', name: 'Owner', fieldName: 'owner', minWidth: 100, maxWidth: 150, isResizable: true },
    { key: 'column5', name: 'Status', fieldName: 'status', minWidth: 100, maxWidth: 150, isResizable: true },
]

const Table = (props) => {
    const onItemInvoked = (item) => {
        props.history.push(`/app/dgca/license/${item.id}/form`)
    }

    return (
      <div data-is-scrollable={true}>
          <Query query={LIST_OF_LICENSE} variables={{ status: "Waiting_For_Data" }}>
          {({ loading, error, data}) => {
              if(loading) return`Loading`
              if(error) return `error`
              console.log(data);
              if(data.licenses.length!==0) {
                return (
                  <DetailsList
                      items={data.licenses.map(i => ({ id: i.id ,airport: i.aerodrome.placeName, city: i.aerodrome.city, state: i.aerodrome.state, owner: i.aerodrome.owner.name, status: i.status}))}
                      columns={columns}
                      onItemInvoked={onItemInvoked}
                      selectionMode={0}
                  />
                )
              }
              else {
                return (
                  <h1>Currently no licenses</h1>
                )
              }

              }
          }
          </Query>
      </div>
    );
};

export default Table;

const LIST_OF_LICENSE = gql`
query Licenses($status: String){
    licenses(filter: {
      status: $status
    }) {
      id
      status
      operator {
        id
        name
      }
      inspector {
        id
        name
      }
      aerodrome {
        placeName
        state
        city
        owner {
          name
        }
      }
    }
  }`;
