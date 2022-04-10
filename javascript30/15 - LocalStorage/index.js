const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem("items")) || [];

window.addEventListener("DOMContentLoaded", (event) => {
    addItems.addEventListener("submit", addItem);
    itemsList.addEventListener("click", toggleChecked);
    populateList(items, itemsList);
})

function addItem(event) {
    event.preventDefault();

    const text = this.querySelector("[name='item']").value;
    const item = {
        text,
        done: false,
    };

    items.push(item);

    populateList(items, itemsList);
    localStorage.setItem("items", JSON.stringify(items));
    this.reset();
}

function toggleChecked(event) {
    const target = event.target;
    if(!target.matches("input")) return;

    const dataset = target.dataset

    if(dataset.index != null) {
        const index = parseInt(dataset.index);

        if(!isNaN(index)) {
            items[index].done = target.checked;
            localStorage.setItem("items", JSON.stringify(items));
            populateList(items, itemsList);
        }
    }
}

function populateList(plates=[], plateList) {
    plateList.innerHTML = plates.map((plate, idx) => {
        return `
            <li>
                <input type="checkbox" id="item-${idx}" data-index=${idx} ${plate.done? "checked": ""}>
                <label for="item-${idx}">${plate.text}</label>
            </li>
        `
    }).join("");
}