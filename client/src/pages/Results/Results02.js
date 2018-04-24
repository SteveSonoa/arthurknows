import React from "react";
import Panel from "../../components/Panel";
import { Col, Row, Container } from "../../components/Grid";
import { Personal02, Headlines, Twitter } from "../../components/Results";
import "./Results.css";
// import headlinesData from "../../components/Results/data/headlines.json";
import linkedinData from "../../components/Results/data/linkedin.json";
// import postsCompanyData from "../../components/Results/data/postsCompany.json";
// import postsPersonData from "../../components/Results/data/postsPerson.json";
// import sharedData from "../../components/Results/data/shared.json";
// import twitterData from "../../components/Results/data/twitter.json";
import CalendarActivities from '../../utils/data';
import peopleData from "../../components/Meetings/data/peopleData.json";
import { Tweet } from 'react-twitter-widgets'

// PROPS INCLUDES THE FOLLOWING:
	// resultHeadlines: [],
	// resultTwitter: [],
	// resultProfile: {}

class Results02 extends React.Component {

	constructor (props) {
		super(props);
		this.props.updatePage('Results');
		setTimeout(this.props.updateArthurText, 500);
	}

	componentDidMount() {
		console.log(this.props);
	}

	render () {
		return (

			<Panel>
				<Container fluid>
					<Row>
						<Col size="lg-12 md-12 sm-12 xs-12">
							<Container fluid>
								<Row>
									<Col size="lg-3 md-3 sm-3 xs-12">
										<img className="img img-responsive img-circle center-block" src={peopleData[1].image || "/img/noPic.png"} alt={peopleData[1].firstName} />
									</Col>
									<Col size="lg-9 md-9 sm-9 xs-12">
										<h1>{peopleData[1].firstName} {peopleData[1].lastName}</h1>
										<a href={peopleData[1].linkedin}>{peopleData[1].linkedin}</a>
										<p>{peopleData[1].title}</p>
										<p>{peopleData[1].company}</p>
									</Col>
								</Row>
								<Row>
									<Col size="lg-12 md-12 sm-12 xs-12">
										<p>{peopleData[1].description}</p>
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
						<Col size="lg-5 md-5 sm-12 xs-12">
							<Container fluid>
								<Row>
									<Col size="lg-12 md-12 sm-12 xs-12">
										{ peopleData[1].twitter.map(tweet => (
											<Tweet tweetId={tweet} key={tweet} />
										))}
									</Col>
								</Row>
							</Container>
						</Col>
						<Col size="lg-7 md-7 sm-12 xs-12">
							<Container fluid>
								<Row>
									<Col size="lg-12 md-12 sm-12 xs-12">
										<h1>Company Headlines</h1>
										{peopleData[1].headlines.map(story => (
											<a href={story.url} key={story.url}><h2>{story.headline}</h2>
											<p>{story.blurb}</p></a>
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

export default Results02;
