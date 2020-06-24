import React, { Component } from "react";

import propTypes from "prop-types";
import { InputNumber, InputDate } from "elements/Form";
import Button from "elements/Button";

export default class BookingForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {
				duration: 1,
				date: {
					startDate: new Date(),
					endDate: new Date(),
					key: "selection",
				},
			},
		};
	}

	updateData = (e) => {
		this.setState({
			...this.state,
			data: {
				...this.state.data,
				[e.target.name]: e.target.value,
			},
		});
	};

	componentDidUpdate(prevProps, prevState) {
		const { data } = this.state;
		if (prevState.data.date !== data.date) {
			const startDate = new Date(data.date.startDate);
			const endDate = new Date(data.date.endDate);
			const countDuration = new Date(endDate - startDate).getDate();
			this.setState({
				data: {
					...this.state.data,
					duration: countDuration,
				},
			});
		}

		if (prevState.data.duration !== data.duration) {
			const startDate = new Date(data.date.startDate);
			const endDate = new Date(
				startDate.setDate(startDate.getDate() + +data.duration - 1)
			);
			this.setState({
				...this.state,
				data: {
					...this.state.data,
					date: {
						...this.state.data.date,
						endDate: endDate,
					},
				},
			});
		}
	}

	render() {
		const { data } = this.state;
		const { itemDetails, startBooking } = this.props;

		return (
			<div className="card bordered" style={{ padding: "60px 80px" }}>
				<h4 className="mb-3">Mulai Belanja</h4>
				<h5 className="h2 text-danger mb-4">
					Rp. {itemDetails.price}{" "}
					<span className="text-gray-500 font-weight-light">
						per {itemDetails.unit}
					</span>
				</h5>

				<label htmlFor="duration">Berapa barang yang ingin kamu pesan?</label>
				<InputNumber
					max={30}
					suffix={" product"}
					isSuffixPlural
					onChange={this.updateData}
					name="duration"
					value={data.duration}
				/>

				{/* <label htmlFor="date">Kapan kamu akan ambil barang?</label>
				<InputDate
					onChange={this.updateData}
					name="date"
					value={data.date}
				></InputDate> */}

				<span
					className="text-gray-500 font-weight-light"
					style={{ marginBottom: 40 }}
				>
					Kamu akan membayar sebesar{" "}
					<span className="text-gray-900">
						Rp. {itemDetails.price * data.duration}
					</span>{" "}
					per{" "}
					<span className="text-gray-900">
						{data.duration} {itemDetails.unit}
					</span>
				</span>

				<Button
					className="btn"
					hasShadow
					isDanger
					isBlock
					type="link"
					href="/checkout"
					onClick={this.startBooking}
				>
					Lanjut Pembayaran
				</Button>
			</div>
		);
	}
}

BookingForm.propTypes = {
	itemDetails: propTypes.object,
	startBooking: propTypes.func,
};
