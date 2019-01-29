import { title } from "assets/jss/material-kit-react.jsx";

const productStyle = {
	section: {
		padding: "70px 0",
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
		color: "#545454",
		marginBottom: "30px"
	},
	cardPadding: {
		paddingBottom: '35px',
	},
	cardDimensions: {
		// maxWidth: '345px',
		width: '100%',
		minHeight: '390px'
	}
};
export default productStyle;
