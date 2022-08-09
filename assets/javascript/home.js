// Swapping of visible Tiles for Testimonies in mobile view
let n = 0;
var activeTestimony = document.getElementsByClassName('testimony-tile')[n];
activeTestimony.style.display = "block";
let testimonyParent = document.getElementById('testimony-display');
let previousTileButton = document.getElementsByTagName('button')[0];
let nextTileButton = document.getElementsByTagName('button')[1];

nextTileButton.addEventListener('click', nextTile);
function nextTile(){
    n = n + 1;
    if (n === 5){
        n = 5- n;
    }
    activeTestimony.style.display = "none";
    activeTestimony = testimonyParent.children[n];
    activeTestimony.style.display = "block";

}

previousTileButton.addEventListener('click', prevTile);
function prevTile(){
    n = n - 1;
    if (n === 0-1){
        n = 4;
    }
    activeTestimony.style.display = "none";
    activeTestimony = testimonyParent.children[`${n}`];
    activeTestimony.style.display = "block";
}