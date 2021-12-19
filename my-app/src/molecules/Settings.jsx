import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../contexts/UserContext'
import { FormProvider as Data, FormContext } from '../contexts/Form';
import Input from '../atoms/Input';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";



const Settings = () => {
    const {user, setUser} = useContext(UserContext);
    const renderTooltip = props => (
      <Tooltip {...props}>Podaj adres URL avatara</Tooltip>
    );

    const onSubmit = async (inputs) => {

    // for (const [key, value] of Object.entries(inputs)) {
    //   if(value !== ''){
    //     tempUsersTable[ActiveUserIndex][key] = ''+value+'';
    //     ++control_sign
    //   }
    //     // console.log(`${key}: ${value}`);
    //   }
      
      // console.log(user.login)

    }

    return (
      <div>
        <h2 className=" d-flex justify-content-center my-4">
            Dostosuj swe ustawienia {user.username}
        </h2>
        
        <Data onSubmit={onSubmit}>
            <div className="d-flex col-12 justify-content-start my-2">
              <span className="col-md-6 d-flex justify-content-end">Nowy login</span> <Input type="text" context={FormContext} name="username"/>
            </div>
            <div className="d-flex col-12 justify-content-start my-2">
              <span className="col-md-6 d-flex justify-content-end">Nowe hasło</span><Input type="password" context={FormContext} name="password" />
            </div>
            <div className="d-flex col-12 justify-content-start my-2">
              <span className="col-md-6 d-flex justify-content-end">Powtórz nowe hasło</span><Input type="password" context={FormContext} name="repeat_password" />
            </div>
              {/* <div className="d-flex col-12 justify-content-start my-2">
                <span className="col-md-6 d-flex justify-content-end">Nowy avatar</span>
                <OverlayTrigger placement="right" overlay={renderTooltip}>
                  <div>
                    <Input type="text" context={FormContext} name="avatar" />
                  </div>
                </OverlayTrigger>
              </div> */}

            <div className="col-md-12 d-flex justify-content-center my-2">
              <button className="d-flex btn btn-primary px-3" type="submit">Zmień</button>
            </div>
        </Data>
      </div>

    );
  };
  
  export default Settings;
  