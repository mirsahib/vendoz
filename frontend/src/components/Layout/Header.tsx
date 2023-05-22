import { useAppSelector } from "@/store";
import Link from "next/link";
import React, { ReactNode, useContext, useEffect, useState } from "react";
import CartMenu from "../CartMenu";
import ConditionalWrapper from "../ConditionalWrapper";
import useDelayUnMount from "@/hooks/useDelayUnMount";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import UserMenu from "../UserMenu";
import { AuthContext } from "@/context/AuthContext";
function Header() {
	const [isSearchActive, isSetSearchActive] = useState(false);
	const showAnimate = useDelayUnMount(isSearchActive, 250);
	const {user} = useContext(AuthContext)
	
	return (
		<>
			{!isSearchActive ? (
				<div className="py-3 border-b-2 border-gray-200">
					<nav className="flex justify-between items-center w-[95%] h-10 lg:w-[80%] sm:w-[90%] mx-auto">
						<div className="flex basis-1/4 flex-row gap-8 items-center ">
							<Link href="/">
								<h1 className="text-xl font-semibold text-blue-700">
									Vendoz
								</h1>
							</Link>
						</div>
						<div className="flex basis-1/2 ">
							<input
								onFocus={() => isSetSearchActive(true)}
								// onBlur={() => isSetSearchActive(false)}
								type="text"
								className="w-full h-10 border-2 rounded focus:outline-blue-600 p-3"
								placeholder="Search..."
							/>
						</div>
						<ul className="flex justify-end basis-1/4 gap-8">
							<li className="relative">
								<CartMenu />
							</li>
							<li className="relative">
								{user?<Link href={'/user/me'} className="text-black">My Account</Link>:<UserMenu/>}
							</li>
						</ul>
					</nav>
				</div>
			) : (
				<div className="w-full h-[66px]">
					<div
						className={
							showAnimate
								? "fixed top-0 z-10 bg-white flex flex-col items-center w-full m-auto animate show"
								: "fixed top-0 z-10 bg-white flex flex-col items-center w-full m-auto animate"
						}
					>
						<div className="flex justify-center w-full mt-4 mb-2">
							<input
								onBlur={() => isSetSearchActive(false)}
								autoFocus
								type="text"
								className="w-[70%] h-10 border-2 rounded focus:outline-blue-600 p-3"
								placeholder="Search..."
							/>
						</div>
						<div className="w-[70%]">
							<ul className="flex flex-wrap">
								<li className="p-2">
									<Link href={''} className="hover:text-blue-600">
										<div className="relative w-[100px] h-[100px]">
											<Image
												src={"/images/t-shirt.jpg"}
												fill
												style={{objectFit:'contain'}}
												alt="hero"
											/>
										</div>
										<div>
											<h3>Smug t-shirt</h3>
										</div>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default Header;
