import Head from "next/head";
import React from "react";
import { product } from "@/mock/data";
import Image from "next/image";
import Link from "next/link";
export default function cart() {
	return (
		<>
			<Head>
				<title>Shopping Cart | Vendoz Online Shopping</title>
			</Head>
			<main>
				<section className="flex py-8">
					<div className="w-[80%] flex flex-col items-center m-auto">
						<div className="mb-5 text-2xl font-semibold">
							<h1>Shopping Cart</h1>
						</div>
						<div className="w-full border-t border-slate-400 mb-5"></div>
						<div className="w-full mb-5 px-0 lg:px-2">
							<ul className="">
								<li className=" mb-5">
									<div className="flex lg:flex-row  lg:justify-between lg:items-center">
										<div className="flex relative w-[120px] h-[150px] lg:basis-[10%] mr-5 lg:mr-0">
											<Image
												src={"/t-shirt.jpg"}
												fill
												alt={""}
                        style={{objectFit:'contain'}}
											/>
										</div>
										{/* image container */}
										<div className="flex flex-col lg:flex-row sm:flex-col basis-[75%] justify-between">
											<Link href={"/"}>
												<h3 className=" font-normal lg:font-medium sm:font-medium hover:text-blue-600 transition duration-300 ease-in-out">
													Relaxed-Fit Cotton Shirt
												</h3>
											</Link>
											<p className="font-medium hidden lg:flex sm:hidden">
												$234
											</p>
											<div className="flex flex-row items-center my-4 lg:my-0 sm:my-0">
												<button className="p-1 bg-slate-200 hover:bg-slate-300 rounded mr-3">
													<i className="far fa-plus"></i>
												</button>
												<p>1</p>
												<button className="p-1 bg-slate-200 hover:bg-slate-300 rounded ml-3">
													<i className="fas fa-minus"></i>
												</button>
											</div>
											<div className="font-medium">
												$234
											</div>
										</div>
										{/* details container */}

										<div className="flex justify-end basis-[10%]">
											<button className="text-blue-600 hover:text-red-600">
												<i className="far fa-trash-alt"></i>
											</button>
										</div>
									</div>
								</li>
							</ul>
						</div>
						{/* shopping card */}
						<div className="w-full border-t border-slate-400 mb-5"></div>
						<div className="w-full flex flex-row justify-between mb-5">
							<div>
								<button className="text-blue-600 hover:text-black">
									<i className="fas fa-arrow-left mr-2"></i>{" "}
									<span>Continue Shopping</span>
								</button>
							</div>
							<div>
								<button className="text-blue-600 hover:text-black">
									<i className="far fa-trash-alt mr-2"></i>
									<span>Clear Shopping Cart</span>
								</button>
							</div>
						</div>
						{/* button container */}
						<div className="w-full flex flex-col lg:flex-row sm:flex-col justify-between mb-5">
							<div className="flex flex-col basis-1/3 border border-slate-400 p-5 mb-5 lg:mb-0 sm:mb-5">
								<h1>Note</h1>
								<p>Special instruction for your order</p>
								<textarea
									name=""
									id=""
									className="bg-slate-100"
									cols={30}
									rows={10}
								></textarea>
							</div>
							<div className="flex flex-col justify-between basis-1/3 border border-slate-400 p-5">
								<div>
									<div className="flex flex-row justify-between mb-2">
										<h3>Subtotal</h3>
										<h3>$ 234</h3>
									</div>
									<div className=" flex flex-row justify-between mb-2">
										<h3>Grand Total</h3>
										<h3>$ 234</h3>
									</div>
								</div>
								<div className="w-full h-14 bg-blue-500 text-white rounded flex justify-center items-center">
									<button className="">
										PROCEED TO CHECKOUT
									</button>
								</div>
							</div>
						</div>
						{/* total container */}
					</div>
				</section>
			</main>
		</>
	);
}
