import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { InferGetStaticPropsType } from "next";
import { getStaticProps } from "@/lib/Product/ReadById";
import { urlBuilder } from "@/util/UrlBuilder";
import remarkGfm from "remark-gfm";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic";
import { useAppDispatch, useAppSelector } from "@/store";
import {
	increaseItem,
	decreaseItem,
} from "@/features/Product/action/cartAction";
import { toast } from "react-toastify";
import { addItem } from "@/features/Product/action/cartAction";
const Markdown = dynamic<any>(() =>
	import("react-markdown").then((mod) => mod.default)
);

export default function SingleProduct(
	product: InferGetStaticPropsType<typeof getStaticProps>
) {
	const router = useRouter();
	const { catagory } = router.query;
	const { title, desc, price, img, img2 } = product.data?.attributes;
	const cartItem = useAppSelector((state) => state.cartStore.itemList);
	const productInCart = cartItem.find(
		(item) => item.product?.id === product.data.id
	);
	const dispatch = useAppDispatch();
	const notify = () => toast("Product added to cart");
	// console.log("🚀 ~ file: [productslug].tsx:23 ~ cartItem:", cartItem);
	// console.log(
	// "🚀 ~ file: [productslug].tsx:25 ~ productInCart:",
	// productInCart
	// );

	return (
		<>
			<Head>
				<title>Vendoz Online Shop</title>
			</Head>
			<main>
				<div className="bg-slate-100 py-1">
					<div className="lg:w-[76%] sm:w-[90%] m-auto text-slate-600">
						<Link replace href={`/catagory/${catagory}`}>
							<span className=" font-semibold">Catagory: </span>/
							{catagory}
						</Link>
					</div>
				</div>
				{/* nav section */}
				<section className="w-[95%] lg:w-[80%] sm:w-[95%]  py-10 m-auto">
					<div className="flex flex-col lg:flex-row sm:flex-col sm:items-center justify-around">
						<div className="flex basis-1/2">
							<Image
								src={urlBuilder(img?.data?.attributes.url)}
								width={360}
								height={250}
								alt="tshirt"
							/>
						</div>
						{/* image container */}
						<div className="flex flex-col basis-1/2 justify-center">
							<h3 className="font-semibold text-gray-800 text-base sm:text-lg lg:text-2xl">
								{title && title}
							</h3>
							<h3 className="my-5 text-lg font-semibold text-gray-800">
								$ {price != null ? price : ""}
							</h3>
							<div className="flex  mb-5">
								<div className="flex items-center basis-1/2 ">
									<div className="mr-10">
										<button
											onClick={() =>
												dispatch(
													decreaseItem(product.data)
												)
											}
											className="bg-slate-200 p-4 rounded"
										>
											<FontAwesomeIcon icon={faMinus} />
										</button>
									</div>
									<div>{productInCart && productInCart.count!=0?productInCart.count:0}</div>
									<div className="ml-10">
										<button
											onClick={() =>
												dispatch(
													increaseItem(product.data)
												)
											}
											className="bg-slate-200 p-4 rounded"
										>
											<FontAwesomeIcon icon={faPlus} />
										</button>
									</div>
								</div>
								<div className="flex basis-1/2 justify-end">
									<button
										onClick={() => {
											dispatch(
												addItem(product.data)
											);
											notify();
										}}
										className="bg-blue-700 hover:bg-blue-500 text-white px-4 py-1 text-xs lg:text-base sm:text-base font-medium rounded"
									>
										ADD TO CART
									</button>
								</div>
							</div>
							<div className="flex text-white">
								<Link href={'/cart/view'} className="bg-blue-700 hover:bg-blue-500 p-5 w-full text-center rounded font-semibold">
									BUY NOW
								</Link>
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
						{desc && (
							<Markdown remarkPlugins={[remarkGfm]}>
								{desc}
							</Markdown>
						)}
					</div>
				</section>
			</main>
		</>
	);
}

export { getStaticProps, getStaticPaths } from "@/lib/Product/ReadById";
