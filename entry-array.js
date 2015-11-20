var inquirer = require("inquirer");
var prompt = require('prompt');
var Table = require('cli-table');
var lodash = require('lodash');



function entryArray() {

    inquirer.prompt([{
                type: 'input',
                name: 'First name',
                message: 'First name?'
            }, {
                type: 'input',
                name: 'Last name',
                message: 'Last name?'
            }, {
                type: 'input',
                name: 'Birthday',
                message: 'Date of birth? (optional)'
            }, {
                type: "list",
                message: "Would you like to enter an address for home, work, or other?",
                name: "addressType",
                choices: [
                    "Home",
                    "Work",
                    "Other",
                ],
            },

            ////HOME ADDRESS BELOW
            {
                type: "input",
                name: "homeAddressLine1",
                message: "Home address line 1",
                when: function(answers) {
                    return answers.addressType === "Home";
                }
            }, {
                type: "input",
                name: "homeAddressLine2",
                message: "Home address line 2",
                when: function(answers) {
                    return answers.addressType === "Home";
                }
            }, {
                type: "input",
                name: "homeAddressCity",
                message: "Home address CITY",
                when: function(answers) {
                    return answers.addressType === "Home";
                }
            }, {
                type: "input",
                name: "homeAddressPROVINCE",
                message: "Home address PROVINCE",
                when: function(answers) {
                    return answers.addressType === "Home";
                }
            }, {
                type: "input",
                name: "homeAddressPostalCode",
                message: "Home address POSTAL CODE?",
                when: function(answers) {
                    return answers.addressType === "Home";
                }
            }, {
                type: "input",
                name: "homeAddressCountry",
                message: "Home address COUNTRY",
                when: function(answers) {
                    return answers.addressType === "Home";
                }
            },

            ////// WORK ADDRESS BELOW

            {
                type: "input",
                name: "workAddressLine1",
                message: "Work address line 1",
                when: function(answers) {
                    return answers.addressType === "Work";
                }
            }, {
                type: "input",
                name: "workAddressLine2",
                message: "Work address line 2",
                when: function(answers) {
                    return answers.addressType === "Work";
                }
            }, {
                type: "input",
                name: "workAddressCity",
                message: "Work address CITY",
                when: function(answers) {
                    return answers.addressType === "Work";
                }
            }, {
                type: "input",
                name: "workAddressPROVINCE",
                message: "Work address PROVINCE",
                when: function(answers) {
                    return answers.addressType === "Work";
                }
            }, {
                type: "input",
                name: "workAddressPostalCode",
                message: "Work address POSTAL CODE?",
                when: function(answers) {
                    return answers.addressType === "Work";
                }
            }, {
                type: "input",
                name: "workAddressCountry",
                message: "Work address COUNTRY",
                when: function(answers) {
                    return answers.addressType === "Work";
                }
            },


            ///////// OTHER ADDRESS BELOW

            {
                type: "input",
                name: "otherAddressLine1",
                message: "Other address line 1",
                when: function(answers) {
                    return answers.addressType === "Other";
                }
            }, {
                type: "input",
                name: "otherAddressLine2",
                message: "Other address line 2",
                when: function(answers) {
                    return answers.addressType === "Other";
                }
            }, {
                type: "input",
                name: "otherAddressCity",
                message: "Other address CITY",
                when: function(answers) {
                    return answers.addressType === "Other";
                }
            }, {
                type: "input",
                name: "otherAddressPROVINCE",
                message: "Other address PROVINCE",
                when: function(answers) {
                    return answers.addressType === "Other";
                }
            }, {
                type: "input",
                name: "otherAddressPostalCode",
                message: "Other address POSTAL CODE?",
                when: function(answers) {
                    return answers.addressType === "Other";
                }
            }, {
                type: "input",
                name: "otherAddressCountry",
                message: "Other address COUNTRY",
                when: function(answers) {
                    return answers.addressType === "Other";
                }
            },

            //////PHONE NUMBERS BELOW

            //// HOME PHONE

            {
                type: "input",
                name: "homePhoneNumber",
                message: "Home phone number",
                when: function(answers) {
                    return answers.addressType === "Home";
                }
            }, {
                type: "list",
                message: "Home phone number type?",
                name: "homePhoneType",
                choices: [
                    "landline",
                    "cellular",
                    "fax",
                ],
                when: function(answers) {
                    return answers.addressType === "Home";
                }
            },

            //// WORK PHONE

            {
                type: "input",
                name: "workPhoneNumber",
                message: "Work phone number",
                when: function(answers) {
                    return answers.addressType === "Work";
                }
            }, {
                type: "list",
                message: "Work phone number type?",
                name: "workPhoneType",
                choices: [
                    "landline",
                    "cellular",
                    "fax",
                ],
                when: function(answers) {
                    return answers.addressType === "Work";
                }
            },

            //// OTHER PHONE

            {
                type: "input",
                name: "otherPhoneNumber",
                message: "Other phone number",
                when: function(answers) {
                    return answers.addressType === "Other";
                }
            }, {
                type: "list",
                message: "Other phone number type?",
                name: "otherPhoneType",
                choices: [
                    "landline",
                    "cellular",
                    "fax",
                ],
                when: function(answers) {
                    return answers.addressType === "Other";
                }
            },

            ////EMAIL ADDRESSES BELOW

            ////HOME EMAIL

            {
                type: "input",
                name: "homeEmail",
                message: "Home email address",
                when: function(answers) {
                    return answers.addressType === "Home";
                }
            },

            //// WORK EMAIL

            {
                type: "input",
                name: "workEmail",
                message: "Work email address",
                when: function(answers) {
                    return answers.addressType === "Work";
                }
            },

            //// OTHER EMAIL

            {
                type: "input",
                name: "otherEmail",
                message: "Other email address",
                when: function(answers) {
                    return answers.addressType === "Other";
                }
            },


        ],




        function(answers) {
            var table = new Table();
          
            lodash.forEach(answers, function(value, key){
                table.push(
                    [key, value]);
            });
           
//console.log(answers);
            console.log(table.toString());
            //do something with the user's answers
            //create key and value
        });



}

entryArray();

// inquirer.prompt(addressQuestions, function(answers) {
//     console.log(answers);
// });

// module.exports = {
//     entryArray: entryArray
// };
