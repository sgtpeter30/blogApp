import React, { createContext, useState, useContext } from 'react'

export const LoginContext = createContext(); 
export const LoginUpdateContext = React.createContext();



export function useLogin() {
    // return {login, isloggin} = useContext(LoginContext);
}
export function useLoginUpdate() {
    return useContext(LoginUpdateContext)
}



export function LoginProvider({children}) {

    const [islogged, setislogged] = useState(false);
    
    console.log('islogged - CONTEXT')
    console.log(islogged)
    
    function toggleLogin(){
        setislogged(true);
        console.log('islogged - CONTEXT CHANGE')
        console.log(islogged)
    }
    
    return(
        <LoginContext.Provider value={{islogged, setislogged}}>
            <LoginUpdateContext.Provider value={toggleLogin}>
                {children}
            </LoginUpdateContext.Provider>
        </LoginContext.Provider>
    )
}