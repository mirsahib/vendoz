import { Profile } from "@/features/User";
import { getServerSideProps } from "@/lib/User/Read";
import { InferGetServerSidePropsType } from "next";
import Head from "next/head";
import React from "react";

export default function Me({
	data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	// console.log("🚀 ~ file: me.tsx:8 ~ Me ~ data:", data);

	return (
		<>
			<Head>
				<title>Profile | Vendoz Online Shopping</title>
			</Head>
			<main>{<Profile profile={data}/>}</main>
		</>
	);
}

export {getServerSideProps} from "@/lib/User/Read"