"use strict";

function quickSort(arr) {
  return quickSortAlg(arr, 0, arr.length - 1);
}

function quickSortAlg(arr, first, last) {
  if (first < last) {
    var pivot = partition(arr, first, last);
    quickSortAlg(arr, first, pivot - 1);
    quickSortAlg(arr, pivot + 1, last);
  }

  return arr;
}

function partition(arr, first, last) {
  var pivotIndex = Math.floor(Math.random() * (last - first)) + first;
  var tempPivot = arr[last];
  arr[last] = arr[pivotIndex];
  arr[pivotIndex] = tempPivot;
  var x = arr[last];
  var i = first;

  for (var j = first; j < last; j++) {
    if (arr[j] < x) {
      var temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
      i++;
    }
  }

  var tempLast = arr[last];
  arr[last] = arr[i];
  arr[i] = tempLast;
  return i;
}