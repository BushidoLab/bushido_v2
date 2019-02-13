import { title } from "assets/jss/material-kit-react.jsx";

const workStyle = {
  section: {
    padding: "70px 0"
  },
  title: {
    ...title,
    marginBottom: "50px",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center"
  },
  description: {
    color: "#545454",
    textAlign: "center"
	},
	blogContent: {
    color: "#545454",
    textAlign: "justify"
  },
  textCenter: {
		width: "100%",
		textAlign: "center",
		justifyContent: 'center',
		alignItems: 'center',
  },
  textArea: {
    marginRight: "15px",
    marginLeft: "15px"
	},
	authorDescription: {
    color: "#ffffff",
    textAlign: "center"
	},
	blogTitle: {
		display: "inline-block",
		position: "relative",
		marginTop: "30px",
		marginBottom: "30px",
		minHeight: "32px",
		color: "#3A414B",
		textDecoration: "none",
	},
	card: {
    maxWidth: "345px",
  },
  media: {
    height: "140px",
	},
	cardTitle: {
		color: "#3A414B",
	}


};

export default workStyle;
