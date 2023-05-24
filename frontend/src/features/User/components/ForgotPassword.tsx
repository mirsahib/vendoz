import Link from "next/link";
import React from "react";

type Props = {};

export default function ForgotPassword({}: Props) {
	return (
		<div className="flex w-full justify-end mb-5">
			<Link href={"/"} className="text-blue-600 underline text-sm">
				Forgot Password?
			</Link>
		</div>
	);
}
