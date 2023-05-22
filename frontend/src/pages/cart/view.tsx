import Head from "next/head";
import React from "react";
import { useAppSelector } from "@/store";
import Product from "@/features/Product";
import {  faShoppingBag } from "@fortawesome/free-solid-svg-icons";

export default function Cart() {
	const cart = useAppSelector((state) => state.cartStore);
	return (
		<>
			<Head>
				<title>Shopping Cart | Vendoz Online Shopping</title>
			</Head>
			<main>
				<section className="flex py-8">
					{cart.totalItem === 0 ? (
						<Product.Component.EmptySection
							title="SHOPPING CART IS EMPTY"
							icon={faShoppingBag}
							tagline="You have no items in your shopping cart."
							buttonTitles="CONTINUE SHOPPING"
						/>
					) : (
						<Product.Container.ViewCartSection />
					)}
				</section>
			</main>
		</>
	);
}
