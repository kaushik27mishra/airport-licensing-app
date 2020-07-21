import React,{ useState } from 'react'

//graphql
import { gql, useMutation } from '@apollo/client';

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

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [loginValue, setLoginValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [certKey, setCertKey] = useState(null);
    const [privateKey, setPrivateKey] = useState(null);

    const [loginFunction, { loading: mutationLoading, error: mutationError, data }] = useMutation(LOGIN);

    if(mutationLoading) {
        setIsLoading(true);
        setError(false);
    }

    if(mutationError) {
        setIsLoading(false)
        setError(true);
        dispatch({ type: "LOGIN_FAILURE" });
    }
    
    if(data) {
      localStorage.setItem('id_token', data.token)
      setError(null)
      setIsLoading(false)
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
                                name="Email" 
                                value={loginValue} 
                                onChange={(e) => {setLoginValue(e.target.value)}} 
                                label="Email"
                            />
                            <TextField
                                name="phone"
                                type="password" 
                                value={passwordValue} 
                                onChange={(e)=>{setPasswordValue(e.target.value)}} 
                                label="Password"
                            />
                            <div class="button-wrap">
                                <label class ="new-button" for="upload1"> Upload Private Key File
                                    <input id="upload1" name="grid" type="file" onChange={(e) => setPrivateKey(e.target.files[0])}/>
                                </label>
                                {privateKey!=null ? `${privateKey.name}` : ''}
                            </div>
                            <div class="button-wrap">
                                <label class ="new-button" for="upload2"> Upload Cert Key File
                                    <input id="upload2" name="grid" type="file" onChange={(e) => setCertKey(e.target.files[0])}/>
                                </label>
                                {certKey!=null ? `${certKey.name}` : ''}
                            </div>
                            <PrimaryButton 
                                disabled={isLoading} 
                                text="Submit" 
                                onClick={() =>  loginFunction({variables: {email: loginValue, password: passwordValue, privatekeyFile: privateKey, signCertFile: certKey}})}
                            />
                            </Card.Section>
                        </Card>
                    </div>
                </div>
            </>
    )
}

export default LoginForm;

const LOGIN = gql`
mutation SignIn(
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
    }
`;