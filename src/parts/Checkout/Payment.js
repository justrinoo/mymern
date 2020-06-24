import React from "react";
import InputFile from "elements/Form/InputFile";
import InputText from "elements/Form/InputText";
import Fade from "react-reveal/Fade";
import logoBca from "assets/images/logo-bca.jpg";

export default function Payment(props) {
	const { data, ItemDetails, checkout } = props;

	const tax = 10;
	const subTotal = ItemDetails.price * checkout.duration;
	const grandTotal = (subTotal * tax) / 100 + subTotal;

	return (
		<Fade>
			<div className="container" style={{ marginBottom: 30 }}>
				<div className="row justify-content-center align-items-center">
					<div className="col-5 border-right py-5" style={{ paddingRight: 80 }}>
						<Fade delay={300}>
							<p className="mb-4">Transfer Pembayaran: </p>
							<p>Tax: {tax}%</p>
							<p>Sub Total: Rp.{subTotal} </p>
							<p>Total: Rp. {grandTotal} </p>
							<div className="row mt-4">
								<div className="col-3 text-right">
									<img src={logoBca} alt="Bank Central Asia" width={60} />
								</div>
								<div className="col">
									<dl>
										<dd>Bank Central Asia</dd>
										<dd>2208 8897 3884</dd>
										<dd>Rino Satya Putra</dd>
									</dl>
								</div>
							</div>
						</Fade>
					</div>
					<div style={{ paddingLeft: 80 }} className="col-5 py-5">
						<Fade delay={600}>
							<label htmlFor="proofPayment">Upload Bukti Transfer</label>
							<InputFile
								accept="image/*"
								id="proofPayment"
								name="proofPayment"
								value={data.proofPayment}
								onChange={props.onChange}
							/>

							<label htmlFor="bankName">Asal Bank</label>
							<InputText
								type="text"
								id="bankName"
								name="bankName"
								value={data.bankName}
								onChange={props.onChange}
							/>
							<label htmlFor="bankHolder">Nama Pengirim</label>
							<InputText
								type="text"
								id="bankHolder"
								name="bankHolder"
								value={data.bankHolder}
								onChange={props.onChange}
							/>
						</Fade>
					</div>
				</div>
			</div>
		</Fade>
	);
}
