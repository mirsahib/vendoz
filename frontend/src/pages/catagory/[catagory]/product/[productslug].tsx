import Head from "next/head";
import React from "react";
import { InferGetStaticPropsType } from "next";
import { getStaticProps } from "@/lib/Product/ReadById";
import { useRouter } from "next/router";
import Product from "@/features/Product";
import SingleProd from "@/features/Product/container/SingleProd";
import { IProduct } from "@/lib/types";
import { useAppDispatch } from "@/store";
import { addToCart } from "@/store/cart";
import { toast } from "react-toastify";

export default function SingleProduct(
	product: InferGetStaticPropsType<typeof getStaticProps>
) {
	const dispatch = useAppDispatch()
	const notify= ()=>toast("Product added to cart")
	const handleProdBtnAtx = (product:IProduct)=>{
		dispatch(addToCart(product))
		notify()
	}
	return (
		<>
			<Head>
				<title>Vendoz Online Shop</title>
			</Head>
			<main>
				<Product.Container.SingleProductSection
					product={product.data}
					image={<SingleProd.Image />}
					brand={<SingleProd.Brand />}
					title={<SingleProd.Title />}
					rating={<SingleProd.Rating />}
					desc={<SingleProd.Description />}
					// color={<SingleProd.Color />}
					// size={<SingleProd.Size />}
					price={<SingleProd.Price />}
					action={<SingleProd.Action onClick={handleProdBtnAtx}/>}
				/>
			</main>
		</>
	);
}

export { getStaticProps, getStaticPaths } from "@/lib/Product/ReadById";
