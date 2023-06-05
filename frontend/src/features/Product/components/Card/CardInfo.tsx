import React, { ReactNode } from "react";

interface ICardInfo{
	children:ReactNode
};

export default function CardInfo({children}:ICardInfo) {
	return (
		<div>
			{children}
		</div>
	);
}
