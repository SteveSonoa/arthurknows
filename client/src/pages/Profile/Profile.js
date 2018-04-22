import React from "react";
import Panel from "../../components/Panel";
import { Col, Row, Container } from "../../components/Grid";
import "./Profile.css";
import { Link } from 'react-router-dom';
import profileData from "./profileData.json";
import API from '../../utils/API';

class Profile extends React.Component {
	constructor (props) {
		super(props);
		this.props.updatePage('Profile');
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

		this.fetchUserData();
		this.setState({
			myEmail: this.props.profileData.email,
			userId: this.props.profileData.googleId,
			firstName: this.props.profileData.givenName,
			lastName: this.props.profileData.familyName
		});
		if (this.props.profileData.googleId) {			
			console.log('setting user details', this.state);
			localStorage.setItem('userDetails', this.state);
		} else {
			const userDetails = localStorage.getItem('userDetails');
			console.log('Getting user details ', userDetails);
			this.setState({...userDetails});
		}
	}

	componentDidMount() {
		console.log('In profile.js - props: ', this.props);
		console.log('in did mount state ', this.state);
	}

	fetchUserData = async () => {
		const id = this.props.profileData.googleId;
		console.log('in fetch user', id);
		try {
			const userDetails = await API.getUser(id).then(resp => resp.data);
			console.log('we have a user', userDetails);
			this.setState(prevState => ({
				prevState,
				...userDetails
			}));
			console.log('state after getting a user', this.state);
		} catch (err) {
			console.error('Could not fetch a user with id ' + id, err)
		}
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
		console.log('save profile handler initialised', this.state);
		try {
			const result = await API.saveUser(this.state);
			console.log('saveProfileHandler - result: ', result);
		} catch (e) {
			console.error('Error in saveProfileHandler: ', e);
		}
	};

	deleteProfileHandler = async (e) => {
		e.preventDefault();
		try {
			const result = await API.deleteUser(this.state.userId)
			console.log('delete profile', result);
		} catch (e) {
			console.error('Error in deleteProfileHandler', e);
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
								<div className="form-group col-xs-9 col-sm-9 col-md-9 col-lg-9">
									<label for="firstName">First Name</label>
									<input 
										type="text" 
										onChange={e => { this.onChangeHandler(e.target.value, 'firstName') }} 
										className="form-control" 
										id="firstName" 
										value={this.state.firstName} 
										placeholder="First Name" />
								</div>
								<div className="form-group col-xs-9 col-sm-9 col-md-9 col-lg-9">
									<label for="firstName">Last Name</label>
									<input 
										type="text" 
										onChange={e => { this.onChangeHandler(e.target.value, 'lastName') }} 
										className="form-control" id="lastName" 
										value={this.state.lastName} 
										placeholder="Last Name" />
								</div>
								<div className="form-group col-xs-3 col-sm-3 col-md-3 col-lg-3">
									<label for="myDob">DoB</label>
									<input 
										type="text" 
										onChange={e => { this.onChangeHandler(e.target.value, 'myDob') }} 
										className="form-control" 
										id="myDob" 
										value={this.state.myDob} 
										placeholder="MM/DD/YYYY" />
								</div>

								<div className="form-group col-xs-9 col-sm-9 col-md-9 col-lg-9">
									<label for="myEmail">Email Address</label>
									<input 
										type="email" 
										onChange={e => { this.onChangeHandler(e.target.value, 'myEmail') }} 
										className="form-control" 
										id="myEmail" 
										value={this.state.myEmail} 
										placeholder="me@example.com" />
								</div>
								<div className="form-group col-xs-3 col-sm-3 col-md-3 col-lg-3">
									<label for="myGender">Gender</label>
									<select 
										className="form-control input" 
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
									<label for="myCompany">Company Name</label>
									<input 
										type="text" 
										className="form-control col-xs-6 col-sm-6 col-md-6 col-lg-6" 
										id="myCompany" 
										value={this.state.company}
										onChange={e => { this.onChangeHandler(e.target.value, 'myCompany') }}
										placeholder="(Optional)" />
								</div>

								<div className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
									<label for="myTitle">Job Title</label>
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