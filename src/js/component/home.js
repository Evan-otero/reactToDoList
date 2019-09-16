import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="title">todos</div>
				<div className="todolist">
					<div className="inputfield">What needs to be done?</div>
					<div className="items">Make the bed</div>
					<div className="numberOfItems">1 item left</div>
				</div>
			</div>
		);
	}
}
