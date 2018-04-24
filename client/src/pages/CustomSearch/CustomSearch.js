import React from "react";
import Panel from "../../components/Panel";
import { Col, Row, Container } from "../../components/Grid";
import CustomSearchForm from "../CustomSearchForm";
import { Link, withRouter} from "react-router-dom";

import { Route, Redirect } from "react-router";
import API from "../../utils/API";

class CustomSearch extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    company: "",
    twitterHandle: ""
  };



class CustomSearch extends Component {
    state = {
      firstName: "",
      lastName: "",
      fullName: "",
      company: "",
      twitterHandle: ""
    };

    // When this component mounts
    componentDidMount() {
    //   might need to add something herer
      console.log('search did mount', this);

      const fullName = this.getUrlParameter('name', this.props.location.search)
      if (fullName) {
        try {
          // const [name, surname] =
          const [firstName, lastName] = fullName.split(' ');
          this.setState({
            firstName,
            lastName,
            fullName
          })
        } catch (err) {
          console.error(err);
        }
      }
      console.log('state after getting names', this.state)
    }

   sendToAPI = formData => {
        console.log(formData.firstName);
        console.log(formData.lastName);
        console.log(formData.company);
        API.postBing(formData).then(({data}) => {
          console.log(data);
          this.props.updateSearchResults(data)
          this.props.history.push(`/results/${this.state.fullName}`)
        })
   }

  getUrlParameter = (name, locationSearch) => {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(locationSearch);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }

    handleInputChange = event => {
      const value = event.target.value;
      const name = event.target.name;

      this.setState({
        firstName: this.props.firstName,
        lastName: this.props.lastName
      });

    };

    // This function will need to be altered to hit the front end API or go to the temporary page
    handleFormSubmit = event => {
      event.preventDefault();
      this.sendToAPI(this.state);


  constructor(props) {
    super(props);
    console.log(props);
    this.props.updatePage("Search");
    setTimeout(this.props.updateArthurText, 500);
  }

  sendToAPI = formData => {
    console.log(formData.firstName);
    console.log(formData.lastName);
    console.log(formData.company);
    API.postBing(formData).then(data => {
      console.log(data);
      console.log(data.data._id);
      this.setState({ _id: data.data._id });
      if (data.data === "User added to database") {
        console.log("Run it again!");
        // API.postBing(formData).then(data2 =>{
        //   console.log(data2);
        // })

        // setTimeout(function(){
        //   console.log(formData);
        //   API.postBing(formData).then(data2 =>{
        //     console.log("This is data2:")
        //     console.log(data2);
        //   })
        // }, 5000);
      } 
    });
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // This function will need to be altered to hit the front end API or go to the temporary page
  handleFormSubmit = event => {
    event.preventDefault();
    this.sendToAPI(this.state);

    // this.setState({
    //   firstName: "",
    //   lastName: "",
    //   company: "",
    //   twitterHandle: ""
    // });

    //   Route to /prep

    };

    render() {
      return (
        <Container>
          <Row>
            {/* <Col size="md-8"> */}

            {/* </Col> */}
            <Col size="md-4">

              <Panel heading="Search">
                <h1>Preparing Your Briefing</h1>
                <CustomSearchForm
                  value={this.state}
                  handleInputChange={this.handleInputChange}
                  handleFormSubmit={this.handleFormSubmit}
                />
              </Panel>
            </Col>
          </Row>

        </Container>
      );
    }

  }
}


  export default CustomSearch;

