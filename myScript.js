
const items = [];

class Item {
    constructor(itemName, price, friendName) {
        this.itemName = itemName;
        this.price = price;
    }
}

function addItem() {
    var item = document.getElementById("Item").value;
    var price = document.getElementById("Price").value;
    if (item != "" && price != "") {
        item = new Item(item, price);
        items.push(item);
        displayItem(items.length - 1);
        clearItem();
    }
}

function displayItem(i) {
    var name = (items[i]).itemName;
    var price = "$" + (items[i]).price;
    const node = document.createElement("div");
    node.className = "item-div";
    node.innerHTML = `
        <div>
            <input type="checkbox">
        </div>
        <p>${name}</p>
        <p>${price}</p>
        <button>Delete</button>
    `;

    node.querySelector("input[type='checkbox']").addEventListener("change", changeColour);
    node.querySelector("button").addEventListener("click", deleteItem);

    const element = document.getElementById("item-list");
    element.appendChild(node);
}

function deleteItem() {
    this.parentNode.remove();
}

function changeColour() {
    var div = this.parentNode.parentNode;
    if (this.checked) {
        div.classList.add("checked");
    } else {
        div.classList.remove("checked");
    }
}

function clearItem() {
    item = document.getElementById("Item").value = "";
    price = document.getElementById("Price").value = "";
}
