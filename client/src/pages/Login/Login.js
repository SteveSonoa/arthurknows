import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Panel from "../../components/Panel";
import "./Login.css";
import { Link } from 'react-router-dom'

const Login = props => (
	<Container fluid>
		<Row>
			<Col size="lg-12 md-12 sm-12 xs-12">
				<h1 className="text-center loginTitle">Welcome To</h1>
				<h1 className="text-center loginTitle">A R T H U R</h1>
				<Link to='/results'><img src="./img/googlesignin.png" className="img img-responsive center-block" /></Link>
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
);

export default Login;