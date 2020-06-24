import React, { Component } from "react";
import Header from "parts/Header";
import PageDeatailsTitle from "parts/PageDetailsTitle";
import ItemDetails from "data/itemDetails.json";
import FeaturedImage from "parts/FeaturedImage";
import PageDetailsDesc from "parts/PageDetailsDesc";
import BookingForm from "parts/BookingForm";
import Category from "parts/Category";
import Testimonial from "parts/Testimonial";
import Footer from "parts/Footer";

export default class DetailsPage extends Component {
	componentDidMount() {
		window.title = "Home | Details Page";
		window.scrollTo(0, 0);
	}
	render() {
		const breadcrumblist = [
			{ pageTitle: "Home", pageHref: "" },
			{ pageTitle: "Checkout Barang", pageHref: "" },
		];
		return (
			<>
				<Header {...this.props}></Header>
				<PageDeatailsTitle breadcrumb={breadcrumblist} data={ItemDetails} />
				<FeaturedImage data={ItemDetails.imageUrls} />
				<div className="container">
					<div className="row">
						<div className="col-7 pr-5">
							<PageDetailsDesc data={ItemDetails} />
						</div>
						<div className="col-5">
							<BookingForm itemDetails={ItemDetails} />
						</div>
					</div>
				</div>
				<Category data={ItemDetails.categories} />
				<Testimonial data={ItemDetails.testimonial} />
				<Footer></Footer>
			</>
		);
	}
}
