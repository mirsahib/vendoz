import { IProduct } from "@/lib/types";
import Image from "next/image";
import React from "react";
import { urlBuilder } from "@/util/UrlBuilder";
interface ICard {
	props: IProduct["attributes"];
}

export default function Card({ props }: ICard) {
	const truncate = (input: string | null) => {
		return input != null && input.length > 45
			? `${input.substring(0, 45)}...`
			: input;
	};
	return (
		<div className="flex flex-col justify-evenly bg-slate-100 relative m-2 pb-5 h-96 shadow-md hover:shadow-lg">
			<div className="relative w-[100%] h-[90%] mx-auto overflow-hidden">
				<Image
					src={urlBuilder(props.img?.data?.attributes?.url)}
					fill
					alt="men"
					style={{ objectFit: "cover", objectPosition: "center" }}
				/>
				<div className="flex justify-center items-center absolute top-5 right-5 w-8 h-8  bg-slate-100 hover:bg-blue-700 hover:text-white rounded-full">
					<button onClick={(e)=>{
						e.preventDefault();
						e.stopPropagation();
						console.log('click')
					}} className="flex justify-center items-center ">
						<i className="far fa-heart"></i>
					</button>
				</div>
			</div>
			<div className="px-5">
				<div className="flex flex-col my-2">
					<h4 className="text-gray-800 text-lg  mb-2">
						{truncate(props?.title)}
					</h4>
					<div className="flex ">
						<h3 className="p-1 font-bold text-xs bg-blue-900 text-white">
							{props?.type}
						</h3>
					</div>
				</div>
				<div className="flex justify-between items-center">
					<h3 className="text-lg font-semibold text-gray-800">
						$ {props?.price}
					</h3>
					<button className="p-2  bg-blue-700 text-white rounded">
						Add to cart
					</button>
				</div>
			</div>
		</div>
	);
}
