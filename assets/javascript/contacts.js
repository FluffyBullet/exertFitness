
//google sheets api key
const API_KEY = "AIzaSyCA1e4Cu5TbGdYLbkAJOUCJBlCjjlFahes";
const form = document.getElementById('log_cal');
const btn = document.getElementById('email_me');
const google = require('googleapis');
const sheets = google.sheets('v4');

//system-update@exertfitness.iam.gserviceaccount.com

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

require('dotenv').config()


const updateSpreadsheet = () => {
  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_ID,
    process.env.GOOGLE_SECRET
  )

  oauth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN
  })

  oauth2Client
  .refreshAccessToken((err, tokens) => {
    if (err) return console.error(err)
      
    oauth2Client.setCredentials({
      access_token: tokens.access_token
    })

    // The following call will create a spreadsheet and return an ID that can
    // be used with the API. Note that oAuth API can only be used to access
    // files it creates, not files already on a drive (unless you apply to
    // Google for additional privilages.)
    /*
    sheets.spreadsheets.create({ auth: oauth2Client }, (err, response) => {
     if (err) return console.error(err)
     console.log(`New Spreadsheet ID: ${response.spreadsheetId}`)
    })
    */

    let user = document.getElementById('user').value;
    let morning = document.getElementById('morning_cal').value;
    let lunch = document.getElementById('lunch_cal').value;
    let evening = document.getElementById('evening_cal').value;
     
    sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
      range: 'Sheet1',
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      resource: {
        values: [
          [user, new Date().toISOString(), morning, lunch, evening]
        ],
      },
      auth: oauth2Client
    }, (err, response) => {
      if (err) return console.error(err)
    })

  })
}

// Run at startup
updateSpreadsheet()

setInterval(() => {
  updateSpreadsheet()
}, 60000 * 60) // Run again every hour