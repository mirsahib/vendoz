import { AuthContext } from "@/context/AuthContext";
import User from "@/features/User";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";

export default function Me() {
	const { user } = useContext(AuthContext);
	const router = useRouter();
	useEffect(() => {
		console.log("🚀 ~ file: Profile.tsx:10 ~ useEffect ~ user:", user);
		if (!user) {
			router.push("/");
		}
	}, []);
	return (
		<>
			<Head>
				<title>Profile | Vendoz Online Shopping</title>
			</Head>
			<main>
				{user?<User.Container.Profile />:<User.Component.LoadingComponent/>}
			</main>
		</>
	);
}
