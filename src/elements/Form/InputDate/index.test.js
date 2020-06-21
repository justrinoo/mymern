import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import InputDate from "./index";

class DatePicker extends React.Component {
	state = {
		value: {
			startDate: new Date(),
			endDate: new Date(),
			key: "selection",
		},
	};
	handleChange = (e) => {
		this.setState({ value: e.target.value });
	};
	render() {
		return (
			<InputDate
				max={30}
				onChange={this.handleChange}
				name="value"
				value={this.state.value}
			/>
		);
	}
}

const setup = () => {
	const { container } = render(<DatePicker />);
	const wrapper = container.querySelector(`.input-date`);
	const input = container.querySelector(`input.form-control`);
	return {
		container,
		wrapper,
		input,
	};
};

test("component ini mempunyai className itu .form-control ", () => {
	const { wrapper } = setup();

	expect(wrapper).toBeInTheDocument();
});

test("component ini mempunyai tag input dan className .form-control ", () => {
	const { input } = setup();

	expect(input).toBeInTheDocument();
});

test("component ini ketika di click akan mengeluarkan date picker dari input", () => {
	const { container, input } = setup();

	// screen.debug();
	fireEvent.click(input, { button: 1 });
	const datePickerWrapper = container.querySelector(`.date-range-wrapper`);

	// screen.debug();
	expect(datePickerWrapper).toBeInTheDocument();
});
