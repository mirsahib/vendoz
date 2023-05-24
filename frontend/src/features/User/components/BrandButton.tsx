import Image from "next/image";
import React from "react";

type Props = {};

export default function BrandButton({}: Props) {
	return (
		<div className="mb-5">
			<button className=" w-72 lg:w-80 flex items-center justify-evenly py-2 border border-gray-400">
				<Image
					src={"/icon/google.svg"}
					width={24}
					height={24}
					alt="google"
				/>
				<span className="text-sm">Continue with Google</span>
			</button>
		</div>
	);
}
