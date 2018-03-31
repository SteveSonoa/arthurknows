import React from "react";
import { Col, Row, Container } from "../Grid";

export const Shared = props => (
	<div>
		<Container fluid>
			<Row>
				<Col size="lg-12 md-12 sm-12 xs-12">
					<p>
						{props.shared.map(shared => (
							<a href={shared.url} target=_blank key={shared.url}>{shared.name}</a> 
						))}
					</p>
				</Col>
			</Row>
		</Container>
	</div>
);
