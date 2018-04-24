import React from "react";

const CustomSearchForm = props =>(
  <form>
    <div className="form-group">
      <label htmlFor="firstName">First Name:</label>
      <input
        onChange={props.handleInputChange}
        value={props.value.firstName}
        name="firstName"
        type="text"
        className="form-control"
        placeholder="First Name"
        id="firstName"
      />
    </div>
    <div className="form-group">
       <label htmlFor="lastName">Last Name:</label>
      <input
        onChange={props.handleInputChange}
        value={props.value.lastName}
        name="lastName"
        type="text"
        className="form-control"
        placeholder="Last Name"
        id="lastName"
      />
    </div>
    <div className="form-group">      
       <label htmlFor="company">Company:</label>
      <input
        onChange={props.handleInputChange}
        value={props.value.company}
        name="company"
        type="text"
        className="form-control"
        placeholder="Company"
        id="company"
      />
    </div>
    <div className="form-group">      
       <label htmlFor="Twitter Handle">Twitter Handle:</label>
      <input
        onChange={props.handleInputChange}
        value={props.value.twitterHandle}
        name="twitterHandle"
        type="text"
        className="form-control"
        placeholder="Twitter Handle"
        id="twitterHandle"
      />
    </div>
    <div className="form-group">
      <button onClick={props.handleFormSubmit} className="btn btn-primary center-block">
        Search
      </button>
    </div>
  </form>

);
  
  export default CustomSearchForm;