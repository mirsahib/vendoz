// import { product } from "@/mock/data";
import Link from "next/link";
import React from "react";
import Card from "@/components/Card";
import { IProduct } from "@/lib/types";

interface IProductList{
	products: IProduct[];
}

export default function Product({products}:IProductList) {
	return (
		<section className="flex flex-col item-center justify-center w-[90%] m-auto">
			<div className="flex flex-col items-center justify-center my-5">
				<h1 className="text-2xl">Best Seller</h1>
				<p className="text-lg">Top products</p>
			</div>
			<ul className="flex flex-wrap">
				{products.map((item) => {
					return (
						<li key={item.id} className="flex flex-col basis-1/4">
							<Link href={`catagory/${item.attributes.catagories?.data[0].attributes.title}/product/${item.id}`}>
								<Card props={item.attributes}/>
							</Link>
						</li>
					);
				})}
			</ul>
		</section>
	);
}
