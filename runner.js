require('dotenv').config()
const newman = require('newman');
const FormData = require("form-data");
const fs = require("fs");
const fetch = require("node-fetch")

//Running collection with Newman, report generation:

let done
newman.run({
    collection: process.env.COLLECTION_PATH.toString(), // Collection URL from a public link or the Postman API can also be used
    environment: process.env.ENVIRONMENT_PATH.toString(),
    reporters: ['htmlextra'],
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: "report" + "/apireport.html",
            // template: './template.hbs'
            // logs: true,
            // showOnlyFails: true,
            // noSyntaxHighlighting: true,
            // testPaging: true,
            browserTitle: "My Newman report",
            title: "My Newman Report",
            titleSize: 4,
            // omitHeaders: true,
            // skipHeaders: "Authorization",
            // omitRequestBodies: true,
            // omitResponseBodies: true,
            // hideRequestBody: ["Login"],
            // hideResponseBody: ["Auth Request"],
            showEnvironmentData: true,
            // skipEnvironmentVars: ["API_KEY"],
            // showGlobalData: true,
            // skipGlobalVars: ["API_TOKEN"],
            // skipSensitiveData: true,
            // showMarkdownLinks: true,
            showFolderDescription: true,
            // timezone: "Australia/Sydney",
            // skipFolders: "folder name with space,folderWithoutSpace",
            // skipRequests: "request name with space,requestNameWithoutSpace",
            displayProgressBar: true
        }
    }
}).on('start', () => {
    console.log(`Running a collection. Please wait a few seconds...`);
}).on('done', () => {
    done = true;
})
require('deasync').loopWhile(() => {
    return !done;
})

//Sending an information notification to Telegram:

const url1 = `https://api.telegram.org/bot${process.env.TOKEN}/sendMessage?chat_id=${process.env.CHAT_ID}&text=
Your collection was ran successfully. The results are contained in the attached report below.`

fetch(url1, {
    method: 'GET',
    headers: {},
    //body: {}
})
    .then((res) => res.json())
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    });

//Sending a report to Telegram:

const url2 = `https://api.telegram.org/bot${process.env.TOKEN}/sendDocument?chat_id=${process.env.CHAT_ID}`
let readStream = fs.createReadStream('report/apireport.html');
let form = new FormData();
form.append("document", readStream);

fetch(url2, {
        method: "POST",
        body: form,
    }
)
    .then((res) => res.json())
    .then((response) => {
        console.log(response, 'The report was successfully sent to Telegram');
    })
    .catch((error) => {
        console.log(error);
    });