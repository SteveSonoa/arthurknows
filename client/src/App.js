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
import CustomSearch from './pages/CustomSearch';

class App extends Component {

	state = {
		page: "Login"
	};

	updatePage = (pageName) => {
		this.setState({page: pageName});
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
								<Arthur page={this.state.page} />
							</Col>
							<Col size="md-8 sm-12">
								<Switch>
									<Route exact path="/" render = { () =>
										<Login updatePage={this.updatePage} />
									} />
									<SecretRoute path="/settings" render = { () =>
										<Settings updatePage={this.updatePage} />
									} />
									<Route exact path="/search/weekly" render = { () =>
										<Weekly updatePage={this.updatePage} />
									} />
									<Route exact path="/search/daily" render = { () =>
										<Daily updatePage={this.updatePage} />
									} />
									<Route exact path="/search/custom" render = { () =>
										<Results updatePage={this.updatePage} />
									} />
									<Route path="/results/:personInfo" render = { () =>
										<Results updatePage={this.updatePage} />
									} />
									<Route exact path="/profile" render = { () =>
										<Profile profileData={profileData} updatePage={this.updatePage} />
									} />
									<Route exact path="/about" render = { () =>
										<About updatePage={this.updatePage} />
									} />
									<Route exact path="/contact" render = { () =>
										<Results updatePage={this.updatePage} />
									} />
									<Route exact path="/settings" render = { () =>
										<Settings updatePage={this.updatePage} />
									} />
									<Route exact path="/customsearch" render = { () =>
										<CustomSearch />
									} />
									<Route exact path="/CustomSearchForm" render = { () =>
										<Settings updatePage={this.updatePage} />
									} />
									<Route exact path="/faq" render = { () =>
										<FAQ updatePage={this.updatePage} />
									} />									
									<Route exact path="/privacy" render = { () =>
										<Privacy updatePage={this.updatePage} />
									} />
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
