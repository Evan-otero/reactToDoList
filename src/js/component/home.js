import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			anInput: "What needs to be done?"
		};
	}

	blankState = () => {
		this.setState({ anInput: "" });
	};

	updateState = e => {
		console.dir(e.target);
		this.setState({ anInput: e.target.value });
	};

	enterState = e => {
		if (e.key === "Enter") {
			alpha.push(e.target.value);
			this.setState({ anInput: "" });
		}
	};

	render() {
		return (
			<div className="container">
				<div className="title">todos</div>
				<div className="todolist">
					<div className="inputfield">
						<input
							type="text"
							value={this.state.anInput}
							onClick={this.state.blankState}
							onChange={this.updateState}
							onKeyPress={this.enterState}
						/>
					</div>
					<div>
						<ul>
							{alpha.map((tea, parrot) => {
								return <li key={parrot}>{tea}</li>;
							})}{" "}
						</ul>
					</div>
					<div className="numberOfItems">
						{alpha.length} item left
					</div>
				</div>
			</div>
		);
	}
}

let alpha = [];
