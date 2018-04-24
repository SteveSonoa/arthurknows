import React from "react";
import "./Meetings.css";
import { Link, withRouter} from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import CalendarActivities from '../../utils/data';
import Moment from "moment";

class Meetings extends React.Component {

	state = {
		events: [],
		firstName: "",
		lastName: ""
	}

	constructor (props) {
		super(props);
		this.state = {
			events: this.checkActivity(this.props.location.pathname)
		}
		console.log(this.checkActivity(this.props.location.pathname));
	}

	componentDidMount() {
		console.log(this.props);
	}

	checkActivity = (args) => {
		if(args.indexOf('daily') !== -1) {
			return  CalendarActivities.getToday();
		}

		if(args.indexOf('weekly') !== -1) {
			return  CalendarActivities.getWeek();
		}
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.location !== this.props.location) {
			this.setState({events: this.checkActivity(nextProps.location.pathname)})
		}
	}

	// updateAppNames(name) {
 //      let fullNameA = name.split(" ");
 //      let lName = fullNameA.pop();
 //      let fName = fullNameA.join(" ");
 //      let separatedNames = {
 //        firstName: fName,
 //        lastName: lName
 //      };
 //      console.log(separatedNames);
 //      this.props.updateNames(separatedNames.firstName, separatedNames.lastName);
	// }


	render () {
		return (
			<div>
				{/*<h1>{Moment(this.state.events[0].start.dateTime || this.state.events[0].start.date).format('MMMM Do YYYY')}</h1>
				{this.state.events && this.state.events.map(( obj, index ) => (
					<div key={index.toString()}>
						<h2>{obj.summary}</h2>
						<h3>{Moment(obj.start.dateTime || obj.start.date).format('h:mm a')}</h3>
						<Container fluid>
							{obj.attendees && obj.attendees.map((data, index) => (
								<div key={`${index.toString()}-${data.displayName}`}>
									<Row>
										<Col size="lg-4 md-4 sm-4 xs-4">{data.displayName}</Col>
										<Col size="lg-5 md-5 sm-5 xs-5">{data.email}</Col>
										<Col size="lg-3 md-3 sm-3 xs-3"><Link to="/search/custom/" >Research Me</Link></Col>
									</Row>
								</div>

							// <li key={`${index.toString()}-${data.displayName}`}> {data.displayName} {data.email} </li>
							// <li key={`${index.toString()}-${data.displayName}`}> {data.displayName} {data.email} </li>
							// <li key={`${index.toString()}`}>(<button> Research Me</button>)</li>
							))}
						</Container>
					</div>
				))}*/}
				{console.log(this.props.meetingData)}
				<h1>{Moment(this.props.meetingData.dateTime).format('MMMM Do YYYY')}</h1>

						<h2>{this.props.meetingData.summary}</h2>
						<h3>{Moment(this.props.meetingData.dateTime).format('h:mm a')}</h3>
						<Container fluid>
							{this.props.meetingData.attendees && this.props.meetingData.attendees.map((data, index) => (
								<div key={`${index.toString()}-${data._id}`}>
									<Row>
										<Col size="lg-4 md-4 sm-4 xs-4">{data.firstName} {data.lastName}</Col>
										<Col size="lg-5 md-5 sm-5 xs-5">{data.email}</Col>
										<Col size="lg-3 md-3 sm-3 xs-3"><Link to={"/results/" + data._id} >Research Me</Link></Col>
									</Row>
								</div>

							// <li key={`${index.toString()}-${data.displayName}`}> {data.displayName} {data.email} </li>
							// <li key={`${index.toString()}-${data.displayName}`}> {data.displayName} {data.email} </li>
							// <li key={`${index.toString()}`}>(<button> Research Me</button>)</li>
							))}
						</Container>


			</div>
		)
	}

}

export default withRouter(Meetings);
