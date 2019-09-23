import React from "react";
import Proptypes from "prop-types";

export const Alpha = props => {
	return <li>{props.echo}</li>;
};

Alpha.propTypes = {
	echo: Proptypes.string
};
