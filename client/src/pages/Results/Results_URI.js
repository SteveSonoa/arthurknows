import React from "react";
import Panel from "../../components/Panel";
import { Col, Row, Container } from "../../components/Grid";
import { Personal, Headlines, Twitter } from "../../components/Results";
import "./Results.css";
// import headlinesData from "../../components/Results/data/headlines.json";
import linkedinData from "../../components/Results/data/linkedin.json";
// import postsCompanyData from "../../components/Results/data/postsCompany.json";
// import postsPersonData from "../../components/Results/data/postsPerson.json";
// import sharedData from "../../components/Results/data/shared.json";
// import twitterData from "../../components/Results/data/twitter.json";
import CalendarActivities from '../../utils/data';
import API from "../../utils/API";

// PROPS INCLUDES THE FOLLOWING:
	// resultHeadlines: [],
	// resultTwitter: [],
	// resultProfile: {}

class Results_URI extends React.Component {

	state = {
		data: {
			localnews: [],
			_id: "",
			firstName: "",
			lastName: "",
			company: "",
			linkedInHeadline: "",
			linkedInURL: "",
			linkedInDescription: "",
			companyDescription: "",
			companyURL: ""
		}
	}

	// constructor (props) {
	// 	super(props);
	// 	this.props.updatePage('Results');
	// 	setTimeout(this.props.updateArthurText, 500);
	// }

	constructor (props) {
		super(props)
		// console.log(this.props.match.params.id);
		API.getById(this.props.match.params.id)
			.then( data => {
				this.setState({data: data});
			}
		);
	}

	// deletedinfo() {
	// 			<Container fluid>
	// 				<Row>
	// 					<Col size="lg-12 md-12 sm-12 xs-12">
	// 						<Personal
	// 							img={this.props.resultProfile.img}
	// 							name={linkedinData.name}
	// 							linkedin={linkedinData.linkedin}
	// 							title={linkedinData.title}
	// 							company={linkedinData.company}
	// 							description={this.props.resultProfile.description}
	// 						/>
	// 					</Col>
	// 				</Row>
	// 				<Row>
	// 					<Col size="lg-12 md-12 sm-12 xs-12">
	// 						<div className="hDivider center-block"></div>
	// 					</Col>
	// 				</Row>
	// 				<Row>
	// 					<Col size="lg-5 md-5 sm-12 xs-12">
	// 						<Twitter
	// 							header="Latest Tweets"
	// 							id={this.props.resultTwitter}
	// 						/>
	// 					</Col>
	// 					<Col size="lg-7 md-7 sm-12 xs-12">
	// 						<Headlines
	// 							story={this.props.resultHeadlines}
	// 						/>
	// 					</Col>
	// 				</Row>
	// 			</Container>
	// }

	render () {
		return (

			<Panel>
				<Container fluid>
					<Row>
						<Col size="lg-12 md-12 sm-12 xs-12">
							<Container fluid>
								<Row>
									<Col size="lg-12 md-12 sm-12 xs-12">
										<h1>{this.state.data.firstName} {this.state.data.lastName}</h1>
										<a href={this.state.data.linkedInURL}>{this.state.data.linkedInURL}</a>
										<p>{this.state.data.linkedInHeadline}</p>
										<p>{this.state.data.company}</p>
									</Col>
								</Row>
								<Row>
									<Col size="lg-12 md-12 sm-12 xs-12">
										<p>{this.state.data.companyDescription}</p>
									</Col>
								</Row>

							</Container>
						</Col>
					</Row>
					<Row>
						<Col size="lg-12 md-12 sm-12 xs-12">
							<div className="hDivider center-block"></div>
						</Col>
					</Row>
					<Row>
						<Col size="lg-12 md-12 sm-12 xs-12">
							<Container fluid>
								<Row>
									<Col size="lg-12 md-12 sm-12 xs-12">
										<h1>Company Headlines</h1>
										{this.state.data.localnews.map(story => (
											<a href={story.url} key={story.url}><h2>{story.name}</h2>
											<p>{story.snippet}</p></a>
										))}
									</Col>
								</Row>
							</Container>
						</Col>
					</Row>
				</Container>
			</Panel>
		);
	}
};

export default Results_URI;
