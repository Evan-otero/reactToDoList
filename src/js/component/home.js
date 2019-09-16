import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div>
				<div className="title">todos</div>
				<div className="box">
					<div className="inputfield">What needs to be done?</div>
					<div className="items">Walk the dog</div>
					<div className="numberofitems">1 item left</div>
				</div>
			</div>
		);
	}
}
