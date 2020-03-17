var colors = ["blue", "red", "green", "yellow"];
var true_colors = [];
var answer = [];

function hideshow(hide, show) {
    document.getElementById(hide).style.display= "none";
    document.getElementById(show).style.display= "block";
}

function addColor(col_arr) {
    col_arr.push(colors[Math.floor(Math.random() * colors.length)]);
}

function addAnswer(string) {
    answer.push(string);
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

function pause(time) {
    return new Promise(resolve => {

      setTimeout(() => {
      }, time);
    });
  }

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function processArray() {
    for (const item of true_colors) {
        document.getElementById("color_box").style.backgroundColor= await item;
      await delay(400);
      document.getElementById("color_box").style.backgroundColor="gray";
      await delay(200);
    }
    document.getElementById("color_box").style.backgroundColor= "gray";
}

async function counter(time){
    var i = time;
    while (i>0){
        document.getElementById('timer').innerHTML =  "Next round in: " + i;
        i = i-1;
      await delay(1000);
    }
    document.getElementById('timer').innerHTML = "";
}

function start() {
    answer = [];
    document.getElementById("start_button").style.display= "none";
    document.getElementById("done").style.display= "block";
    document.getElementById('success').innerHTML = "";
    addColor(true_colors);
    processArray();
}

function done() {
    if (answer.length !== true_colors.length) return false;
	for (var i = 0; i < answer.length; i++) {
		if (answer[i] !== true_colors[i]){
            return false;
        }
	}
	return true;
}

async function correction(){
    if(done()){
        document.getElementById("done").style.display= "none";
        document.getElementById('success').innerHTML = "Correct!";
        answer=[];
        await counter(3);
        start();
    }else{
        document.getElementById('points').innerHTML = (true_colors.length)-1;
        document.getElementById("game").style.display="none";
        document.getElementById("fail").style.display="block";
    }
}

function restart() {
    true_colors = [];
    answer = [];
    document.getElementById("fail").style.display="none";
    document.getElementById("game").style.display="block";
    document.getElementById("start_button").style.display= "block";
    document.getElementById("done").style.display= "none";
}
