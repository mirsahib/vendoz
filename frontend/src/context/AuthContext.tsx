import React, { createContext, useEffect, useState } from "react";
import { AuthSuccessResponse } from "@/lib/types";
import { useRouter } from "next/router";

type IUser = AuthSuccessResponse['user']
interface AuthContextInterface {
    user:boolean,
    saveUser:(user:IUser)=>void
    deleteUser:()=>Promise<void>
    url:string
}
const defaultAuthContext: AuthContextInterface = {
    user:false,
    saveUser:()=>{},
    deleteUser: async()=>{},
    url:""
};

export const AuthContext = createContext<AuthContextInterface>(
	defaultAuthContext
);

const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user,setUser] = useState<boolean>(false)
    const [url,setUrl] = useState("/user/signin")
    const router = useRouter()
    useEffect(()=>{
        const record = sessionStorage.getItem('user')
        if(record !=null){
            setUser(true)
        }
    },[])

    const saveUser = (user:IUser)=>{
        setUser(true)
        setUrl('/user/me')
        sessionStorage.setItem('user', JSON.stringify(user))
        console.log("🚀 ~ file: AuthContext.tsx:34 ~ saveUser ~ user:", user)
    }
    const deleteUser = async()=>{
        setUser(false)
        setUrl("/user/signin")
        sessionStorage.removeItem("user")
        const res = await fetch("/api/signout")
		const data = await res.json()
        console.log("🚀 ~ file: AuthContext.tsx:46 ~ deleteUser ~ data:", data)
        router.push("/")
    }
    

	return (
		<AuthContext.Provider value={{ user,saveUser,deleteUser,url }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;