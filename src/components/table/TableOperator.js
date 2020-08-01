import React from 'react'

import { DetailsList } from '@fluentui/react';

import { Link } from 'react-router-dom'

import { Query, gql } from '@apollo/react-components'

const columns = [
    { key: 'column1', iconName: 'Airplane' ,name: 'Name', fieldName: 'airport', minWidth: 100, maxWidth: 250, isResizable: true },
    { key: 'column2', name: 'City', fieldName: 'city', minWidth: 100, maxWidth: 150, isResizable: true },
    { key: 'column3', name: 'State', fieldName: 'state', minWidth: 100, maxWidth: 150, isResizable: true },
    { key: 'column4', name: 'Owner', fieldName: 'owner', minWidth: 100, maxWidth: 150, isResizable: true },
    { key: 'column5', name: 'Status', fieldName: 'status', minWidth: 100, maxWidth: 150, isResizable: true },
]


function TableOperator(props) {

    const onItemInvoked = (item) => {
      props.history.push(`/app/operator/license/${item.id}/form_list`)
    }

    return (
        <Query query={LIST_OF_LICENSE} variables={{ operator: props.id }}>
            {({ loading, error, data}) => {
                    if(loading) return`Loading`
                    if(error) 
                      console.log(error);
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
                    return (
                      <Link to="/app/operator/license_create_form" >
                        Click here to apply for a license
                      </Link>
                    )
                }
            }
        </Query>
    )
}

export default TableOperator;

const LIST_OF_LICENSE = gql`
query Licenses($operator: String){
    licenses(filter: {
      operator: $operator
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
