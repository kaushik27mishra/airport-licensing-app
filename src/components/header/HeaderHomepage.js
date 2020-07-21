import React from 'react';

//components
import { Link } from 'react-router-dom';
//ui
import { Text } from 'office-ui-fabric-react';

// styles
import './style.css'

function HeaderHomepage() {
    return (
        <div className="ms-Grid-row">
            <div style={{height:'75px',padding:'0em',margin:'0',display:'flex',flexDirection:'row',backgroundColor:'#FFFFFF'}}>
                <Text style={{marginTop:'10px',marginLeft:'40px',height:'100%',fontSize:'35px'}} variant={'medium'} nowrap>Airport Authority of India</Text>
                <div style={{marginLeft:'67%',paddingTop:"20px"}}>
                    <Link to='/login'>Login</Link>
                </div>
            </div>
        </div>
    )
}

export default HeaderHomepage
