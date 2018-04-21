import React, { Component } from 'react';
import Panel from "../../components/Panel";
import { Col, Row, Container } from "../../components/Grid";
import CustomSearchForm from "../CustomSearchForm";
import { Link, withRouter} from "react-router-dom"; 
import API from "../../utils/API";



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
        console.log(formData.firstName);
        console.log(formData.lastName);
        console.log(formData.company);
        API.postBing(formData).then(data =>{
          console.log(data);
        })
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

      this.setState({
        firstName: "",
        lastName: "",
        company: "",
        twitterHandle: ""
      });

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