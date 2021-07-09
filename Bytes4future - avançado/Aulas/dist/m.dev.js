"use strict";

function computeMostFrequent(array) {
  var ordered = false;

  while (!ordered) {
    ordered = true;

    for (var i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        var temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        ordered = false;
      }
    }
  }

  var highestFrequency = 1;
  var mostFrequent = array[0];
  var frequency = highestFrequency;
  var current = mostFrequent;

  for (var _i = 0; _i < array.length; _i++) {
    if (array[_i - 1] !== array[_i]) {
      if (frequency > highestFrequency) {
        highestFrequency = frequency;
        mostFrequent = current;
      }

      frequency = 0;
      current = array[_i];
    }

    frequency++;
  }

  mostFrequent = frequency > highestFrequency ? current : mostFrequent;
  highestFrequency = frequency > highestFrequency ? frequency : highestFrequency;
  return {
    value: mostFrequent,
    frequency: highestFrequency
  };
}