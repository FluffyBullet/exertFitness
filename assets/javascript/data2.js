let stageTwo = document.getElementById('dataEntry');
let buttonOne = document.getElementById('stepOne');
let target = parseInt(document.getElementById('target').value);

/** Starting calculations from first entry fields */
function stepOne(){
    /**Declaring variables for calculations */
let name = document.getElementById('name').value;
let tCal = parseInt(document.getElementById('target').value);
let date = document.getElementById('date').value;
let meals = document.getElementById('meals').value;
let percent5,percent10,percent15,percent20,percent25,percent30,percent35,percent40;
/** Calculating  */
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
            <th>
                <td><Meal></td>
                <td><calories></td>
                <td><target Range(Min/Max)></td>
            </th>
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
        </table>`
    } else if (meals == 4){
        stageTwo.innerHTML=
        `<table>
            <th>
                <td><Meal></td>
                <td><calories></td>
                <td><target Range(Min/Max)></td>
            </th>
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
        </table>`
    } else if (meals == 5){
        stageTwo.innerHTML=
            `<table>
                <th>
                    <td><Meal></td>
                    <td><calories></td>
                    <td><target Range(Min/Max)></td>
                </th>
                <tr>
                    <td><p>Breakfast</p></td>
                    <td><input id=”breakfast”></td>
                    <td>${percent30} / ${percent35}</td>
                </tr>
                <tr>
                    <td><p>Morning Snack</p></td>
                    <td><input id=”morningSnack”></td>
                    <td>${percent5} / ${percent10}</td>
                </tr>
                <tr>
                    <td><p>Lunch</p></td>
                    <td><input id=”lunch”></td>
                    <td>${percent35} / ${percent45}</td>
                </tr>
                <tr>
                    <td><p>Afternoon Snack</p></td>
                    <td><input id=”afternoonSnack”></td>
                    <td>${percent5} / ${percent10}</td>
                </tr>
                <tr>
                    <td><p>Dinner </p></td>
                    <td><input id=”dinner”></td>
                    <td>${percent15} / ${percent20}</td>
                </tr>
            </table>`
    } else {
        stageTwo.innerHTML = `
        <p>:/( Something went wrong!</p> `
    }

// stageTwo.innerHTML = `<p> Testing the addition with new information.Register</p> <br> 
// <p>Registered information is ${tCal}</p>
// <p>Name is : ${name}</p>
// <p>date Entered is: ${date}</p>
// <p>You have selected ${meals} per day</p>
// <p>10% is ${percent10}</p>
// `
;
}