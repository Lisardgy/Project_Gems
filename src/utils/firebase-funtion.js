const functions = require('firebase-functions');

const tokenLineNotify = "G4ASOTvrAQuYTgjizIe3MTzLiEGOlvxtjHn8Uhih7io"

exports.onCreateDoc = functions.firestore
    .document('/property/{propertyId}')
    .onCreate((snap, context) => {
        const newValue = snap.data();
        const name = newValue.property.name;
        const docName = newValue.documentName;


        this.$axios.post('https://notify-api.line.me/api/notify',
            {
                message: `new create ${docName}\n name : ${name}`
            },
            {
                headers: {
                    Authorization: `Bearer ${tokenLineNotify}`
                }
            }
        )
    });


exports.onUpdateDoc = functions.firestore
    .document('/property/{propertyId}')
    .onUpdate((change, context) => {
        const newValue = change.after.data();
        const previousValue = change.before.data();
        const name = newValue.property.name;
        const docName = newValue.documentName;

        this.$axios.post('https://notify-api.line.me/api/notify',
            {
                message: `new update ${docName}\n name : ${name}`
            },
            {
                headers: {
                    Authorization: `Bearer ${tokenLineNotify}`
                }
            }
        )
    });