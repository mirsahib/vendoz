import Link from "next/link";
import React from "react";
import { useCartItemCtx } from "../../context/CartItemContext";
import { truncate } from "@/util/truncate";

type Props = {};

function CartTitle({}: Props) {
	const {item} = useCartItemCtx()
    const catagories = item.product?.attributes.catagories?.data[0].attributes.title
	const id = item.product?.id
	return (
		<Link
			href={`/catagory/${catagories}/product/${id}`}
			className="font-semibold text-base hover:text-blue-600 w-1/3 "
		>
			{truncate(item.product?.attributes.title)}
		</Link>
	);
}

export default CartTitle;
