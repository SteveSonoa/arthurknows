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
import Settings from "./pages/Settings";
import About from "./pages/About";
import { Col, Row, Container } from "./components/Grid";

import profileData from "./pages/Profile/profileData.json";

class App extends Component { 

	state = {
		"score": 0,
		"hiscore": 0,
		"message": "Click A Veggie!"
	};

	render() {
		return (
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
									<Route exact path="/search/weekly" component={Results} />
									<Route exact path="/search/daily" component={Results} />
									<Route exact path="/search/custom" component={Results} />
									<Route exact path="/results/:id" component={Results} />
									<Route exact path="/profile" render = { () => 
										<Profile profileData={profileData}/>
									} />
									<Route exact path="/about" component={About} />
									<Route exact path="/contact" component={Results} />
									<Route exact path="/settings" component={Settings} />
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
