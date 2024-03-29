import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import * as emailjs from "emailjs-com";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";

class WorkSection extends React.Component {
	state = {
		name: "",
		email: "",
		message: ""
	};

	// This works only changing hard coded state
	handleChange(e, name) {
		this.setState({ [name]: e.target.value });
	}

	// Handles sending email in contact form
	handleSubmit = e => {
		e.preventDefault();
		const { name, email, message } = this.state;

		const templateParams = {
			name,
			email,
			message,
			date: new Date(Date.now())
		};

		var email_params = {
			to_email: templateParams.email,
			reply_to: "noreply@bushidolab.com",
			from_name: "chris@bushidolab.com",
			to_name: templateParams.name,
			message_html: templateParams.message
		};

		emailjs.init("user_PKTMzIKJYSrAELa74QM9U");
		var service_id = "mailgun";
		var template_id = "template_F9hUy3M7";

		// send method requires service id, the email's template id and whatever variables needed to write in the body of the email
		emailjs.send(service_id, template_id, email_params).then(
			res => {
				alert("Email sent successfully");
			},
			err => {
				console.error("Failed to send contact email", err);
			}
		);
	};

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.section}>
				<GridContainer justify="center">
					<GridItem cs={12} sm={12} md={8}>
						<h2 className={classes.title} id="Contact">
							Let us help you!
						</h2>
						<h4 className={classes.description}>
						Provide details about your project or blockchain needs and a member of our team will answer you shortly.
						</h4>
						<form onSubmit={this.handleSubmit}>
							<GridContainer>
								<GridItem xs={12} sm={12} md={6}>
									<CustomInput
										labelText="Your Name"
										id="name"
										value={this.state.name}
										name="name"
										formControlProps={{
											fullWidth: true,
											color: "green"
										}}
										inputProps={{
											type: "text",
											onChange: event => this.handleChange(event, "name")
										}}
									/>
								</GridItem>
								<GridItem xs={12} sm={12} md={6}>
									<CustomInput
										labelText="Your Email"
										id="email"
										formControlProps={{
											fullWidth: true
										}}
										inputProps={{
											type: "text",
											onChange: event => this.handleChange(event, "email")
										}}
									/>
								</GridItem>
								<CustomInput
									labelText="Your Message"
									id="message"
									formControlProps={{
										fullWidth: true,
										className: classes.textArea
									}}
									inputProps={{
										multiline: true,
										rows: 5,
										onChange: event => this.handleChange(event, "message")
									}}
								/>
								<GridContainer justify="center">
									<GridItem
										xs={12}
										sm={12}
										md={4}
										className={classes.textCenter}
									>
										<Button color="danger" onClick={this.handleSubmit}>
											Send Message
										</Button>
									</GridItem>
								</GridContainer>
							</GridContainer>
						</form>
					</GridItem>
				</GridContainer>
			</div>
		);
	}
}

export default withStyles(workStyle)(WorkSection);
