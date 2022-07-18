let press = document.getElementById('trial');

// /** Testing function to on setup of javascript */
// press.addEventListener("click", function(){
//     alert("This JS Script is working!");
// })

/** gather of information for calculator */
let quantity = document.getElementById('meal').value;



/** Understanding use of javascript and applying to inner html */
let date = new Date();
let hour = date.getHours();
let greetMessage = document.getElementById('greet');
if (hour < 12){
    greet.innerHTML = "Good Morning!";
} else if (hour < 17){
    greet.innerHTML = "Good Afternoon!";
} else {
    greet.innerHTML = "Good Evening!";
}

