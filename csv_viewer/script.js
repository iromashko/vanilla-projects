import TableCsv from '/csv_viewer/TableCsv.js';

const tableRoot = document.querySelector('#csvRoot');
const csvFileInput = document.querySelector('#csvFileInput');
const tableCsv = new TableCsv(tableRoot);

csvFileInput.addEventListener('change', (e) => {
  console.log(csvFileInput.files[0]);
  Papa.parse(csvFileInput.files[0], {
    delimiter: ',',
    skipEmptyLines: true,
    complete: (results) => {
      tableCsv.update(results.data.slice(1), results.data[0].slice(0));
    },
  });
});
