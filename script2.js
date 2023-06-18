const timer = document.getElementById("stopwatch");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const mist = document.getElementById("mistake");

let hr = 0;
let min = 0;
let sec = 0;
let stoptime = true;
let mistakes = 0;
let wpm
function startTimer() {
    if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
    // document.getElementById('startone').style.visibility="hidden";
    document.getElementById('quoteinput').style.visibility="visible";
    document.getElementById('quote').style.visibility="visible";
}

function stopTimer() {
    if (stoptime == false) {
        stoptime = true;
        timerCycle();
    }
    
    document.getElementById('quoteinput').style.visibility="hidden";
    document.getElementById('result').style.visibility="visible";
    document.getElementById('completeone').style.visibility="visible";
    document.getElementById('remark').style.visibility="visible";
    document.getElementById('completetwo').style.visibility="visible";
}

function timerCycle() {
    if (stoptime == false) {
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        sec = sec + 1;
        if (sec == 60) {
            min += 1;
            sec = 0;
        }
        if (min == 60) {
            hr += 1;
            min = 0;
            sec = 0;
        }
        if (sec < 10) {
            sec = "0" + sec;
        }
        if (min < 10) {
            min = "0" + min;
        }
        if (hr < 10) {
            hr = "0" + hr;
        }
        timer.innerHTML = min + ":" + sec;
        setTimeout(timerCycle, 1000);
    }
} 

let string = document.getElementById("quote").textContent;
console.log(string);

startButton.addEventListener('click', function () {
     const userInput = document.getElementById("quoteinput");

    userInput.addEventListener('input', function () {
        let inputText = userInput.value;
        let strCnt = inputText.length;
        mistakes = 0;

        for (let i = 0; i <= inputText.length; i++) {
            if (inputText[i] !== string[i]) {
                mistakes++;
                console.log(false);
            }
        }
        mist.innerHTML = mistakes.toString();
        console.log(mistakes);

        if (inputText === string) {
            console.log("Correct word entered. Exiting the program.");
            // Optionally, you can perform additional actions here
        }
        const acc = document.getElementById("accuracy")
        const wordspm = document.getElementById("wpm")
        // let correctWords = 0;
        let totalWords = 0;
        
        totalWords = inputText.trim().split(/\s+/).length;
        wpm = (totalWords / (parseInt(min) * 60 + parseInt(sec))) * 60;
        wordspm.innerHTML = wpm.toFixed(2);

        // Calculate accuracy
        const accuracy = (parseInt((totalWords - mistakes)) / totalWords) * 100;
        acc.innerHTML = accuracy.toFixed(2) + "%";
        
       

    });
         


    // startTimer();
    // userInput.addEventListener("Keypress",function(e){
    //     alert(55)
    //     if(e.key == "Enter"){
    //       e.preventDefault();
    //       Document.getElementById("stop").click();
    //     }
    //   })
      startTimer();
    
});

stopButton.addEventListener('click',function(){
    
    var inputField = document.getElementById("quoteinput");
    // var btn = document.getElementById("start");
    // btn.addEventListener()
    inputField.value = "";
    inputField.disabled = true;
    inputField.classList.add("disabled");
    
    let remarks = document.getElementById("remark")
    if(wpm >=65 ){
        remarks.innerHTML =  "Congrats you are truly impressive with wpm :" + wpm.toFixed(2)
    }
    else if (wpm >=64 && wpm<=45){
        remarks.innerHTML =  "Congrats you are impressive with wpm :  " + wpm.toFixed(2)
    }
    else if (wpm>=44 && wpm<=35){
        remarks.innerHTML =  " Congrats you have average speed of wpm :  " + wpm.toFixed(2)
    } 
    else if(wpm<=34 && wpm>=10){

        remarks.innerHTML = "Better luck next time wpm:"+wpm.toFixed(2)
    }
    stopTimer();
})

// function startTimer() {
//     var button = document.getElementById("start");
//     button.classList.add("button-clicked");
//   }
  
//   function stopTimer() {
//     var button = document.getElementById("stop");
//     button.classList.add("button-clicked");
//   }
  

