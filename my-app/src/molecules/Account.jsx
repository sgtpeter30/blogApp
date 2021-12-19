import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/UserContext'



const Account = () => {
    const {user} = useContext(UserContext);
    // const UsersTable = JSON.parse(localStorage.getItem('Users'));

    if(!user){
        return null;
    }

    return (
        <div>
            <h2 className=" d-flex justify-content-center my-4">
                Witaj strudzony wędrowcze
            </h2>
            
            <div className="row d-flex">
                <div className="col-12 col-md-6 justify-content-center align-items-center d-flex"><span>Nazwa konta: {user.username}</span></div>
                {/* <div className="col-12 col-md-6 justify-content-center align-items-center d-flex"><span>Nazwa konta: {User}</span></div> */}
                {/* <div className="col-12 col-md-6"><img src={UserTableState[ActiveUserIndex].avatar} alt="avatar"/></div> */}
            </div>

            {/* {User} */}
            {/* {user.user} */}
            {/* {JSON.stringify(user, null, 2)} */}

            

            {/* <Link to="/settings"/> */}
            


        </div>
    );
};

export default Account;