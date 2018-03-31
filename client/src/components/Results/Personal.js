import React from "react";
import { Col, Row, Container } from "../Grid";

export const Personal = props => (
	<div>
		<Container fluid>
			<Row>
				<Col size="lg-3 md-3 sm-12 xs-12">
					<img src={props.img} className="img img-responsive" />
				</Col>
				<Col size="lg-9 md-9 sm-12 xs-12">
					<h1>{props.name}</h1>
					<p>{props.linkedin}</p>
					<p>{props.title}</p>
					<p>{props.company}</p>
					<p>{props.description}</p>
				</Col>
			</Row>
		</Container>
	</div>
);
