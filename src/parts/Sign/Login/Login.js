import React from "react";

export default function Login() {
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col">
						<form action="">
							<div className="form-group">
								<label htmlFor="email">Email</label>
								<input
									type="email"
									name="email"
									id="email"
									placeholder="email"
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}
