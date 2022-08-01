let stageTwo = document.getElementById('dataEntry');
let buttonOne = document.getElementById('stepOne');
google.charts.load(current, {packages:['corechart']});
google.charts.setOnLoadCallback(drawChart);



/** Starting calculations from first entry fields */
function stepOne(){
    /**Declaring variables for calculations */
let name = document.getElementById('name').value;
let tCal = parseInt(document.getElementById('target').value);
let date = document.getElementById('date').value;
let meals = parseInt(document.getElementById('meals').value);
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
                <td><input id="lunch" type ="number" value="400"></td>
                <td>${percent35} / ${percent40}</td>
            </tr>
            <tr>
                <td><p>Dinner </p></td>
                <td><input id="dinner" type="number" value="600"></td>
                <td>${percent25} / ${percent35}</td>
            </tr>
        </table>
        <button onclick="drawChart()">Display Chart</button>
        `
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
        </table>
        <button onclick="drawChart()">Display Chart</button>
        `;
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

        /** Updating of "next" button on calculator page */

        let next = document.getElementById('stepOne');
        next.innerText = "Update"
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


/* create of pie chart, taken from w3 Schools*/

function drawChart(){
    let meals = parseInt(document.getElementById('meals').value);
    const breakfast = document.getElementById('breakfast');
    const lunch = document.getElementById('lunch');
    const dinner = document.getElementById('dinner');
    let morningSnack;
    let afternoonSnack;

    let totalValue = totalValue = parseInt(breakfast.value) + parseInt(lunch.value) + parseInt(dinner.value);;
    if (meals == 4){ 
        morningSnack = document.getElementById('morningSnack');
        totalValue = parseInt(breakfast.value) + parseInt(morningSnack.value) + parseInt(lunch.value) + parseInt(dinner.value);
        } else if (meals == 5){
            morningSnack = document.getElementById('morningSnack');
            afternoonSnack = document.getElementById('afternoonSnack');
            totalValue = parseInt(breakfast.value) + parseInt(morningSnack.value) + parseInt(lunch.value) + parseInt(afternoonSnack.value) + parseInt(dinner.value);
        }
    
    console.log(morningSnack);
    console.log(typeof(afternoonSnack));

    // console.log(totalValue);
    const barColors = [
        "#FCF5F0",
        "#F5D8BB",
        "#FDCF60",
        "#F5B058",
        "#D9993B",
];
new Chart("myChart", {
        type: "pie",
        data: {
          labels: xValues = ["Breakfast","morningSnack","Lunch","afternoonSnack","Dinner"],
          datasets: [{
            backgroundColor: barColors,
            data: yValues = [
                `${parseInt(breakfast.value)}`,
                `${typeof(morningSnack) == 'undefined' ? '0' : parseInt(morningSnack.value)}`,
                `${parseInt(lunch.value)}`,
                `${typeof(afternoonSnack) == 'undefined' ? '0' : parseInt(afternoonSnack.value)}`,
                `${parseInt(dinner.value)}`
            ]
          }]
        },
        options: {
          title: {
            display: true,
            text: `Calories taken today: ${totalValue}`
          }
        }
      });
let displayChart = document.getElementById('feedback-chart');
displayChart.style.display = "block"
    }


    // Logging of data and values on the local storage facility / 
    function storeResults(){
        const breakfast = parseInt(document.getElementById('breakfast').value)
        const lunch = parseInt(document.getElementById('lunch').value)
        const dinner = parseInt(document.getElementById('dinner').value)
        let date = document.getElementById('date');
        let store = JSON.parse(
            localStorage.getItem('dailys')
        );
        if (store === null) {
            store = {};
        }
        console.log(store);
        store[date.value] = {
            breakfast: breakfast,
            lunch: lunch,
            dinner: dinner,
        };
        localStorage.setItem('dailys',JSON.stringify(store));
        console.log(store['2022-07-28']);
    } 