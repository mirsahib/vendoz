import { IconDefinition, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

interface IEmptySection{
	title:string,
	icon:IconDefinition
	tagline:string
	buttonTitles:string
}

export default function EmptySection({title,icon,tagline,buttonTitles}:IEmptySection) {
	return (
		<div className="w-[80%] flex flex-col items-center m-auto my-14">
			<div className=" mb-5">
				<h1 className="my-1 text-gray-800 font-semibold text-lg lg:text-2xl ">
					{title}
				</h1>
			</div>
			<div className="flex flex-col items-center text-center">
				{/* <i className={`${icon} text-gray-400`}></i> */}
				<FontAwesomeIcon icon={icon} className="text-gray-400" size={"8x"}/>
				<p className="mb-6 mt-2 text-gray-400 ">
					{tagline}
				</p>
			</div>
			<div>
				<Link
					href={"/"}
					className="py-3 px-6 rounded text-white bg-blue-600 hover:bg-blue-500"
				>
					{buttonTitles}
				</Link>
			</div>
		</div>
	);
}
