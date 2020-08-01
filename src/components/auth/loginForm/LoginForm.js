import React,{ useState } from 'react'

//graphql
import gql from 'graphql-tag';
import { useLazyQuery } from '@apollo/react-hooks';

//context
import { useUserDispatch } from "../../../context/UserContext";

//ui
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Text, PrimaryButton, MessageBar, MessageBarType } from 'office-ui-fabric-react';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { Card } from '@uifabric/react-cards';

const styles = {
    cardStyles: {
        root: {
          background: 'white',
          paddingTop: 30,
          paddingLeft: 50,
          paddingRight: 50,
          paddingBottom: 50,
          width: '100%',
          maxWidth: '100%',
          margin: 'auto',
          marginTop: 60,
        }
    }
}

const classNames = mergeStyleSets({
    pivot: {
        margin: 'auto',
    }
});

function LoginForm(props) {

    const dispatch = useUserDispatch();

    const [loginValue, setLoginValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [certKey, setCertKey] = useState(null);
    const [privateKey, setPrivateKey] = useState(null);

    const LOGIN = gql`
query SignIn(
    $email: String!,
    $password: String!,
    $signCertFile: Upload!,
    $privatekeyFile: Upload! ){
      signIn(
        email: $email,
        password: $password,
        privatekeyFile: $privatekeyFile,
        signCertFile: $signCertFile){
      token
      user{
        email
      }
        }
    }`;

    const [ loginFunction,{loading, error, data }] = useLazyQuery(LOGIN);

    if(error) {
        console.log(error);
    }
    
    if(data) {
        // console.log(data.signIn);
        localStorage.setItem('id_token', data.signIn.token)
        dispatch({ type: 'LOGIN_SUCCESS' })
        props.history.push('/app/dashboard')
    }

    return (
            <> 
                <div className="ms-Grid-row" style={{paddingBottom:'300px'}}>
                    <div className={`s-Grid-col ms-sm6 ms-xl6 ${classNames.pivot}`}>
                        <Card styles={styles.cardStyles}>
                            <Card.Section>                
                            {error ? <MessageBar messageBarType={MessageBarType.error} isMultiline={false} dismissButtonAriaLabel="Close" >There is an error processesing your request</MessageBar>:null}
                            <Text variant={'xxLarge'}>Login Form Airport Licensing App</Text>
                            <TextField
                                disabled={loading} 
                                name="Email" 
                                value={loginValue} 
                                onChange={(e) => {setLoginValue(e.target.value)}} 
                                label="Email"
                            />
                            <TextField
                                disabled={loading} 
                                name="phone"
                                type="password" 
                                value={passwordValue} 
                                onChange={(e)=>{setPasswordValue(e.target.value)}} 
                                label="Password"
                            />
                            <div className="button-wrap">
                                <label className="new-button" htmlFor="upload1"> Upload Private Key File
                                    <input id="upload1" name="grid" type="file" onChange={({target: {files}}) => {
                                        const file = files[0]
                                        file && setPrivateKey(file)}}/>
                                </label>
                                {privateKey!=null ? `${privateKey.name}` : ''}
                            </div>
                            <div className="button-wrap">
                                <label className="new-button" htmlFor="upload2"> Upload Cert Key File
                                    <input id="upload2" name="grid" type="file" onChange={({target: {files}}) => {
                                        const file = files[0]
                                        file && setCertKey(file)}}/>
                                </label>
                                {certKey!=null ? `${certKey.name}` : ''}
                            </div>
                            <PrimaryButton 
                                disabled={loading} 
                                text="Submit" 
                                onClick={() =>  {
                                        loginFunction({variables: {email: loginValue, password: passwordValue, privatekeyFile: privateKey, signCertFile: certKey}})
                                    }
                                }
                            />
                            </Card.Section>
                        </Card>
                    </div>
                </div>
            </>
    )
}

export default LoginForm;