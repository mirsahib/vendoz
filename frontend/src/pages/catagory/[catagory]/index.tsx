import Head from "next/head";
import React from "react";
import { InferGetStaticPropsType } from "next";
import { getStaticProps } from "@/lib/Product/ReadByCatagory";
import {CatagorySection} from "@/features/Product";

export default function Catagory(
	products: InferGetStaticPropsType<typeof getStaticProps>
) {
	return (
		<>
			<Head>
				<title>Vendoz Online Shop</title>
			</Head>
			<main>
				<CatagorySection products={products.data}/>
			</main>
		</>
	);
}

export { getStaticProps, getStaticPaths } from "@/lib/Product/ReadByCatagory";
