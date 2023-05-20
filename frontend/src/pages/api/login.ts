// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import type {
	AuthSuccessResponse,
	ApiErrorResponse,
	IAuthPayload,
} from "@/lib/types";
import makeApiCall from "@/util/makeApiCall";
import errorMessage from "@/util/errorMessage";
interface ApiRequest extends NextApiRequest {
	body: IAuthPayload;
}

export default async function handler(req: ApiRequest, res: NextApiResponse) {
	const { email, password } = req.body;
	try {
		const payload: IAuthPayload = { identifier: email, password: password };
		const data = await makeApiCall<
			AuthSuccessResponse,
			ApiErrorResponse,
			IAuthPayload
		>("/auth/local", "POST", payload);

		if (data && "error" in data) {
			res.status(400).json({ ...data });
		} else {
			res.status(200).json({ user: data.user });
		}
	} catch (error) {
		const ErrorResponse = errorMessage(error);
		res.status(500).json({
			...ErrorResponse,
		});
	}
}
