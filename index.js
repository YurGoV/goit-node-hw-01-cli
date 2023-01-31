const argv = require("yargs").argv;
const contacts = require('./contacts');


function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
        case "list":
            contacts.listContacts();
            break;

        case "get":
            if (!id) {
                return console.log('id is required by: --id=/your id/');
            };
            contacts.getContactById(id);
            break;

        case "add":
            if (!name || !email || !phone) {
                return console.log('name, email and phone is required by: \n' +
                    ' --name="contact name" --email="contact email" --phone="contact phone"');
            };
            contacts.addContact(name, email, phone);
            break;

        case "remove":
            if (!id) {
                return console.log('id is required by: --id=/your id/');
            };
            contacts.removeContact(id)
            break;
        default:
            console.warn("\x1B[31m Unknown action type!");
    }
}

invokeAction(argv);