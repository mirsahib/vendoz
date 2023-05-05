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
				<section className="flex flex-col item-center justify-center w-[90%] m-auto bg-red-400 my-8">
					<div className="flex flex-col items-center justify-center bg-yellow-400">
						<h1>Best Seller</h1>
						<p>Top products</p>
					</div>
					<ul className="flex flex-wrap">
						<li className="flex flex-col basis-1/4">
							<div className="bg-green-400 m-1 h-[400px] ">1</div>
						</li>
						<li className="flex flex-col basis-1/4">
							<div className="bg-green-400 m-1 h-[400px] ">2</div>
						</li>
						<li className="flex flex-col basis-1/4">
							<div className="bg-green-400 m-1 h-[400px] ">3</div>
						</li>
						<li className="flex flex-col basis-1/4">
							<div className="bg-green-400 m-1 h-[400px] ">4</div>
						</li>
					</ul>
				</section>{" "}
				{/* product section */}
				<section className="flex flex-col item-center justify-center w-[90%] m-auto bg-red-400 my-8">
					<div className="flex flex-col items-center justify-center bg-yellow-400">
						<h1>Featured</h1>
						<p>Top products</p>
					</div>
					<ul className="flex flex-wrap">
						<li className="flex flex-col basis-1/4">
							<div className="bg-green-400 m-1 h-[400px] ">1</div>
						</li>
						<li className="flex flex-col basis-1/4">
							<div className="bg-green-400 m-1 h-[400px] ">2</div>
						</li>
						<li className="flex flex-col basis-1/4">
							<div className="bg-green-400 m-1 h-[400px] ">3</div>
						</li>
						<li className="flex flex-col basis-1/4">
							<div className="bg-green-400 m-1 h-[400px] ">4</div>
						</li>
					</ul>
				</section>
				{/* featured section */}
				<section className="flex flex-col item-center justify-center w-[90%] m-auto bg-red-400 my-8">
					<div className="flex flex-col items-center justify-center bg-yellow-400">
						<h1>Trending Seller</h1>
						<p>Top products</p>
					</div>
					<ul className="flex flex-wrap">
						<li className="flex flex-col basis-1/4">
							<div className="bg-green-400 m-1 h-[400px] ">1</div>
						</li>
						<li className="flex flex-col basis-1/4">
							<div className="bg-green-400 m-1 h-[400px] ">2</div>
						</li>
						<li className="flex flex-col basis-1/4">
							<div className="bg-green-400 m-1 h-[400px] ">3</div>
						</li>
						<li className="flex flex-col basis-1/4">
							<div className="bg-green-400 m-1 h-[400px] ">4</div>
						</li>
						<li className="flex flex-col basis-1/4">
							<div className="bg-green-400 m-1 h-[400px] ">4</div>
						</li>
					</ul>
				</section>
				{/* trending */}
				<section className="flex bg-blue-500 my-8">
					<div className="flex justify-between w-[90%] m-auto">
						<div>
							<h3>Be touch with us</h3>
						</div>
						<div>Search</div>
						<div>Social</div>
					</div>
				</section>{" "}
				{/* trending section */}
				<section className="flex item-center w-[90%] m-auto">
					<div className="flex flex-wrap w-full justify-between">
						<div className="flex flex-col basis-1/4 bg-blue-400">
							<h3 className=" font-semibold">catagories</h3>
							<ul>
								<li>Men</li>
								<li>Women</li>
								<li>Shoes</li>
								<li>Accessories</li>
							</ul>
						</div>
						<div className="flex flex-col basis-1/4 bg-blue-400">
							<h3 className="font-semibold">Buy with us</h3>
							<ul>
								<li>About</li>
								<li>Services</li>
								<li>Privacy Policy</li>
								<li>Terms and condition</li>
							</ul>
						</div>
						<div className="flex flex-col basis-1/4 bg-blue-400">
							<h3 className="font-semibold">About</h3>
							<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias laborum, quas vitae iure similique atque rem veritatis aliquid, ipsum dignissimos error recusandae cum distinctio velit quos unde modi? Eligendi, cum.</p>
						</div>
						<div className="flex flex-col basis-1/4 bg-blue-400">
							<h3 className="font-semibold">Contact Us</h3>
							<ul>
								<li>Men</li>
								<li>Women</li>
								<li>Shoes</li>
								<li>Accessories</li>
							</ul>
						</div>
					</div>
				</section>{" "}
				{/* trending section */}
			</main>
		</>
	);
}
