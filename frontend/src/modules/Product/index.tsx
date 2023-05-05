import React from "react";

export default function Product() {
	return (
		<section className="flex flex-col item-center justify-center w-[90%] m-auto bg-red-400 my-8">
			<div className="flex flex-col items-center justify-center bg-yellow-400">
				<h1>Best Seller</h1>
				<p>Top products</p>
			</div>
			<ul className="flex flex-wrap">
				<li className="flex flex-col basis-1/4">
					<div className="bg-green-400 m-1 h-[400px] ">1</div>
				</li>
				<li className="flex flex-col basis-1/4">
					<div className="bg-green-400 m-1 h-[400px] ">2</div>
				</li>
				<li className="flex flex-col basis-1/4">
					<div className="bg-green-400 m-1 h-[400px] ">3</div>
				</li>
				<li className="flex flex-col basis-1/4">
					<div className="bg-green-400 m-1 h-[400px] ">4</div>
				</li>
			</ul>
		</section>
	);
}
