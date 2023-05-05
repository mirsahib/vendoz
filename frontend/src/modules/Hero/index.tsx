import Image from "next/image";
import React from "react";

export default function Hero() {
	return (
		<section className="w-full relative h-[85vh]">
			<div className="-z-10">
				<Image
					src={"/shopping.jpg"}
					fill={true}
					style={{
						objectFit: "cover",
						objectPosition: "center",
					}}
					alt="hero"
				/>
			</div>
			<div className="flex relative">
				<h1>Vendoz</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Tempore
				</p>
			</div>
		</section>
	);
}
