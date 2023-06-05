import { IProduct } from "@/lib/types";
import React, { ReactNode } from "react";
import CardContext from "../../context/CardContext";
import CardImage from "./CardImage";
import CardInfo from "./CardInfo";
import CardTag from "./CardTag";
import CardTitle from "./CardTitle";
import CardAction from "./CardAction";

interface ICard {
	product:IProduct
	image?:ReactNode
	info?:ReactNode;
	action?:ReactNode
}

function Card({product,image,info,action}:ICard) {
	return (
		<CardContext.Provider value={{product}} >
		<div className="bg-slate-100 hover:bg-slate-200 hover:shadow-sm m-4">
			{image}
			<div className="mt-4 p-4">
				{info}
				{action}
			</div>
		</div>
		</CardContext.Provider>
	);
}


Card.Image = CardImage
Card.Info = CardInfo
Card.Tag = CardTag
Card.Title = CardTitle
Card.Action = CardAction

export default Card