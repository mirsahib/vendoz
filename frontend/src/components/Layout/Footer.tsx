import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPaypal,
	faCcVisa,
	faCcMastercard,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
	return (
		<footer className="flex w-[90%] m-auto py-8">
			<div className="flex flex-col lg:flex-row sm:flex-row items-start lg:items-center sm:items-center basis-1/2">
				<h3 className="text-blue-600 text-base lg:text-2xl sm:text-lg font-semibold lg:mr-1 sm:mr-1">
					Vendoz
				</h3>
				<p className="text-xs lg:text-sm sm:text-sm text-gray-700">
					© Vendoz {new Date().getFullYear()}. All Rights Reserved
				</p>
			</div>
			<div className="flex justify-end basis-1/2">
				<ul className="flex items-center">
					<li className="mx-5">
						<FontAwesomeIcon icon={faPaypal} />
					</li>
					<li className="mx-5">
						<FontAwesomeIcon icon={faCcVisa} />
					</li>
					<li className="mx-5">
						<FontAwesomeIcon icon={faCcMastercard} />
					</li>
				</ul>
			</div>
		</footer>
	);
}
