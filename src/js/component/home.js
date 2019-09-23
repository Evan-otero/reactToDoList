import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Alpha } from "./Alpha.js";

//create your first component
export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			alpha: [],
			isLoaded: false,
			anInput: "What needs to be done?"
		};
	}

	compenentDidMount() {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/evan-otero")
			.then(res => res.json())
			.then(json => {
				this.setState({
					isLoaded: true,
					alpha: json
				});
			});
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
			this.state.alpha.push(e.target.value);
			this.setState({ anInput: "" });
		}
	};

	deleteFromList = golf => {
		console.log("banana");
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
							onClick={this.blankState}
							onChange={this.updateState}
							onKeyPress={this.enterState}
						/>
					</div>
					<div>
						<ul>
							{this.state.alpha.map((foxtrot, golf) => {
								return <Alpha echo={foxtrot} key={golf} />;
							})}{" "}
						</ul>
					</div>
					<div className="numberOfItems">
						{this.state.alpha.length} items left
					</div>
				</div>
			</div>
		);
	}
}
