import Image from "next/image";
import React from "react";
import { useCartItemCtx } from "../../context/CartItemContext";
import { urlBuilder } from "@/util/UrlBuilder";

type Props = {};

function CartImage({}: Props) {
	const {item} = useCartItemCtx()

	return (
		<div className="block relative w-16  h-16 mr-3 rounded overflow-hidden">
			<Image
				src={urlBuilder(item.product?.attributes.img?.data?.attributes.url)}
				fill
				alt="tshirt"
				className="object-cover object-center w-full h-full block"
			/>
		</div>
	);
}

export default CartImage;
