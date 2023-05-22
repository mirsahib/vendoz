import React from "react";
import { twitter, facebook, instagram, pinterest } from "@/lib/types/Icons";
import Image from "next/image";
export default function Contact() {
	return (
		<section className="bg-blue-600 py-2 lg:block sm:hidden  hidden">
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
							<Image
								src={facebook}
								width={15}
								height={15}
								alt="facebook"
							/>
						</li>
						<li className="mx-5 text-white">
							<Image
								src={twitter}
								width={15}
								height={15}
								alt="twitter"
							/>
						</li>
						<li className="mx-5 text-white">
							<Image
								src={instagram}
								width={15}
								height={15}
								alt="instagram"
							/>
						</li>
						<li className="mx-5 text-white">
							<Image
								src={pinterest}
								width={15}
								height={15}
								alt="pinterest"
							/>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
