import React, { useState } from "react";
import ConditionalWrapper from "./ConditionalWrapper";
import { useAppSelector } from "@/store";

export default function DropdownMenu() {
	const [isOpenCart,setIsOpenCart] = useState(false);
	const totalItem = useAppSelector(state=>state.cartStore.totalItem)

	return (
		<>
			<button
				onClick={() => {
					setIsOpenCart(!isOpenCart);
				}}
			>
				<i
					className="fa fa-shopping-basket text-gray-600"
					aria-hidden="true"
				></i>
			</button>
			<span className=" flex absolute -top-2 left-3  bg-blue-700 text-xs w-4 h-4  rounded-full text-white items-center justify-center">
				{totalItem}
			</span>
			<ConditionalWrapper condition={isOpenCart}>
				<button
					onClick={() => setIsOpenCart(false)}
					tabIndex={-1}
					className="fixed z-10 inset-0  h-full w-full bg-black opacity-50 cursor-default"
				></button>
			</ConditionalWrapper>
			<ConditionalWrapper condition={isOpenCart}>
				<div className="flex justify-center items-center absolute w-52 right-0 h-60 z-10 bg-slate-100 text-gray-600">
					<p>No product in the cart</p>
				</div>
			</ConditionalWrapper>
		</>
	);
}
