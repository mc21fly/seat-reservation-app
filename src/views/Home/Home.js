export const Home = () => {
	return (
		<div className="container d-flex justify-content-center align-items-center vh-100">
			<form>
				<div className="row mb-3">
					<div className="col-auto">
						<span className="fs-4">Liczba miejsc:</span>
					</div>
					<div className="col-auto">
						<input
							type="number"
							min="0"
							max="5"
							defaultValue="0"
							className="form-control"
						/>
					</div>
				</div>
				<div className="row mb-3">
					<div className="col-auto">
						<div class="form-check">
							<input
								class="form-check-input"
								type="checkbox"
								value=""
								id="flexCheckDefault"
							/>
							<label class="form-check-label" for="flexCheckDefault">
								Czy miejsca mają być obok siebie?
							</label>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col d-grid">
						<button className="btn btn-outline-primary">Wybierz miejsca</button>
					</div>
				</div>
			</form>
		</div>
	);
};
