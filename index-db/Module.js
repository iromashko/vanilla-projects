const productdb = (name, table) => {
  const db = new Dexie(name);
  db.version(1).stores(table);
  db.open();
  return db;
};

const bulkcreate = (dbtable, data) => {
  let flag = empty(data);
  if (flag) {
    dbtable.bulkAdd([data]);
    console.log('data inserted successfully.!');
  } else {
    console.log(`Please provide data`);
  }
  return flag;
};

const empty = (object) => {
  let flag = false;

  for (const value in object) {
    if (object[value] !== '' && object.hasOwnProperty(value)) {
      flag = true;
    } else {
      flag = false;
    }
  }
  return flag;
};

const getData = (dbtable, fn) => {
  let index = 0;
  let obj = {};

  dbtable.count((count) => {
    if (count) {
      dbtable.each((table) => {
        obj = SortObj(table);

        fn(obj, index++);
      });
    } else {
      fn(0);
    }
  });
};

const createEl = (tagname, appendTo, fn) => {
  const el = document.createElement(tagname);
  if (appendTo) appendTo.appendChild(el);
  if (fn) fn(el);
};

const SortObj = (sortobj) => {
  let obj = {};
  obj = {
    id: sortobj.id,
    name: sortobj.name,
    seller: sortobj.seller,
    price: sortobj.price,
  };
  return obj;
};

export default productdb;

export { bulkcreate, getData, createEl };
