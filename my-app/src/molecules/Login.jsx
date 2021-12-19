import React, { useContext } from 'react';
import Input from '../atoms/Input';
import { FormProvider as Data, FormContext } from '../contexts/Form';
import { UserContext } from '../contexts/UserContext'
import { http } from "../utils/httpClient";


const Login = () => {

    const {User, setUser} = useContext(UserContext)
    
    
    

    const onSubmit = async (inputs) => {
        const setCurrentUser = async () => {
            // const setCurrentUserPath = "http://localhost:5000/user/login";
            const setCurrentUserPath = "/api/user/login";
            // const postCurrentUser = await http.post(setCurrentUserPath, {'username.login': ""+inputs.username+"", 'username.password': ""+inputs.password+""});
            const postCurrentUser = await http.post(setCurrentUserPath, {'username': inputs.username, 'password': inputs.password});
            
            console.log('postCurrentUser')
            console.log(postCurrentUser)
            setUser(postCurrentUser)
            console.log('User')
            console.log(User)
            console.log('User !== null')
            console.log(User !== null)
        }
        setCurrentUser();

        // const activUserLogin = UserTableState.findIndex((element)=>{
        //     return element.username == inputs.username;
        // })
        // console.log(activUserLogin)
        // if(
        //     activUserLogin !== -1 && UserTableState[activUserLogin].password == inputs.password
        // ){
        //     setUser({login: inputs.username, isLogged: true});
        //     localStorage.setItem('ActiveUser', inputs.username);
        //     localStorage.setItem('isLogged', true);
        // }else{
        //     alert('Sprawdź dane logowania!')
        // };
    };

    return (
        <Data onSubmit={onSubmit}>
            <div className="d-flex col-12 justify-content-start my-2">
                <span className="col-md-6 d-flex justify-content-end">Login</span> <Input type="text" context={FormContext} name="username" />
            </div>
            <div className="d-flex col-12 justify-content-start my-2">
                <span className="col-md-6 d-flex justify-content-end">Login</span> <Input type="password" context={FormContext} name="password" />
            </div>
            
            <div className="col-md-12 d-flex justify-content-center my-2">
              <button className="d-flex btn btn-primary px-3" type="submit">Zaloguj</button>
            </div>
        </Data>
    );
};

export default Login;
