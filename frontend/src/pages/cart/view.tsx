import Head from "next/head";
import React from "react";
import { useAppSelector } from "@/store";
import Product from "@/features/Product";
export default function cart() {
	const cart = useAppSelector((state) => state.cartStore);
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
						{cart.totalItem === 0 ? (
							<div className="w-full mb-5 px-0 lg:px-2">
								Your cart is empty
							</div>
						) : (
							<div className="w-full mb-5 px-0 lg:px-2">
								<ul className="">
									{cart.itemList.map((item, index) => (
										<Product.Component.ViewCartItem
											key={index}
											products={item}
										/>
									))}
								</ul>
							</div>
						)}
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
										<h3>$ {cart.totalPrice}</h3>
									</div>
									<div className=" flex flex-row justify-between mb-2">
										<h3>Grand Total</h3>
										<h3>$ {cart.totalPrice}</h3>
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
