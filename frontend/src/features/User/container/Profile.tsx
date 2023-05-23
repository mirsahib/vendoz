import { AuthContext } from "@/context/AuthContext";
import React, { useContext } from "react";

export default function Profile() {
	const {deleteUser} =useContext(AuthContext)
	return (
		<section className="flex justify-center items-center py-8">
			<div className="flex flex-col items-center w-[24em] lg:w-[30em] sm:w-[22em]">
				<div className="flex w-full justify-between mb-3">
                    <h3>First Name: Mir</h3>
                    <h3>Last Name: Sahib</h3>
                </div>
                <div className="flex w-full justify-between mb-3">
                    <h3>Username: dorkynoob</h3>
                </div>
                <div className="flex w-full justify-between mb-10">
                    <h3>Email: mirsahib@gmail.com</h3>
                </div>
                <div className="flex mb-1">
                    <button onClick={()=>deleteUser()} className="px-5 py-3 border-2 border-blue-500 hover:bg-red-300 hover:border-red-400 hover:text-yellow-50 rounded text-gray-600">Sign Out</button>
                </div>
			</div>
		</section>
	);
}
