import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Panel from "../../components/Panel";
import { GoogleLogin } from 'react-google-login';
import "./Login.css";
import { Link } from 'react-router-dom';
import Api from '../../utils/API';
import Calendar from '../Calendar';
import AuthService from '../../utils/AuthService';

class Login extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			login: false
		}
	}

	googleSuccessResponse = (res) => {
		let that = this;
		Api.verifyToken(res.tokenId).then(( data ) => {
			AuthService.authorize(true);
			console.log(data);
			that.props.history.push('/settings');
		})
	}

	googleErrorResponse = (res) => {

	}

	render () {
		return (

			<Container fluid>
				<Row>
					<Col size="lg-12 md-12 sm-12 xs-12">
						<h1 className="text-center loginTitle">Welcome To</h1>
						<h1 className="text-center loginTitle">A R T H U R</h1>
						<Calendar login/>
						<GoogleLogin
							clientId="1078553084952-d48o52dsfbc7qjg9vavlc33m67e3jbp8.apps.googleusercontent.com   "
							//<Link to='/results'><img src="./img/googlesignin.png" className="img img-responsive center-block" /></Link>
							buttonText=""
							className="loginButton"

							onSuccess={this.googleSuccessResponse}
							onFailure={this.googleErrorResponse}
						/>
					</Col>
				</Row>
				<Row>
					<Col size="lg-12 md-12 sm-12 xs-12">
						<div className="login_marginTop"></div>
						<Panel>
							<h2 className="text-center"><Link to="/about">What Is Arthur?</Link></h2>
						</Panel>
					</Col>
				</Row>

			</Container>
		)
	}
}
export default Login;
