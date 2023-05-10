import React from "react";

export default function Footer() {
	return (
		<footer className="flex w-[90%] m-auto py-8">
			<div className="flex items-center basis-1/2">
				<h3 className="text-blue-600 text-2xl font-semibold mr-1">
					Vendoz
				</h3>
				<p className="text-sm text-gray-700">
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
