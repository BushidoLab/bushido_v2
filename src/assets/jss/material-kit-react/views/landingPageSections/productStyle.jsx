import { title } from "assets/jss/material-kit-react.jsx";

const productStyle = {
	section: {
		padding: "70px 5px",
		textAlign: "center"
	},
	title: {
		...title,
		marginBottom: "1rem",
		marginTop: "30px",
		minHeight: "32px",
		textDecoration: "none"
	},
	description: {
		color: "#999",
		marginBottom: "30px"
	},
	cardPadding: {
		paddingBottom: "35px"
	},
	cardDimensions: {
		// maxWidth: '345px',
		width: "100%",
		minHeight: "390px"
	},
	cardFooter: {
		width: "100%",
		height: "30%",
		justifyContent: "center",
		alignItems: "center"
	},
	contentHeight: {
			height: "32em"
	},
	contentHeightConsultation: {
			height: "28em"
	}
};

export default productStyle;
