import Head from "next/head";
import Hero from "@/modules/Hero";
import Catagory from "@/modules/Catagory";
import Product from "@/modules/Product";
import Featured from "@/modules/Featured";
import Trending from "@/modules/Trending";
import Contact from "@/modules/Contact";
import Links from "@/modules/Links";

export default function Home() {
	return (
		<>
			<Head>
				<title>Vendoz | Online Shopping, Order now in vendoz.com</title>
			</Head>
			<main>
				<Hero/>
				{/* hero section */}
				<Catagory/>
				{/* catagory section */}
				<Product/>
				{/* product section */}
				<Featured/>
				{/* featured section */}
				<Trending/>
				{/* trending */}
				<Contact/>
				{/* contact section */}
				<Links/>
				{/* trending section */}
			</main>
		</>
	);
}
