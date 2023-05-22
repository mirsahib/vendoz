import React, { createContext, useEffect, useState } from "react";
import { AuthSuccessResponse } from "@/lib/types";

type IUser = AuthSuccessResponse['user']
interface AuthContextInterface {
    user:boolean,
    saveUser:(user:IUser)=>void
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
        const record = sessionStorage.getItem('user')
        if(record !=null){
            setUser(true)
        }
    },[])

    const saveUser = (user:IUser)=>{
        setUser(true)
        sessionStorage.setItem('user', JSON.stringify(user))
    }
    const deleteUser = ()=>{
        setUser(false)
        sessionStorage.setItem('user', "")
    }

	return (
		<AuthContext.Provider value={{ user,saveUser,deleteUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;