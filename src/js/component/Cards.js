import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
			<div className="card m-2" style={{ minWidth: "10rem" }}>
				<img
					className="card-img-top"
					src="http://placehold.it/500x325.jpg"
					alt="text image holder"
				/>
				<div className="card-body justify-content-between">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.text}</p>
				</div>
				<div className="card-footer">
					<a href="#" className="btn btn-primary">
						{props.footer}
					</a>
				</div>
			</div>
	);
}