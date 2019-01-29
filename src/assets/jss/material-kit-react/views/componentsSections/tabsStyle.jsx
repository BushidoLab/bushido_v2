import { container } from "assets/jss/material-kit-react.jsx";
import { title } from "assets/jss/material-kit-react.jsx";

const tabsStyle = {
  section: {
    // background: "#EEEEEE",
    padding: "70px 0"
	},
	title: {
		...title,
		marginBottom: "1rem",
		marginTop: "30px",
		minHeight: "32px",
		textDecoration: "none",
		textAlign: "center"
	},
  container,
  textCenter: {
    textAlign: "center"
	},
	description: {
		color: "#545454",
		textAlign: "center"
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

export default tabsStyle;
