// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { setCookie } from "nookies";
import makeApiCall from "@/util/makeApiCall";
import errorMessage from "@/util/errorMessage";
import {
	ApiErrorResponse,
	AuthSuccessResponse,
	IAuthPayload,
} from "@/lib/types";

interface ApiRequest extends NextApiRequest {
	body: IAuthPayload;
}
export default async function handler(req: ApiRequest, res: NextApiResponse) {
	try {
		const payload: IAuthPayload = req.body;
		const options: RequestInit = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(payload)
		};
		let data = await makeApiCall<
			AuthSuccessResponse,
			ApiErrorResponse,
			IAuthPayload
		>("/auth/local/register", options);

		if ("jwt" in data && data["jwt"]) {
			setCookie({ res }, "jwt", data?.jwt, {
				httpOnly: true,
				secure: process.env.NODE_ENV !== "development",
				maxAge: 30 * 24 * 60 * 60,
				path: "/",
			});

			res.status(200).json({ user: data.user });
		} else {
			res.status(400).json({ ...data });
		}
	} catch (error) {
		const ErrorResponse = errorMessage(error);
		res.status(500).json({
			...ErrorResponse,
		});
	}
}
