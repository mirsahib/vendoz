import React from "react";

export default function Contact() {
	return (
		<section className="flex bg-blue-600 my-8 py-2">
			<div className="flex justify-between w-[90%] m-auto">
				<div className="flex items-center basis-1/4 text-white">
					<h3 className=" font-medium">BE TOUCH WITH US</h3>
				</div>
				<div className="flex basis-1/2">
					<input
						type="text"
						placeholder="Enter your email"
						className=" basis-3/4 rounded p-2  focus:outline-none h-10 "
					/>
					<button className=" basis-1/4 bg-black rounded text-white">
						JOIN US
					</button>
				</div>
				<div className="flex justify-end basis-1/4">
					<ul className="flex items-center">
						<li className="mx-5 text-white">
							<i
								className="fab fa-facebook"
								aria-hidden="true"
							></i>
						</li>
						<li className="mx-5 text-white">
							<i
								className="fab fa-twitter"
								aria-hidden="true"
							></i>
						</li>
						<li className="mx-5 text-white">
							<i
								className="fab fa-instagram"
								aria-hidden="true"
							></i>
						</li>
						<li className="mx-5 text-white">
							<i
								className="fab fa-pinterest"
								aria-hidden="true"
							></i>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
