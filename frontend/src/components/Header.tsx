import Link from "next/link";
import React from "react";

function Header() {
	return (
		<div className="py-6">
			<nav className="flex justify-between items-center w-[90%] max-w-screen-lg  mx-auto">
				<div className="flex flex-row gap-8 items-center  ">
					<Link href="/">
						<h1 className="text-xl font-semibold text-blue-600">
							Vendoz
						</h1>
					</Link>
				</div>
				<ul className="flex gap-8">
					<li>
						<button >
							<i
								className="fa fa-search text-gray-600 "
								aria-hidden="true"
							></i>
						</button>
					</li>
					<li>
						<button>
							<i
								className="fa fa-shopping-basket text-gray-600"
								aria-hidden="true"
							></i>
						</button>
					</li>
					<li>
						<button>
							<i
								className="fa fa-user text-gray-600"
								aria-hidden="true"
							></i>
						</button>
					</li>
					<li>
						<button>
							<i className="fa fa-bars" aria-hidden="true"></i>
						</button>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Header;
