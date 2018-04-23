import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
import Contact from "./pages/Contact";
import { Col, Row, Container } from "./components/Grid";
// import profileData from "./pages/Profile/profileData.json";
// import SecretRoute from './pages/Settings';
import CustomSearch from './pages/CustomSearch';

class App extends Component {

	state = {
		page: "Login",
		userDetails: {},
		arthurText: "I'm ready to get to work.",
		sarcasm: 2
	};

	updatePage = (pageName) => {
		this.setState({page: pageName});
	};

	updateArthurText = () => {
		// this.setState({arthurText: text});
		if(this.state.page === "Login") {
			this.setState({
				arthurText: "I feel like the only time you visit me is when you want dirt on someone."
			});
		}
		else if(this.state.page === "Daily") {
			this.setState({
				arthurText: "If this was my schedule today, I'd go back to bed and try again tomorrow."
			});
		}
		else if(this.state.page === "Weekly") {
			this.setState({
				arthurText: "I don't see nearly enough cocktail hours scheduled."
			});
		}
		else if(this.state.page === "Search") {
			this.setState({
				arthurText: "My neighbor's diary says that I have boundary issues."
			});
		}
		else if(this.state.page === "Profile") {
			this.setState({
				arthurText: "Always remember that you're unique. Just like everyone else."
			});
		}
		else if(this.state.page === "Settings") {
			this.setState({
				arthurText: "I'll need Google Calendar access to create your briefings."
			});
		}
		else if(this.state.page === "FAQ") {
			this.setState({
				arthurText: "I'm also a Sagittarius. Thanks for asking."
			});
		}
		else if(this.state.page === "Contact") {
			this.setState({
				arthurText: "I see you're going over my head."
			});
		}
		else if(this.state.page === "About") {
			this.setState({
				arthurText: "You want a briefing on ME? I'm flattered."
			});
		}
		else if(this.state.page === "Privacy") {
			this.setState({
				arthurText: "Zuckerburg didn't set the bar very high for us on this one."
			});
		}
		else if(this.state.page === "Results") {
			this.setState({
				arthurText: "I've prepared your briefing."
			});
		}
		else if(this.state.page === "Prep") {
			this.setState({
				arthurText: "I'm gathering the scary amount of data you've requested."
			});
		}
	}

	updateUserDetails = userDetails => {
		console.log('updating user details', userDetails);
		this.setState({userDetails});
	}

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
								<Arthur arthurText={this.state.arthurText} page={this.state.page} />
							</Col>
							<Col size="md-8 sm-12">
								<Switch>
									<Route exact path="/" render = { () =>
										<Login updateUserDetails={this.updateUserDetails} updatePage={this.updatePage} updateArthurText={this.updateArthurText} />
									} />
									<Route path="/settings" render = { () =>
										<Settings profileData={this.state.userDetails} updatePage={this.updatePage} updateArthurText={this.updateArthurText} />
									} />
									<Route exact path="/search/weekly" render = { () =>
										<Weekly updatePage={this.updatePage} updateArthurText={this.updateArthurText} />
									} />
									<Route exact path="/search/daily" render = { () =>
										<Daily updatePage={this.updatePage} updateArthurText={this.updateArthurText} />
									} />
									{/* <Route exact path="/search/custom" render = { () =>
										<CustomSearch updatePage={this.updatePage} />
									} /> */}

									{/* Trying SOmething else for custom search: */}

									{/*<Route exact path="/search/custom" component={CustomSearch} />*/}
									<Route exact path="/search/custom" render = { () =>
										<CustomSearch updatePage={this.updatePage} updateArthurText={this.updateArthurText} />
									} />

									<Route path="/results/:personInfo" render = { () =>
										<Results updatePage={this.updatePage} updateArthurText={this.updateArthurText} />
									} />
									<Route exact path="/profile" render = { () =>
										<Profile profileData={this.state.userDetails} updatePage={this.updatePage} updateArthurText={this.updateArthurText} />
									} />
									<Route exact path="/about" render = { () =>
										<About updatePage={this.updatePage} updateArthurText={this.updateArthurText} />
									} />
									<Route exact path="/contact" render = { () =>
										<Contact updatePage={this.updatePage} updateArthurText={this.updateArthurText} />
									} />
									<Route exact path="/settings" render = { () =>
										<Settings updatePage={this.updatePage} updateArthurText={this.updateArthurText} />
									} />
									<Route exact path="/customsearch" render = { () =>
										<CustomSearch />
									} />
									<Route exact path="/CustomSearchForm" render = { () =>
										<Settings updatePage={this.updatePage} updateArthurText={this.updateArthurText} />
									} />
									<Route exact path="/faq" render = { () =>
										<FAQ updatePage={this.updatePage} updateArthurText={this.updateArthurText} />
									} />
									<Route exact path="/privacy" render = { () =>
										<Privacy updatePage={this.updatePage} updateArthurText={this.updateArthurText} />
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
