import Image from "next/image";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Vendoz | Online Shopping, Order now in vendoz.com</title>
			</Head>
			<main>
				<section className="w-full relative h-[85vh]">
					<div className="-z-10">
						<Image
							src={"/shopping.jpg"}
							fill={true}
							style={{
								objectFit: "cover",
								objectPosition: "center",
							}}
							alt="hero"
						/>
					</div>
					<div className="flex relative">
						<h1>Vendoz</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Tempore
						</p>
					</div>
				</section>
				{/* hero section */}
				<section className="flex">
					<div className="flex basis-1/2">
						<div className="flex flex-col basis-1/2">
							<div className="p-3">
								<Image
									src={"/men-cat.jpg"}
									width={320}
									height={260}
									alt="men"
								/>
							</div>
							<div className="p-3">
								<Image
									src={"/women-cat.jpg"}
									width={320}
									height={260}
									alt="men"
								/>
							</div>
						</div>
						<div className="flex basis-1/2">
							<div className="p-2">
								<Image
									src={"/women-cat-2.jpg"}
									width={320}
									height={550}
									alt="men"
								/>
							</div>
						</div>
					</div>{" "}
					{/* row one */}
					<div className="flex flex-col basis-1/2">
						<div className="flex flex-row">
							<div className="p-3">
								<Image
									src={"/men-cat.jpg"}
									width={320}
									height={550}
									alt="men"
								/>
							</div>
							<div className="p-3">
								<Image
									src={"/access.jpg"}
									width={320}
									height={550}
									alt="men"
								/>
							</div>
						</div>
						<div>
							<div className="p-3">
								<Image
									src={"/shoe-cat.jpg"}
									width={640}
									height={270}
									alt="men"
								/>
							</div>
						</div>
					</div>{" "}
					{/* row 2 */}
				</section>
				{/* catagory section */}
				<section className="flex item-center w-[90%] m-auto bg-red-400">
					product
				</section>{" "}
				{/* product section */}
				<section>feature</section> {/* feature section */}
				<section className="flex item-center w-[90%] m-auto bg-red-500">
					trending
				</section>{" "}
				{/* trending section */}
				<section>contact</section> {/* trending section */}
				<section className="flex item-center w-[90%] m-auto bg-green-400">
					links
				</section>{" "}
				{/* trending section */}
			</main>
		</>
	);
}
