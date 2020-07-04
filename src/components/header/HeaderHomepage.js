import React from 'react';
import { Link } from 'react-router-dom';

function HeaderHomepage() {
    return (
        <div className="ms-Grid" dir="ltr">
            <div className="ms-Grid-row">
                <div style={{height:'75px',padding:'0em',margin:'0',display:'flex',flexDirection:'row'}}>
                    <h1 style={{color:'#4FE5FF',paddingLeft:'20px',height:'14px'}}>
                        Airport Authority of India Ltd.
                    </h1>
                    <div style={{marginLeft:'70%',paddingTop:"20px"}}>
                        <Link style={{fontSize:'20px',color:"#FFFFFF",textDecoration: 'none'}} to='/login'>Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderHomepage
