import Image from "next/image";
import React from "react";
import ImageContainer from "./components/ImageContainer";

export default function Catagory() {
	return (
		<section className="flex">
			<div className="flex basis-1/2">
				<div className="flex flex-col basis-1/2">
					<ImageContainer
						name="MEN"
						width={320}
						height={260}
						url="/men-cat.jpg"
					/>
					<ImageContainer
						name="MEN"
						width={320}
						height={260}
						url="/women-cat.jpg"
					/>
				</div>
				<div className="flex basis-1/2">
					<ImageContainer
						name="MEN"
						width={320}
						height={560}
						url="/women-cat-2.jpg"
					/>
				</div>
			</div>{" "}
			{/* row one */}
			<div className="flex flex-col basis-1/2">
				<div className="flex flex-row">
					<ImageContainer
						name="MEN"
						width={320}
						height={260}
						url="/men-cat.jpg"
					/>

					<ImageContainer
						name="MEN"
						width={320}
						height={260}
						url="/access.jpg"
					/>
				</div>
				<div>
					<ImageContainer
						name="MEN"
						width={640}
						height={270}
						url="/shoe-cat.jpg"
					/>
				</div>
			</div>{" "}
			{/* row 2 */}
		</section>
	);
}
