import React, { useContext } from 'react';
import Input from '../atoms/Input';
import { FormProvider as Data, FormContext } from '../contexts/Form';
import { UserContext } from '../contexts/UserContext'
import { UserTableContext } from "../contexts/UserTableContext";


// import { LoggedContext } from '../App'
// import { useLogin, useLoginUpdate } from '../contexts/LoginContext';
// import { LoginProvider } from '../contexts/LoginContext';

// import { LoginContext } from '../contexts/LoginContext';



const Login = (LoginUpdateContext) => {

    // const {userLogged2, setislogged2} = useContext(LoginContext)
    // const {islogged, setislogged} = useContext(LoginContext)
    // useLoginUpdate()
    // const islogged = useContext(LoggedContext);
    // const islogged = useContext(LoginProvider);
    // const {value, input} = useInput();
    // console.log(input);
    // const { toggleLogin } = useContext(LoginUpdateContext)
    // const { toggleLogin } = useContext(LoginUpdateContext)
    // const {useLoginUpdate} = 
    // setislogged(true);



    // console.log("userLogged2");
    // console.log(userLogged2);
    // console.log("islogged");
    // console.log(islogged);
    const {user, setUser} = useContext(UserContext)
    const {UserTableState} = useContext(UserTableContext);

    const onSubmit = async (inputs) => {
        // const UsersTable =  JSON.parse(localStorage.getItem('Users'))
        // const UsersTable =  UserTableState
        // UsersTable.forEach((element, index)=>{
        //     find
        // })
        const activUserLogin = UserTableState.findIndex((element)=>{
            console.log('element.username')
            console.log(element.username)
            console.log('inputs.username')
            console.log(inputs.username)
            console.log('FINDED')
            return element.username == inputs.username;
        })
        console.log(activUserLogin)
        if(
            activUserLogin != -1 && UserTableState[activUserLogin].password == inputs.password
            // inputs.username === 'admin' && inputs.password === '1234'
        ){
            console.log('zalogowany');
            // setislogged(true);
            setUser(inputs.username);
            localStorage.setItem('ActiveUser', inputs.username)
        }else{
            alert('Sprawdź dane logowania!')
        };
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
