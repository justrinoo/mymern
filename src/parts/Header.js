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
								Stay<span className="text-gray-900">cation</span>
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
								<li className={`nav-item ${getNavLinkClass("/browse-by")}`}>
									<Button type="link" className="nav-link" href="/browse-by">
										Browse By
									</Button>
								</li>
								<li className={`nav-item ${getNavLinkClass("/stories")}`}>
									<Button type="link" className="nav-link" href="/stories">
										Stories
									</Button>
								</li>
								<li className={`nav-item ${getNavLinkClass("/agents")}`}>
									<Button type="link" className="nav-link" href="/agents">
										Agents
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
