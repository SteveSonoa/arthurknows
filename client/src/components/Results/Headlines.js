import React from "react";
import { Col, Row, Container } from "../Grid";

export const Headlines = props => (
	<div>
		<Container fluid>
			<Row>
				<Col size="lg-12 md-12 sm-12 xs-12">
					<a href={props.link} target=_blank><h1>{props.headline}</h1>
					<p>{props.date}</p>
					<p>{props.blurb}</p></a>
				</Col>
			</Row>
		</Container>
	</div>
);
