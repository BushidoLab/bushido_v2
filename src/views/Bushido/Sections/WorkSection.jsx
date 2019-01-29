import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import * as emailjs from "emailjs-com";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";

// IMPORT MAILGUN VARS
var mailgun = require('mailgun.js');
var mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY || 'key-yourkeyhere'});



class WorkSection extends React.Component {
    state = {
		name: '',
		email:'',
		message:''
    }

    // This works only changing hard coded state
    handleChange(e, name){
        this.setState({[name]: e.target.value});
		// console.log(event.target.name)
		// console.log(this.state)
	}
	
	// Handles sending email in contact form
	handleSubmit = (e) => {
	e.preventDefault();
	const { name, email, message } = this.state;

	const templateParams = {
		name,
		email,
		message,
		date: new Date(Date.now())
	}

	var email_params = {
		"to_email": templateParams.email,
		"reply_to": "noreply@bushidolab.com",
		"from_name": "chris@bushidolab.com",
		"to_name": templateParams.name,
		"message_html": "Thanks for reaching out, we'll contact you soon!"
	 }
	 
	 
	
	emailjs.init('user_PKTMzIKJYSrAELa74QM9U');
	var service_id = "mailgun";
	var template_id = "template_F9hUy3M7";

    // send method requires service id, the email's template id and whatever variables needed to write in the body of the email
    emailjs.send(service_id, template_id, email_params)
      .then(res => {
        alert('Email sent successfully');
      }, err => {
        console.error('Failed to send contact email', err);
	  });
	  
	console.log(templateParams)


	}

	render() {
		const { classes, ...rest } = this.props;
		return (
			<div className={classes.section}>
				<GridContainer justify="center">
					<GridItem cs={12} sm={12} md={8}>
						<h2 className={classes.title}>Let us help you!</h2>
						<h4 className={classes.description}>
							Divide details about your product or agency work into parts. Write
							a few lines about each one and contact us about any further
							collaboration. We will responde get back to you in a couple of
							hours.
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
											fullWidth: true
										}}
                                        inputProps={{
											type: "text",
                                            // onChange: (event) => this.handleChange(this.value)
                                            // value: this.state.name,
                                            onChange: (event) => this.handleChange(event, "name")
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
                                            // onChange: (event) => this.handleChange(this.value)
                                            // value: this.state.name,
                                            onChange: (event) => this.handleChange(event, "email")
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
										onChange: (event) => this.handleChange(event, "message")
									}}
								/>
								<GridContainer justify="center">
									<GridItem
										xs={12}
										sm={12}
										md={4}
										className={classes.textCenter}
									>
										<Button color="danger" onClick={this.handleSubmit}>Send Message</Button>
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
