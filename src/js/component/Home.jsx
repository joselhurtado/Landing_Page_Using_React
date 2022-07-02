import React from "react";
import { Navbar } from "./Navbar.js";
import { Jumbotron } from "./Jumbotron.js";
import { Card } from "./Cards.js";
import { Footer } from "./Footer.js";

export function Home() {
  return (
    <div className="container-flex">
      <div className="container-flex">
        <Navbar />
      </div>
      <div className="container-flex">
        <Jumbotron />
      </div>

      <div className="container-lg">
        <div className="card-group mb-3">
          <div className="card bg-primary">
            <Card
              title="This is a Card Test!"
              text="Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Explicabo magni sapiente, tempore debitis beatae
                        culpa natus architecto."
              footer="Find out more!"
            />
          </div>
          <div className="card bg-danger">
            <Card
              title="This is a Card Test!"
              text="Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Explicabo magni sapiente, tempore debitis beatae
                        culpa natus architecto."
              footer="Find out more!"
            />
          </div>
          <div className="card text-dark bg-warning">
            <Card
              title="This is a Card Test!"
              text="Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Explicabo magni sapiente, tempore debitis beatae
                        culpa natus architecto."
              footer="Find out more!"
            />
          </div>
          <div className="card text-dark bg-info">
            <Card
              title="This is a Card Test!"
              text="Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Explicabo magni sapiente, tempore debitis beatae
                        culpa natus architecto."
              footer="Find out more!"
            />
          </div>
        </div>
      </div>
      <div className="container-flex">
        <Footer />
      </div>
    </div>
  );
}

export default Home;