import React from "react";
import Panel from "../../components/Panel";
import { Col, Row, Container } from "../../components/Grid";
import "./Profile.css";
import { Link } from 'react-router-dom';
import profileData from "./profileData.json";

const Profile = props => (
	<Panel>
		<Container fluid>
			<Row>
				<Col size="lg-12 md-12 sm-12 xs-12">
					<h1>My Profile</h1>
						<form className="form-horizontal">
						  <div className="form-group col-xs-9 col-sm-9 col-md-9 col-lg-9">
						    <label for="firstName">First Name</label>
						    <input type="text" className="form-control" id="firstName" defaultValue={props.profileData.firstName} placeholder="First Name" />
						  </div>
						  <div className="form-group col-xs-9 col-sm-9 col-md-9 col-lg-9">
						    <label for="firstName">Last Name</label>
						    <input type="text" className="form-control" id="lastName" defaultValue={props.profileData.lastName} placeholder="Last Name" />
						  </div>
						  <div className="form-group col-xs-3 col-sm-3 col-md-3 col-lg-3">
						    <label for="myDob">DoB</label>
						    <input type="text" className="form-control" id="myDob" defaultValue={props.profileData.dob} placeholder="MM/DD/YYYY" />
						  </div>

						  <div className="form-group col-xs-9 col-sm-9 col-md-9 col-lg-9">
						    <label for="myEmail">Email Address</label>
						    <input type="email" className="form-control" id="myEmail" defaultValue={props.profileData.email} placeholder="me@example.com" />
						  </div>
						  <div className="form-group col-xs-3 col-sm-3 col-md-3 col-lg-3">
						    <label for="myGender">Gender</label>
						    <select className="form-control input" id="myGender">
								<option></option>
						    	<option value="male">Male</option>
						    	<option value="female">Female</option>
						    	<option value="other">Other</option>
						    </select>
						  </div>

						  <div className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
						    <label for="myCompany">Company Name</label>
						    <input type="text" className="form-control col-xs-6 col-sm-6 col-md-6 col-lg-6" id="myCompany" defaultValue="Company" placeholder="(Optional)" />
						  </div>

						  <div className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
						    <label for="myTitle">Job Title</label>
						    <input type="text" className="form-control col-xs-6 col-sm-6 col-md-6 col-lg-6" id="myTitle" defaultValue="Title" placeholder="(Optional)" />
						  </div>

					      <div>
						      <button className="btn btn-success col-xs-6 col-sm-6 col-md-6 col-lg-6">Save Changes</button>
					      </div>
					      <div>
						      <button type="reset" className="btn btn-danger col-xs-6 col-sm-6 col-md-6 col-lg-6">Delete My Profile</button>
					      </div>
						</form>



				</Col>
			</Row>
		</Container>
	</Panel>
);

export default Profile;