import React from "react";
import { Col, Row, Container } from "../Grid";
import {BrowserRouter as Router} from 'react-router-dom';
// import { Button, AnchorButton } from "@blueprintjs/core";
import peopleData from "../../components/Meetings/data/peopleData.json";

export const Personal = (props) => (
	<div>
		<Container fluid>
			<Row>
				<Col size="lg-3 md-3 sm-3 xs-12">
					<img className="img img-responsive img-circle center-block" src={peopleData.image || "/img/noPic.png"} alt={peopleData.firstName} />
				</Col>
				<Col size="lg-9 md-9 sm-9 xs-12">
					<h1>{peopleData.firstName} {peopleData.lastName}</h1>
					<a href={peopleData.linkedin}>{peopleData.linkedin}</a>
					<p>{peopleData.title}</p>
					<p>{peopleData.company}</p>
				</Col>
			</Row>
			<Row>
				<Col size="lg-12 md-12 sm-12 xs-12">
					<p>{peopleData.description}</p>
				</Col>
			</Row>

		</Container>
	</div>
);
