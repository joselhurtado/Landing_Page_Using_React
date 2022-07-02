import React from "react";
import { Navbar } from "./Navbar.js";
import { Jumbotron } from "./Jumbotron.js";
import { Card } from "./Cards.js";
import { Footer } from "./Footer.js";


export function Home() {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="container-fluid row">
					<Card
						title="This is a Card Test!"
						text="Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Explicabo magni sapiente, tempore debitis beatae
                        culpa natus architecto."
						footer="Find out more!"
					/>
					<Card
						title="This is a Card Test!"
						text="Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Explicabo magni sapiente, tempore debitis beatae
                        culpa natus architecto."
						footer="Find out more!"
					/>
					<Card
						title="This is a Card Test!"
						text="Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Explicabo magni sapiente, tempore debitis beatae
                        culpa natus architecto."
						footer="Find out more!"
					/>
					<Card
						title="This is a Card Test!"
						text="Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Explicabo magni sapiente, tempore debitis beatae
                        culpa natus architecto."
						footer="Find out more!"
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;