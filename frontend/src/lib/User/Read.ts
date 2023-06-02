import makeApiCall from "@/util/makeApiCall";
import { GetServerSidePropsContext } from "next";

export async function getServerSideProps(context:GetServerSidePropsContext) {
	// Fetch data from external API
	const cookie = context.req.headers.cookie
	const parseCookies = cookie?.split("=")
	const data = await makeApiCall("/users/me","GET",false,parseCookies?.[1])
	console.log("🚀 ~ file: Read.ts:6 ~ getServerSideProps ~ data:", data)
	// Pass data to the page via props
	return { props: { data } };
}
