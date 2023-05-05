import React from "react";

export default function Link() {
	return (
		<section className="flex item-center w-[90%] m-auto">
			<div className="flex flex-wrap w-full justify-between">
				<div className="flex flex-col basis-1/4 bg-blue-400">
					<h3 className="font-semibold font-comme">CATAGORIES</h3>
					<ul>
						<li>Men</li>
						<li>Women</li>
						<li>Shoes</li>
						<li>Accessories</li>
					</ul>
				</div>
				<div className="flex flex-col basis-1/4 bg-blue-400">
					<h3 className="font-semibold font-comme">BUY WITH US</h3>
					<ul>
						<li>About</li>
						<li>Services</li>
						<li>Privacy Policy</li>
						<li>Terms and condition</li>
					</ul>
				</div>
				<div className="flex flex-col basis-1/4 bg-blue-400">
					<h3 className="font-semibold">ABOUT</h3>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Alias laborum, quas vitae iure similique atque rem
						veritatis aliquid, ipsum dignissimos error recusandae
						cum distinctio velit quos unde modi? Eligendi, cum.
					</p>
				</div>
				<div className="flex flex-col basis-1/4 bg-blue-400">
					<h3 className="font-semibold">CONTACT US</h3>
					<ul>
						<li>Men</li>
						<li>Women</li>
						<li>Shoes</li>
						<li>Accessories</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
