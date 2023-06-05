import React, { ReactNode } from "react";
import CartImage from "./CartImage";
import CartTitle from "./CartTitle";
import CartQuantity from "./CartQuantity";
import CartPrice from "./CartPrice";
import CartAction from "./CartAction";
import CartItemContext from "../../context/CartItemContext";
import { InitialStateType } from "@/store/cart";

interface ICart {
	item:InitialStateType["itemList"][0]
	image?: ReactNode;
	title?: ReactNode;
	quantity?: ReactNode;
	price?: ReactNode;
	action?: ReactNode;
}

function CartItem({item, image, title, quantity, price, action }: ICart) {
	return (
		<CartItemContext.Provider value={{item}}>
			<div className="mb-10">
				<div className="w-full border-t border-slate-400 mb-5"></div>
				<div className="flex items-center ">
					{image}
					{title}
					{quantity}
					{price}
					{action}
				</div>
			</div>
		</CartItemContext.Provider>
	);
}

CartItem.Image = CartImage;
CartItem.Title = CartTitle;
CartItem.Quantity = CartQuantity;
CartItem.Price = CartPrice;
CartItem.Action = CartAction;

export default CartItem;
