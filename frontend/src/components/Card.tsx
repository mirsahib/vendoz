import { IMediaFormat, IProduct } from "@/lib/types";
import Image from "next/image";
import React from "react";
interface ICard {
	props: IProduct["attributes"];
}

const urlBuilder = (data:IMediaFormat | null| undefined) => {
	let url = '/default.jpg'
	if(data!=undefined && data!==null) {
		url = process.env.REACT_API_BASE_URL + data.url
	}
	return url;
};

export default function Card({ props }: ICard) {
	return (
		<div className="bg-slate-100 relative m-3 p-2">
			<Image
				src={urlBuilder(props.img?.data?.attributes.formats?.small)}
				width={320}
				height={250}
				alt="men"
			/>

			<div className="top-[5%] left-[80%] text-gray-700 absolute">
				<button className=" text-gray-800 hover:text-white">
					<i className="far fa-heart bg-slate-100 hover:bg-blue-600 p-3 rounded-full"></i>
				</button>
			</div>
			<div className="px-5">
				<div className="flex flex-col my-2">
					<h4 className="text-gray-800 text-lg  mb-2">
						{props?.title}
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
