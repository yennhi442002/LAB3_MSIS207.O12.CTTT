import "./style.css";
import React, { Component } from "react";

var content = ["a HCMUS student.    ", "a DEV.    "];

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			content: "",
		};
	}

	componentDidMount() {
		let clear = false;
		let i = 0;
		let idxContent = 0;

		// set Type writer
		this.myInterval = setInterval(() => {
			if (i < content[idxContent].length && clear === false) {
				this.setState({
					content: this.state.content + content[idxContent].charAt(i),
				});

				document.getElementById("content").innerHTML = this.state.content;
				i++;
				if (i === content[idxContent].length) clear = true;
			} else if (clear === true) {
				this.setState({
					content: this.state.content.substring(
						0,
						this.state.content.length - 1,
					),
				});

				document.getElementById("content").innerHTML = this.state.content;
				i--;

				if (i === 1) {
					clear = false;
					idxContent++;
					if (idxContent >= content.length) idxContent = 0;
				}
			}
		}, 100);
	}

	componentWillUnmount() {
		clearInterval(this.myInterval);
	}

	render() {
		return (
			<div className="home-container row d-flex flex-xl-row-reverse ps-4 pt-0 pb-3">
				<div id="home-content" className="pt-5">
					<h3 className="mb-2">
						W E L C O M E &nbsp; T O &nbsp; M Y &nbsp; W O R L D
					</h3>
					<h1 className="mb-0">
						Hi, I'm <span className="bold-name">Yen Nhi</span>
					</h1>
					<h2 id="content" className="fw-bold">
						{" "}
					</h2>

					<div className="introduce">
						<p className="intro">
							Hello 
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
