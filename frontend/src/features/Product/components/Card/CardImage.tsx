import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useCardContext } from "../../context/CardContext";
import { urlBuilder } from "@/util/UrlBuilder";



export default function CardImage() {
	const {product} = useCardContext()
	return (
		<Link
			href={`catagory/${product.attributes.catagories?.data[0].attributes.title}/product/${product.id}`}
			className="block relative h-48 rounded overflow-hidden"
		>
			<Image
				alt={product.attributes.img?.data?.attributes.name??""}
				fill
				className="object-cover object-center w-full h-full block"
				src={urlBuilder(product.attributes.img?.data?.attributes.url)}
			/>
		</Link>
	);
}
