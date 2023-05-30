import React, { PropsWithoutRef } from "react";

interface ICheckoutRow extends PropsWithoutRef<JSX.IntrinsicElements['h3']>{
    name: string;
    value: number;
}

function CheckoutRow({name,value,...props}:ICheckoutRow) {
	return (
		<div className="my-3">
			<div className="flex justify-between mb-3">
				<h3 {...props}>{name}</h3>
				<h3 {...props}>$ {value}</h3>
			</div>
			<div className="w-full border-t border-slate-400 mb-5"></div>
		</div>
	);
}

export default CheckoutRow;
