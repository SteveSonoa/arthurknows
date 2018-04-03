import React from "react";
import Panel from "../../components/Panel";
import { Col, Row, Container } from "../../components/Grid";
import { Personal, Headlines, Posts, Shared } from "../../components/Results";
import headlinesData from "../../components/Results/data/headlines.json";
import linkedinData from "../../components/Results/data/linkedin.json";
import postsCompanyData from "../../components/Results/data/postsCompany.json";
import postsPersonData from "../../components/Results/data/postsPerson.json";
import sharedData from "../../components/Results/data/shared.json";

const Results = props => (
		<Panel>
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
						<div className="hDivider"></div>
						<Shared
							shared={sharedData}
						/>
					</Col>
				</Row>
				<Row>
					<Col size="lg-12 md-12 sm-12 xs-12">
						<div className="hDivider"></div>
						<Headlines
							story={headlinesData}
						/>
					</Col>
				</Row>
				<Row>
					<Col size="lg-12 md-12 sm-12 xs-12">
						<div className="hDivider"></div>
						<Posts
							header="Company Posts"
							post={postsCompanyData}
						/>
					</Col>
				</Row>
				<Row>
					<Col size="lg-12 md-12 sm-12 xs-12">
						<div className="hDivider"></div>
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