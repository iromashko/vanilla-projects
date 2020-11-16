let timerObj = {
  minutes: 0,
  seconds: 0,
  timerId: 0,
};

function soundAlarm() {
  let amount = 5;
  let audio = new Audio('Timer_Sound_Effect.mp3');

  function playSound() {
    audio.pause();
    audio.currentTime = 0;
    audio.play();
  }

  for (let i = 1; i < amount; i++) {
    setTimeout(playSound, 1200 * i);
  }
}

function updateValue(key, value) {
  if (value < 0) {
    value = 0;
    console.log(`Positive Numbers Only`);
  }
  if (key === 'seconds') {
    if (value < 10) {
      value = '0' + value;
    }

    if (value > 59) {
      value = 59;
    }
  }
  $('#' + key).html(value || 0);
  timerObj[key] = value;

  console.log(timerObj.minutes);
  console.log(timerObj.seconds);
}

(function detectChanges(key) {
  console.log(`Detect Changes`);

  let input = '#' + key + '-input';

  $(input).change(function () {
    updateValue(key, $(input).val());
  });

  $(input).keyup(function () {
    updateValue(key, $(input).val());
  });

  return arguments.callee;
})('minutes')('seconds');

function startTimer() {
  buttonManager(['start', false], ['pause', true], ['stop', true]);
  freezeInput();

  timerObj.timerId = setInterval(function () {
    timerObj.seconds--;

    if (timerObj.seconds < 0) {
      if (timerObj.minutes === 0) {
        soundAlarm();
        return stopTimer();
      }
      timerObj.seconds = 59;
      timerObj.minutes--;
    }

    updateValue('minutes', timerObj.minutes);
    updateValue('seconds', timerObj.seconds);
  }, 1000);
}

function stopTimer() {
  clearInterval(timerObj.timerId);
  buttonManager(['start', true], ['pause', false], ['stop', false]);
  unfreezeInput();
  updateValue('minutes', $('#minutes-input').val());
  let seconds = $('#seconds-input').val() || '0';
  updateValue('seconds', seconds);
}

function pauseTimer() {
  buttonManager(['start', true], ['pause', false], ['stop', true]);
  clearInterval(timerObj.timerId);
}

function buttonManager(...buttonsArray) {
  for (let i = 0; i < buttonsArray.length; i++) {
    let button = '#' + buttonsArray[i][0] + '-button';
    if (buttonsArray[i][1]) {
      $(button).removeAttr('disabled');
    } else {
      $(button).attr('disabled', 'disabled');
    }
  }
}

function freezeInput() {
  $('#minutes-input').attr('disabled', 'disabled');
  $('#seconds-input').attr('disabled', 'disabled');
}

function unfreezeInput() {
  $('#minutes-input').removeAttr('disabled');
  $('#seconds-input').removeAttr('disabled');
}
