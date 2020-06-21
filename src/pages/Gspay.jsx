import React from "react";
import { Component } from "react";
import HeaderGspay from "parts/HeaderGspay";
import HeroGspay from "parts/HeroGspay";
class Gspay extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<HeaderGspay {...this.props}></HeaderGspay>
				<HeroGspay />
			</div>
		);
	}
}
export default Gspay;
