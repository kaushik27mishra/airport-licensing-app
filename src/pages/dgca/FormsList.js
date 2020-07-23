import React from 'react';

// components
import FormList from '../../components/cards/formList/FormList'

//ui
import { Text } from 'office-ui-fabric-react';

const FormCards  = () => (

    <>
            <Text variant={'xxLarge'}> {/*Trying to give left padding, didn't work*/}
                Forms submitted for licensing
            </Text> 
            <FormList user_type="dgca" submission='null'/>
    </>
)
    

export default FormCards;
