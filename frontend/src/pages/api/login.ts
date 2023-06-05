// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import type {
	AuthSuccessResponse,
	ApiErrorResponse,
	IAuthPayload,
} from "@/lib/types";
import makeApiCall from "@/util/makeApiCall";
import errorMessage from "@/util/errorMessage";
import { setCookie } from "nookies";
interface ApiRequest extends NextApiRequest {
	body: IAuthPayload;
}

export default async function handler(req: ApiRequest, res: NextApiResponse) {
	const { email, password } = req.body;
	try {
		const payload: IAuthPayload = { identifier: email, password: password };
		const options: RequestInit = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(payload)
		};
		const data = await makeApiCall<
			AuthSuccessResponse,
			ApiErrorResponse,
			IAuthPayload
		>("/auth/local",options);

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
