import React from "react";
import Button from "elements/Button";
import ImageHero from "assets/images/Image-Hero.jpeg";
import Footer from "parts/Footer";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
export default function BukaWarung(props) {
	const getNavLinkclass = (path) => {
		return props.location.pathname === path ? "active" : " ";
	};
	return (
		<>
			<Fade>
				<header className="spicing-sm">
					<div className="container">
						<nav className="navbar navbar-expand-lg navbar-light">
							<Button
								type="link"
								href="/bukawarung"
								className="brand-text-icon"
							>
								Buka Warung
							</Button>
							<button
								className="navbar-toggler"
								type="button"
								data-toggle="collapse"
								data-target="#navbarSupportedContent"
								aria-controls="navbarSupportedContent"
								aria-expanded="true"
								aria-label="Toggle navigation"
							>
								<span className="navbar-toggler-icon"></span>
							</button>

							<div
								className="collapse navbar-collapse"
								id="navbarSupportedContent"
							>
								<ul className="navbar-nav ml-auto">
									<li className="nav-item active">
										<Button type="link" href="/bukawarung" className="nav-link">
											Beranda
										</Button>
									</li>
									<li className="nav-item">
										<Button className="nav-link" type="link" href="/daftar">
											Daftar
										</Button>
									</li>
									<li className="nav-item">
										<Button className="nav-link" type="link" href="/bantuan">
											Bantuan
										</Button>
									</li>
									<li className="nav-item">
										<Button className="nav-link" type="link" href="/">
											go back <b>GESJAN</b>
										</Button>
									</li>
								</ul>
							</div>
						</nav>
					</div>
				</header>
			</Fade>
			<div className="container">
				<Zoom>
					<h1 className="brand-text pt-5 text-center">
						Target kami adalah membantu masyarakat khususnya siswa menjadi lebih
						baik
						<p style={{ fontSize: 19 }} className="text-gray-500">
							Di sekolah kita lebih sudah ada yang mengikuti program kami
							khususnya murid smk jakarta pusat 1
						</p>
					</h1>
				</Zoom>
			</div>
			<section className="container">
				<div className="row">
					<Fade delay={600}>
						<div className="col-md-7 pt-5">
							<h5>Tambah Penghasilan Siswa</h5>
							<p className="mb-4 font-weight-light text-gray-500 w-75 text-justify">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
								ipsum asperiores ut, nihil, labore, magnam doloribus unde non
								distinctio blanditiis doloremque eaque quis vitae iure earum?
								Eveniet nesciunt iusto id. Lorem ipsum, dolor sit amet
								consectetur adipisicing elit. In sint pariatur porro, atque
								quidem nihil sequi veniam consequatur eos molestiae illo, quae
								asperiores! Beatae harum ut sed? Cumque, quis iure.
							</p>
						</div>
						<div className="col pt-5">
							<img
								src={ImageHero}
								style={{ width: "100%", borderRadius: "20px " }}
								alt="Image"
							/>
						</div>
					</Fade>
					<div className="row">
						<Fade delay={600}>
							<div className="col-md-7 pt-5">
								<img
									src={ImageHero}
									style={{ width: "80%", borderRadius: "20px " }}
									alt="Image"
								/>
							</div>
							<div className="col pt-5">
								<h5>Belanja Sembako dan jajanan Lengkap</h5>
								<p className="mb-4 font-weight-light text-gray-500 w-80 text-justify">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
									ipsum asperiores ut, nihil, labore, magnam doloribus unde non
									distinctio blanditiis doloremque eaque quis vitae iure earum?
									Eveniet nesciunt iusto id. Lorem ipsum, dolor sit amet
									consectetur adipisicing elit. In sint pariatur porro, atque
									quidem nihil sequi veniam consequatur eos molestiae illo, quae
									asperiores! Beatae harum ut sed? Cumque, quis iure.
								</p>
							</div>
						</Fade>
					</div>
				</div>
			</section>

			<main className="spicing-sm">
				<div className="jumbotron">
					<div className="container">
						<div className="text-center">
							<h1 className="h2 text-dark">Gabung dengan kami sekarang juga</h1>
							<Button
								className="btn btn-outline-danger btn-user"
								style={{ borderRadius: "20px" }}
								type="link"
								href="/daftar"
							>
								Daftar
							</Button>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
