import Image from "next/image";
import React from "react";

interface IImgContainer{
    name: string;
    width:number;
    height: number;
    url:string

}

export default function ImageContainer({name,width,height,url}:IImgContainer) {
	return (
		<div className="relative m-3 overflow-hidden">
			<Image
				src={url}
				className="hover:scale-110 ease-in duration-500"
				width={width}
				height={height}
				alt="men"
			/>

			<div className="top-1/2 left-[40%] text-gray-700 absolute">
				<button className="p-1 sm:p-3 rounded bg-blue-600 text-white text-xs sm:text-base hover:bg-white hover:text-gray-800">
					{name}
				</button>
			</div>
		</div>
	);
}
