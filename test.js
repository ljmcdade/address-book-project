var inquirer = require("inquirer");
var prompt = require('prompt');
var Table = require('cli-table');
var lodash = require('lodash');
//var homeInfo = require('./home-address-entries');
//console.log(homeInfo);

showNewEntryView();

function showNewEntryView() {
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
        type: "checkbox",
        name: "addressType",
        message: "What type(s) of address(es) would you like to enter?",
        choices: [
            "Home",
            "Work",
            "Other",
        ]

    }, {
        type: "input",
        name: "homeAddressLine1",
        message: "Home address line 1",
        when: function(answers) {
            return answers.addressType.indexOf("Home") > -1;
        }
    }, {
        type: "input",
        name: "homeAddressLine2",
        message: "Home address line 2",
        when: function(answers) {
            return answers.addressType.indexOf("Home") > -1;
        }
    }, {
        type: "input",
        name: "homeAddressCity",
        message: "Home address CITY",
        when: function(answers) {
            return answers.addressType.indexOf("Home") > -1;
        }
    }, {
        type: "input",
        name: "homeAddressPROVINCE",
        message: "Home address PROVINCE",
        when: function(answers) {
            return answers.addressType.indexOf("Home") > -1;
        }
    }, {
        type: "input",
        name: "homeAddressPostalCode",
        message: "Home address POSTAL CODE?",
        when: function(answers) {
            return answers.addressType.indexOf("Home") > -1;
        }
    }, {
        type: "input",
        name: "homeAddressCountry",
        message: "Home address COUNTRY",
        when: function(answers) {
            return answers.addressType.indexOf("Home") > -1;
        }
    }, {
        type: "input",
        name: "homePhoneNumber",
        message: "Home phone number",
        when: function(answers) {
            return answers.addressType.indexOf("Home") > -1;
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
            return answers.addressType.indexOf("Home") > -1;
        }
    }, {
        type: "input",
        name: "homeEmail",
        message: "Home email address",
        when: function(answers) {
            return answers.addressType.indexOf("Home") > -1;
        }
    }, {
        type: "input",
        name: "workAddressLine1",
        message: "Work address line 1",
        when: function(answers) {
            return answers.addressType.indexOf("Work") > -1;
        }
    }, {
        type: "input",
        name: "workAddressLine2",
        message: "Work address line 2",
        when: function(answers) {
            return answers.addressType.indexOf("Work") > -1;
        }
    }, {
        type: "input",
        name: "workAddressCity",
        message: "Work address CITY",
        when: function(answers) {
            return answers.addressType.indexOf("Work") > -1;
        }
    }, {
        type: "input",
        name: "workAddressPROVINCE",
        message: "Work address PROVINCE",
        when: function(answers) {
            return answers.addressType.indexOf("Work") > -1;
        }
    }, {
        type: "input",
        name: "workAddressPostalCode",
        message: "Work address POSTAL CODE?",
        when: function(answers) {
            return answers.addressType.indexOf("Work") > -1;
        }
    }, {
        type: "input",
        name: "workAddressCountry",
        message: "Work address COUNTRY",
        when: function(answers) {
            return answers.addressType.indexOf("Work") > -1;
        }
    }, {
        type: "input",
        name: "workPhoneNumber",
        message: "Work phone number",
        when: function(answers) {
            return answers.addressType.indexOf("Work") > -1;
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
            return answers.addressType.indexOf("Work") > -1;
        }
    }, {
        type: "input",
        name: "workEmail",
        message: "Work email address",
        when: function(answers) {
            return answers.addressType.indexOf("Work") > -1;
        }
    }, {
        type: "input",
        name: "otherAddressLine1",
        message: "Other address line 1",
        when: function(answers) {
            return answers.addressType.indexOf("Other") > -1;
        }
    }, {
        type: "input",
        name: "otherAddressLine2",
        message: "Other address line 2",
        when: function(answers) {
            return answers.addressType.indexOf("Other") > -1;
        }
    }, {
        type: "input",
        name: "otherAddressCity",
        message: "Other address CITY",
        when: function(answers) {
            return answers.addressType.indexOf("Other") > -1;
        }
    }, {
        type: "input",
        name: "otherAddressPROVINCE",
        message: "Other address PROVINCE",
        when: function(answers) {
            return answers.addressType.indexOf("Other") > -1;
        }
    }, {
        type: "input",
        name: "otherAddressPostalCode",
        message: "Other address POSTAL CODE?",
        when: function(answers) {
            return answers.addressType.indexOf("Other") > -1;
        }
    }, {
        type: "input",
        name: "otherAddressCountry",
        message: "Other address COUNTRY",
        when: function(answers) {
            return answers.addressType.indexOf("Other") > -1;
        }
    }, {
        type: "input",
        name: "otherPhoneNumber",
        message: "Other phone number",
        when: function(answers) {
            return answers.addressType.indexOf("Other") > -1;
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
            return answers.addressType.indexOf("Other") > -1;
        }
    }, {
        type: "input",
        name: "otherEmail",
        message: "Other email address",
        when: function(answers) {
            return answers.addressType.indexOf("Other") > -1;
        }
    }, ], function(answers) {
    
        showAnswers(answers);
    });
}




function showAnswers(answers) {
    var table = new Table();

    lodash.forEach(answers, function(value, key) {
        table.push(
            [key, value]);
    });

    //console.log(answers);
    console.log(table.toString());
    //do something with the user's answers
    //create key and value
};




















//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// var Table = require('cli-table');
// //var dataArray = require('./address-book.js');
// //var table = new Table(dataArray.answers);
// var table = new Table();



// table.push();


// console.log(table.toString());
// //console.log(table.toString(dataArray.answers));


// /// display functions here   call this into other file













// // var Table = require('cli-table');
// // var inputEntries = require('./address-book.js');
// // var data = inputEntries.addressQuestions[0];

// // inputEntries.from.string(data).to.array(function(data){
// //     var
// //         headers = data[0],
// //         values = data.slice(1),
// //         table = new Table({head:headers});

// //         table.push.apply(table, values);
// //         console.log(table.toString());
// // });