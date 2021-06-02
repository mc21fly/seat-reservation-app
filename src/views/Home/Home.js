import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
	setSeatsToChoose,
	setSideBySide,
} from '../../app/states/options/optionsSlice';

export const Home = () => {
	const dispatch = useDispatch();
	const history = useHistory();

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
							onClick={handleNextStep}>
							Wybierz miejsca
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};
