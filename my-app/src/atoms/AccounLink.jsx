import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Link,
} from 'react-router-dom';


  const AccountLink = () => {
      return (
          <div>
              <Link to="/account">settings</Link>
          </div>
      );
  };
  
  export default AccountLink;
  