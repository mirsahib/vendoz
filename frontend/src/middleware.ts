import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
	try {
		const cookie = request.cookies.get("jwt");
		const secretKey = new TextEncoder().encode(
			process.env.REACT_JWT_SECRET
		);
		const {payload,protectedHeader} = await jwtVerify(cookie?.value ?? "", secretKey);
        // console.log("🚀 ~ file: middleware.ts:19 ~ middleware ~ request:", request.url)
        // console.log("🚀 ~ file: middleware.ts:19 ~ middleware ~ request:", request.headers.get('Host'))
        if(!payload.id){
            return NextResponse.redirect(new URL("/",request.url));
        }else{
            return NextResponse.rewrite(new URL(request.nextUrl.pathname,request.url));
        }
    } catch (error) {
		console.log("🚀 ~ file: middleware.ts:15 ~ middleware ~ error:", error);
	}
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: "/user/me",
};
