import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { product } from "@/mock/data";
import { InferGetStaticPropsType } from "next";
import { getStaticPaths,getStaticProps, } from "@/lib/Product/ReadById";

const data = product[0];

export default function SingleProduct() {
	const router = useRouter();
	// const { catagory, productslug } = router.query;
	// console.log(product);
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
							<div className="flex justify-around mb-5">
								<div className="flex items-center basis-1/2">
									<div className="mr-10">
										<button className="bg-slate-200 p-5 rounded">
											<i className="fas fa-minus"></i>
										</button>
									</div>
									<div>1</div>
									<div className="ml-10">
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
							<div className="flex text-white">
								<button className="bg-blue-700 hover:bg-blue-500 p-5 w-[90%] rounded font-semibold">
									BUY NOW
								</button>
							</div>
						</div>
						{/* product details */}
					</div>
				</section>
				<div className=" bg-slate-100 h-5"></div>
				<section className="w-[80%] m-auto py-5">
					<div className="my-5">
						<h3 className="font-semibold">Product Description</h3>
					</div>
					<div className="mx-5">
						<ul className="text-slate-600 list-disc">
							<li>Minim eu in enim aliqua ipsum proident tempor consectetur incididunt.</li>
							<li>Id nisi adipisicing reprehenderit incididunt elit anim. Excepteur proident duis duis consequat Lorem dolor cupidatat id incididunt amet exercitation amet ea exercitation. Ipsum consequat excepteur id aliquip dolor. Laborum officia ullamco ullamco pariatur aliquip aliqua anim cillum adipisicing cillum irure laborum excepteur est. Culpa ut enim sit deserunt do nostrud eu magna sint voluptate esse occaecat duis et. Velit ad veniam voluptate enim exercitation duis duis nisi officia excepteur aute. Ex consectetur eu sit aute mollit voluptate.</li>
							<li>Dolore reprehenderit do eiusmod elit exercitation Lorem ullamco nostrud incididunt ullamco nisi aliquip aliqua. Cillum mollit ex amet mollit officia magna dolor Lorem ad ex commodo nisi. Voluptate quis anim non id. Laboris consequat nostrud laborum in Lorem fugiat irure ea ea. Et elit do occaecat excepteur culpa.</li>
						</ul>
					</div>
				</section>
			</main>
		</>
	);
}

// export { getStaticPaths,getStaticProps, } from "@/lib/Product/ReadById";