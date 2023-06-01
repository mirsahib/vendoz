import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket, faUser,faBars,faXmark } from "@fortawesome/free-solid-svg-icons";
import { useAppSelector } from "@/store";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";

function Header() {
	const totalItems = useAppSelector((state) => state.cartStore.totalItem);
	const [open,setOpen] = useState(false)
	const {user} = useContext(AuthContext)
	const url = ()=>{
		let url = "/user/signin"
		if(user){
			url = "/user/me"
		}
		return url
	}
	
	return (
		<header className="sticky text-gray-600 bg-white body-font border-b-2 border-gray-300">
			<div className="container md:w-[92%] mx-auto flex flex-wrap p-3  md:p-1 flex-col md:flex-row  justify-between">
				<Link
					href={"/"}
					className="flex title-font font-medium items-center text-blue-600 mb-4 md:mb-0"
				>
					<span className="text-xl">Vendoz</span>
				</Link>
				<div onClick={()=>setOpen(!open)} className="absolute z-10 md:z-auto text-xl right-5 cursor-pointer md:hidden">
					<FontAwesomeIcon icon={open?faXmark:faBars}/>
				</div>
				<nav className={`flex md:items-center  md:flex-row flex-wrap flex-col  text-base absolute md:static z-[-1] md:z-auto md:my-3 bg-white  w-full md:w-auto left-0 top-[4.4em] pl-6 md:pl-0 transition-all duration-200 ease-in-out ${open?"top-[4.4em] opacity-100":"top-[0.75em] opacity-0 md:opacity-100"}`}>
					<Link
						onClick={()=>setOpen(false)}
						href={"/cart/view"}
						className="relative mr-5 my-5 md:my-0 hover:text-blue-600"
					>
						<FontAwesomeIcon icon={faShoppingBasket} className="mr-1"/>
						{totalItems ? (
							<span className="absolute -top-2 left-4 text-center w-4 h-4  bg-blue-600 rounded-full text-xs text-white">
								{totalItems}
							</span>
						) : (
							""
						)}
					</Link>
					<Link
						href={url()}
						className=" mb-5 md:mb-0 hover:text-blue-600"
					>
						<FontAwesomeIcon icon={faUser}  className="mr-1"/>
					</Link>
				</nav>
			</div>
		</header>
	);
}

export default Header;
