import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoAreaImage from "components/InfoAreaImage/InfoAreaImage.jsx";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import blocks from "assets/img/bushido/blocks.png";
import custom_crypto from "assets/img/bushido/custom_crypto.png";
import dapps from "assets/img/bushido/dapps.png";
import tokens from "assets/img/bushido/tokens.png";
import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.section}>
				{/* <GridContainer justify="center">
					<GridItem xs={12} sm={12} md={8}>
						<h2 className={classes.title}>
							We craft top quality solutions for you.
						</h2>
						<h5 className={classes.description}>
							This is the paragraph where you can write more details about your
							product. Keep you user engaged by providing meaningful
							information. Remember that by this tie, the user is curious,
							otherwise he wouldn't scroll to get here. Add a button if you want
							the user to see more.
						</h5>
					</GridItem>
				</GridContainer> */}
				<div>
					<GridContainer>
						<GridItem xs={12} sm={12} md={6} className={classes.cardPadding}>
							<Card className={classes.cardDimensions}>
								<CardContent>
									<InfoAreaImage
										title="Custom Cryptocurrencies"
										description="Core Protocol & Systems Level Code Development for fully featured Cryptocurrency Blockchains such as: Bitcoin, Ethereum, Zcash and Monero. Our Cryptocurrency services include: coin forks, merge forks, privacy coins, masternode implementation, wallets & block explorers."
										imgSrc={custom_crypto}
										product
									/>
								</CardContent>
							</Card>
						</GridItem>
						<GridItem xs={12} sm={12} md={6} className={classes.cardPadding}>
							<Card className={classes.cardDimensions}>
								<CardContent>
									<InfoAreaImage
										title="Enterprise Grade Blockchain"
										description="Development of permissioned & Private Blockchains for consortium or enterprise needs. Common implementations include: Hyperledger(Fabric, Composer, Burrow), Stellar & Strasis.Innovative use-cases include: rights management, supply-chain, auditing-specific blockchains"
										imgSrc={blocks}
										product
									/>
								</CardContent>
							</Card>
						</GridItem>
						<GridItem xs={12} sm={12} md={6} className={classes.cardPadding}>
							<Card className={classes.cardDimensions}>
								<CardContent>
									<InfoAreaImage
										title="Decentralized Applications"
										description="Custom decentralized applications that communicate directly with Blockchains. Common use cases for dApps include: gamification platforms, asset ownership and trading, decentralized market makers"
										imgSrc={dapps}
										product
									/>
								</CardContent>
							</Card>
						</GridItem>
						<GridItem xs={12} sm={12} md={6} className={classes.cardPadding}>
							<Card className={classes.cardDimensions}>
								<CardContent>
									<InfoAreaImage
										title="Utility and Security Tokens"
										description="Token development and issuance. Token vesting & life cycle, Token custody techniques, Utility Tokens (gamification). Most token implementations require wallet and distribution platforms (custom builds available)."
										imgSrc={tokens}
										product
									/>
								</CardContent>
							</Card>
						</GridItem>
					</GridContainer>
				</div>
			</div>
		);
	}
}

export default withStyles(productStyle)(ProductSection);
