import React from "react";
import Panel from "../../components/Panel";
import { Col, Row, Container } from "../../components/Grid";
import { Personal, Headlines, Posts, Shared, Twitter } from "../../components/Results";
import "./Results.css";
import headlinesData from "../../components/Results/data/headlines.json";
import linkedinData from "../../components/Results/data/linkedin.json";
import postsCompanyData from "../../components/Results/data/postsCompany.json";
import postsPersonData from "../../components/Results/data/postsPerson.json";
import sharedData from "../../components/Results/data/shared.json";
import twitterData from "../../components/Results/data/twitter.json";
import CalendarActivities from '../../utils/data';


const Results = props => (

	<Panel>{console.log(props.personInfo)}
		<Container fluid>
			<Row>
				<Col size="lg-12 md-12 sm-12 xs-12">
					<Personal
						img={linkedinData.img}
						name={linkedinData.name}
						linkedin={linkedinData.linkedin}
						title={linkedinData.title}
						company={linkedinData.company}
						description={linkedinData.description}
					/>
				</Col>
			</Row>
			<Row>
				<Col size="lg-12 md-12 sm-12 xs-12">
					<div className="hDivider center-block"></div>
					<Shared
						shared={sharedData}
					/>
					<div className="hDivider center-block"></div>
				</Col>
			</Row>
			<Row>
				<Col size="lg-5 md-5 sm-12 xs-12">
					<Twitter
						header="Latest Tweets"
						id={twitterData}
					/>
				</Col>
				<Col size="lg-7 md-7 sm-12 xs-12">
					<Headlines
						story={headlinesData}
					/>
				</Col>
			</Row>
			<Row>
				<Col size="lg-12 md-12 sm-12 xs-12">
					<div className="hDivider center-block"></div>
					<Posts
						header="Company Posts"
						post={postsCompanyData}
					/>
				</Col>
			</Row>
			<Row>
				<Col size="lg-12 md-12 sm-12 xs-12">
					<div className="hDivider center-block"></div>
					<Posts
						header="Personal Posts"
						post={postsPersonData}
					/>
				</Col>
			</Row>
		</Container>
	</Panel>
);


export default Results;
