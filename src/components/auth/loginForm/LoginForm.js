import React,{useState} from 'react'

//context
import { useUserDispatch, loginUser } from "../../../context/UserContext";

//ui
import { TextField} from 'office-ui-fabric-react/lib/TextField';
import { Text, PrimaryButton, Stack, DefaultButton,ActionButton} from 'office-ui-fabric-react';

const fileRequestIcon = { iconName: 'Upload' };

function LoginForm(props) {
    var userDispatch = useUserDispatch();
    var [isLoading, setIsLoading] = useState(false);
    var [error, setError] = useState(null);
    var [activeTabId, setActiveTabId] = useState(0);
    var [nameValue, setNameValue] = useState("");
    var [loginValue, setLoginValue] = useState("");
    var [passwordValue, setPasswordValue] = useState("");
    const [percentComplete, setPercentComplete] = React.useState(0);
    
    return (
        <div>
            <Text variant={'xxLarge'} >Login form</Text>
                <TextField 
                    name="Email" 
                    onChange={(e) => {setLoginValue(e.target.value)}} 
                    value={loginValue} 
                    label="Email"
                />
                <TextField
                    name="phone"
                    type="password" 
                    onChange={(e)=>{setPasswordValue(e.target.value)}} 
                    value={passwordValue} 
                    label="Password"
                />
                <PrimaryButton 
                    onClick={() => loginUser(userDispatch,loginValue,passwordValue,props.history,setIsLoading,setError)} 
                    text="Submit"  
                    allowDisabledFocus
                />
                <ActionButton iconProps={fileRequestIcon} allowDisabledFocus>Sign Certi</ActionButton>
                <ActionButton iconProps={fileRequestIcon} allowDisabledFocus>Key</ActionButton>
        </div>
    )
}

export default LoginForm;