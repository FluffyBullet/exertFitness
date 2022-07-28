let stageTwo = document.getElementById('dataEntry');
let buttonOne = document.getElementById('stepOne');
google.charts.load('current',{packages:['corechart']});
google.charts.setOnLoadCallback(drawChart);

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
                <td><input type="number" id="breakfast" value=${percent30}></td>
                <td>${percent30} / ${percent35}</td>
            </tr>
            <tr>
                <td><p>Lunch</p></td>
                <td><input id="lunch" type ="number"></td>
                <td>${percent35} / ${percent40}</td>
            </tr>
            <tr>
                <td><p>Dinner </p></td>
                <td><input id="dinner" type="number"></td>
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
                <td><input id="breakfast"></td>
                <td>${percent25} / ${percent30}</td>
            </tr>
            <tr>
                <td><p>Morning Snack</p></td>
                <td><input id="morningSnack"></td>
                <td>${percent5} / ${percent10}</td>
            </tr>
            <tr>
                <td><p>Lunch</p></td>
                <td><input id="lunch"></td>
                <td>${percent35} / ${percent40}</td>
            </tr>
            <tr>
                <td><p>Dinner </p></td>
                <td><input id="dinner"></td>
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
                <td><input id="breakfast"></td>
                <td>${percent25} / ${percent30}</td>
            </tr>
            <tr>
                <td><p>Morning Snack</p></td>
                <td><input id="morningSnack"></td>
                <td>${percent5} / ${percent10}</td>
            </tr>
            <tr>
                <td><p>Lunch</p></td>
                <td><input id="lunch"></td>
                <td>${percent35} / ${percent40}</td>
            </tr>
            <tr>
            </tr>
                <td><p>Afternoon Snack </p></td>
                <td><input id="afternoonSnack"></td>
                <td>${percent25} / ${percent30}</td>
            <tr>
                <td><p>Dinner </p></td>
                <td><input id="dinner"></td>
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

function storeResults(){
    
    let store = JSON.parse(
        localStorage.getItem('dailys')
    );
    if (store === null) {
        store = {};
    }
    console.log(store);
    store[date] = {
        breakfast: breakfast,
        // morningSnack: morningSnack,
        lunch: lunch,
        // afternoonSnack: afternoonSnack,
        dinner: dinner,
    };
    localStorage.setItem('dailys',JSON.stringify(store));
    console.log(store['2022-07-26']);
}

/* create of pie chart, taken from w3 Schools*/

function drawChart(){

    const breakfast = document.getElementById('breakfast');
    const lunch = parseInt(document.getElementById('lunch').value);
    const dinner = parseInt(document.getElementById('dinner').value);
    
const barColors = [
    "red",
    "yellow",
    "blue"
];

new Chart("myChart", {
        type: "pie",
        data: {
          labels: xValues = ["Breakfast","Lunch","Dinner"],
          datasets: [{
            backgroundColor: barColors,
            data: yValues = [
                `${parseInt(breakfast.value)}`,
                `${parseInt()}`,600]
          }]
        },
        options: {
          title: {
            display: true,
            text: "Calories taken today: "
          }
        }
      });
let displayChart = document.getElementById('feedback-chart');
displayChart.style.display = "block"
}