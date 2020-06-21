import React from "react";
import IconGspay from "parts/IconGspay";
import Button from "elements/Button";
export default function Gspay(props) {
	const getNavLinkClass = (path) => {
		return props.location.path === path ? "active" : "";
	};
	return (
		<header className="spacing-sm">
			<div className="container">
				<nav className="navbar navbar-expand-lg navbar-light">
					<IconGspay />
					<div className="collapse navbar-collapse">
						<ul className="navbar-nav ml-auto">
							<li className={`nav-item ${getNavLinkClass("/")}`}>
								<Button
									type="link"
									href="/"
									className="nav-link font-weight-bold"
								>
									Gesjan
								</Button>
							</li>
							<li className={`nav-item ${getNavLinkClass("/fitur")}`}>
								<Button type="link" className="nav-link" href="fitur">
									Fitur
								</Button>
							</li>
							<li className={`nav-item ${getNavLinkClass("/stories")}`}>
								<Button type="link" className="nav-link" href="/faq">
									FAQ
								</Button>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</header>
	);
}
