import React from "react";
import { Col, Row, Container } from "../Grid";

export const Headlines = props => (
	<div>
		<Container fluid>
			<Row>
				<Col size="lg-12 md-12 sm-12 xs-12">
					<h1>Company Headlines</h1>
					{props.story.map(story => (
						<a href={story.link} key={story.link}><h2>{story.headline}</h2>
						<p>{story.date}</p>
						<p>{story.blurb}</p></a>
					))}
				</Col>
			</Row>
		</Container>
	</div>
);
