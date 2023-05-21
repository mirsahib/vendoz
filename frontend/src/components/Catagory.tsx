import React from "react";
import ImageContainer from "./ImageContainer";

export default function Catagory() {
	return (
		<section className="flex flex-col lg:flex-row sm:flex-col">
			<div className="flex basis-1/2">
				<div className="flex flex-col basis-1/2">
					<ImageContainer
						name="MEN"
						width={320}
						height={260}
						url="/images/men-cat.webp"
					/>
					<ImageContainer
						name="WOMEN"
						width={320}
						height={260}
						url="/images/women-cat.webp"
					/>
				</div>
				<div className="flex basis-1/2">
					<ImageContainer
						name="SALE"
						width={320}
						height={560}
						url="/images/women-cat-2.webp"
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
						url="/images/men-cat.webp"
					/>

					<ImageContainer
						name="Accessories"
						width={320}
						height={260}
						url="/images/access.webp"
					/>
				</div>
				<div>
					<ImageContainer
						name="Shoes"
						width={640}
						height={270}
						url="/images/shoe-cat.webp"
					/>
				</div>
			</div>{" "}
			{/* row 2 */}
		</section>
	);
}
