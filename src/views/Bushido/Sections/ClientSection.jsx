import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";
// png icons
import client_ibm from "assets/img/clients/ibm_logo.png";
import client_oracle from "assets/img/clients/oracle_logo.png";
import client_miacoc from "assets/img/clients/MIAMIcoc_logo.png";
import client_mdc from "assets/img/clients/MDC_logo.png";
import client_ic from "assets/img/clients/ic_logo.png";
import client_beacon from "assets/img/clients/beacon_logo.png";
import client_lvlblox from "assets/img/clients/lvlblox_logo.png";
import client_tune from "assets/img/clients/tune_logo.png";
import client_creator from "assets/img/clients/creator_logo.png";
import client_abitcryptic from "assets/img/clients/abitcryptic_logo.png";
import client_mia_herald from "assets/img/clients/mia_herald.png";
import client_bitcoinist from "assets/img/clients/Bitcoinist_logo.png";
import client_cnbc from "assets/img/clients/cnbc_logo.png";
import client_coindesk from "assets/img/clients/coindesk_logo.png";
import client_hacked from "assets/img/clients/hacked_logo.png";
import client_techcrunch from "assets/img/clients/techcrunch_logo.png";
import client_cointele from "assets/img/clients/coint_logo.png";
import client_ben from "assets/img/clients/ben_logo.png";
import client_mit from "assets/img/clients/mit_logo.png";
import client_um from "assets/img/clients/u_logo.png";
import client_dubai from "assets/img/clients/smart_dubai.png";
import client_01 from "assets/img/clients/learn_01.png";
import client_caldwell from "assets/img/clients/caldwell.png";
import client_lab from "assets/img/clients/lab_mia.png";

class ClientSection extends React.Component {
	render() {
		const { classes } = this.props;
		const imageClasses = classNames(classes.imgCardCentered);
		return (
			<div>
				<div className={classes.section} id="Clients">
					<h2 className={classes.title}>Organizations we've worked with</h2>
					<div>
						<GridContainer>
							<GridItem xs={6} sm={4} md={3}>
								<Card plain>
									<GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
										<img
											src={client_oracle}
											alt="..."
											className={imageClasses}
										/>
									</GridItem>
									<h4 className={classes.cardTitle}>
										Java Oracle
										<br />
										{/* <small className={classes.smallTitle}>
											Product Licencing
										</small> */}
									</h4>
								</Card>
							</GridItem>
							<GridItem xs={6} sm={4} md={3}>
								<Card plain>
									<GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
										<img src={client_mit} alt="..." className={imageClasses} />
									</GridItem>
									<h4 className={classes.cardTitle}>
										MIT Enterprise Forum
										<br />
										{/* <small className={classes.smallTitle}>University</small> */}
									</h4>
								</Card>
							</GridItem>
							<GridItem xs={6} sm={4} md={3}>
								<Card plain>
									<GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
										<img src={client_ibm} alt="..." className={imageClasses} />
									</GridItem>
									<h4 className={classes.cardTitle}>
										IBM
										<br />
										{/* <small className={classes.smallTitle}>
											Hardware Chipsets
										</small> */}
									</h4>
								</Card>
							</GridItem>
							<GridItem xs={6} sm={4} md={3}>
								<Card plain>
									<GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
										<img
											src={client_miacoc}
											alt="..."
											className={imageClasses}
										/>
									</GridItem>
									<h4 className={classes.cardTitle}>
										Miami Beach Chamber of Commerce
										<br />
										{/* <small className={classes.smallTitle}>
											Chamber of secrets
										</small> */}
									</h4>
								</Card>
							</GridItem>
							<GridItem xs={6} sm={4} md={3}>
								<Card plain>
									<GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
										<img src={client_ben} alt="..." className={imageClasses} />
									</GridItem>
									<h4 className={classes.cardTitle}>
										BEN
										<br />
										{/* <small className={classes.smallTitle}>
											Blockchain Education Network
										</small> */}
									</h4>
								</Card>
							</GridItem>
							<GridItem xs={6} sm={4} md={3}>
								<Card plain>
									<GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
										<img src={client_um} alt="..." className={imageClasses} />
									</GridItem>
									<h4 className={classes.cardTitle}>
										University of Miami
										<br />
										{/* <small className={classes.smallTitle}>
											Blockchain Education
										</small> */}
									</h4>
								</Card>
							</GridItem>
							<GridItem xs={6} sm={4} md={3}>
								<Card plain>
									<GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
										<img
											src={client_dubai}
											alt="..."
											className={imageClasses}
										/>
									</GridItem>
									<h4 className={classes.cardTitle}>
										Smart Dubai
										<br />
										{/* <small className={classes.smallTitle}>Blockchain</small> */}
									</h4>
								</Card>
							</GridItem>
							<GridItem xs={6} sm={4} md={3}>
								<Card plain>
									<GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
										<img src={client_tune} alt="..." className={imageClasses} />
									</GridItem>
									<h4 className={classes.cardTitle}>
										Tune Token
										<br />
										{/* <small className={classes.smallTitle}>
											Creative rights token
										</small> */}
									</h4>
								</Card>
							</GridItem>
							<GridItem xs={6} sm={4} md={3}>
								<Card plain>
									<GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
										<img src={client_mdc} alt="..." className={imageClasses} />
									</GridItem>
									<h4 className={classes.cardTitle}>
										Miami Dade College
										<br />
										{/* <small className={classes.smallTitle}>
											Blockchain Curriculum
										</small> */}
									</h4>
								</Card>
							</GridItem>
							<GridItem xs={6} sm={4} md={3}>
								<Card plain>
									<GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
										<img
											src={client_lvlblox}
											alt="..."
											className={imageClasses}
										/>
									</GridItem>
									<h4 className={classes.cardTitle}>
										Level Blocks
										<br />
										{/* <small className={classes.smallTitle}>Ideas ideas</small> */}
									</h4>
								</Card>
							</GridItem>
							<GridItem xs={6} sm={4} md={3}>
								<Card plain>
									<GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
										<img
											src={client_beacon}
											alt="..."
											className={imageClasses}
										/>
									</GridItem>
									<h4 className={classes.cardTitle}>
										Miami Beacon Council
										<br />
										{/* <small className={classes.smallTitle}>Ideas ideas</small> */}
									</h4>
								</Card>
							</GridItem>
							<GridItem xs={6} sm={4} md={3}>
								<Card plain>
									<GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
										<img src={client_01} alt="..." className={imageClasses} />
									</GridItem>
									<h4 className={classes.cardTitle}>
										Learn01
										<br />
										{/* <small className={classes.smallTitle}>Curriculum</small> */}
									</h4>
								</Card>
							</GridItem>
							<GridItem xs={6} sm={4} md={3}>
								<Card plain>
									<GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
										<img
											src={client_caldwell}
											alt="..."
											className={imageClasses}
										/>
									</GridItem>
									<h4 className={classes.cardTitle}>
										Caldwell IP
										<br />
										<small className={classes.smallTitle}>
											Intelectual Property
										</small>
									</h4>
								</Card>
							</GridItem>
							<GridItem xs={6} sm={4} md={3}>
								<Card plain>
									<GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
										<img
											src={client_creator}
											alt="..."
											className={imageClasses}
										/>
									</GridItem>
									<h4 className={classes.cardTitle}>
										Cre8tor
										<br />
										{/* <small className={classes.smallTitle}>Not sure</small> */}
									</h4>
								</Card>
							</GridItem>
							<GridItem xs={6} sm={4} md={3}>
								<Card plain>
									<GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
										<img src={client_ic} alt="..." className={imageClasses} />
									</GridItem>
									<h4 className={classes.cardTitle}>
										Miami Dade College Idea Center
										<br />
										{/* <small className={classes.smallTitle}>Ideas ideas</small> */}
									</h4>
								</Card>
							</GridItem>
						</GridContainer>
					</div>
				</div>
				<div>
					<div className={classes.section} id="Coverage">
						<h2 className={classes.title}>
							Earned coverage for us and our clients
						</h2>
						<div>
							<GridContainer>
								<GridItem xs={6} sm={4} md={4}>
									<Card plain>
										<GridItem
											xs={12}
											sm={12}
											md={6}
											className={classes.itemGrid}
										>
											<img
												src={client_mia_herald}
												alt="..."
												className={imageClasses}
											/>
										</GridItem>
										<h4 className={classes.cardTitle}>
											Miami Herald
											<br />
											{/* <small className={classes.smallTitle}>
												Local News Paper
											</small> */}
										</h4>
									</Card>
								</GridItem>
								<GridItem xs={6} sm={4} md={4}>
									<Card plain>
										<GridItem
											xs={12}
											sm={12}
											md={6}
											className={classes.itemGrid}
										>
											<img
												src={client_bitcoinist}
												alt="..."
												className={imageClasses}
											/>
										</GridItem>
										<h4 className={classes.cardTitle}>
											Bitcoinist
											<br />
											{/* <small className={classes.smallTitle}>
												Bitcoin Magazine
											</small> */}
										</h4>
									</Card>
								</GridItem>
								<GridItem xs={6} sm={4} md={4}>
									<Card plain>
										<GridItem
											xs={12}
											sm={12}
											md={6}
											className={classes.itemGrid}
										>
											<img
												src={client_cnbc}
												alt="..."
												className={imageClasses}
											/>
										</GridItem>
										<h4 className={classes.cardTitle}>
											CNBC
											<br />
											{/* <small className={classes.smallTitle}>News Media</small> */}
										</h4>
									</Card>
								</GridItem>
								<GridItem xs={6} sm={4} md={4}>
									<Card plain>
										<GridItem
											xs={12}
											sm={12}
											md={6}
											className={classes.itemGrid}
										>
											<img
												src={client_coindesk}
												alt="..."
												className={imageClasses}
											/>
										</GridItem>
										<h4 className={classes.cardTitle}>
											Coindesk
											<br />
											{/* <small className={classes.smallTitle}>Online blog</small> */}
										</h4>
									</Card>
								</GridItem>
								<GridItem xs={6} sm={4} md={4}>
									<Card plain>
										<GridItem
											xs={12}
											sm={12}
											md={6}
											className={classes.itemGrid}
										>
											<img
												src={client_hacked}
												alt="..."
												className={imageClasses}
											/>
										</GridItem>
										<h4 className={classes.cardTitle}>
											HACKED
											<br />
											{/* <small className={classes.smallTitle}>Crypto Blog</small> */}
										</h4>
									</Card>
								</GridItem>
								<GridItem xs={6} sm={4} md={4}>
									<Card plain>
										<GridItem
											xs={12}
											sm={12}
											md={6}
											className={classes.itemGrid}
										>
											<img
												src={client_techcrunch}
												alt="..."
												className={imageClasses}
											/>
										</GridItem>
										<h4 className={classes.cardTitle}>
											Tech Crunch
											<br />
											{/* <small className={classes.smallTitle}>Online news</small> */}
										</h4>
									</Card>
								</GridItem>
								<GridItem xs={6} sm={4} md={4}>
									<Card plain>
										<GridItem
											xs={12}
											sm={12}
											md={6}
											className={classes.itemGrid}
										>
											<img
												src={client_cointele}
												alt="..."
												className={imageClasses}
											/>
										</GridItem>
										<h4 className={classes.cardTitle}>
											Coin Telegraph
											<br />
											{/* <small className={classes.smallTitle}>Online news</small> */}
										</h4>
									</Card>
								</GridItem>
								<GridItem xs={6} sm={4} md={4}>
									<Card plain>
										<GridItem
											xs={12}
											sm={12}
											md={6}
											className={classes.itemGrid}
										>
											<img
												src={client_abitcryptic}
												alt="..."
												className={imageClasses}
											/>
										</GridItem>
										<h4 className={classes.cardTitle}>
											A Bit Cryptic
											<br />
											{/* <small className={classes.smallTitle}>
												Crypto Podcast
											</small> */}
										</h4>
									</Card>
								</GridItem>
								<GridItem xs={6} sm={4} md={4}>
									<Card plain>
										<GridItem
											xs={12}
											sm={12}
											md={6}
											className={classes.itemGrid}
										>
											<img
												src={client_lab}
												alt="..."
												className={imageClasses}
											/>
										</GridItem>
										<h4 className={classes.cardTitle}>
											The Lab Miami
											<br />
											{/* <small className={classes.smallTitle}>
												Coworking Space
											</small> */}
										</h4>
									</Card>
								</GridItem>
							</GridContainer>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withStyles(teamStyle)(ClientSection);
