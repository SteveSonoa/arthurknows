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

				<li>
					{this.state.events && this.state.events.map(( obj, index ) => (
						<div key={index.toString()}>
							<h4> Meeting Name: {obj.summary}</h4>
							<ul>

								<li>{Moment(obj.start.dateTime || obj.start.date).format('MMMM Do YYYY, h:mm:ss a')}</li>
									{obj.attendees && obj.attendees.map((data, index) => (
										<div key={`${index.toString()}-${data.displayName}`}>
												<li> {data.displayName} {data.email} </li>
												<li><Link to={`/search/custom?name=${data.displayName}`}
													state={{personInfo: {displayName: data.displayName, email: data.email}}}
													params={{personInfo: {displayName: data.displayName, email: data.email}}}
													> Research Me</Link></li>
										</div>
									// <li key={`${index.toString()}-${data.displayName}`}> {data.displayName} {data.email} </li>
									// 	<li key={`${index.toString()}-${data.displayName}`}> {data.displayName} {data.email} </li>
										// <li key={`${index.toString()}`}>(<button> Research Me</button>)</li>
								))}
							</ul>

						</div>
					))}
				</li>

			</div>
		)
	}

}

export default withRouter(Meetings);
