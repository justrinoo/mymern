import React from "react";
import Breadcumb from "elements/Form/Breadcrumb";

export default function PageDeatailsTitle({ data, breadcrumb }) {
	return (
		<section className="container spicing-sm">
			<div className="row align-items-center">
				<div className="col">
					<Breadcumb data={breadcrumb} />
				</div>
				<div className="col-auto text-center">
					<h1 className="h2">{data.name}</h1>
					<span className="text-gray-400">
						{data.city}, {data.country}
					</span>
				</div>
				<div className="col"></div>
			</div>
		</section>
	);
}
