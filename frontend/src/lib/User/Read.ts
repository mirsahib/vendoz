import makeApiCall from "@/util/makeApiCall";
import { GetServerSidePropsContext } from "next";
import { ApiErrorResponse, ProfileApiResponse } from "../types";

export async function getServerSideProps(context: GetServerSidePropsContext) {
	// Fetch data from external API
	const cookie = context.req.headers.cookie;
	const parseCookies = cookie?.split("=");
	// console.log("🚀 ~ file: Read.ts:8 ~ getServerSideProps ~ parseCookies:", parseCookies)
	const options: RequestInit = {
		method: "GET",
		headers: {
			Authorization: "Bearer " + parseCookies?.[1],
		},
	};
	const data = await makeApiCall<ProfileApiResponse, ApiErrorResponse>("/users/me", options);
	// console.log("🚀 ~ file: Read.ts:6 ~ getServerSideProps ~ data:", data);
	if (data && 'error' in data) {
		return {
			redirect: {
				permanent: false,
				destination: '/'
			}
		}
	}
	return { props: { data } }
	// Pass data to the page via props
}
