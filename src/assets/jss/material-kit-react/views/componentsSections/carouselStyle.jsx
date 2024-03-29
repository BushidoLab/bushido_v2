import { container } from "assets/jss/material-kit-react.jsx";
import { title } from "assets/jss/material-kit-react.jsx";

const carouselStyle = {
	section: {
		padding: "70px 0"
	},
	container,
	marginAuto: {
		marginLeft: "auto !important",
		marginRight: "auto !important"
	},
	title: {
		...title,
		marginBottom: "1rem",
		minHeight: "32px",
		textDecoration: "none",
		// textAlign: "right",
		// alignSelf: "stretch"
	},
	titleMain: {
		...title,
		marginBottom: "1rem",
		minHeight: "32px",
		textDecoration: "none",
		textAlign: "center",
		// alignSelf: "stretch"
	},
	description: {
		color: "#545454",
		// textAlign: "right",
		// alignSelf: "stretch"
	},
	store_button_google: {
		// width: "100px",
		height: "40px"
	},
	store_button_apple: {
		// width: "100px",
		height: "28px"
	},
	socialIcons:{
		color: 'black', 
		fontSize: "1.5rem",
		paddingRight: "1em"

	}
};

export default carouselStyle;
