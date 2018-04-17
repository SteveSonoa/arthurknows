"use strict";

let https = require("https");

// MAKE SURE FILE PATHS ARE CORRECT:
require('dotenv').config({path: '../.env'});
const apiKeys = require('../keys.js');

const bingSearch = {
    cityArray: [
        "Phoenix",
        "Scottsdale",
        "Tempe",
        "Chandler",
        "Mesa",
        "Gilbert"
      ],

      regularSearch: function(firstName, lastName, cityIndex) {

        if(arguments.length < 3){
            cityIndex = 0;
        }


        // Replace the subscriptionKey string value with your valid subscription key.
        let subscriptionKey = apiKeys.bingSearchAPIKey;
      
        // Verify the endpoint URI.  At this writing, only one endpoint is used for Bing
        // search APIs.  In the future, regional endpoints may be available.  If you
        // encounter unexpected authorization errors, double-check this host against
        // the endpoint for your Bing Web search instance in your Azure dashboard.
        let host = "api.cognitive.microsoft.com";
        let path = "/bing/v7.0/search";
      
        // let term = searched;
      
        let linkedIn = "linkedIn";
        let city = bingSearch.cityArray[cityIndex];
        let state = "Arizona";
        let term = `'${firstName + " " + lastName}' ${linkedIn} '${city +
          ", " +
          state}'`;      
        
        console.log(city);
      
        let response_handler = function(response) {
          let body = "";
          response.on("data", function(d) {
            body += d;
          });
          response.on("end", function() {
            //   console.log("\nRelevant Headers:\n");
            // header keys are lower-cased by Node.js
            for (var header in response.headers)
              if (header.startsWith("bingapis-") || header.startsWith("x-msedge-"))
                //   console.log(header + ": " + response.headers[header]);
      
                //   For a pretty display of the data
                body = JSON.stringify(JSON.parse(body), null, "  ");
            body = JSON.parse(body);
            //   console.log("\nJSON Response:\n");
            //   console.log(body);
            // let searchFirstName = searched.split(' ')[0];
            // let searchedLastName = searched.split(' ')[1];
            // bingSearch.resultsHandler(body, searchFirstName, searchedLastName);
      
            bingSearch.resultsHandler(body, firstName, lastName, city, cityIndex);
          });
          response.on("error", function(e) {
            console.log("Error: " + e.message);
          });
        };
      
        let bing_web_search = function(search) {
          console.log("Searching the Web for: " + term);
          let request_params = {
            method: "GET",
            hostname: host,
            path: path + "?q=" + encodeURIComponent(search),
            headers: {
              "Ocp-Apim-Subscription-Key": subscriptionKey
            }
          };
      
          let req = https.request(request_params, response_handler);
          req.end();
        };
      
        if (subscriptionKey.length === 32) {
          bing_web_search(term);
        } else {
          console.log("Invalid Bing Search API subscription key!");
          console.log("Please paste yours into the source code.");
        }
      },

       resultsHandler: function(results, firstName, lastName, city, cityIndex) {
        const resultsArray = [];
      
        // Checking incoming params:
        // console.log(firstName, lastName, city, cityIndex);
        
        // Checking incoming API result:
        // console.log(results.value);
        // console.log(results.webPages.value);
        // console.log(JSON.stringify(results, null, ' '));
        // console.log(results.webPages.value[0]);
      
        // To Get LinkedIn headline and URL
        if (results.webPages) {
          for (let i = 0; i < 5; i++) {
            let LinkedInUserObj = {};
            let LinkedInHeadline = results.webPages.value[i].name;
            let LinkedInUrl = results.webPages.value[i].url;
      
            let checkLinkedInUrl = LinkedInUrl.split(".");
            let checkLinkedInHeadline = LinkedInHeadline.split(" ");
            // console.log(checkLinkedInHeadline);
      
            if (
              checkLinkedInUrl[1] === "linkedin" &&
              checkLinkedInHeadline[0] === firstName &&
              checkLinkedInHeadline[1] === lastName
            ) {
              LinkedInUserObj = {
                LinkedInHeadline,
                LinkedInUrl
              };
              resultsArray.push(LinkedInUserObj);
            }
          }
          // console.log(resultsArray);
        }
      
        if (results.entities) {
          // console.log(results.entities.value[0].description);
          if (resultsArray.length === 0) {
            console.log("empty array");
            if (bingSearch.cityArray.length > cityIndex + 1) {
              console.log("checking from array length zero");
              return bingSearch.regularSearch(firstName, lastName, cityIndex + 1);
            } else {
              console.log("no more searches");
            }
          } else {
            resultsArray[0].description = results.entities.value[0].description;
          }
        } else {
          if (bingSearch.cityArray.length > cityIndex + 1) {
            console.log("checking from no entities");
            return bingSearch.regularSearch(firstName, lastName, cityIndex + 1);
          } else {
            // Testing:
            console.log("no more searches");
            // Live: (Lie could also just return an empty array if need be....)
            return false;
          }
        }
        // Testing:
        console.log(resultsArray);
      
        // Live:
        // return resultsArray;
      }  
}









// bingSearch.regularSearch("Steve", "Marshall", 0);


module.exports = bingSearch;