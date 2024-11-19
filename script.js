import { data } from "./data.js";

const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");
const tr = document.createElement("tr");

const headers = Object.keys(data[0]);

for (let ele of headers) {
    const th = document.createElement("th");
    th.textContent = ele[0].toUpperCase() + ele.slice(1);
    tr.appendChild(th);
}
thead.appendChild(tr);
table.appendChild(thead);
for (let i = 0; i < data.length; i++) {
    let currVals = Object.values(data[i]);
    const tr = document.createElement("tr");
    for (let ele of currVals) {
        const td = document.createElement("td");
        td.textContent = ele;
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
}
table.appendChild(tbody);
table.setAttribute("border", 2);
table.style.width = "100%";
table.style.textAlign = "center";

document.body.append(table);
