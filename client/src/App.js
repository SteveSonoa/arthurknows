import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Arthur from "./pages/Arthur";
import Nav from "./components/Nav";
import { Col, Row, Container } from "./components/Grid";

const App = () => (
	<Router>
		<div>
			<video autoPlay muted loop id="myVideo">
				<source src="./img/header.mp4" type="video/mp4" />
			</video>
			<Nav />
			<Container>				
				<Row>
					<Arthur />
					<Switch>
						<Route exact path="/" component={Books} />
						<Route exact path="/books" component={Books} />
						<Route exact path="/books/:id" component={Detail} />
						<Route component={NoMatch} />
					</Switch>
				</Row>
			</Container>
		</div>
	</Router>
);

export default App;
