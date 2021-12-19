import React , { createContext, useState, useContext } from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Link,
} from 'react-router-dom';

import Account from './molecules/Account';
import Login from './molecules/Login';

// import { LoginProvider } from './contexts/LoginContext';
import { LoginContext } from './contexts/LoginContext';
import { useLogin, useLoginUpdate } from './contexts/LoginContext';


// export const LoggedContext = React.createContext()


function App() {
    const [islogged, setislogged] = useState(false)
    // function toggleLogin(){
    //     setislogged(true);
    // }
    // const {userLogged, isloggin} = useLogin();
    // const  {login, isloggin} = useContext(LoginContext);

    // const {userLogged2, setislogged} = useContext(LoginProvider)
    // const userLogged2 = useContext(LoginContext)
    // const userLogged3 = useLogin();

    // console.log('islogged')
    // console.log(islogged);

    
    console.log('userLogged')
    console.log(islogged)
    // console.log(userLogged)
    // console.log(login)
    // console.log('userLogged2')
    // console.log(userLogged2)
    // console.log('userLogged3')
    // console.log(userLogged3)
    return ( 
        <Router>
            {/* <LoginProvider> */}
            <LoginContext.Provider value={{islogged, setislogged}}>
                <div className="container">
                    <Route exact to="/">
                        {islogged
                            ? <Redirect to="/account"/>
                            : <Login />
                        }
                    </Route>
                    <Route exact to="/account">
                        <Account />
                    </Route>
                </div>
            </LoginContext.Provider>
            {/* </LoginProvider> */}
        </Router>
    );
};

export default App;




<Route path = "/" render={(path)=> {
                            console.log(path.location.pathname ); 
                            let curr_path = path.location.pathname;
                            // {curr_path = '/account' ? (<Link to="/account">settings</Link>) : (false) }
                            console.log('curr_path')
                            console.log(curr_path)
                            console.log('curr_path equal')
                            console.log(curr_path == '/account')
                            if(curr_path != '/account'){
                                // <Link to="/account">settings</Link>
                                <AccountLink/>
                                console.log('wololo')
                            }
                        }}>
                    </Route> 