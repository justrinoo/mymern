import React from "react";
import ReactHtmlParser from "react-html-parser";
export default function PageDetailsDesc({ data }) {
	return (
		<main>
			<h4>Deskripsi Tentang Barang</h4>
			{ReactHtmlParser(data.description)}
			<div className="row" style={{ marginTop: 30 }}></div>
		</main>
	);
}
