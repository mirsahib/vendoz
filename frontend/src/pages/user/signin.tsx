import Head from "next/head";
import React, { useState } from "react";
import User from "@/features/User";

export default function Signin() {
	const [redirect, setRedirect] = useState(false);

	return (
		<>
			<Head>
				<title>Sign In | Vendoz Online Shopping</title>
			</Head>
			<main>
				{redirect ? (
					<User.Container.RegisterContainer setRedirect={setRedirect} />
				) : (
					<User.Container.LoginContainer setRedirect={setRedirect} />
				)}
			</main>
		</>
	);
}
