import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Arthur from "./pages/Arthur";
import Results from "./pages/Results";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import { Col, Row, Container } from "./components/Grid";


const App = () => (
	<Router>
		<div>
			<video autoPlay muted loop id="myVideo">
				<source src="./img/test4.mp4" type="video/mp4" />
			</video>
			<Nav />
			<Container>				
				<Row>
					<Col size="md-4 sm-12">
						<Arthur />
					</Col>
					<Col size="md-8 sm-12">
						<Switch>
							<Route exact path="/" component={Login} />
							<Route exact path="/results" component={Results} />
							<Route exact path="/weekly" component={Results} />
							<Route component={NoMatch} />
						</Switch>
					</Col>
				</Row>
			</Container>
		</div>
	</Router>
);

export default App;
