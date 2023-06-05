import { AuthContext } from "@/context/AuthContext";
import Image from "next/image";
import React, { useContext, useEffect } from "react";
import FormInput from "../components/FormInput";
import { ProfileApiResponse } from "@/lib/types";

type props = {
	profile: ProfileApiResponse
}

export default function Profile({profile}:props) {
	// console.log("🚀 ~ file: Profile.tsx:12 ~ Profile ~ profile:", profile)
	const { deleteUser } = useContext(AuthContext);
	
	return (
		<section className="flex py-8">
			<div className="w-[95%] lg:w-[90%] sm:w-[90%] text-gray-800 flex flex-col lg:flex-row justify-evenly m-auto">
				<div className="w-full lg:border-r flex flex-col items-center lg:w-1/4">
					<div className="bg-slate-300 relative flex w-40 h-40 rounded-full overflow-hidden justify-center items-center mb-5">
						<Image
							src={"/images/profile.png"}
							alt="profile"
							fill
							className="object-cover object-top"
						/>
					</div>
					<h1 className="font-semibold text-lg">Joe Doe</h1>
					<p className="text-gray-500 text-sm mb-5">
						{profile?.email}
					</p>
					<button onClick={()=>deleteUser()} className="flex text-sm text-gray-700  border border-blue-600 py-2 px-6 focus:outline-none hover:bg-red-600 hover:border-0 hover:text-white rounded">
						Logout
					</button>
				</div>
				<div className="w-full flex flex-col lg:border-r  items-center lg:items-baseline lg:w-2/5 p-3">
					<h1 className="font-medium text-lg mb-5">Account</h1>
					<FormInput
						id="fname"
						label={
							<label className="text-xs mb-1">First Name</label>
						}
						containerclassname="w-[80%] flex flex-col mb-5"
						type="text"
						inputclassname="h-10 border-2 border-gray-400 rounded focus:outline-blue-600 text-sm p-3"
						autoComplete="on"
						placeholder="Mir Sahib"
						// {...register("email", { required: true })}
					/>
					<FormInput
						id="lname"
						label={
							<label className="text-xs mb-1">Last Name</label>
						}
						containerclassname="w-[80%] flex flex-col mb-5"
						type="text"
						inputclassname="h-10 border-2 border-gray-400 rounded focus:outline-blue-600 text-sm p-3"
						autoComplete="on"
						// {...register("email", { required: true })}
					/>
					<FormInput
						id="email"
						label={<label className="text-xs mb-1">Email</label>}
						containerclassname="w-[80%] flex flex-col mb-5"
						type="email"
						inputclassname=" h-10 border-2 border-gray-400 rounded focus:outline-blue-600 text-sm p-3"
						autoComplete="on"
						// {...register("email", { required: true })}
					/>
					<FormInput
						id="address"
						label={<label className="text-xs mb-1">Address</label>}
						containerclassname="w-[80%] flex flex-col mb-5"
						type="text"
						inputclassname=" h-10 border-2 border-gray-400 rounded focus:outline-blue-600 text-sm p-3"
						autoComplete="on"
						placeholder="9161 Wallisville Rd,Houston,Texas,USA"

						// {...register("email", { required: true })}
					/>
					<button
						// onClick={() => onClick(product)}
						className="flex text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded"
					>
						Save
					</button>
				</div>
				<div className="w-full lg:w-1/3 p-3">
					<h1 className="font-medium text-lg mb-5">Order history</h1>
					<ul className="text-sm overflow-y-auto h-72">
						<li className="font-medium mb-2">
							Order of{" "}
							<span className="text-blue-600">id:54343</span>{" "}
							<span className="text-green-500">delivered</span> at
							12.30pm
						</li>
						<li className="font-medium mb-2">
							Order of{" "}
							<span className="text-blue-600">id:54343</span>{" "}
							<span className="text-orange-500">confirmed</span>{" "}
							at 12.40pm
						</li>
						<li className="font-medium mb-2">
							Order of{" "}
							<span className="text-blue-600">id:54343</span>{" "}
							amount $234{" "}
							<span className="text-red-500">placed</span> at
							12.30pm
						</li>
						
					</ul>
				</div>
			</div>
		</section>
	);
}

