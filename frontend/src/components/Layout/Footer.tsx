import React from "react";

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
					<li className="mx-5" >
						<i className="fa-lg fab fa-paypal"></i>
					</li>
					<li className="mx-5">
						<i className="fa-lg fab fa-cc-visa"></i>
					</li>
					<li className="mx-5">
						<i className="fa-lg fab fa-cc-mastercard"></i>
					</li>
				</ul>
			</div>
		</footer>
	);
}
