import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faShoppingBasket, faUser } from "@fortawesome/free-solid-svg-icons";

function Header() {
	return (
		<header className="text-gray-600 bg-white body-font">
			<div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
				<Link
					href={"/"}
					className="flex title-font font-medium items-center text-blue-600 mb-4 md:mb-0"
				>
					{/* <svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
						viewBox="0 0 24 24"
					>
						<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
					</svg> */}
					<span className="ml-3 text-xl">Vendoz</span>
				</Link>
				<div className="w-[50%] flex justify-center bg-red-300">
					<input
						type="text"
						className="w-full h-10 border-2 rounded focus:outline-blue-600 p-3"
						placeholder="Search..."
					/>
				</div>

				<nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
					<Link href={"/"} className="mr-10 hover:text-blue-600">
						<FontAwesomeIcon icon={faShoppingBasket} />
					</Link>
					<Link href={"/"} className="mr-5 hover:text-blue-600">
						<FontAwesomeIcon icon={faUser} />
					</Link>
				</nav>
			</div>
		</header>
	);
}

export default Header;
