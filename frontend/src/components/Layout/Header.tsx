import Link from "next/link";
import React, { ReactNode, useState } from "react";

function Header() {
	const [isOpenUser, setIsOpenUser] = useState(false);
	const [isOpenCart,setIsOpenCart] = useState(false);
	const ConditionalRender = ({
		children,
		condition,
	}: {
		children: React.ReactNode;
		condition: boolean;
	}) => {
		if (condition) return <>{children}</>;
		return <></>;
	};

	return (
		<div className="py-3">
			<nav className="flex justify-between items-center w-[90%] max-w-screen-lg  mx-auto">
				<div className="flex basis-1/4 flex-row gap-8 items-center ">
					<Link href="/">
						<h1 className="text-xl font-semibold text-blue-700">
							Vendoz
						</h1>
					</Link>
				</div>
				<div className="flex basis-1/2 ">
					<input
						type="text"
						className="w-full h-10 border-2 rounded focus:outline-blue-600 p-3"
						placeholder="Search..."
					/>
				</div>
				<ul className="flex justify-end basis-1/4 gap-8">
					<li className="relative">
						<button
							onClick={() => {
								setIsOpenCart(!isOpenCart);
							}}
						>
							<i
								className="fa fa-shopping-basket text-gray-600"
								aria-hidden="true"
							></i>
						</button>
						<span className=" flex absolute -top-2 left-3  bg-blue-700 text-xs w-4 h-4  rounded-full text-white items-center justify-center">
							0
						</span>
						<ConditionalRender condition={isOpenCart}>
							<button
								onClick={() => setIsOpenCart(false)}
								tabIndex={-1}
								className="fixed z-10 inset-0  h-full w-full bg-black opacity-50 cursor-default"
							></button>
						</ConditionalRender>
						<ConditionalRender condition={isOpenCart}>
							<div className="flex justify-center items-center absolute w-52 right-0 h-60 z-10 bg-slate-100 text-gray-600">
								<p>No product in the cart</p>
							</div>
						</ConditionalRender>
					</li>
					<li className="relative">
						<button
							className="relative z-30"
							onClick={() => setIsOpenUser(!isOpenUser)}
						>
							<i
								className="fa fa-user text-gray-600"
								aria-hidden="true"
							></i>
						</button>
						<ConditionalRender condition={isOpenUser}>
							<button
								onClick={() => setIsOpenUser(false)}
								tabIndex={-1}
								className="fixed z-10 inset-0  h-full w-full bg-black opacity-50 cursor-default"
							></button>
						</ConditionalRender>
						<ConditionalRender condition={isOpenUser}>
							<ul className="absolute z-20 w-36 right-0 bg-slate-100 rounded  shadow-md">
								<li className=" hover:bg-blue-800 hover:text-white text-sm rounded">
									<Link
										className="flex p-2"
										onClick={() => setIsOpenUser(false)}
										href={"/user/signin"}
									>
										Sign In
									</Link>
								</li>
								<li className=" hover:bg-blue-800 hover:text-white text-sm rounded">
									<Link
										className="flex p-2"
										onClick={() => setIsOpenUser(false)}
										href={"/user/register"}
									>
										Register
									</Link>
								</li>
								<li className=" hover:bg-blue-800 hover:text-white text-sm rounded">
									<Link
										className="flex p-2"
										onClick={() => setIsOpenUser(false)}
										href={"/user/cart"}
									>
										View Cart
									</Link>
								</li>
								<li className=" hover:bg-blue-800 hover:text-white text-sm rounded">
									<Link
										className="flex p-2"
										onClick={() => setIsOpenUser(false)}
										href={"/user/wishlist"}
									>
										Wishlist
									</Link>
								</li>
							</ul>
						</ConditionalRender>
					</li>
					{/* <li className="relative">
						<button>
							<i className="fa fa-bars" aria-hidden="true"></i>
						</button>
						<ul className="absolute z-10 w-36 -left-32 bg-slate-100 rounded shadow-md">
							<li className="p-2 hover:bg-blue-800 hover:text-white text-sm">Language en|fn</li>
							<li className="p-2 hover:bg-blue-800 hover:text-white text-sm">Register</li>
							<li className="p-2 hover:bg-blue-800 hover:text-white text-sm">View Cart</li>
							<li className="p-2 hover:bg-blue-800 hover:text-white text-sm">Wishlist</li>
						</ul>
					</li> */}
				</ul>
			</nav>
		</div>
	);
}

export default Header;
