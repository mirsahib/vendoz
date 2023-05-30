import { useAppDispatch, useAppSelector } from "@/store";
import React from "react";
import CartItem from "../components/CartItem";
import CheckoutRow from "../components/CheckoutRow";
import { IProduct } from "@/lib/types";
import { decreaseItem, increaseItem, removeItem } from "../action/cartAction";

export default function ViewCart() {
	const cart = useAppSelector((state) => state.cartStore);
	const dispatch = useAppDispatch();
	const handleDeleteAtx = (product: IProduct | null) => {
		dispatch(removeItem(product));
	};
	const handlePlusAtx = (product: IProduct | null) => {
		dispatch(increaseItem(product));
	};
	const handleMinusAtx = (product: IProduct | null) => {
		dispatch(decreaseItem(product));
	};
	const calTax =(val:number)=>{
		return (val*10)/100
	}
	const calTotal = (val:number)=>{
		return Math.round(val+calTax(val)+10)
	}

	return (
		<div className="w-[95%] lg:w-[90%] sm:w-[90%] text-gray-800 flex flex-col lg:flex-row justify-evenly m-auto">
			<div className="w-full lg:w-3/4 p-3 mr-5">
				<div className="flex justify-between items-end mb-5">
					<h1 className="font-semibold text-2xl">Shopping Cart</h1>
					<p>{cart.totalItem} items in cart</p>
				</div>
				{cart.itemList.map((product) => (
					<CartItem
						item={product}
						image={<CartItem.Image />}
						title={<CartItem.Title />}
						quantity={
							<CartItem.Quantity
								onIncrement={handlePlusAtx}
								onDecrement={handleMinusAtx}
							/>
						}
						price={<CartItem.Price />}
						action={<CartItem.Action onClick={handleDeleteAtx} />}
					/>
				))}
			</div>
			<div className="w-full lg:mt-14 lg:w-1/4 bg-slate-100 p-5">
				<CheckoutRow name="Subtotal" value={cart.totalPrice} />
				<CheckoutRow name="Tax" value={calTax(cart.totalPrice)} />
				<CheckoutRow name="Shipping" value={10} />
				<CheckoutRow
					name="Total"
					value={calTotal(cart.totalPrice)}
					className="font-semibold text-lg"
				/>

				<button className="block w-full h-12 text-white bg-gray-950 hover:bg-gray-800 rounded mb-3">
					Confirm Payment
				</button>
				<button className="block w-full h-12 text-black bg-white hover:bg-slate-300 border border-black rounded mb-3">
					Continue Shopping
				</button>
			</div>
		</div>
	);
}
