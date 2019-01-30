import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoAreaImage from "components/InfoAreaImage/InfoAreaImage.jsx";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";
// png's
import blocks from "assets/img/bushido/blocks.png";
import custom_crypto from "assets/img/bushido/custom_crypto.png";
import dapps from "assets/img/bushido/dapps.png";
import tokens from "assets/img/bushido/tokens.png";

class ProductSection extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.section}>
				<div>
				<h2 className={classes.title}>Product Offerings</h2>
					<GridContainer>
						<GridItem xs={12} sm={12} md={6} className={classes.cardPadding}>
							<Card className={classes.cardDimensions}>
								<CardContent>
									<InfoAreaImage
										title="Enterprise Grade Blockchain"
										description="Development of private blockchains for business and consortiums. Service areas include but are not limited to: value-chain, right management and auditing."
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
										title="Blockchain Apps / Smart Contracts"
										description="Decentralized applications and blockchain application development. Services include: smart contracts, wallets, block explorers, token distribution platforms and industry dApps like gamification platforms, asset ownership and trading, decentralized market makers."
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
						<GridItem xs={12} sm={12} md={6} className={classes.cardPadding}>
							<Card className={classes.cardDimensions}>
								<CardContent>
									<InfoAreaImage
										title="Custom Cryptocurrencies"
										description="Public cryptocurrency blockchain development. Technologies include Bitcoin, Ethereum, Dash, Zcash and Monero. Services include: forks, merge forks, privacy coins, masternodes and second layer concensus."
										imgSrc={custom_crypto}
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
