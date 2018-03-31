import React from "react";
import { Col, Row, Container } from "../Grid";

export const Posts = props => (
	<div>
		<Container fluid>
			<Row>
				<Col size="lg-12 md-12 sm-12 xs-12">
					<p>{props.text}</p>
				</Col>
			</Row>
		</Container>
	</div>
);
