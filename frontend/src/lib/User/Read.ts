import makeApiCall from "@/util/makeApiCall";
import { GetServerSidePropsContext } from "next";

export async function getServerSideProps(context: GetServerSidePropsContext) {
	// Fetch data from external API
	const cookie = context.req.headers.cookie;
	const parseCookies = cookie?.split("=");
	const options: RequestInit = {
		method: "GET",
		headers: {
			Authorization: "Bearer " + parseCookies?.[1],
		},
	};
	const data = await makeApiCall("/users/me", options);
	console.log("🚀 ~ file: Read.ts:6 ~ getServerSideProps ~ data:", data);
	// Pass data to the page via props
	return { props: { data } };
}
