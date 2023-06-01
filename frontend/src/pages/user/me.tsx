import {Profile} from "@/features/User";
import Head from "next/head";
import React from "react";

export default function Me() {

	return (
		<>
			<Head>
				<title>Profile | Vendoz Online Shopping</title>
			</Head>
			<main>
				{<Profile />}
			</main>
		</>
	);
}
