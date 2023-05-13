import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function wishlist() {
	return (
		<>
			<Head>
				<title>Wishlist | Vendoz Online Shopping</title>
			</Head>
			<main>
				<section className="flex py-8">
					<div className="w-[80%] flex flex-col m-auto">
						<div className="flex mb-5 text-2xl font-semibold justify-center">
							<h1>Wishlist</h1>
						</div>
						<div>
							<ul className="flex flex-wrap">
								<li className="flex basis-1/4">
									<Link href={'/'}>
										<div className="flex flex-col justify-evenly bg-slate-100 relative m-3 pb-5 h-96 shadow-md hover:shadow-lg">
											<div className="relative w-[100%] h-[90%] mx-auto overflow-hidden">
												<Image
													src={"/t-shirt.jpg"}
													fill
													alt="men"
													style={{
														objectFit: "cover",
														objectPosition:
															"center",
													}}
												/>
												<div className="flex justify-center items-center absolute top-5 right-5 w-8 h-8  bg-slate-100 hover:bg-blue-700 hover:text-white rounded-full">
													<button
														onClick={(e) => {
															e.preventDefault();
															e.stopPropagation();
															console.log(
																"click"
															);
														}}
														className="flex justify-center items-center "
													>
														<i className="fa-regular fa-trash-can"></i>
													</button>
												</div>
											</div>
											<div className="px-5">
												<div className="flex flex-col my-2">
													<h4 className="text-gray-800 text-lg  mb-2">
														Premier Cropped Skinny
														Jean
													</h4>
													<div className="flex ">
														<h3 className="p-1 font-bold text-xs bg-blue-900 text-white">
															normal
														</h3>
													</div>
												</div>
												<div className="flex justify-between items-center">
													<h3 className="text-lg font-semibold text-gray-800">
														$ 234
													</h3>
													<button className="p-2  bg-blue-700 text-white rounded">
														Add to cart
													</button>
												</div>
											</div>
										</div>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
