
//google sheets api key
const API_KEY = "AIzaSyCCaNsTys5Wq0JSYa8UqJY7gZe1RxpMZYY";
const form = document.getElementById('log_cal');

// form.addEventListener('submit', function handleSubmit(event){
//     event.preventDefault();
//     let user = document.getElementById('user');
//     let morning = document.getElementById('morning_cal');
//     let lunch = document.getElementById('lunch_cal');
//     let evening = document.getElementById('evening_cal');

//     console.log(user.value);
//     console.log(morning.value);
//     console.log(lunch.value);
//     console.log(evening.value);

    

//     form.reset();
// })

// // TODO(developer): Set to client ID and API key from the Developer Console
// const CLIENT_ID = '105536058403822864157';


// // Discovery doc URL for APIs used by the quickstart
// const DISCOVERY_DOC = 'https://sheets.googleapis.com/$discovery/rest?version=v4';

// // Authorization scopes required by the API; multiple scopes can be
// // included, separated by spaces.
// const SCOPES = 'https://www.googleapis.com/auth/spreadsheets.readonly';

// let tokenClient;
// let gapiInited = false;
// let gisInited = false;

// document.getElementById('authorize_button').style.visibility = 'hidden';
// document.getElementById('signout_button').style.visibility = 'hidden';

// /**
//  * Callback after api.js is loaded.
//  */
// function gapiLoaded() {
//   gapi.load('client', intializeGapiClient);
// }

// /**
//  * Callback after the API client is loaded. Loads the
//  * discovery doc to initialize the API.
//  */
// async function intializeGapiClient() {
//   await gapi.client.init({
//     apiKey: API_KEY,
//     discoveryDocs: [DISCOVERY_DOC],
//   });
//   gapiInited = true;
//   maybeEnableButtons();
// }

// /**
//  * Callback after Google Identity Services are loaded.
//  */
// function gisLoaded() {
//   tokenClient = google.accounts.oauth2.initTokenClient({
//     client_id: CLIENT_ID,
//     scope: SCOPES,
//     callback: '', // defined later
//   });
//   gisInited = true;
//   maybeEnableButtons();
// }

//    let templateParams = {
//     name : document.getElementById('contact_name'),
//     subject : document.getElementById('subject'),
//     text : document.getElementById('information'),
//    };


const btn = document.getElementById('email_me');

document.getElementById('email').addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_ke6n6an';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });

    document.getElementById('email').reset();
});