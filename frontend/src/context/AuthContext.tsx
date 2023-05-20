import React, { createContext, useEffect, useState } from "react";

interface AuthContextInterface {
    user:boolean,
    saveUser:(userId:string)=>void
    deleteUser:()=>void
}
const defaultAuthContext: AuthContextInterface = {
    user:false,
    saveUser:()=>{},
    deleteUser:()=>{},
};

export const AuthContext = createContext<AuthContextInterface>(
	defaultAuthContext
);

const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user,setUser] = useState<boolean>(false)

    useEffect(()=>{
        const record = sessionStorage.getItem('userId')
        if(record !=null){
            setUser(true)
        }
    },[])

    const saveUser = (userId:string)=>{
        setUser(true)
        sessionStorage.setItem('userId', userId)
    }
    const deleteUser = ()=>{
        setUser(false)
        sessionStorage.setItem('userId', "")
    }

	return (
		<AuthContext.Provider value={{ user,saveUser,deleteUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;