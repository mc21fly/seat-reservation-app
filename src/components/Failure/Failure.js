export const Failure = () => {
	return (
		<div className="container-fluid bg-primary">
			<div className="container d-flex align-items-center vh-100">
				<div className="row">
					<div className="col mb-3 text-light">
						<h1 className="display-1">:(</h1>
						<p className="lead">Coś poszło nie tak</p>
						<a href="/" className="link-light small text-decoration-none">
							<i className="fas fa-long-arrow-alt-left"></i> Wróć na początek
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
