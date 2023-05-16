import Image from "next/image";
import React, { SetStateAction } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface ILogin {
	setRedirect: React.Dispatch<SetStateAction<boolean>>;
}

interface ILoginInputs {
	email: string;
	password: string;
}

export default function Login({ setRedirect }: ILogin) {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<ILoginInputs>();
	const onSubmit: SubmitHandler<ILoginInputs> = async (formData) => {
		console.log("login", formData);
		try {
			const res = await fetch("/api/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});
			const response = await res.json();
			console.log("login response", response.data);
		} catch (error) {
			console.log('login component',error)
		}
	};

	return (
		<section className="flex justify-center items-center py-8">
			<div className="flex flex-col items-center w-[24em] lg:w-[30em] sm:w-[22em]">
				<div className="w-[90%] lg:w-[67%] flex flex-row items-center justify-between mb-5">
					<h1 className="text-2xl">Login</h1>
					<button
						onClick={() => {
							setRedirect(true);
						}}
						className="text-blue-600 font-semibold underline text-sm"
					>
						or create an account
					</button>
				</div>

				{/* <div className="mb-5">
					<button className=" w-72 lg:w-80 flex items-center justify-evenly py-2 border border-gray-400">
						<Image
							src={"/icon/google.svg"}
							width={24}
							height={24}
							alt="google"
						/>
						<span className="text-sm">Continue with Google</span>
					</button>
				</div> */}
				{/* google login */}
				{/* <div className="mb-5">
					<button className="w-72 lg:w-80 flex items-center justify-evenly py-2 border border-gray-400">
						<Image
							src={"/icon/apple.svg"}
							width={24}
							height={24}
							alt="apple"
						/>
						<span className="text-sm">Continue with Google</span>
					</button>
				</div> */}
				{/* apple login */}

				{/* <div className="flex flex-row items-center mb-5">
					<div className="w-24 border-t border-gray-400 flex"></div>
					<span className="mx-4">or</span>
					<div className="w-24 border-t border-gray-400 flex"></div>{" "}
				</div> */}

				<div>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="flex flex-col items-center"
					>
						<div className="w-72 lg:w-80 flex flex-col mb-5">
							<label htmlFor="email" className="text-xs mb-1">
								Email
							</label>
							<input
								className="h-10 border-2 border-gray-400 rounded focus:outline-blue-600 text-sm p-3"
								type="email"
								placeholder="yoursemail@domain.com"
								{...register("email")}
								required
							/>
						</div>
						<div className="w-72 lg:w-80 flex flex-col mb-5">
							<label htmlFor="email" className="text-xs mb-1">
								Password
							</label>
							<input
								className="h-10 border-2 border-gray-400 rounded focus:outline-blue-600 text-sm p-3"
								type="password"
								{...register("password")}
								required
								minLength={8}
							/>
						</div>
						<div className="mb-10">
							<input
								type="submit"
								value={"Login"}
								className="w-72 lg:w-80 h-12 bg-blue-600 hover:bg-blue-500 text-white font-semibold cursor-pointer"
							/>
						</div>
					</form>
				</div>
			</div>
			{/* signin form container */}
		</section>
	);
}
