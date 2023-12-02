import "./style.css";
import React, { useEffect, useState } from "react";
import Skill from "./Skill/Skill";
// import { REACT_APP_SERVER_URL } from "../../service/helper.js";
import { REACT_APP_SERVER_URL } from "../../index";

function ProfessionSkill() {
	const [devSkills, setDevSkill] = useState([
		{
			_id: "",
			name: "",
		},
	]);

	const [desSkills, setDesSkill] = useState([
		{
			_id: "",
			name: "",
		},
	]);

	const [toolkits, setToolkit] = useState([
		{
			_id: "",
			name: "",
		},
	]);

	useEffect(() => {
		let isMounted = true; // avoid memory leak

		// fetch dev skill
		fetch(`${REACT_APP_SERVER_URL}/api/dev-skill`)
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
			})
			.then((jsonRes) => {
				if (isMounted) setDevSkill(jsonRes);
			});

		// fetch des skill
		fetch(`${REACT_APP_SERVER_URL}/api/des-skill`)
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
			})
			.then((jsonRes) => {
				if (isMounted) setDesSkill(jsonRes);
			});

		// fetch toolkit
		fetch(`${REACT_APP_SERVER_URL}/api/toolkit`)
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
			})
			.then((jsonRes) => {
				if (isMounted) setToolkit(jsonRes);
			});
		return () => {
			isMounted = false;
		};
	}, []); // Empty dependency array ([]) to run this effect only once when the component mounts

	let element_devSkill = devSkills.map((devSkill, index) => {
		return <Skill name={devSkill.name} key={index} />;
	});

	let element_toolkit = toolkits.map((toolkit, index) => {
		return <Skill name={toolkit.name} percent={toolkit.percent} key={index} />;
	});

	let element_desSkill = desSkills.map((desSkill, index) => {
		return (
			<Skill name={desSkill.name} percent={desSkill.percent} key={index} />
		);
	});
	return (
		<div className="d-flex flex-column p-4 py-3 mb-3 pt-0">
			<div className="row">
				<div className="col-6">
					<div>
						<h1 className="title-skill">Design Skill</h1>
						<div className="d-flex flex-wrap">{element_desSkill}</div>
					</div>

					<div>
						<h1 className="title-skill">Toolkit</h1>
						<div className="d-flex flex-wrap">{element_toolkit}</div>
					</div>
				</div>

				<div className="col-6">
					<div>
						<h1 className="title-skill">Development Skill</h1>
						<div className="d-flex flex-wrap">{element_devSkill}</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProfessionSkill;
