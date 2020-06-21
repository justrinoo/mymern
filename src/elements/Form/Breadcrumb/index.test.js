import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Breadcrumb from "./index";

const setup = () => {
	const breadcrumblist = [
		{ pageTitle: "Home", pageHref: "" },
		{ pageTitle: "House Details", pageHref: "" },
	];
	const { container } = render(
		<Router>
			<Breadcrumb data={breadcrumblist} />
		</Router>
	);
	const breadcrumb = container.querySelector(".breadcrumb");

	return {
		breadcrumb,
	};
};

test("component ini harus mempunyai tag <ol> className .breadcrumb dan mempunyai text Home & House Details", async () => {
	const { breadcrumb } = setup();
	expect(breadcrumb).toBeInTheDocument();
	expect(breadcrumb).toHaveTextContent("Home");
	expect(breadcrumb).toHaveTextContent("House Details");
});
