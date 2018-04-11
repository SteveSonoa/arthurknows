import React from "react";
import "./Meetings.css";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";

const Meetings = props => (
	<div key={props.meetingData.meetings[0].participants[0].email} >

		<h1>{props.meetingData.date}</h1>

		{props.meetingData.meetings.map(meetings => (
			<div key={meetings.participants[0].email} >
				<h2>{meetings.title}</h2>
				<Row>
					{meetings.participants.map(participants => (
						<Col size="xs-3 sm-3 md-3 lg-3" key={participants.email}>
							<Link to="/results">{participants.name}</Link>
						</Col>
					))}
				</Row>
			</div>
		))}
	</div>
);

export default Meetings;
