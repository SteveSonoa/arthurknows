import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Arthur from "./pages/Arthur";
import Results from "./pages/Results";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings/Settings.js";
import About from "./pages/About";
import Daily from "./pages/Daily";
import Weekly from "./pages/Weekly";
import Privacy from "./pages/Privacy";
import FAQ from "./pages/FAQ";
import { Col, Row, Container } from "./components/Grid";
import profileData from "./pages/Profile/profileData.json";
import SecretRoute from './pages/Settings';

class App extends Component {

	state = {

	};

	render() {
		return (
			<Router>
				<div>
					<video autoPlay muted loop id="myVideo">
						<source src="/img/test4.mp4" type="video/mp4" />
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
									<SecretRoute path="/settings" component={Settings} />
									<Route exact path="/search/weekly" component={Weekly} />
									<Route exact path="/search/daily" component={Daily} />
									<Route exact path="/search/custom" component={Results} />
									<Route exact path="/results/:personInfo" component={Results} />
									<Route exact path="/profile" render = { () =>
										<Profile profileData={profileData}/>
									} />
									<Route exact path="/about" component={About} />
									<Route exact path="/contact" component={Results} />
									<Route exact path="/FAQ" component={FAQ} />
									<Route exact path="/settings" component={Settings} />
									<Route exact path="/privacy" component={Privacy} />
									
									<Route component={NoMatch} />
								</Switch>
							</Col>
						</Row>
					</Container>
				</div>
			</Router>
		);
	}
};

export default App;
