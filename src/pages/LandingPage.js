import React, { Component } from "react";
import Header from "parts/Header";
import dataLandingPage from "data/landingPage.json";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
import Category from "parts/Category";
import Testimonial from "parts/Testimonial";
import Footer from "parts/Footer";

export default class LandingPage extends Component {
	constructor(props) {
		super(props);
		this.refMostPicked = React.createRef();
	}
	componentDidMount() {
		window.title = "Staycation | Home";
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<>
				<Header {...this.props}></Header>
				<Hero refMostPicked={this.refMostPicked} data={dataLandingPage.hero} />
				<MostPicked
					refMostPicked={this.refMostPicked}
					data={dataLandingPage.mostPicked}
				/>
				<Category data={dataLandingPage.categories} />
				<Testimonial data={dataLandingPage.testimonial} />
				<Footer />
			</>
		);
	}
}
