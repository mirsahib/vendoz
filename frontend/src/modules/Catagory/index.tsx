import Image from "next/image";
import React from "react";

export default function Catagory() {
	return (
		<section className="flex">
			<div className="flex basis-1/2">
				<div className="flex flex-col basis-1/2">
					<div className="p-3">
						<Image
							src={"/men-cat.jpg"}
							width={320}
							height={260}
							alt="men"
						/>
					</div>
					<div className="p-3">
						<Image
							src={"/women-cat.jpg"}
							width={320}
							height={260}
							alt="men"
						/>
					</div>
				</div>
				<div className="flex basis-1/2">
					<div className="p-2">
						<Image
							src={"/women-cat-2.jpg"}
							width={320}
							height={550}
							alt="men"
						/>
					</div>
				</div>
			</div>{" "}
			{/* row one */}
			<div className="flex flex-col basis-1/2">
				<div className="flex flex-row">
					<div className="p-3">
						<Image
							src={"/men-cat.jpg"}
							width={320}
							height={550}
							alt="men"
						/>
					</div>
					<div className="p-3">
						<Image
							src={"/access.jpg"}
							width={320}
							height={550}
							alt="men"
						/>
					</div>
				</div>
				<div>
					<div className="p-3">
						<Image
							src={"/shoe-cat.jpg"}
							width={640}
							height={270}
							alt="men"
						/>
					</div>
				</div>
			</div>{" "}
			{/* row 2 */}
		</section>
	);
}
