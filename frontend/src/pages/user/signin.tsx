import Head from "next/head";
import React, { useState } from "react";
import User from "@/features/User";
import dynamic from "next/dynamic";

const Login = dynamic(()=>import("../../features/User/container/Login"),{
	loading:()=><User.Component.LoadingComponent/>
})

const Register = dynamic(()=>import("../../features/User/container/Register"),{
	loading:()=><User.Component.LoadingComponent/>
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
