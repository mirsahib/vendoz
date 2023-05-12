import Image from "next/image";
import React, { SetStateAction } from "react";

interface ILogin {
	setRedirect: React.Dispatch<SetStateAction<boolean>>;
}

export default function Login({ setRedirect }: ILogin) {
	return (
		<section className="flex justify-center items-center py-8">
			<div className="flex flex-col items-center w-[30em]">
				<div className="mb-5 flex w-[67%]">
					<h1 className=" text-2xl">Login or Sign up</h1>
				</div>

				<div className="mb-5">
					<button className="w-80 flex items-center justify-evenly py-2 border border-gray-400">
						<Image
							src={"/icon/google.svg"}
							width={24}
							height={24}
							alt="google"
						/>
						<span className="text-sm">Continue with Google</span>
					</button>
				</div>
				{/* google login */}
				<div className="mb-5">
					<button className="w-80 flex items-center justify-evenly py-2 border border-gray-400">
						<Image
							src={"/icon/apple.svg"}
							width={24}
							height={24}
							alt="apple"
						/>
						<span className="text-sm">Continue with Google</span>
					</button>
				</div>
				{/* apple login */}

				<div className="flex flex-row items-center mb-5">
					<div className="w-24 border-t border-gray-400 flex"></div>
					<span className="mx-4">or</span>
					<div className="w-24 border-t border-gray-400 flex"></div>{" "}
				</div>

				<form onSubmit={() => setRedirect(true)}>
					<div className="flex flex-col mb-5">
						<label htmlFor="email" className="text-xs mb-1">
							Email
						</label>
						<input
							className="w-80 h-10 border-2 border-gray-400 rounded focus:outline-blue-600 text-sm p-3"
							type="email"
							placeholder="yoursemail@domain.com"
						/>
					</div>
					<div className="mb-10">
						<button className="w-80 h-12 bg-blue-600 text-white font-semibold">
							Continue
						</button>
					</div>
				</form>
			</div>
			{/* signin form container */}
		</section>
	);
}
