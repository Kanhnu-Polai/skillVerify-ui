import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();
export const AuthProvider = ({children})=>{
    const localUser = JSON.parse(localStorage.getItem("user"));
    const[user,setUser] = useState(localUser);

    const login=(userData)=>{
        setUser(userData);
        localStorage.setItem('user',JSON.stringify(userData));

    };

    const logout = ()=>{
        setUser(null);
        localStorage.removeItem('user');
    };

    return(
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    );


}
export const useAuth = () => useContext(AuthContext);