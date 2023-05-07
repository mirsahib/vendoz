import React from "react";
import { product } from "@/mock/data";
import Link from "next/link";
import Image from "next/image";

export default function Featured() {
	return (
		<section className="flex flex-col item-center justify-center w-[90%] m-auto">
			<div className="flex flex-col items-center justify-center my-5">
				<h1>Featured</h1>
				<p>Top products</p>
			</div>
			<ul className="flex flex-wrap">
				{product.map((item) => {
					return (
						<li key={item.id} className="flex flex-col basis-1/4">
							<Link href={"/"}>
								<div className="m-3">
									<Image src={item.img} width={350} height={400} alt="t-shir"/>
								</div>
							</Link>
						</li>
					);
				})}
			</ul>
		</section>
	);
}
