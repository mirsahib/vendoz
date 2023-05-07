import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { product } from "@/mock/data";

const data = product[0];

export default function SingleProduct() {
	const router = useRouter();
	const { catagory, productslug } = router.query;
	console.log(productslug);
	return (
		<>
			<Head>
				<title>Product Name</title>
			</Head>
			<main>
				<div className="bg-slate-100 py-1">
					<ul className="flex w-[75%] text-gray-700 text-sm m-auto">
						<li>
							<Link href={"/"}>HOME/</Link>
						</li>
						<li>
							<Link href={"/"}>MEN/</Link>
						</li>
						<li>
							<Link href={"/"}>T-Shirt</Link>
						</li>
					</ul>
				</div>
				{/* nav section */}
				<section className="w-[80%] py-10 m-auto">
					<div className="flex flex-row justify-around">
						<div className="bg-red-100">
							<Image
								src={data.img}
								width={360}
								height={250}
								alt="tshirt"
							/>
						</div>
						{/* image container */}
						<div className="flex flex-col justify-center ">
							<h3 className="font-semibold text-gray-800 text-2xl w-[85%]">
								{data.name}
							</h3>
							<h3 className="my-5 text-lg font-semibold text-gray-800">
								$ {data.price}
							</h3>
							<div className="flex justify-around">
								<div className="flex items-center justify-around basis-1/2">
									<div>
										<button className="bg-slate-200 p-5 rounded">
											<i className="fas fa-minus"></i>
										</button>
									</div>
									<div>1</div>
									<div>
										<button className="bg-slate-200 p-5 rounded">
											<i className="fas fa-plus"></i>
										</button>
									</div>
								</div>
								<div className="flex basis-1/2 ">
									<button className="bg-blue-700 text-white p-3 rounded">
										ADD TO CART
									</button>
								</div>
							</div>
						</div>
						{/* product details */}
					</div>
				</section>
			</main>
		</>
	);
}
