import React from "react";

export default function Links() {
	return (
		<section className="flex py-8 bg-slate-100">
			<div className="flex item-center w-[90%] m-auto">
				<div className="flex flex-wrap w-full justify-between">
					<div className="flex flex-col basis-1/4">
						<h3 className="text-gray-800 text-sm font-semibold font-comme mb-2">CATAGORIES</h3>
						<ul className=" text-gray-500">
							<li>Men</li>
							<li>Women</li>
							<li>Shoes</li>
							<li>Accessories</li>
						</ul>
					</div>
					<div className="flex flex-col basis-1/4 ">
						<h3 className="text-gray-800 text-sm font-semibold font-comme mb-2">
							BUY WITH US
						</h3>
						<ul className=" text-gray-500">
							<li>About</li>
							<li>Services</li>
							<li>Privacy Policy</li>
							<li>Terms and condition</li>
						</ul>
					</div>
					<div className="flex flex-col basis-1/4 pr-5">
						<h3 className="text-gray-800 text-sm font-semibold mb-2">ABOUT</h3>
						<p className=" text-sm text-gray-500">
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Alias laborum, quas vitae iure similique atque
							rem veritatis aliquid, ipsum dignissimos error
							recusandae cum distinctio velit quos unde modi?
							Eligendi, cum.
						</p>
					</div>
					<div className="flex flex-col basis-1/4">
						<h3 className="text-gray-800 text-sm font-semibold mb-2">CONTACT US</h3>
						<ul className=" text-sm text-gray-500">
							<li><span className=" text-black">ADDRESS: </span>9161 Wallisville Rd,Houston,Texas,USA</li>
							<li><span className=" text-black">PHONE: </span> (713) 675-4222</li>
							<li><span className=" text-black">OFFICE HOURS: </span> 9 to 5 except sunday</li>
							<li className="text-blue-700"><span className=" text-black">EMAIL: </span>support@vendoz.com</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
