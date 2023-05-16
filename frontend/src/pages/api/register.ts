// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { setCookie } from "nookies";

interface ApiRequest extends NextApiRequest {
	body: {
		username: string;
		email: string;
		password: string;
		firstName: string;
		lastName: string;
	};
}

interface StrapiFailureResponse {
	data?: any;
	error?: {
		status: number;
		name: string;
		message: string;
		detail: Object;
	};
}
interface StrapiSuccessResponse {
	jwt?: string;
	user?: {
		id: number;
		username: string;
		email: string;
		provider: string;
		confirmed: boolean;
		blocked: boolean;
		firstName: string;
		lastName: string;
		createdAt: Date;
		updatedAt: Date;
	};
}
type StrapiResponse = StrapiFailureResponse | StrapiSuccessResponse;

async function makeApiRequest(
	url: string,
	payload: ApiRequest["body"]
): Promise<StrapiResponse> {
	const response = await fetch(`${process.env.REACT_API_URL}/${url}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(payload),
	});
	const data = await response.json();
	if (response.ok) {
		return data as StrapiSuccessResponse;
	} else {
		return data as StrapiFailureResponse;
	}
}

export default async function handler(req: ApiRequest, res: NextApiResponse) {
	try {
		let data = await makeApiRequest("auth/local/register", req.body);
		let apiData = null;
		if ("jwt" in data && data["jwt"]) {
			setCookie({ res }, "jwt", data?.jwt, {
				httpOnly: true,
				secure: process.env.NODE_ENV !== "development",
				maxAge: 30 * 24 * 60 * 60,
				path: "/",
			});
			apiData = data.user;
		} else {
			apiData = data;
		}
		res.status(200).json({ data: apiData });
	} catch (error) {
		let message = "Unknow error";
		if (error instanceof Error) {
			message = error.message;
		}
		const ErrorResponse = {
			status: 500,
			name: "Internal Server Error",
			message: message,
			detail: error,
		};
		res.status(400).json({ data: ErrorResponse });
	}
}
