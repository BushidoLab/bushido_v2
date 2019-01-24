import { cardTitle, title } from "assets/jss/material-kit-react.jsx";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.jsx";

const teamStyle = {
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
  ...imagesStyle,
  itemGrid: {
    marginLeft: "auto",
		marginRight: "auto",
		maxWidth: "100%"
  },
  cardTitle,
  smallTitle: {
    color: "#6c757d"
  },
  description: {
    color: "#999"
  },
  justifyCenter: {
    justifyContent: "center !important"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  margin5: {
    margin: "5px"
	},
	imgCardCentered: {
		align: "center",
		height: "50px",
		"@media (min-width: 576px)": {
			height: "50px"
		},
		"@media (min-width: 768px)": {
			height: "50px"
		},
		"@media (min-width: 992px)": {
			height: "100px"
		},
		"@media (min-width: 1200px)": {
			height: "100px"
		}
	}
};

export default teamStyle;
