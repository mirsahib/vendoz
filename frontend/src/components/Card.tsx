import { IProduct } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Card({
	id,
	name,
	desc,
	price,
	img,
	img2,
	isNew,
	type,
}: IProduct) {
	return (
		<div className="bg-slate-100 relative m-3 p-2">
			<Image src={img} width={320} height={250} alt="men" />
			<div className="top-[5%] left-[80%] text-gray-700 absolute">
				<button className=" text-gray-800 hover:text-white">
					<i className="far fa-heart bg-slate-100 hover:bg-blue-600 p-3 rounded-full"></i>
				</button>
			</div>
			<div className="px-5">
				<div className="flex flex-col my-2">
					<Link href={""}>
						<h4 className="text-gray-800 text-lg  mb-2">
							{name}
						</h4>
					</Link>

					<div className="flex ">
						<h3 className="p-1 font-bold text-xs bg-blue-900 text-white">
							{type}
						</h3>
					</div>
				</div>
				<div className="flex justify-between items-center">
					<h3 className="text-lg font-semibold text-gray-800">
						$ {price}
					</h3>
					<button className="p-2  bg-blue-700 text-white rounded">
						Add to cart
					</button>
				</div>
			</div>
		</div>
	);
}
