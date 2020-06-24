import React from "react";
import Button from "elements/Button";
import IconText from "./IconText";

export default function Footer() {
	return (
		<footer>
			<div className="container">
				<div className="row">
					<div className="col">
						<IconText />
						<p className="brand-tagline text-justify">
							suatu bentuk digitalisasi dari toko retail(GSPRO) konvensional ke
							toko retail berbasis online yang ada di SMK Jakarta Pusat 1,
							memudahkan transaksi pembelian dilingkungan SMK Jakarta Pusat 1
							dan lebih luas lagi di wilayah DKI Jakarta.
						</p>
					</div>
					<div className="col-2 mr-5">
						<h6 className="mt-2">For Beginners</h6>
						<ul className="list-group list-group-flush">
							<li className="list-group-item">
								<Button type="link" href="/register">
									Sign up
								</Button>
							</li>
							<li className="list-group-item">
								<Button type="link" href="/properties">
									Mulai Berbelanja
								</Button>
							</li>
							<li className="list-group-item">
								<Button type="link" href="/use-payments">
									Pakai Gesjan
								</Button>
							</li>
						</ul>
					</div>
					<div className="col-2 mr-5">
						<h6 className="mt-2">Explore Us</h6>
						<ul className="list-group list-group-flush">
							<li className="list-group-item">
								<Button type="link" href="/privacy">
									Keamanan & Security
								</Button>
							</li>
							<li className="list-group-item">
								<Button type="link" href="/terms">
									Terms & Conditions
								</Button>
							</li>
						</ul>
					</div>
					<div className="col-4">
						<h6 className="mt-2">Connect Us</h6>
						<ul className="list-group list-group-flush">
							<li className="list-group-item">
								<Button
									type="link"
									href="mailto:rinosatyaputra.@gesjan.id"
									isExternal
								>
									support@gesjan.id
								</Button>
							</li>
							<li className="list-group-item">
								<Button type="link" href="tel:+6221574653">
									021 - 547 - 653
								</Button>
							</li>
							<li className="list-group-item">
								<span>gesjan,Smk Jakarta Pusat 1</span>
							</li>
						</ul>
					</div>
				</div>
				<div className="row">
					<div className="col text-center copyrights">
						Copyright 2020, All Rights Reserved, GESJAN
					</div>
				</div>
			</div>
		</footer>
	);
}
