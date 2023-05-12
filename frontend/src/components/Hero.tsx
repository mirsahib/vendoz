import Image from "next/image";
import React from "react";

export default function Hero() {
	return (
		<section className="lg:w-full relative h-[80vh] ">
			<div className="-z-10">
				<Image
					src={"/banner.jpg"}
					fill={true}
					style={{
						objectFit: "cover",
						objectPosition: "center", 
					}}
					alt="hero"
					quality={90}
					priority={true}
					
				/>
			</div>
			<div className="flex flex-col top-[15%] left-[10%] lg:left-[15%] sm:left-[5%] absolute">
				<h1 className="text-blue-600 text-base lg:text-3xl sm:text-2xl font-mono font-bold">Vendoz</h1>
				<p className=" text-gray-100 font-semibold text-sm lg:text-lg sm:text-base mb-6">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Tempore
				</p>
				<div className="">
					<button className="p-2 lg:p-3 sm:p-3 bg-blue-600 rounded hover:bg-blue-500 text-white text-sm lg:text-xl sm:text-base">Shop Now</button>
				</div>
			</div>
		</section>
	);
}
