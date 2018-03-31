import React from "react";
import { Col, Row, Container } from "../Grid";

export const Tweets = props => (
	<div>
		<Container fluid>
			<Row>
				<Col size="lg-12 md-12 sm-12 xs-12">
						{props.tweets.map(tweet => (
							<blockquote class="twitter-tweet" data-lang="en" key={tweet.url}><p lang="en" dir="ltr">.{tweet.body}</p>&mdash; {tweet.username} (@{tweet.handle}) <a href={tweet.url}>{tweet.date}</a></blockquote>
							<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
						))}
				</Col>
			</Row>
		</Container>
	</div>
);