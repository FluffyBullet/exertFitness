let press = document.getElementById('trial');

press.addEventListener("click", function(){
    alert("This JS Script is working!");
})

let date = new Date();
let hour = date.getHours();
let greetMessage = document.getElementById('greet');
if (hour < 11){
    greet.innerHTML = "Good Morning!";
} else if (hour < 17){
    greet.innerHTML = "Good Afternoon!";
} else {
    greet.innerHTML = "Good Evening!";
}