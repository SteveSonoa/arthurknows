const db = require("../models");
const bing = require("../Bing");
const LocalNews = require("../models/localNews.js");

module.exports = {
  searchPerson: function(req, res) {
    console.log("@@@@@@@@@@", req.body);

    let company = emailHandler(req.body.company);

    db.PersonSearch.findOne({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      company: company
    })
      .populate("localnews")
      .then(dbResults => {
        console.log(dbResults);
        // let resultsArray = [];

        if (!dbResults == true && typeof dbResults == "object") {
          console.log("run the bing search!");
          bing.bingSearch.regularSearch(
            req.body.firstName,
            req.body.lastName,
            company
          );

          res.json("User added to database");
        } else {
          res.json(dbResults);
          // resultsArray.push(dbResults);
          // bing.bingCustomSearch.customSearch(req.body.company)

          // return LocalNews.find({ person: dbResults._id }).populate("LocalNews")
          //                 .then(dbNews => {
          //                     // res.json(dbNews);
          //                     resultsArray.push(dbNews);

          //                     res.json(resultsArray);
          //                 })
        }
      })
      .catch(err => res.status(422).json(err));
  }
};

function emailHandler(email) {
  if (email.includes("@")) {
    // As long as we have a RegEx email checker this will work
    const genericEmailsArray = [
      "gmail",
      "yahoo",
      "hotmail",
      "ymail",
      "msn",
      "icloud",
      "apple",
      "outlook",
      "aol",
      "cox",
      "yandex"
    ];
    let extractedCompanyWithDotCom = email.split("@");
    let extractedCompanyArray = extractedCompanyWithDotCom[1].split(".");
    let extractedCompany = extractedCompanyArray[0];
    if (genericEmailsArray.includes(extractedCompany)) {
      // In Test:
      // console.log('generic company');

      // In production
      return "godaddy";
    } else {
      // In Test:
      // console.log(extractedCompany);

      // In Production:
      return extractedCompany;
    }
  } else {
    return email;
  }
}

// function checkForCompany(req){
//     if(req.company){
//         // console.log("Theres a company");
//         db.PersonSearch
//         .findOne({firstName: req.firstName, lastName: req.lastName, company: req.company})
//         .then(dbResults =>{
//             console.log(dbResults)
//             if(dbResults == null){
//                 console.log("run the bing search!");
//                 bing.bingSearch(req.firstName, req.lastName);
//             }
//         })
//         .catch(err => res.status(422).json(err));
//     }
//     else{
//         console.log("No company here");
//         db.PersonSearch
//         .findOne({firstName: req.firstName, lastName: req.lastName})
//         .then(dbResults =>{
//             console.log(dbResults)
//             if(dbResults == null){
//                 console.log("run the bing search!");
//             }
//         })
//         .catch(err => res.status(422).json(err));
//     }
// }

// module.exports = {
//     searchPerson: function(req, res){
//         console.log(req.body);

//         res.json(req.body);
//     }
// }

// Defining methods for the booksController
// module.exports = {
//   findAll: function(req, res) {
//     db.PersonSearch
//       .find(req.query)
//       .sort({ date: -1 })
//       .then((dbModel) => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   create: function(req, res) {
//     db.PersonSearch
//       .create(req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   update: function(req, res) {
//     db.PersonSearch
//       .findOneAndUpdate({ _id: req.params.id }, req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   remove: function(req, res) {
//     db.PersonSearch
//       .findById({ _id: req.params.id })
//       .then(dbModel => dbModel.remove())
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   }
// };
