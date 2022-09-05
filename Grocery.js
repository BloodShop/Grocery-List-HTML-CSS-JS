function deleteObj(row) {
  $("#myTable").deleteRow(row);
}
let rowInd = 0
function newItem(nameItem, amountItem, priceItem) {
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  let name = nameItem
  const row = document.createElement('tr');
  row.name = 'row'
  const cel1 = row.insertCell(0);
  var item1 = document.createElement('label');
  item1.innerText = name
  cel1.appendChild(item1)
  
  const cel2 = row.insertCell(1);
  var item5 = document.createElement('label');
  item5.innerText = amountItem
  cel2.appendChild(item5)

  var unitPrice = formatter.format(priceItem)
  const cel3 = row.insertCell(2);
  var item2 = document.createElement('label');
  item2.innerText = unitPrice
  cel3.appendChild(item2)

  var totalPrice = formatter.format(priceItem * amountItem)
  const cel4 = row.insertCell(3);
  var item2 = document.createElement('label');
  item2.innerText = totalPrice
  cel4.appendChild(item2)

  const cel5 = row.insertCell(4);
  var btn = document.createElement('button');
  btn.innerText = 'Remove'
  btn.className = 'button-10'
  btn.addEventListener('click', () => {
    deleteObj(row.rowIndex)
  });
  cel5.appendChild(btn)

  const cel6 = row.insertCell(5);
  var inp = document.createElement('input');
  inp.type = 'checkbox'
  inp.id = `chkBx${rowInd++}`
  
  cel6.appendChild(inp);
  
  document.getElementById("tableBody").appendChild(row)

  clearFields()
}
function clearFields() {
  document.getElementById('nameItem').value = '';
  document.getElementById('amountItem').value = '';
  document.getElementById('priceItem').value = '';
  document.getElementById('btnSubmit').disabled = true
}

function CheckInput(val1, val2) {
  if(/^\d+$/.test(val1) && /^\d+$/.test(val2)) {
    document.getElementById('btnSubmit').disabled = false
  }
  else {
    document.getElementById('btnSubmit').disabled = true
  }
}

function deleteSelected() {
  var rmvBtn = document.querySelectorAll(`[id^="chkBx"]`);
    for(var i = rmvBtn.length - 1; i >= 0; i--) {
        if(rmvBtn[i].checked) {
          document.getElementById("myTable").deleteRow(i+1)
        }
    } 
}

// class GroceryList {
//   constructor() {
//     this.groceryList = [];
//     this.index = 0;
//   }

//   isEmpty() {
//     return this.groceryList.length == 0;
//   }

//   addItem(item) {
//     // this.groceryList.push({
//     //   key: this.index,
//     //   value: item
//     // });
//     // index++;
//     this.groceryList.push(item);
//   }

//   removeItem(item) {
//     const ind = this.groceryList.indexOf(item)
//     if(ind > -1) {
//       this.groceryList.splice(ind, 1)
//     }
//   }
// }

// class Item {
//   constructor(Name, Price) {
//     this.name = Name;
//     this.price = Price;
//   }
// }