let startTime;
    let elapsedTime = 0;
    let timerInterval;

    function timeToString(time) {
      let hrs = Math.floor(time / 3600000);
      let mins = Math.floor((time % 3600000) / 60000);
      let secs = Math.floor((time % 60000) / 1000);
      return (
        (hrs < 10 ? "0" + hrs : hrs) + ":" +
        (mins < 10 ? "0" + mins : mins) + ":" +
        (secs < 10 ? "0" + secs : secs)
      );
    }

    function startStopwatch() {
      startTime = Date.now() - elapsedTime;
      timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        document.getElementById("display").innerText = timeToString(elapsedTime);
      }, 1000);
    }

    function stopStopwatch() {
      clearInterval(timerInterval);
    }

    function resetStopwatch() {
      clearInterval(timerInterval);
      elapsedTime = 0;
      document.getElementById("display").innerText = "00:00:00";
    }