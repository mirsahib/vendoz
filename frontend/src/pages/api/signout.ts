import type { NextApiRequest, NextApiResponse } from "next";
import { setCookie } from "nookies";

type Data = {
	name: string;
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
    // console.log("🚀 ~ file: signout.ts:12 ~ req:", req)
    // destroyCookie(null,'jwt',{httpOnly: true,path:'/'})
    setCookie({res},"jwt","",{httpOnly: true,path:'/',maxAge:-1})
	res.status(200).json({ name: "Cookie destroyed" });
}
