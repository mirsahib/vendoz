import Head from "next/head";
import Hero from "@/modules/Hero";
import Catagory from "@/modules/Catagory";
import Product from "@/modules/Product";
import Featured from "@/modules/Featured";
import Trending from "@/modules/Trending";


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
				<Product/>
				<Product/>
				{/* product section */}
				{/* <Featured/> */}
				{/* featured section */}
				{/* <Trending/> */}
				{/* trending */}
			</main>
		</>
	);
}
