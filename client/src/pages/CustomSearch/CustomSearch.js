import React, { Component } from 'react';
import Panel from "../../components/Panel";
import { Col, Row, Container } from "../../components/Grid";
import CustomSearchForm from "../CustomSearchForm";
// import { Link, withRouter} from "react-router-dom"; 
import API from "../../utils/API";
import $ from "jquery";



class CustomSearch extends Component {
    state = {    
      firstName: "",
      lastName: "",
      company: "",
      twitterHandle: ""
    };
  
    // When this component mounts
    componentDidMount() {
      // Might need to add something here eventually
    }

    constructor (props) {
      super(props);
      this.props.updatePage('Search');
    setTimeout(this.props.updateArthurText, 500);
    }
  
   sendToAPI = formData => {
        console.log(formData);
        API.postBing(formData).then( (data) => {
          console.log("Attempting to send data");
          console.log(data);
        });
   }
  
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
      this.setState({
        firstName: $("#firstName").val().trim(),
        lastName: $("#lastName").val().trim(),
        company: $("#company").val().trim(),
        twitterHandle: $("#twitterHandle").val().trim()
      });

      setTimeout(this.sendToAPI, 500, this.state);

      console.log(this.state);

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
        <Container fluid>
          <Row>
            <Col size="md-12">
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

  export default CustomSearch;