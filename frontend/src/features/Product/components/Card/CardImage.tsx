import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useCardContext } from "../../context/CardContext";
import { urlBuilder } from "@/util/UrlBuilder";
import { useRouter } from "next/router";
import useRelativePath from "../../hooks/useRelativePath";



export default function CardImage() {
	const {product} = useCardContext()
	const {url} = useRelativePath(product)
	return (
		<Link
			href={url}
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
