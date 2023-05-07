import Head from "next/head";
import Hero from "@/components/Hero";
import Catagory from "@/components/Catagory";
import Product from "@/components/Product";


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
