// MAKE SURE FILE PATHS ARE CORRECT:
require('dotenv').config({path: '../.env'});
const apiKeys = require('../keys.js');

var request = require("request");

const bingCustomSearch = {
  customSearch: function(searched) {
    console.log("running");
    var subscriptionKey = apiKeys.bingCustomSearchAPIKey;
    var customConfigId = apiKeys.bingCustomSearchCustomConfigId;
    var searchTerm = searched;

    var options = {
      url:
        "https://api.cognitive.microsoft.com/bingcustomsearch/v7.0/search?" +
        "q=" +
        searchTerm +
        "&customconfig=" +
        customConfigId,
      headers: {
        "Ocp-Apim-Subscription-Key": subscriptionKey
      }
    };

    request(options, function(error, response, body) {
      var searchResponse = JSON.parse(body);
      let customSearchArray = [];

      if (searchResponse.webPages) {
        for (var i = 0; i < searchResponse.webPages.value.length; ++i) {
          let customSearchObj = {};
          var webPage = searchResponse.webPages.value[i];

          // Name:
          // console.log("name: " + webPage.name);
          customSearchObj.name = webPage.name;

          // URL:
          // console.log("url: " + webPage.url);
          customSearchObj.url = webPage.url;

          // Display Url:
          // console.log("displayUrl: " + webPage.displayUrl);
          customSearchObj.displayUrl = webPage.displayUrl;

          // Snippet:
          // console.log("snippet: " + webPage.snippet);
          customSearchObj.snippet = webPage.snippet;

          // dataLastCrawled:
          // console.log("dateLastCrawled: " + webPage.dateLastCrawled);
          customSearchObj.dateLastCrawled = webPage.dateLastCrawled;

          // console.log();

          customSearchArray.push(customSearchObj);
        }
        // Testing:
        console.log(customSearchArray);

        // Production:
        // return customSearchArray;
      } else {
        // Testing:
        console.log(false);

        // Production:
        // return false;
      }
    });
  }
};

module.exports = bingCustomSearch;

// customSearch("State Farm");
