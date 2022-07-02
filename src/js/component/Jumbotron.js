import React from "react";

export function Jumbotron() {
	return (
		<div className="jumbotron bg-light p-5 mt-3 mb-3">
			<h1 className="display-4">JUMBOTRON</h1>
			<p className="lead">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt
					odit vero qliquid similque quaerat nam nobis ilo aspernatur
					vitae fugiat numquam repellat.
			</p>
			<hr className="my-4"></hr>
			<p className="lead">
			It uses utility classes for typography and spacing to space content out within the larger container.</p>
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Call to action!
				</a>
		</div>
	);
}