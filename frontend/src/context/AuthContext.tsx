import React, { createContext, useEffect, useState } from "react";
import { AuthSuccessResponse } from "@/lib/types";
import { useRouter } from "next/router";

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
    const router = useRouter()
    useEffect(()=>{
        const record = sessionStorage.getItem('user')
        if(record !=null){
            setUser(true)
        }
    },[])

    const saveUser = (user:IUser)=>{
        setUser(true)
        sessionStorage.setItem('user', JSON.stringify(user))
        console.log("🚀 ~ file: AuthContext.tsx:34 ~ saveUser ~ user:", user)
    }
    const deleteUser = ()=>{
        setUser(false)
        sessionStorage.setItem('user', "")
        router.push("/")
    }

	return (
		<AuthContext.Provider value={{ user,saveUser,deleteUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;