import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoAreaImage from "components/InfoAreaImage/InfoAreaImage.jsx";
// svg's
import aws from "assets/img/SVG/aws.svg";
import cplus from "assets/img/SVG/cplus.svg";
import mongo from "assets/img/SVG/mongodb-plain.svg";
import cardano from "assets/img/SVG/cardano_logo.svg";
import docker from "assets/img/SVG/docker.svg";
import express from "assets/img/SVG/express-original.svg";
import github from "assets/img/SVG/github-original.svg";
import go from "assets/img/SVG/go-plain.svg";
import burrow from "assets/img/SVG/hyperledger_burrow.svg";
import bitcoin from "assets/img/SVG/bitcoin.svg";
import javascript from "assets/img/SVG/javascript-plain.svg";
import python from "assets/img/SVG/python-original.svg";
import postgresql from "assets/img/SVG/postgresql-plain.svg";
import nodejs from "assets/img/SVG/nodejs-plain.svg";
import ethereum from "assets/img/SVG/ethereum.svg";
import react from "assets/img/SVG/react-original.svg";
import solidity from "assets/img/SVG/Solidity_logo.svg";
import fabric from "assets/img/SVG/hyperledger_fabric.svg";
import stellar from "assets/img/SVG/stellar_logo.svg";
import r3 from "assets/img/SVG/r3_logo.svg";
import stratis from "assets/img/SVG/stratis_logo.svg";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProcessesAndToolsSection extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.section}>
				<GridContainer justify="center">
					<GridItem xs={12} sm={12} md={8}>
						<h2 className={classes.title}>Processes and Tools</h2>
						<h5 className={classes.description}>
							These are some of the tools and processes we use here at Bushido.
						</h5>
					</GridItem>
				</GridContainer>
				<div>
					<GridContainer>
						<GridItem xs={4} sm={3} md={2}>
							<InfoAreaImage title="Bitcoin" imgSrc={bitcoin} process />
						</GridItem>
						<GridItem xs={4} sm={3} md={2}>
							<InfoAreaImage
								title="Hyperledger Fabric"
								imgSrc={fabric}
								process
							/>
						</GridItem>
						<GridItem xs={4} sm={3} md={2}>
							<InfoAreaImage
								title="Hyperledger Burrow"
								imgSrc={burrow}
								process
							/>
						</GridItem>
						<GridItem xs={4} sm={3} md={2}>
							<InfoAreaImage title="Ethereum" imgSrc={ethereum} process />
						</GridItem>
						<GridItem xs={4} sm={3} md={2}>
							<InfoAreaImage title="Cardano" imgSrc={cardano} process />
						</GridItem>
						<GridItem xs={4} sm={3} md={2}>
							<InfoAreaImage title="Stellar" imgSrc={stellar} process />
						</GridItem>
						<GridItem xs={4} sm={3} md={2}>
							<InfoAreaImage title="Stratis" imgSrc={stratis} process />
						</GridItem>
						<GridItem xs={4} sm={3} md={2}>
							<InfoAreaImage title="R3" imgSrc={r3} process />
						</GridItem>
						<GridItem xs={4} sm={3} md={2}>
							<InfoAreaImage title="Solidity" imgSrc={solidity} process />
						</GridItem>
						<GridItem xs={4} sm={3} md={2}>
							<InfoAreaImage title="Javascript" imgSrc={javascript} process />
						</GridItem>
						<GridItem xs={4} sm={3} md={2}>
							<InfoAreaImage title="NodeJS" imgSrc={nodejs} process />
						</GridItem>
						<GridItem xs={4} sm={3} md={2}>
							<InfoAreaImage title="React" imgSrc={react} process />
						</GridItem>
						<GridItem xs={4} sm={3} md={2}>
							<InfoAreaImage title="Express" imgSrc={express} process />
						</GridItem>
						<GridItem xs={4} sm={3} md={2}>
							<InfoAreaImage title="Python" imgSrc={python} process />
						</GridItem>
						<GridItem xs={4} sm={3} md={2}>
							<InfoAreaImage title="C++" imgSrc={cplus} process />
						</GridItem>
						<GridItem xs={4} sm={3} md={2}>
							<InfoAreaImage title="Amazon Web Services" imgSrc={aws} process />
						</GridItem>
						<GridItem xs={4} sm={3} md={2}>
							<InfoAreaImage title="Mongo DB" imgSrc={mongo} process />
						</GridItem>
						<GridItem xs={4} sm={3} md={2}>
							<InfoAreaImage title="Docker" imgSrc={docker} process />
						</GridItem>
						<GridItem xs={4} sm={3} md={2}>
							<InfoAreaImage title="PostgresSQL" imgSrc={postgresql} process />
						</GridItem>
						<GridItem xs={4} sm={3} md={2}>
							<InfoAreaImage title="Github" imgSrc={github} process />
						</GridItem>
						<GridItem xs={4} sm={3} md={2}>
							<InfoAreaImage title="Go" imgSrc={go} process />
						</GridItem>
					</GridContainer>
				</div>
			</div>
		);
	}
}

export default withStyles(productStyle)(ProcessesAndToolsSection);
