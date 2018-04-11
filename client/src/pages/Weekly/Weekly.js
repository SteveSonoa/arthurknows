import React from "react";
import Panel from "../../components/Panel";
import { Col, Row, Container } from "../../components/Grid";
import Meetings from "../../components/Meetings";
import "./Weekly.css";
import meetingData from "../../components/Meetings/data/meetingData.json";

const Weekly = props => (

	<div>
		{meetingData.map(meetingData => (
			<div key={meetingData.linkedin}>
				<Panel>
					<Container fluid>
						<Row>
							<Col size="lg-12 md-12 sm-12 xs-12">
								<Meetings
									meetingData={meetingData}
								/>
							</Col>
						</Row>
					</Container>
				</Panel>
			</div>
		))}
	</div>
);

export default Weekly;