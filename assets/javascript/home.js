// Swapping of visible Tiles for Testimonies in mobile view
let n = 0;
var activeTestimony = document.getElementsByClassName('testimony-tile')[n];
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
   
    activeTestimony = testimonyParent.children[n];
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