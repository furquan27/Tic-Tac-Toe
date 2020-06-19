// Global variables and html elements 
// var score1 = 0;
// var score2 = 0;

// For keeping count of the player's turn i.e count=0 => Player 1
// count=1=>Player2
var count = 0;
var box = document.getElementsByClassName("box");
var result_div = document.getElementById("result");
var p1_span = document.getElementById("p1");
var p2_span = document.getElementById("p2");
var score1_span = document.getElementById("score1");
var score2_span = document.getElementById("score2");

// Array arr is for keeping track of the boxes being filled or not
var arr = [];
for(var i = 0; i < box.length; i++){
    arr[i] = null;
}


start();


for(var i = 0; i < box.length; i++){
    box[i].addEventListener('click',fill);
    
}






// Starts the game or resets the game
function start(){
    for(var i = 0; i < box.length; i++){
        box[i].innerHTML = "";
        arr[i] = null;
        count = 0;
        result_div.style.display = "none";
        p1_span.style.display = "block";
        p2_span.style.display = "none";
    }
    
}




function checkFull(arr){
    var c = 0;
    for(var i=0 ; i < arr.length; i++){
        if(arr[i] != null){
            c++;  
        }
        
    }
    
    if(c == arr.length-1){
        changeHTML(result_div,"It's a Draw");
        changeDisplay(result_div,"block");
        console.log(c);
        gameOver();
    }
    
}





// Create function is used to fill the box
function fill(cell){
    checkFull(arr);
    
    cell_id = document.getElementById(cell.target.id);
    
    if(cell_id.innerHTML == "X" || cell_id.innerHTML == "O" ){
        alert("This box is already filled");
        return;
    }
    
    if(even(count)){
        cell_id.innerHTML = "X";
        count++;
        changeDisplay(p1_span,"none");
        changeDisplay(p2_span,"block");
        updateArr(cell_id.id,'X');
        checkWin();
    }
    else{
        cell_id.innerHTML = "O";
        count--;
        changeDisplay(p1_span,"block");
        changeDisplay(p2_span,"none");
        updateArr(cell_id.id,'O');
        checkWin();
    }
}




function checkWin(){
    
    
    for(var i = 0; i < arr.length-2; i++){
        if(i == 0){
            checkPattern(arr[i],arr[i+1],arr[i+2]);
            checkPattern(arr[i],arr[i+3],arr[i+6]);
            checkPattern(arr[i],arr[i+4],arr[i+8]);
        }
        if(i == 3 || i == 6){
            checkPattern(arr[i],arr[i+1],arr[i+2]);
        }
        if(i == 1){
            checkPattern(arr[i],arr[i+3],arr[i+6]);
        }
        if(i == 2){
            checkPattern(arr[i],arr[i+3],arr[i+6]);
            checkPattern(arr[i],arr[i+2],arr[i+4]);
        }
        
    }
    
    
    
}



function checkPattern(x1,x2,x3){
    
    var pattern;
    pattern = x1 + x2 + x3;
    
    if(pattern == "XXX"){
        changeHTML(result_div,"Player 1 Wins!");
        changeDisplay(result_div,"block");
        gameOver();
        setTimeout(function(){
            start();
        },5000);
    }
    
    if(pattern == "OOO"){
        changeHTML(result_div,"Player 2 Wins!");
        changeDisplay(result_div,"block");
        gameOver();
        setTimeout(function(){
            start();
        },5000);
    }
    
    
}



function changeHTML(ele,attribute){
    
    ele.innerHTML = attribute;

}



function changeDisplay(ele,attribute){

    ele.style.display = attribute;
}



function even(value){
    if(value%2 == 0)
        return true;
    else
        return false;
}


function gameOver(){
    changeDisplay(p1_span,"none");
    changeDisplay(p2_span,"none");
    setTimeout(function(){
        start();
    },5000);
}




function updateArr(box_id,number){
    for( var i = 0; i < box.length; i++){
        if(box[i].id == box_id){
            arr[i] = number;
        }
    }
    
}



    
















