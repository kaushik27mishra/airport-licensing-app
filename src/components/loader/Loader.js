import React from 'react'
import { BoxLoading } from 'react-loadingg';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';

const classNames = mergeStyleSets({
    pivot: {
        margin: 'auto',
    }
});



function Loader() {
    return (
        <div id="loading">
            <div className="ms-Grid-row" style={{height:'600px',width:"800px", margin: '0 auto'}}>
                <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.pivot}`}>
                    <BoxLoading/>
                </div>
            </div>
        </div>
    )
}

export default Loader
