import React from "react";

export function Footer() {
	return (
		<div
			className="container-fluid bg-dark text-light d-flex justify-content-center fixed-bottom"
			style={{ padding: "1rem" }}>
			<span> Made with ☕ by <a href="https://hurtadojose.com" title="Made by Jose Hurtado" target="_blank">Jose Hurtado</a>.</span>
		</div>
	);
}