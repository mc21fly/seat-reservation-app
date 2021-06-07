import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
	setSeatsToChoose,
	setSideBySide,
} from '../../app/states/options/optionsSlice';
import { fetchSeats } from '../../app/states/seats/seatsSlice';

export const Home = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const availableSeats = useSelector((state) =>
		state.seats.plan.filter((seat) => !seat.reserved)
	);
	const seatsToChoose = useSelector((state) => state.options.seatsToChoose);

	useEffect(() => {
		dispatch(fetchSeats());
	}, [dispatch]);

	const handleNextStep = () => {
		history.push('/select');
	};

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
							min="1"
							max={availableSeats.length}
							defaultValue="1"
							className="form-control"
							onChange={(e) => dispatch(setSeatsToChoose(e.target.value))}
						/>
					</div>
				</div>
				<div className="row mb-3">
					<div className="col-auto">
						<div className="form-check">
							<input
								className="form-check-input"
								type="checkbox"
								onChange={(e) => dispatch(setSideBySide(e.target.checked))}
							/>
							<label className="form-check-label">
								Czy miejsca mają być obok siebie?
							</label>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col d-grid">
						<button
							className="btn btn-outline-primary"
							onClick={
								parseInt(seatsToChoose) <= availableSeats.length
									? handleNextStep
									: null
							}>
							Wybierz miejsca
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};
