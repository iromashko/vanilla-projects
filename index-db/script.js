import productdb, { bulkcreate, getData, createEl } from './Module.js';

let db = productdb('ProductDb', {
  products: `++id,name,seller,price`,
});

const userid = document.getElementById('userid');
const proname = document.getElementById('proname');
const seller = document.getElementById('seller');
const price = document.getElementById('price');

const btncreate = document.getElementById('btn-create');
const btnread = document.getElementById('btn-read');
const btnupdate = document.getElementById('btn-update');
const btndelete = document.getElementById('btn-delete');

btncreate.onclick = () => {
  let flag = bulkcreate(db.products, {
    name: proname.value,
    seller: seller.value,
    price: price.value,
  });
  proname.value = seller.value = price.value = '';

  getData(db.products, (data) => {
    userid.value = data.id + 1 || 1;
  });
};

btnread.onclick = table;

function table() {
  const tbody = document.getElementById('tbody');

  while (tbody.hasChildNodes()) {
    tbody.removeChild(tbody.firstChild);
  }

  getData(db.products, (data) => {
    if (data) {
      createEl('tr', tbody, (tr) => {
        for (const value in data) {
          createEl('td', tr, (td) => {
            td.textContent =
              data.price === data[value] ? `$ ${data[value]}` : data[value];
          });
        }
        createEl('td', tr, (td) => {
          createEl('i', td, (i) => {
            i.className += 'fas fa-edit btn-edit';
            i.setAttribute(`data-id`, data.id);

            i.onclick = editbtn;
          });
        });
        createEl('td', tr, (td) => {
          createEl('i', td, (i) => {
            i.className += 'fas fa-trash-alt btn-delete';
          });
        });
      });
    }
  });
}

function editbtn(event) {
  db.products.get(1, (data) => {
    console.log(data);
  });
}
