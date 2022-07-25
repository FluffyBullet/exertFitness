let stageTwo = document.getElementById('dataEntry');
let buttonOne = document.getElementById('stepOne');
google.charts.load('current',{packages:['corechart']});
// google.charts.setOnLoadCallback(drawChart);

/** Starting calculations from first entry fields */
function stepOne(){
    /**Declaring variables for calculations */
let name = document.getElementById('name').value;
let tCal = parseInt(document.getElementById('target').value);
let date = document.getElementById('date').value;
let meals = document.getElementById('meals').value;
let percent5,percent10,percent15,percent20,percent25,percent30,percent35,percent40;
/** Calculating values*/
    percent5  = tCal*0.05;
    percent10 = tCal*0.1;
    percent15 = tCal*0.15;
    percent20 = tCal*0.2;
    percent25 = tCal*0.25;
    percent30 = tCal*0.3;
    percent35 = tCal*0.35;
    percent40 = tCal*0.4;

    if (meals == 3){
        stageTwo.innerHTML=
        `<table>
            <tr>
                <th>Meal</th>
                <th>Calories</th>
                <th>Target Range(Min/Max)</th>
            </tr>
            <tr>
                <td><p>Breakfast</p></td>
                <td><input id=”breakfast”></td>
                <td>${percent30} / ${percent35}</td>
            </tr>
            <tr>
                <td><p>Lunch</p></td>
                <td><input id=”lunch”></td>
                <td>${percent35} / ${percent40}</td>
            </tr>
            <tr>
                <td><p>Dinner </p></td>
                <td><input id=”dinner”></td>
                <td>${percent25} / ${percent35}</td>
            </tr>
        </table>
        <button onclick="drawChart()">Display Chart</button>
        `;
    } else if (meals == 4){
        stageTwo.innerHTML=
        `<table>
            <tr>
                <th>Meal</th>
                <th>calories</th>
                <th>target Range(Min/Max)</th>
            </tr>
            <tr>
                <td><p>Breakfast</p></td>
                <td><input id=”breakfast”></td>
                <td>${percent25} / ${percent30}</td>
            </tr>
            <tr>
                <td><p>Morning Snack</p></td>
                <td><input id=”morningSnack”></td>
                <td>${percent5} / ${percent10}</td>
            </tr>
            <tr>
                <td><p>Lunch</p></td>
                <td><input id=”lunch”></td>
                <td>${percent35} / ${percent40}</td>
            </tr>
            <tr>
                <td><p>Dinner </p></td>
                <td><input id=”dinner”></td>
                <td>${percent25} / ${percent30}</td>
            </tr>
        </table>`;
    } else if (meals == 5){
        stageTwo.innerHTML=
        `<table>
            <tr>
                <th>Meal</th>
                <th>calories</th>
                <th>target Range(Min/Max)</th>
            </tr>
            <tr>
                <td><p>Breakfast</p></td>
                <td><input id=”breakfast”></td>
                <td>${percent25} / ${percent30}</td>
            </tr>
            <tr>
                <td><p>Morning Snack</p></td>
                <td><input id=”morningSnack”></td>
                <td>${percent5} / ${percent10}</td>
            </tr>
            <tr>
                <td><p>Lunch</p></td>
                <td><input id=”lunch”></td>
                <td>${percent35} / ${percent40}</td>
            </tr>
            <tr>
            </tr>
                <td><p>Afternoon Snack </p></td>
                <td><input id=afternoonSnack></td>
                <td>${percent25} / ${percent30}</td>
            <tr>
                <td><p>Dinner </p></td>
                <td><input id=”dinner”></td>
                <td>${percent25} / ${percent30}</td>
            </tr>
        </table>`;
    } else {
        stageTwo.innerHTML = `
        <p>:( Something went wrong!</p> `;
    }
}

function myFunction() {
    var x = document.getElementById("navHamburger");
    if (x.className === "nav_style") {
      x.className += " responsive";
    } else {
      x.className = "nav_style";
    }
  }
/** JS for fetching information from Google Spreadsheets API
 * Link is : https://docs.google.com/spreadsheets/d/1ISjmb4HrdaaqVw59y0SunxA3fGeX6WJywTnd2ke9oXI/edit?usp=sharing (editor rights)
 * https://spreadsheets.google.com/feeds/worksheets/1ISjmb4HrdaaqVw59y0SunxA3fGeX6WJywTnd2ke9oXI/public/basic?alt=json
 */


/* alternative - Pie Chart from google charts
* https://www.w3schools.com/js/js_graphics_google_chart.asp
*/

function drawChart(){
var data = new google.visualization.DataTable();
data.addColumn('string', 'Job Listings');
data.addColumn('number', 'Jobs');
data.addRows([
  ['GOjobs', 33],
  ['Vault', 29],
  ['Freshjobs', 28],
  ['TweetMyJob', 27],
  ['US Jobs', 21],

]);


var options = {'title':'Calories intake for today:',
'width': 1000,
'height':800};

var chart = new google.visualization.PieChart(document.getElementById('feedback-chart'));
chart.draw(data, options);

let graphDisplay = document.getElementById('feedback-chart');
graphDisplay.style.display="block";
}                      
//     var chart = new google.visualization.PieChart(document.getElementById('myChart'));
//     chart.draw(data, options);
    
//     }

    /* to be changed for tablet&desktop mode*/
    // var options = {
    //     title: 'World Wide Wine Production',
    //     is3D: true;