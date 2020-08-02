import React from 'react'

//ui
import { Text, Checkbox } from 'office-ui-fabric-react';
import { TextField} from 'office-ui-fabric-react/lib/TextField';


function DGCAChecklist(props) {

    return (
        <>
            <tr>
                {
                   props.value!=null? 
                   <>
                   <td style={{maxWidth:"150px"}}>
                    <Text variant={'large'}>{props.field}</Text>
                </td>
                
                <td>
                    <Text variant={'large'}><em>{props.value.data}</em></Text>
                </td>
                
                <td style={{textAlign:'center'}}>
                    <Checkbox checked={props.value.checked} onChange={props.onChange} />
                </td>
                <td>
                    <TextField 
                        name="suggestion"
                        onChange={props.handleChange}
                        value={props.value.suggestion}
                        disabled={!props.value.checked}
                    />
                </td>
                </>
                : null
                }
                
            </tr>
        </>
    )
}

export default DGCAChecklist
