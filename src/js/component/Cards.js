import React from "react";
import PropTypes from "prop-types";

export function Card() {
	return (
			<div className="card m-2" style={{ minWidth: "08rem" }}>
				<img
					className="card-img-top"
					src="https://www.survivorsuk.org/wp-content/uploads/2017/01/no-image.jpg"
					alt="text image holder"
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				</div>
				<div className="card-footer">
					<a href="#" className="btn btn-primary">Go somewhere
					</a>
				</div>
			</div>
	);
}