import { product } from "@/mock/data";
import Link from "next/link";
import React from "react";
import Card from "@/components/Card";

export default function Product() {
	return (
		<section className="flex flex-col item-center justify-center w-[90%] m-auto">
			<div className="flex flex-col items-center justify-center my-5">
				<h1 className="text-2xl">Best Seller</h1>
				<p className="text-lg">Top products</p>
			</div>
			<ul className="flex flex-wrap">
				{product.map((item) => {
					return (
						<li key={item.id} className="flex flex-col basis-1/4">
							<Link href={`catagory/${item.catagory}/product/${item.id}`}>
								<Card {...item}/>
							</Link>
						</li>
					);
				})}
			</ul>
		</section>
	);
}
