import { useSelector } from 'react-redux';
import { Failure } from '../../components/Failure/Failure';

export const Confirm = () => {
	const selectedSeats = useSelector((state) => state.seats.selected);
	const isSeatsSelected = selectedSeats.length > 0;

	return isSeatsSelected ? (
		<div className="container d-flex align-items-center vh-100">
			<div className="row">
				<div className="col mb-3">
					<h2>Twoja rezerwacja przebiegła pomyślnie!</h2>
				</div>
				<div className="row">
					<div className="col mb-5">
						<ul className="list-group">
							<li className="list-group-item list-group-item-dark">
								Wybrane miejsca:
							</li>
							{selectedSeats.map((seat, key) => (
								<li className="list-group-item" key={key}>
									Rząd {seat.cords.x + 1}, miejsce {seat.cords.y + 1}.{' '}
									<b>ID: {seat.id}</b>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className="row">
					<div className="col">
						<h5>
							Dziękujemy! W razie problemów prosimy o kontakt z administracją.
						</h5>
					</div>
				</div>
			</div>
		</div>
	) : (
		<Failure />
	);
};
