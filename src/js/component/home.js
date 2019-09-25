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

	componentDidMount() {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/evan-otero")
			.then(resp => {
				if (resp.ok) {
					return resp.json();
				}
			})
			.then(data => {
				this.setState({ alpha: data });
			});

		fetch("https://assets.breatheco.de/apis/fake/todos/user/evan-otero", {
			method: "PUT",
			body: JSON.stringify([this.state.alpha])
		});
	}

	blankState = () => {
		this.setState({ anInput: "" });
	};

	updateState = e => {
		this.setState({ anInput: e.target.value });
	};

	enterState = e => {
		if (e.key === "Enter") {
			let kilo = { label: e.target.value, done: false };
			this.state.alpha.push(kilo);
			this.setState({
				anInput: ""
			});
		}
	};

	deleteFromList = golf => {
		let temp = this.state.alpha;
		temp.splice(golf, 1);
		this.setState({ alpha: temp });
	};

	deleteFullList = () => {
		let temp = this.state.alpha;
		temp.splice(0, temp.length);
		this.setState({ alpha: temp });
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
						<div className="Xbutton">
							<button onClick={() => this.deleteFullList()}>
								Delete List
							</button>
						</div>
					</div>
					<div>
						<ul>
							{this.state.alpha.map((foxtrot, golf) => {
								return (
									<Alpha
										echo={foxtrot.label}
										key={golf}
										hotel={() => this.deleteFromList(golf)}
									/>
								);
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
