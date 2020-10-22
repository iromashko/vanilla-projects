let arraySize = 40;
let min = 3;
let max = 250;

let array = [arraySize];
let sortedArray = [arraySize];

generateArray();

function generateArray() {
  for (let i = 0; i < arraySize; i++) {
    array[i] = generateArrayValue();

    if (array[i] === array[i - 1]) {
      array[i] = generateArrayValue();
    }
  }
}

function generateArrayValue() {
  return Math.floor(Math.random() * (max - min) + min);
}

console.log(array);

bubbleSort(array);

function bubbleSort(array) {
  sortedArray = Array.from(array);

  for (let i = 0; i < arraySize; i++) {
    for (let j = 0; j < arraySize - 1; j++) {
      if (sortedArray[j] > sortedArray[j + 1]) {
        [sortedArray[j], sortedArray[j + 1]] = [
          sortedArray[j + 1],
          sortedArray[j],
        ];
      }
    }
  }
}

console.log(sortedArray);

let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: Array.from({ length: arraySize }, (v, i) => `Array[${i}]`),
    datasets: [
      {
        label: 'Value',
        data: array,
        backgroundColor: 'rgba(111, 99, 236, 0.5)',
        borderWidth: 2,
      },
    ],
  },
  options: {
    legend: {
      display: 'false',
    },
  },
});

function sortArray() {
  myChart.data.datasets[0].data = sortedArray;
  myChart.update();
}

function regenerateArray() {
  generateArray();
  bubbleSort(array);
  myChart.data.datasets[0].data = array;
  myChart.update();
}

function showBar() {
  myChart.destroy();
  myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: Array.from({ length: arraySize }, (v, i) => `Array[${i}]`),
      datasets: [
        {
          label: 'Value',
          data: array,
          backgroundColor: 'rgba(111, 99, 236, 0.5)',
          borderWidth: 2,
        },
      ],
    },
    options: {
      legend: {
        display: 'false',
      },
    },
  });
}

function showPolar() {
  myChart.destroy();
  myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
      labels: Array.from({ length: arraySize }, (v, i) => `Array[${i}]`),
      datasets: [
        {
          label: 'Value',
          data: array,
          backgroundColor: 'rgba(111, 99, 236, 0.5)',
          borderWidth: 2,
        },
      ],
    },
    options: {
      legend: {
        display: 'false',
      },
    },
  });
}
