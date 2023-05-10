import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { product } from "@/mock/data";
import { InferGetStaticPropsType } from "next";
import { getStaticProps } from "@/lib/Product/ReadById";
import { urlBuilder } from "@/util/UrlBuilder";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'

const data = product[0];

export default function SingleProduct(
	product: InferGetStaticPropsType<typeof getStaticProps>
) {
	const { title, desc, price, img, img2 } = product.data?.attributes;

	return (
		<>
			<Head>
				<title>Vendoz Online Shop</title>
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
						<div className="flex basis-1/2">
							<Image
								src={urlBuilder(img?.data?.attributes.url)}
								width={360}
								height={250}
								alt="tshirt"
							/>
						</div>
						{/* image container */}
						<div className="flex flex-col basis-1/2 justify-center ">
							<h3 className="font-semibold text-gray-800 text-2xl w-[85%]">
								{title && title}
							</h3>
							<h3 className="my-5 text-lg font-semibold text-gray-800">
								$ {price != null ? price : ""}
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
						{desc && <ReactMarkdown remarkPlugins={[remarkGfm]} children={desc} /> }
					</div>
				</section>
			</main>
		</>
	);
}

export { getStaticProps, getStaticPaths } from "@/lib/Product/ReadById";
