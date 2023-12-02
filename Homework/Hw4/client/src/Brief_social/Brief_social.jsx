import "./style.css";
import React from "react";
import Avatar from "../../src/pic/Avatar.jpg";

function Home() {
	return (
		<div className="brief-card d-flex flex-column justify-content-center align-items-center pt-5">
			<div className="avatar mt-4 mx-4">
				<img src={Avatar} alt="avatar" />
			</div>

			<h3 className="myname mb-0 mt-3">Yen NHi</h3>
			<h4 className="mb-5">S&nbsp;t&nbsp;u&nbsp;d&nbsp;e&nbsp;n&nbsp;t</h4>

			<div className="icons row p-2 mt-5 d-flex justify-content-center">
				<a
					href="https://github.com"
					rel="noreferrer"
					target="_blank"
				>
					<i className="fab fa-github-alt icon-github"></i>
				</a>
				<a
					href="https://www.linkedin.com"
					rel="noreferrer"
					target="_blank"
				>
					<i
						className="fab fa-linkedin-in icon-linkedin"
						aria-hidden="true"
					></i>
				</a>

				
					<i className="fab fa-instagram icon-insta"></i>
				
			</div>
		</div>
	);
}

export default Home;
