// Navigation Bar reactive with hamburger menu - taken from W3 schools

function myFunction() {
    var x = document.getElementById("navHamburger");
    if (x.className === "nav_style") {
      x.className += " responsive";
    } else {
      x.className = "nav_style";
    }
  }

// Swapping of visible Tiles for Testimonies in mobile view
let n = 0;
var activeTestimony = document.getElementsByClassName('testimony-tile')[`${n}`];
activeTestimony.style.display = "block";
let testimonyParent = document.getElementById('testimony-display');
function nextTile(){
    n = n + 1;
    if (n === 5){
        n = 5- n;
    }
    activeTestimony.style.display = "none";
    // n = n + 1;
    console.log(n);
   
    activeTestimony = testimonyParent.children[`${n}`];
    activeTestimony.style.display = "block";
    console.log(activeTestimony);
}
function prevTile(){
    n = n - 1;
    if (n === 0-1){
        n = 4;
    }
    activeTestimony.style.display = "none";
    console.log(n);
    
    
 
    activeTestimony = testimonyParent.children[`${n}`];
    activeTestimony.style.display = "block";
    console.log(activeTestimony);
}

// Starting calculations from first entry fields 
function stepOne(){
    //Declaring variables for calculations /
let stageTwo = document.getElementById('dataEntry');
let name = document.getElementById('name').value;
let tCal = parseInt(document.getElementById('target').value);
let date = document.getElementById('date').value;
let meals = parseInt(document.getElementById('meals').value);
let percent5,percent10,percent15,percent20,percent25,percent30,percent35,percent40;

// Calculating values/
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
        <button onclick="drawChart()" id="buttonTwo">Display Chart</button>
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
        </table>
        <button onclick="drawChart()" id="buttonTwo">Display Chart</button>
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
        </table>
        <button onclick="drawChart()" id="buttonTwo">Display Chart</button>`;
        
    } else {
        stageTwo.innerHTML = `
        <p>:( Something went wrong!</p> `;
    }

        // Updating of "next" button on calculator page /

        let next = document.getElementById('stepOne');
        next.innerText = "Update";
}

// create of pie chart, taken from w3 Schools
function drawChart(){
    let meals = parseInt(document.getElementById('meals').value);
    const breakfast = document.getElementById('breakfast');
    const lunch = document.getElementById('lunch');
    const dinner = document.getElementById('dinner');
    let morningSnack;
    let afternoonSnack;
    let totalValue = parseInt(breakfast.value) + parseInt(lunch.value) + parseInt(dinner.value);
    if (meals == 4){ 
        morningSnack = document.getElementById('morningSnack');
        totalValue = parseInt(breakfast.value) + parseInt(morningSnack.value) + parseInt(lunch.value) + parseInt(dinner.value);
        } else if (meals == 5){
            morningSnack = document.getElementById('morningSnack');
            afternoonSnack = document.getElementById('afternoonSnack');
            totalValue = parseInt(breakfast.value) + parseInt(morningSnack.value) + parseInt(lunch.value) + parseInt(afternoonSnack.value) + parseInt(dinner.value);
        }
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
            text: `Calories consumed today: ${totalValue}`
          }
        }
      });
let displayChart = document.getElementById('feedback-chart');
displayChart.style.display = "block";
let buttonTwo = document.getElementById('buttonTwo');
buttonTwo.textContent = "Update Chart";

let addStore = document.getElementById('add-store');
addStore.addEventListener('click',storeResults());
    }


    // Logging of data and values on the local storage facility
    function storeResults(){
        const breakfast = parseInt(document.getElementById('breakfast').value);
        const lunch = parseInt(document.getElementById('lunch').value);
        const dinner = parseInt(document.getElementById('dinner').value);
        let date = document.getElementById('date');
        let store = JSON.parse(
            localStorage.getItem('dailys')
        );
        if (store === null) {
            store = {};
        }
        store[date.value] = {
            breakfast: breakfast,
            lunch: lunch,
            dinner: dinner,
        };
        localStorage.setItem('dailys',JSON.stringify(store));
    } 

    
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    
    function drawChart1() {
          //recalling of data stored in local storage
          let results = localStorage.getItem('dailys');
          console.log(JSON.parse(results));
        var data = google.visualization.arrayToDataTable([
          ['Director (Year)',  'Rotten Tomatoes', 'IMDB'],
          ['Alfred Hitchcock (1935)', 8.4,         7.9],
          ['Ralph Thomas (1959)',     6.9,         6.5],
          ['Don Sharp (1978)',        6.5,         6.4],
          ['James Hawes (2008)',      4.4,         6.2]
        ]);

        var options = {
          title: 'The decline of \'The 39 Steps\'',
          vAxis: {title: 'Accumulated Rating'},
          isStacked: true
        };

        var chart = new google.visualization.SteppedAreaChart(document.getElementById('chart_div'));

        chart.draw(data, options);
      }
