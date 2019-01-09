import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import classNames from "classnames";
// @material-ui/icons
// import Chat from "@material-ui/icons/Chat";
// import VerifiedUser from "@material-ui/icons/VerifiedUser";
// import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// import InfoArea from "components/InfoArea/InfoArea.jsx";

// import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

import NavPills from "components/NavPills/NavPills.jsx";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";


class PortfolioSection extends React.Component {
	render() {
		const { classes } = this.props;
		const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
		return (
			<div className={classes.section}>
				<GridContainer justify="center">
					<GridItem xs={12} sm={12} md={8}>
						<h2 className={classes.title}>
							Portfolio Section
						</h2>
					</GridItem>
				</GridContainer>
				<div>
					<GridContainer justify="center">
						<GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
							<NavPills
								alignCenter
								color="primary"
								tabs={[
									{
										tabButton: "Studio",
										tabIcon: Camera,
										tabContent: (
											<GridContainer justify="center">
												<GridItem xs={12} sm={12} md={4}>
													<img
														alt="..."
														src={studio1}
														className={navImageClasses}
													/>
													<img
														alt="..."
														src={studio2}
														className={navImageClasses}
													/>
												</GridItem>
												<GridItem xs={12} sm={12} md={4}>
													<img
														alt="..."
														src={studio5}
														className={navImageClasses}
													/>
													<img
														alt="..."
														src={studio4}
														className={navImageClasses}
													/>
												</GridItem>
											</GridContainer>
										)
									},
									{
										tabButton: "Work",
										tabIcon: Palette,
										tabContent: (
											<GridContainer justify="center">
												<GridItem xs={12} sm={12} md={4}>
													<img
														alt="..."
														src={work1}
														className={navImageClasses}
													/>
													<img
														alt="..."
														src={work2}
														className={navImageClasses}
													/>
													<img
														alt="..."
														src={work3}
														className={navImageClasses}
													/>
												</GridItem>
												<GridItem xs={12} sm={12} md={4}>
													<img
														alt="..."
														src={work4}
														className={navImageClasses}
													/>
													<img
														alt="..."
														src={work5}
														className={navImageClasses}
													/>
												</GridItem>
											</GridContainer>
										)
									},
									{
										tabButton: "Favorite",
										tabIcon: Favorite,
										tabContent: (
											<GridContainer justify="center">
												<GridItem xs={12} sm={12} md={4}>
													<img
														alt="..."
														src={work4}
														className={navImageClasses}
													/>
													<img
														alt="..."
														src={studio3}
														className={navImageClasses}
													/>
												</GridItem>
												<GridItem xs={12} sm={12} md={4}>
													<img
														alt="..."
														src={work2}
														className={navImageClasses}
													/>
													<img
														alt="..."
														src={work1}
														className={navImageClasses}
													/>
													<img
														alt="..."
														src={studio1}
														className={navImageClasses}
													/>
												</GridItem>
											</GridContainer>
										)
									}
								]}
							/>
						</GridItem>
					</GridContainer>
				</div>
			</div>
		);
	}
}

export default withStyles(profilePageStyle)(PortfolioSection);
