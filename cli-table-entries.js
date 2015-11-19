var Table = require('cli-table');
var table = new Table();

table.push({
        'Last name': 'Some value'
    }, {
        'First name': 'Another value'
    }, {
        'Birthday': 'Another value'
    }, {
        'Home address line 1': 'Another value'
    }, {
        'Home address line 2': 'Another value'
    }, {
        'Home address CITY': 'Another value'
    }, {
        'Home address PROVINCE': 'Another value'
    }, {
        'Home address POSTAL CODE': 'Another value'
    }, {
        'Home address COUNTRY': 'Another value'
    }, {
        'Home phone number': 'Another value'
    }, {
        'Home email address': 'Another value'
    }, {
        'Work address line 1': 'Another value'
    }, {
        'Work address line 2': 'Another value'
    }, {
        'Work address CITY': 'Another value'
    }, {
        'Work address PROVINCE': 'Another value'
    }, {
        'Work address POSTAL CODE': 'Another value'
    }, {
        'Work address COUNTRY': 'Another value'
    }, {
        'Work phone number': 'Another value'
    }, {
        'Work email address': 'Another value'
    }, {
        'Other address line 1': 'Another value'
    }, {
        'Other address line 2': 'Another value'
    }, {
        'Other address CITY': 'Another value'
    }, {
        'Other address PROVINCE': 'Another value'
    }, {
        'Other address POSTAL CODE': 'Another value'
    }, {
        'Other address COUNTRY': 'Another value'
    }, {
        'Other phone number': 'Another value'
    }, {
        'Other email address': 'Another value'
    }


);

console.log(table.toString());