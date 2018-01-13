import React from 'react';

const Footer = () => {

		return (
			<div className="Footer">
				<footer>
					<div className="row">
						<div className="legal col span-1-of-2">
							<p className="footer-legal">Copyright &copy; 2017 by Take2 Productions. All rights reserved.</p>
						</div>
						<div className="col span-1-of-2">
							<ul className="social-links">
								<li><a className="" href="#"><i className="ion-social-facebook"></i></a></li>
								<li><a className="" href="#"><i className="ion-social-twitter"></i></a></li>
								<li><a className="" href="#"><i className="ion-social-google"></i></a></li>
								<li><a className="" href="#"><i className="ion-social-instagram"></i></a></li>
							</ul>
						</div>
					</div>
				</footer>
			</div>
		);
}

export default Footer;