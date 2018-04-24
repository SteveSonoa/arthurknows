import React from "react";
import Panel from "../../components/Panel";
import { Col, Row, Container } from "../../components/Grid";
import "./Profile.css";
// import { Link } from 'react-router-dom';
// import profileData from "./profileData.json";
import API from '../../utils/API';

class Profile extends React.Component {
	constructor (props) {
		super(props);
		this.props.updatePage('Profile');
		setTimeout(this.props.updateArthurText, 500);
	}

	state = {
		userId: '',
		firstName: '',
		lastName: '',
		myDob: '',
		myEmail: '',
		myGender: '',
		myCompany: '',
		myTitle: ''
	}

	componentWillMount() {
		console.log('in will mount', this.state);
		this.setState({
			...this.props.profileData
		});
		// if (this.props.profileData.googleId) {
		// 	console.log('setting user details', this.state);
		// 	localStorage.setItem('userDetails', this.state);
		// } else {
		// 	const userDetails = localStorage.getItem('userDetails');
		// 	console.log('Getting user details ', userDetails);
		// 	this.setState({...userDetails});
		// }
	}

	onChangeHandler = (value, field) => {
		console.log('changed', value, field);
		this.setState({
			[field]: value
		});
		console.log('state after on change', this.state);
	};

	saveProfileHandler = async (e) => {
		e.preventDefault();
		console.log('save profile handler initialized', this.state);
		try {
			const result = await API.saveUser(this.state);
			console.log('saveProfileHandler - result: ', result);
			alert('Your profile has been saved!');
		} catch (e) {
			console.error('Error in saveProfileHandler: ', e);
			alert('There was a problem while trying to save your profile.');
		}
	};

	deleteProfileHandler = async (e) => {
		e.preventDefault();
		try {
			const result = await API.deleteUser(this.state.userId)
			console.log('delete profile', result);
			alert('Your profile has been deleted successfully!');
		} catch (e) {
			console.error('Error in deleteProfileHandler', e);
			alert('There was a problem while trying to delete your profile');
		}
	}


	render () {
		return (
			<Panel>
				<Container fluid>
					<Row>
						<Col size="lg-12 md-12 sm-12 xs-12">
							<h1>My Profile</h1>
							<form className="form-horizontal">
								<div className="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6">
									<label htmlFor="firstName">First Name</label>
									<input
										type="text"
										onChange={e => { this.onChangeHandler(e.target.value, 'firstName') }}
										className="form-control col-xs-12 col-sm-12 col-md-6 col-lg-6"
										id="firstName"
										value={this.state.firstName}
										placeholder="First Name" />
								</div>
								<div className="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6">
									<label htmlFor="firstName">Last Name</label>
									<input
										type="text"
										onChange={e => { this.onChangeHandler(e.target.value, 'lastName') }}
										className="form-control col-xs-12 col-sm-12 col-md-6 col-lg-6" id="lastName"
										value={this.state.lastName}
										placeholder="Last Name" />
								</div>

								<div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
									<label htmlFor="myEmail">Email Address</label>
									<input
										type="email"
										onChange={e => { this.onChangeHandler(e.target.value, 'myEmail') }}
										className="form-control col-xs-12 col-sm-12 col-md-12 col-lg-12"
										id="myEmail"
										value={this.state.myEmail}
										placeholder="me@example.com" />
								</div>

								<div className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
									<label htmlFor="myDob">DoB</label>
									<input
										type="date"
										onChange={e => { this.onChangeHandler(e.target.value, 'myDob') }}
										className="form-control col-xs-6 col-sm-6 col-md-6 col-lg-6"
										id="myDob"
										value={this.state.myDob}
										placeholder="MM/DD/YYYY" />
								</div>


								<div className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
									<label htmlFor="myGender">Gender</label>
									<select
										className="form-control input col-xs-6 col-sm-6 col-md-6 col-lg-6"
										onChange={e => { this.onChangeHandler(e.target.value, 'myGender') }}
										value={this.state.myGender}
										id="myGender">
										<option></option>
										<option value="male">Male</option>
										<option value="female">Female</option>
										<option value="other">Other</option>
									</select>
								</div>

								<div className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
									<label htmlFor="myCompany">Company Name</label>
									<input
										type="text"
										className="form-control col-xs-6 col-sm-6 col-md-6 col-lg-6"
										id="myCompany"
										onChange={e => { this.onChangeHandler(e.target.value, 'myCompany') }}
										value={this.state.myCompany}
										placeholder="(Optional)"
										/>
								</div>

								<div className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
									<label htmlFor="myTitle">Job Title</label>
									<input
										type="text"
										className="form-control col-xs-6 col-sm-6 col-md-6 col-lg-6"
										id="myTitle"
										onChange={e => { this.onChangeHandler(e.target.value, 'myTitle') }}
										value={this.state.myTitle}
										placeholder="(Optional)" />
								</div>

								<div>
									<button
										onClick={this.saveProfileHandler}
										className="btn btn-success col-xs-6 col-sm-6 col-md-6 col-lg-6">Save Changes</button>
								</div>
								<div>
									<button
										type="reset"
										onClick={this.deleteProfileHandler}
										className="btn btn-danger col-xs-6 col-sm-6 col-md-6 col-lg-6">Delete My Profile</button>
								</div>
							</form>
						</Col>
					</Row>
				</Container>
			</Panel>
		);
	}
};

export default Profile;
