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
		color: "#999",
		marginBottom: "30px"
	},
	cardPadding: {
		paddingBottom: '35px',
	},
	cardDimensions: {
		// maxWidth: '345px',
		width: '100%',
		minHeight: '390px'
	},
	cardFooter: {
		width: '100%',
		height: '30%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	contentHeight: {
		"@media (min-width: 576px)": {
		},
		"@media (min-width: 768px)": {
		},
		"@media (min-width: 992px)": {
			// height: '32vw'
		},
		"@media (min-width: 1200px)": {
			// height: '28vw'
		}
	}

};

export default productStyle;
