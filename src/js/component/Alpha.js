import React from "react";
import Proptypes from "prop-types";

export const Alpha = props => {
	return (
		<li id="xray">
			{props.echo}
			<div className="Xbutton">
				<button onClick={props.hotel}>Delete</button>
			</div>
		</li>
	);
};

Alpha.propTypes = {
	echo: Proptypes.string,
	hotel: Proptypes.func
};
