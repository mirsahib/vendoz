import React from "react";

type Props = {};

export default function Divider({}: Props) {
	return (
		<div className="flex flex-row items-center mb-5">
			<div className="w-24 border-t border-gray-400 flex"></div>
			<span className="mx-4">or</span>
			<div className="w-24 border-t border-gray-400 flex"></div>{" "}
		</div>
	);
}
