
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
    var price = (items[i]).price;
    const node = document.createElement("div");
    node.className = "item";

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", changeColour);
    node.appendChild(checkbox);
    
    var textNode1 = document.createTextNode(name);
    var textNode2 = document.createTextNode(price);

    node.appendChild(textNode1);
    node.appendChild(textNode2);


    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", deleteItem);
    node.appendChild(deleteButton);

    const element = document.getElementById("itemList");
    element.appendChild(node);
}

function deleteItem() {
    this.parentNode.remove();
    // make sure to delete from list
}

function changeColour() {
    var div = this.parentNode;
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
