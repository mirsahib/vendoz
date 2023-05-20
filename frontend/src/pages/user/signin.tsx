import Login from "@/components/Login";
import Register from "@/components/Register";
import Head from "next/head";
import React, { useState } from "react";

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
