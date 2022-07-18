/** gather of information for calculator */
let quantity = document.getElementById('meals').value;
let report = document.getElementById('data-entry');
let target = document.getElementById('target');
let calculate = document.getElementById('entry');

/** breaking down calories to percentages */
let percent5,percent10,percent15,percent20,percent25,percent30,percent35,percent40;
calculate.addEventListener('click', function(event){
    event.preventDefault();
    percent5  = (target*0.05);
    percent10 = (target*0.1);
    percent15 = (target*0.15);
    percent20 = (target*0.2);
    percent25 = (target*0.25);
    percent30 = (target*0.3);
    percent35 = (target*0.35);


if (quantity == 3){
    report.innerHTML=
        <table>
            <th>
                <td>Meal</td>
                <td>Calories</td>
                <td>Target Range</td>
            </th>
            <tr>
                <td>Breakfast</td>
                <td>Lunch</td>
                <td>Dinner</td>
            </tr>
            <tr>
                <td id="breakfast"></td>
                <td id="lunch"></td>
                <td id="dinner"></td>
            </tr>
            <tr>
                <td>`${percent30} / ${percent35}`</td>
                <td>`${percent35} / ${percent40}`</td>
                <td>`${percent25} / ${percent35}`</td>
            </tr>
        </table>
    
} else if (quantity == 4){
    report.innerHTML=
        <table>
            <th>
                <td>Meal</td>
                <td>Calories</td>
                <td>Target Range</td>
            </th>
            <tr>
                <td>Breakfast</td>
                <td>Morning Snack</td>
                <td>Lunch</td>
                <td>Dinner</td>
            </tr>
            <tr>
                <td id="breakfast"></td>
                <td id="morning_snack"></td>
                <td id="lunch"></td>
                <td id="dinner"></td>
            </tr>
            <tr>
                <td>`${percent30} / ${percent35}`</td>
                <td>`${percent5} / ${percent10}`</td>
                <td>`${percent35} / ${percent40}`</td>
                <td>`${percent25} / ${percent30}`</td>
            </tr>
        </table>
} else {
    report.innerHTML=
        <table>
            <th>
                <td>Meal</td>
                <td>Calories</td>
                <td>Target Range (Min/Max)</td>
            </th>
            <tr>
                <td>Breakfast</td>
                <td>Morning Snack</td>
                <td>Lunch</td>
                <td>Afternoon Snack</td>
                <td>Dinner</td>
            </tr>
            <tr>
                <td id="breakfast"></td>
                <td id="morning_snack"></td>
                <td id="lunch"></td>
                <td id="afternoon_snack"></td>
                <td id="dinner"></td>
            </tr>
            <tr>
                <td>`${percent30} / ${percent35}`</td>
                <td>`${percent5} / ${percent10}`</td>
                <td>`${percent35} / ${percent40}`</td>
                <td>`${percent5} / ${percent10}`</td>
                <td>`${percent15} / ${percent20}`</td>
            </tr>
        </table>
}
})