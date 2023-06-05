import Head from "next/head";
import React, { useState } from "react";
import {Loading} from "@/features/User";
import dynamic from "next/dynamic";

const Login = dynamic(()=>import("@/features/User").then(mod=>mod.Login),{
	loading:()=><Loading/>
})

const Register = dynamic(()=>import("@/features/User").then(mod=>mod.Register),{
	loading:()=><Loading/>
})


export default function Signin() {
	const [redirect, setRedirect] = useState(false);

	return (
		<>
			<Head>
				<title>Sign In | Vendoz Online Shopping</title>
			</Head>
			<main>
				{redirect ? (
					<Register setRedirect={setRedirect} />
				) : (
					<Login setRedirect={setRedirect} />
				)}
			</main>
		</>
	);
}
