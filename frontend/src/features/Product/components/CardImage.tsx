import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useCardContext } from "../context/CardContext";
import { urlBuilder } from "@/util/UrlBuilder";



export default function CardImage() {
	const {product} = useCardContext()
	return (
		<Link
			href={"/"}
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
