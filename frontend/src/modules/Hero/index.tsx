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
			<div className="flex flex-col top-[15%] lg:left-[12%] sm:left-[5%] relative ">
				<h1 className="text-blue-600 text-3xl font-mono font-bold">Vendoz</h1>
				<p className=" text-gray-100 font-semibold text-lg mb-6">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Tempore
				</p>
				<div className="">
					<button className="p-3 bg-blue-600 rounded hover:bg-blue-500 text-white ">Shop Now</button>
				</div>
			</div>
		</section>
	);
}
