import React from 'react'

//components
import { Link } from 'react-router-dom';
import HeaderHomePage from '../../components/header/HeaderHomepage'
import Error404 from '../../assets/Error404.png'

//ui
import { Text, Stack } from 'office-ui-fabric-react';

import './style.css'

const stackTokens = { childrenGap: 20 };

function Error() {
    return (
        <div id='error'>
            <div className="ms-Grid-row">
                <HeaderHomePage/>
            </div>
            <Stack tokens={stackTokens}>
                <Stack.Item align="center">
                    <img src={Error404} alt="404 NOT FOUND"/>
                </Stack.Item>
                <Stack.Item align="center">
                    <Text variant={'mega'} 
                        style={{color:'#000000',marginBottom:"10px"}}>
                            404 NOT FOUND
                    </Text>
                </Stack.Item>
                <Stack.Item align="center">
                        <Link to='/' style={{color:'#0052D4',marginBottom:"10px", fontSize:'25px'}}>
                            Click here to go back to home
                        </Link>
                </Stack.Item>
                <br/><br/>
            </Stack>
        </div>
    )
}

export default Error
