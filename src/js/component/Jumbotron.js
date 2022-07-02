import React from "react";

export function Jumbotron() {
	return (
<section className="py-4 text-center container-flex bg-primary text-light mb-3">
    <div className="row py-lg-5">
      <div className="col-lg-6 col-md-8 mx-auto">
        <h1 className="fw-light"><strong>React Landing Page</strong></h1>
        <p className="lead text-white">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
        <p>
          <a href="#" className="btn btn-danger my-2 m-2">Main call to action</a>
          <a href="#" className="btn btn-light my-2 m-2">Secondary action</a>
        </p>
      </div>
    </div>
  </section>
	);
}