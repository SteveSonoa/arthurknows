import React from "react";
import Panel from "../../components/Panel";
import { Col, Row, Container } from "../../components/Grid";
import "./About.css";
import { Link } from 'react-router-dom'

const Login = props => (
	<Panel>
		<Container fluid>
			<Row>
				<Col size="lg-12 md-12 sm-12 xs-12">
					<h1 className="text-center loginTitle">Welcome To</h1>
					<h1 className="text-center loginTitle">A R T H U R</h1>
					<Link to='/results'><img src="./img/googlesignin.png" className="img img-responsive center-block" /></Link>
				</Col>
			</Row>
		</Container>
	</Panel>
);

export default Login;