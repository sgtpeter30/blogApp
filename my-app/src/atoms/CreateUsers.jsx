import React, { useEffect, useState} from 'react';
import { http } from '../utils/httpClient';

const CreateUsers = () => {
    const [UsersTable, setUsersTable] = useState([])
    useEffect


    const UsersTableLink = 'https://jsonplaceholder.typicode.com/users';
    useEffect(() => {
        const getData = async () => {
            const res = await http.get(UsersTableLink);
            if (res) {
              setUsersTable(res);
              console.log('Ciekawe co tu się dzieje')
              console.log(UsersTable)
            }
          };
          getData();
    }, [])
    
    console.log(UsersTable)
    console.log("UsersTable iteration")
    console.log(UsersTable)
    UsersTable.map(item => {
        console.log(item)
        // console.log(JSON.stringify(item))
    })
    return (
        {UsersTable}
    );
};

export default CreateUsers;




