import React from "react";
import Panel from "../../components/Panel";
import { Col, Row, Container } from "../../components/Grid";
import "./Settings.css";
import { Link } from 'react-router-dom';
import profileData from "../Profile/profileData.json";
import ReactBootstrapSlider from 'react-bootstrap-slider';
import BootstrapSlider from 'bootstrap-slider/dist/css/bootstrap-slider.min.css';
import Calendar from '../Calendar';

const Profile = props => (
	<Panel>
		<Container fluid>
			<Row>
				<Col size="lg-12 md-12 sm-12 xs-12">
					<h1>Settings</h1>
				</Col>
			</Row>
			<Row>
				<Col size="lg-12 md-12 sm-12 xs-12">
					<p>Link to your Google Calendar</p>
					<Calendar location="settings"/>
					<div className="hDivider center-block"></div>
				</Col>
			</Row>
			<Row>
				<Col size="lg-12 md-12 sm-12 xs-12">
					<h3>Arthur's Sarcasm Level</h3>
					<center>
						<ReactBootstrapSlider
							value={2}
							slideStop={1}
							step={1}
							ticks = {[0, 1, 2]}
							ticks_labels = {["None", "Sometimes", "Intense"]}
							ticks_snap_bounds = { 1 }
							tooltip = "hide" />
						</center>
				</Col>
			</Row>

			<Row>
				<Col size="lg-12 md-12 sm-12 xs-12">
					<button className="btn btn-success center-block">Save Changes</button>
				</Col>
			</Row>
		</Container>
	</Panel>
);

export default Profile;
