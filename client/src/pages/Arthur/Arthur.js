import React, { Component } from "react";
import "./Arthur.css";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";

class Arthur extends Component {

	render() {
		return (
			<Container fluid>
				<Row>
					<Col size="md-12 sm-3 xs-3">
						<Link to="/"><img src="/img/Arthur-front.png" id="arthurImg" className="img img-responsive" alt="Arthur" /></Link>
					</Col>
					<Col size="md-12 sm-9 xs-9">
						<h1 className="arthurH1">{this.props.arthurText}</h1>
					</Col>
				</Row>
			</Container>
		);
	}
};

export default Arthur;
