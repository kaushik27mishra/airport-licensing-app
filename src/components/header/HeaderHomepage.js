import React from 'react';

//components
import { Link } from 'react-router-dom';

// styles
import './style.css'

function HeaderHomepage() {
    return (
        <div className="ms-Grid-row">
            <div style={{height:'75px',padding:'0em',margin:'0',display:'flex',flexDirection:'row'}}>
                <h1 style={{color:'#FFFFFF',paddingLeft:'20px',height:'14px'}}>
                    Airport Authority of India Ltd.
                </h1>
                <div style={{marginLeft:'70%',paddingTop:"20px"}}>
                    <Link to='/login'>Login</Link>
                </div>
            </div>
        </div>
    )
}

export default HeaderHomepage
