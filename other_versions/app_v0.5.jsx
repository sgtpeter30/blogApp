import React, { useState, useMemo, useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Link,
} from "react-router-dom";

import Account from "./molecules/Account";
import Settings from "./molecules/Settings";
import Login from "./molecules/Login";
import Header from "./molecules/Header";
import CreateUsers from "./atoms/CreateUsers";

import { http } from "./utils/httpClient";

import { UserContext } from "./contexts/UserContext";
import 'bootstrap/dist/css/bootstrap.css';
import './styles/custom.scss'

const App = () => {
  const [user, setUser] = useState(null);
  const User = useMemo(() => ({ user, setUser }), [user, setUser]);
  
  // if(ActiveUser){
    // setUser(ActiveUser);
    
  // }
  
  const addPasswords = () => {
    const avatarTable = [
      'https://avatarfiles.alphacoders.com/113/113779.jpg',
      'https://avatarfiles.alphacoders.com/183/18329.jpg',
      'https://avatarfiles.alphacoders.com/154/154700.jpg',
      'https://avatarfiles.alphacoders.com/203/203437.jpg',
      'https://avatarfiles.alphacoders.com/992/99262.jpg',
      'https://avatarfiles.alphacoders.com/102/102334.jpg',
      'https://avatarfiles.alphacoders.com/166/166309.jpg',
      'https://avatarfiles.alphacoders.com/169/169057.jpg',
      'https://avatarfiles.alphacoders.com/172/172956.jpg',
      'https://avatarfiles.alphacoders.com/443/44395.jpg',
    ]
    if(UsersTable.length != undefined){
      UsersTable.forEach((element, index) =>{      
        if(index == 0){
          UsersTable[index].username = 'Tyrael';
          UsersTable[index].password = '1234';
        }else{
          UsersTable[index].password = Math.floor(1000 + Math. random() * 9000).toString();
        }
        UsersTable[index].avatar = avatarTable[index];
      });
      localStorage.setItem('Users', JSON.stringify(UsersTable))
    }
  }

  const [UsersTable, setUsersTable] = useState({});
  const UsersTableLink = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    const getData = async () => {
      const res = await http.get(UsersTableLink);
      if (res) {
        setUsersTable(res);
      }
    };
    if(localStorage.getItem('Users') == null){
      console.log("OJEJ")
      getData();
    }else{
      let newItems = localStorage.getItem('Users')
      console.log("OJEJOJEJOJEJOJEJOJEJOJEJOJEJOJEJOJEJOJEJOJEJOJEJOJEJOJEJOJEJOJEJOJEJOJEJOJEJOJEJOJEJOJEJOJEJOJEJOJEJOJEJ")
      setUsersTable(newItems)
    }
  }, [UsersTable]);

  if(localStorage.getItem('Users') == null){
    addPasswords();
  }
  useEffect(() => {
    // const ActiveUser = {}
    if(localStorage.getItem('ActiveUser') !== null){
      console.log('I AM ALIVE !!!!')
      const ActiveUser = localStorage.getItem('ActiveUser')
      console.log('START+++++++++++++++++++++++++++++++')
      console.log(User)
      console.log(ActiveUser)
      console.log('+++++++++++++++++++++++++++++++KONIEC')
      // User.setUser(ActiveUser);
    }else{
      const ActiveUser = {};
    }
    
  }, [User])

  return (
    <Router>
      
      <UserContext.Provider value={User}>
        
        {/* <UserContext.Provider value={{user, setUser}}> */}
        {/* <CreateUsers /> */}

        {/* {User.user ? <Redirect to="/user/account" /> : <Redirect to="/login" />} */}
        {User.user ? <Redirect to="/user/settings" /> : <Redirect to="/login" />}
        <Route exact path="/login">

          <h2 className=" d-flex justify-content-center py-3 mb-4 bg-secondary">
                Zaloguj się aby zawitać do Sanktuarium
          </h2>
          <div className="container ">
            <Login />
          </div>
        </Route>

          {/* <div>
                        <span>name</span>
                        <span>{UsersTable.name}</span>
                    </div> */}
          {/* {User.user  ? (<button onClick={() => {
              setUser(null)
            }}>Wyloguj</button>
            ) : (false)
        } */}

          <Route path="/user">
            <Header />
            <div className="container">
              <Route exact path="/user/account">
                <Account />
              </Route>
              <Route exact path="/user/settings">
                <Settings />
              </Route>
            </div>
          </Route>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
