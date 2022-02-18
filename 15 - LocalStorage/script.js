const addItems = document.querySelector(".add-items");
const clearAll = document.querySelector("[name=clearAll]");
const checkAll = document.querySelector("[name=checkAll]");
const uncheckAll = document.querySelector("[name=uncheckAll]");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || [];

function addItem(e) {
  e.preventDefault();
  const text = this.querySelector("[name=item]").value;
  const item = {
    text,
    done: false,
  };

  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
  this.reset();
}

function clearItems() {
  items.splice(0);

  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
}

function checkItems() {
  items.map((item) => (item.done = true));

  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
}

function uncheckItems() {
  items.map((item) => (item.done = false));

  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `
        <li>
          <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? "checked" : ""} />
          <label for="item${i}">${plate.text}</label>
        </li>
      `;
    })
    .join("");
}

function toggleDone(e) {
  if (!e.target.matches("input")) return;

  const el = e.target;
  const index = el.dataset.index;

  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));

  populateList(items, itemsList);
}

addItems.addEventListener("submit", addItem);

clearAll.addEventListener("click", clearItems);
checkAll.addEventListener("click", checkItems);
uncheckAll.addEventListener("click", uncheckItems);

itemsList.addEventListener("click", toggleDone);
populateList(items, itemsList);
