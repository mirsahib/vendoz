import Head from "next/head";
import Link from "next/link";
import React from "react";
import Card from "@/components/Card";
import { InferGetStaticPropsType } from "next";
import { getStaticProps } from "@/lib/Product/ReadByCatagory";
import { useRouter } from "next/router";
import Product from "@/features/Product";

export default function Catagory(
	products: InferGetStaticPropsType<typeof getStaticProps>
) {
	const router = useRouter();
	const { catagory } = router.query;
	return (
		<>
			<Head>
				<title>Vendoz Online Shop</title>
			</Head>
			<main>
				<Product.Container.CatagorySection products={products.data}/>
			</main>
		</>
	);
}

export { getStaticProps, getStaticPaths } from "@/lib/Product/ReadByCatagory";
