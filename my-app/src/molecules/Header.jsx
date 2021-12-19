import React, { useContext } from "react";
import { UserContext } from '../contexts/UserContext';
import { http } from "../utils/httpClient";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Link,
  useHistory
} from 'react-router-dom';
// import "./Header.scss";

const Header = () => {
  const {user, setUser} = useContext(UserContext);
  const history = useHistory();
  const logout = async ()=> {
    const setLogout = '/api/user/logout';
    const postCurrentUser = await http.post(setLogout);
    
    console.log('postCurrentUser')
    console.log(postCurrentUser)
    console.log('postCurrentUser.loggedOut')
    console.log(postCurrentUser.loggedOut)

    setUser(null)
    history.push('/login');
  }
  return (
    <header className="navbar navbar-dark navbar-expand-md bg-primary d-flex justify-content-between flex-wrap align-items-center">
      <ul className="navbar-nav justify-content-start">
        <li className="nav-item">
          <Link to="/user/settings" className="nav-link d-flex">Ustawienia</Link>
        </li>
        <li className="nav-item">
          <Link to="/user/account" className="nav-link d-flex">Konto</Link>
        </li>
      </ul>
      {user ? (
        <button className="btn btn-info mr-1"
        // <button className="btn btn-light mr-1"
        // <button className="btn btn-danger mr-1"
          onClick={() => {
            logout();
          }}
        >
          Wyloguj
        </button>
      ) : (
        false
      )}
        
    </header>
  );
};

export default Header;
