import React from "react";
import ImageHero from "assets/images/image-landingpage.jpg";
import IconTraveller from "assets/images/icons/ic_traveler.svg";
import IconCities from "assets/images/icons/ic_cities.svg";
import IconTreasure from "assets/images/icons/ic_treasure.svg";
import Button from "elements/Button";
import FormatNumber from "utils/FormatNumber";
import Fade from "react-reveal/Fade";

export default function Hero(props) {
	const showMostPicked = () => {
		window.scrollTo({
			top: props.refMostPicked.current.offsetTop - 30,
			behavior: "smooth",
		});
	};

	return (
		<Fade bottom>
			<section className="container pt-4">
				<div className="row align-items-center">
					<div className="col-auto pr-5" style={{ width: 520 }}>
						<h2 className="font-weight-bold line-height-1 mb-3">
							Transaksi santai dengan digital <br />
							memudahkan anda dalam apapun
						</h2>
						<p className="mb-4 font-weight-light text-gray-500 w-75 text-justify">
							suatu bentuk digitalisasi dari toko retail(GSPRO) konvensional ke
							toko retail berbasis online yang ada di SMK Jakarta Pusat 1,
							memudahkan transaksi pembelian dilingkungan SMK Jakarta Pusat 1
							dan lebih luas lagi di wilayah DKI Jakarta.
						</p>
						<Button
							className="btn px-5 btn-outline-danger"
							hasShadow
							onClick={showMostPicked}
						>
							Lihat Sekarang
						</Button>
					</div>
					<div className="col-6 pl-5">
						<div style={{ width: 520, height: 410 }}>
							<img
								src={ImageHero}
								alt="HotelBeach Royale"
								className="img-fluid position-absolute"
								style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
							/>
						</div>
					</div>
				</div>
			</section>
		</Fade>
	);
}
