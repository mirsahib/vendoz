import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import ConditionalWrapper from "./ConditionalWrapper";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function UserMenu() {
    const [isOpenUser, setIsOpenUser] = useState(false);

	return (
		<>
			<button
				className="relative z-30"
				onClick={() => setIsOpenUser(!isOpenUser)}
			>
				<FontAwesomeIcon icon={faUser} className="text-gray-600" />
			</button>
			<ConditionalWrapper condition={isOpenUser}>
				<button
					onClick={() => setIsOpenUser(false)}
					tabIndex={-1}
					className="fixed z-10 inset-0  h-full w-full bg-black opacity-50 cursor-default"
				></button>
			</ConditionalWrapper>
			<ConditionalWrapper condition={isOpenUser}>
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
							href={"/cart/view"}
						>
							View Cart
						</Link>
					</li>
					<li className=" hover:bg-blue-800 hover:text-white text-sm rounded">
						<Link
							className="flex p-2"
							onClick={() => setIsOpenUser(false)}
							href={"/cart/wishlist"}
						>
							Wishlist
						</Link>
					</li>
				</ul>
			</ConditionalWrapper>
		</>
	);
}
