import React from "react";
import InputNumber from "./index";
import { render, fireEvent } from "@testing-library/react";

class TestingInputNumber extends React.Component {
	state = {
		value: "",
	};
	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	render() {
		return (
			<InputNumber
				max={30}
				onChange={this.handleChange}
				name="value"
				value={this.state.value}
			/>
		);
	}
}

const setup = () => {
	const { container } = render(<TestingInputNumber />);
	const input = container.querySelector(`input.form-control[name='value']`);
	return {
		input,
	};
};

test("component harus merubah value", () => {
	const { input } = setup();
	fireEvent.change(input, { target: { value: 23 } });
	console.log(input.value);
	expect(input.value).toBe("23");
});

test("component ini tidak boleh diubah jika value nya sudah max ", () => {
	const { input } = setup();
	fireEvent.change(input, { target: { value: 33 } });
	expect(input.value).toBe("");
});
