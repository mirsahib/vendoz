import React from "react";

export default function Footer() {
	return (
		<footer className="flex w-[90%] m-auto bg-green-400">
			<div className="flex basis-1/2">
				<h3>Vendoz</h3>
				<p>Copyright</p>
			</div>
      <div className="flex justify-end basis-1/2">
				<div>paypal</div>
        <div>gpay</div>
        <div>bkash</div>
			</div>
		</footer>
	);
}
