import React, { Component } from 'react';
import Panel from "../../components/Panel";
import { Col, Row, Container } from "../../components/Grid";
import CustomSearchForm from "../CustomSearchForm";


class CustomSearch extends Component {
    state = {    
      firstName: "",
      lastName: "",
      company: "",
      twitterHandle: ""
    };
  
    // When this component mounts
    componentDidMount() {
    //   might need to add something herer
    }
  
   sendToAPI = formData => {
        console.log(formData);
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
      this.sendToAPI(this.state);

    //   Route to /prep
    };
  
    render() {
      return (
        <Container>
          <Row>
            <Col size="md-8">
           
            </Col>
            <Col size="md-4">
              <Panel heading="Search">
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