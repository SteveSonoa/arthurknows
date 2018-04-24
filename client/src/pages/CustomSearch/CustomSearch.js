import React from 'react';
import Panel from "../../components/Panel";
import { Col, Row, Container } from "../../components/Grid";
import CustomSearchForm from "../CustomSearchForm";
// import { Link, withRouter} from "react-router-dom"; 
import API from "../../utils/API";

class CustomSearch extends React.Component {
    state = {    
      firstName: "",
      lastName: "",
      company: "",
      twitterHandle: ""
    }
  
    // When this component mounts
    componentDidMount() {
      // If props were passed in, fill in the default values
      console.log(this.props);
      console.log(this.state);
      if(this.props.firstName) {
        this.setState({
          firstName: this.props.firstName,
          lastName: this.props.lastName
        });
      }
    }

    constructor (props) {
      super(props);
      console.log(props);
      this.props.updatePage('Search');
      setTimeout(this.props.updateArthurText, 500);
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