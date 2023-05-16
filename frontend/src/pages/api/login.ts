// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

interface ApiRequest extends NextApiRequest {
	body: {
		email: string;
		password: string;
	};
}
interface StrapiResponse {
	jwt?: string;
	user?: {
		id: number;
		username: string;
		email: string;
		provider: string;
		confirmed: boolean;
		blocked: boolean;
		createdAt: Date;
		updatedAt: Date;
	};
	data?: any;
	error?: {
		status: number;
		name: string;
		message: string;
		detail: Object;
	};
}

export default async function handler(req: ApiRequest, res: NextApiResponse) {
	const { email, password } = req.body;
	try {
		const payload = { identifier: email, password: password };
		const response = await fetch(
			`${process.env.REACT_API_URL}/auth/local`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(payload),
			}
		);
		const data = (await response.json()) as StrapiResponse;
		res.status(200).json({ data });
	} catch (error) {
		console.log("login handler", error);
		res.status(400).send(error);
	}
}
