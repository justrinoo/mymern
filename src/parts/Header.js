import React from "react";
import Fade from "react-reveal/Fade";
import Button from "elements/Button";
import BrandText from "./IconText";

export default function Header(props) {
	const getNavLinkClass = (path) => {
		return props.location.pathname === path ? "active" : " ";
	};

	if (props.isCentered) {
		return (
			<Fade>
				<header className="spicing-sm">
					<div className="container">
						<nav className="navbar navbar-expand-lg navbar-light">
							<Button type="link" href="" className="brand-text-icon mx-auto">
								Gesjan
							</Button>
						</nav>
					</div>
				</header>
			</Fade>
		);
	}

	return (
		<Fade>
			<header className="spacing-sm">
				<div className="container">
					<nav className="navbar navbar-expand-lg navbar-light">
						<BrandText />
						<div className="collapse navbar-collapse">
							<ul className="navbar-nav ml-auto">
								<li className={`nav-item ${getNavLinkClass("/")}`}>
									<Button type="link" className="nav-link" href="/">
										Home
									</Button>
								</li>
								<li className={`nav-item ${getNavLinkClass("/Gspay")}`}>
									<Button
										type="link"
										className="nav-link text-danger"
										href="/Gspay"
									>
										GSPay
									</Button>
								</li>
								<li className={`nav-item ${getNavLinkClass("/bukawarung")}`}>
									<Button type="link" className="nav-link" href="/bukawarung">
										Buka Warung
									</Button>
								</li>
								<li className={`nav-item ${getNavLinkClass("/login")}`}>
									<Button type="link" className="nav-link" href="/login">
										Login
									</Button>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</header>
		</Fade>
	);
}
