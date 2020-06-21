import React from "react";
import Breadcumb from "elements/Form/Breadcrumb";

export default class Example extends React.Component {
	render() {
		const breadcrumblist = [
			{ pageTitle: "Home", pageHref: "" },
			{ pageTitle: "House Details", pageHref: "" },
		];
		return (
			<div className="container">
				<div
					className="row algin-items-center justify-content-center"
					style={{ height: "100vh" }}
				>
					<div className="col-auto">
						<Breadcumb data={breadcrumblist} />
					</div>
				</div>
			</div>
		);
	}
}
