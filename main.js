const time = document.getElementById('time');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

//経過ms
let elapsedTime = 0;

let intervalId = null;

// 時間を表示する関数
function displayTime() {
  const ms = elapsedTime % 1000;
  const s = Math.floor(elapsedTime / 1000) % 60;
  const m = Math.floor(elapsedTime / (1000*60)) % 60;
  const h = Math.floor(elapsedTime / (1000*60*60));
  
  const msStr = ms.toString().slice(0, 1);
  const sStr = s.toString().slice(-2);
  const mStr = m.toString().slice(-2);
  const hStr = h.toString().slice(-2);
  
  time.innerHTML = `${hStr}:${mStr}:${sStr}:${msStr}`;
}

startButton.addEventListener('click', function(e) {
   startButton.disabled = true;
   stopButton.disabled = false;
   resetButton.disabled = false;
  
  if  (intervalId !== null) { return;}
  let pre = new Date();
  intervalId = setInterval(function(){
    const now = new Date();
    elapsedTime += now - pre;
    pre = now;
    displayTime();
  }, 10);

 }
);

stopButton.addEventListener('click', function(e) {
      
      
      if (elapsedTime <1000) {
          startButton.disabled = false;
          stopButton.disabled = true;
          resetButton.disabled = true;
         
         elapsedTime = 0;
         clearInterval(intervalId);
         intervalId = null;
         displayTime();
      } else{
        startButton.disabled = false;
        stopButton.disabled = true;
        resetButton.disabled = false;
      
        clearInterval(intervalId);
        intervalId = null;
      }
      
  }
);

resetButton.addEventListener('click', function(e) {
  
  if (intervalId !== null) {
     startButton.disabled = false;
          stopButton.disabled = true;
          resetButton.disabled = true;
    
     elapsedTime = 0;
     clearInterval(intervalId);
    intervalId = null;
    displayTime();
    

  } else {
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;

    elapsedTime = 0;
    displayTime();
  }
  

}
);