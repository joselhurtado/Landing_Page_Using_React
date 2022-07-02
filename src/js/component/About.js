import React from "react";

export function About() {
	return (
	<div classNameName="card m-2 text-center" style={{ maxWidth: "24rem" }}>
		<img
			classNameName="card-img-top"
			src="https://www.survivorsuk.org/wp-content/uploads/2017/01/no-image.jpg"
			alt="text image holder"
		/>
			<div classNameName="card-body">
				<h5 classNameName="card-title">Card title</h5>
				<p classNameName="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
			</div>
			<div classNameName="card-footer">
				<a href="#" classNameName="btn btn-primary">Go somewhere
				</a>
			</div>
	</div>
	);
}