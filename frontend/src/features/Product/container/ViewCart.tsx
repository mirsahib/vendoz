import { useAppSelector } from "@/store";
import React from "react";
import ViewCartItem from "../components/ViewCartItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function ViewCart() {
    const cart = useAppSelector((state) => state.cartStore);

	return (
		<div className="w-[80%] flex flex-col items-center m-auto">
			<div className="mb-5 text-2xl font-semibold">
				<h1>Shopping Cart</h1>
			</div>
			<div className="w-full border-t border-slate-400 mb-5"></div>

			<div className="w-full mb-5 px-0 lg:px-2">
				<ul className="">
					{cart.itemList.map((item, index) => (
						<ViewCartItem
							key={index}
							products={item}
						/>
					))}
				</ul>
			</div>

			{/* shopping card */}
			<div className="w-full border-t border-slate-400 mb-5"></div>
			<div className="w-full flex flex-row justify-between mb-5">
				<div>
					<button className="text-blue-600 hover:text-black">
						<FontAwesomeIcon icon={faArrowLeft} className="mr-2"/>
						<span>Continue Shopping</span>
					</button>
				</div>
				<div>
					<button className="text-blue-600 hover:text-black">
						<FontAwesomeIcon icon={faTrash} className="mr-2"/>
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
						<button className="">PROCEED TO CHECKOUT</button>
					</div>
				</div>
			</div>
			{/* total container */}
		</div>
	);
}
