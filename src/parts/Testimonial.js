import React from "react";
import Star from "elements/Star";
import Button from "elements/Button";
import Fade from "react-reveal/Fade";

export default function Testimonial({ data }) {
	return (
		<Fade bottom>
			<section className="container">
				<div className="row align-items-center">
					<div className="col-auto" style={{ marginRight: 60 }}>
						<div
							className="testimonial-hero"
							style={{ margin: `30px 0 0  30px` }}
						>
							<img
								src={data.imageUrl}
								className="position-absolute"
								alt={data.name}
								style={{ zIndex: 1 }}
							/>
							<img
								src={data.imageFrame}
								className="position-absolute"
								alt={data.name}
								style={{ margin: "-30px 0 0 -30px" }}
							/>
						</div>
					</div>
					<div className="col">
						<h4 style={{ marginBottom: 40 }}>{data.name}</h4>
						<h5 className="h2 font-weight-light line-height-2 my-3">
							{data.content}
						</h5>
						<span className="text-gray-500">
							{data.familyName}, {data.familyOccupation}
						</span>
						<div>
							<Button
								type="link"
								className="button-story btn btn-outline-danger px-5"
								style={{ marginTop: 50 }}
								hasShadow
								href={`/testimonial/${data._id}`}
							>
								Lihat Testimonial
							</Button>
						</div>
					</div>
				</div>
			</section>
		</Fade>
	);
}
