let goodsList = [];

goodsList = [
    new Goods("test1", 10),
    new Goods("test2", 11),
    new Goods("test3", 12),
    new Goods("test4", 13),
    new Goods("test5", 14, "vegetables", 20),
];

let btnTopAdd = document.querySelector("#top-add");
btnTopAdd.onclick = popAddSheet;
let btnTopDelete = document.querySelector("#top-remove");
btnTopDelete.onclick = deleteSelected;
let btnTpUnlisted = document.querySelector("#top-unlisted");
btnTpUnlisted.onclick = unlistedSelected;
let btnTopSale = document.querySelector("#top-sale");
btnTopSale.onclick = saleSelected;

let btnAddConfirm = document.querySelector("#add-confirm");
btnAddConfirm.onclick = insert;
let btnAddCancel = document.querySelector("#add-cancel");
btnAddCancel.onclick = hideAddSheet;
let btnUpdateConfirm = document.querySelector("#update-confirm");
btnUpdateConfirm.onclick = update;
let btnUpdateCancel = document.querySelector("#update-cancel");
btnUpdateCancel.onclick = hideUpdateSheet;

let selectAllBtn = document.querySelector(".table-select");
selectAllBtn.onclick = selectAll;

let filterInputs = document.getElementsByClassName("filter-input");
for (let input of filterInputs) {
    input.oninput = function () {
        refresh();
    };
}

refresh();

// 创建、刷新表格

function refresh() {
    let filteredList = filter(goodsList);
    let oBody = document.querySelector(".table-box tbody");
    oBody.textContent = undefined;

    if (filteredList.length === 0) {
        let line = document.createElement("tr");
        let lineContent = document.createElement("td");
        lineContent.setAttribute("colspan", "9");
        lineContent.textContent = "无对应内容";
        line.append(lineContent);
        oBody.append(line);
        return;
    }

    for (let goods of filteredList) {
        let oRow = document.createElement("tr");

        let oSelect = document.createElement("input");
        oSelect.type = "checkbox";
        oSelect.style.width = "16px";
        oSelect.style.height = "16px";

        let oID = document.createElement("td");
        oID.textContent = goods.id;
        let oName = document.createElement("td");
        oName.textContent = goods.name;
        let oPrice = document.createElement("td");
        oPrice.textContent = goods.price.toString();
        let oStock = document.createElement("td");
        oStock.textContent = goods.stock.toString();
        let oInfo = document.createElement("td");
        oInfo.textContent = goods.info;
        let oType = document.createElement("td");
        oType.textContent = goods.type;
        let oSale = document.createElement("td");
        oSale.textContent = goods.sale ? "在售" : "未上架";
        oSale.classList.add(goods.sale ? "sale" : "unlisted");
        let oOps = document.createElement("td");
        let btnDelete = document.createElement("button");
        btnDelete.textContent = "删除";
        btnDelete.onclick = remove;
        let btnUpdate = document.createElement("button");
        btnUpdate.textContent = "修改";
        btnUpdate.onclick = popUpdateSheet;
        let btnChange = document.createElement("button");
        btnChange.textContent = goods.sale ? "下架" : "上架";
        btnChange.onclick = change;
        oOps.append(btnDelete, btnUpdate, btnChange);

        oRow.append(oSelect, oID, oName, oPrice, oStock, oInfo, oType, oSale, oOps);
        oBody.append(oRow);
    }
}

// 增删改查

function insert(event) {
    event && event.preventDefault();
    let oForm = document.querySelector(".add-sheet form");
    let oName = oForm.querySelector("#add-name");
    let oPrice = oForm.querySelector("#add-price");
    let oStock = oForm.querySelector("#add-stock");
    let oInfo = oForm.querySelector("#add-info");
    let oType = oForm.querySelector("#add-type");
    goodsList.push(
        new Goods(
            oName.value,
            oPrice.value,
            oType.value,
            oStock.value,
            oInfo.value,
        )
    );
    refresh();
    hideAddSheet();
}

function remove(event) {
    let id = event.target.parentNode.parentNode.children[1].textContent;
    goodsList.forEach((goods, index) => {
        if (goods.id === Number.parseInt(id)) goodsList.splice(index, 1);
    });
    refresh();
}

function update(event) {
    event && event.preventDefault();
    let oForm = document.querySelector(".update-sheet form");
    let oID = document.querySelector(" #update-id");
    let oName = oForm.querySelector("#update-name");
    let oPrice = oForm.querySelector("#update-price");
    let oStock = oForm.querySelector("#update-stock");
    let oInfo = oForm.querySelector("#update-info");
    let oType = oForm.querySelector("#update-type");
    let oSale = oForm.querySelector("#update-sale");
    goodsList.forEach((goods, index) => {
        if (goods.id === Number.parseInt(oID.textContent)) {
            goodsList[index].name = oName.value;
            goodsList[index].price = oPrice.value;
            goodsList[index].stock = oStock.value;
            goodsList[index].info = oInfo.value;
            goodsList[index].type = oType.value;
            goodsList[index].sale = oSale.value === "sale";
        }
    });
    refresh();
    hideUpdateSheet();
}

function change(event) {
    let id = event.target.parentNode.parentNode.children[1].textContent;
    goodsList.forEach(goods => {
        if (goods.id === Number.parseInt(id)) goods.sale = !goods.sale;
    });
    refresh();
}

function popAddSheet() {
    addMask();
    let id = Goods.nextID;
    let oSheet = document.querySelector(".add-sheet");
    oSheet.removeAttribute("style");
    let oID = oSheet.querySelector("#add-id");
    oID.textContent = id.toString();
}

// 表格操作

function clearAddSheet() {
    let oForm = document.querySelector(".add-sheet form");
    let oName = oForm.querySelector("#add-name");
    let oPrice = oForm.querySelector("#add-price");
    let oStock = oForm.querySelector("#add-stock");
    let oInfo = oForm.querySelector("#add-info");
    let oType = oForm.querySelector("#add-type");
    oName.value = "";
    oPrice.value = "";
    oStock.value = "";
    oInfo.value = "";
    oType.value = "";
}

function hideAddSheet(event) {
    event && event.preventDefault();
    let oSheet = document.querySelector(".add-sheet");
    oSheet.setAttribute("style", "display:none;");
    clearAddSheet();
    clearMask();
}

function popUpdateSheet(event) {
    addMask();
    let id = event.target.parentNode.parentNode.children[1].textContent;
    let oSheet = document.querySelector(".update-sheet");
    oSheet.removeAttribute("style");
    let oID = oSheet.querySelector("#update-id");
    oID.textContent = id;
    let oForm = oSheet.querySelector("form");
    let oName = oForm.querySelector("#update-name");
    let oPrice = oForm.querySelector("#update-price");
    let oStock = oForm.querySelector("#update-stock");
    let oInfo = oForm.querySelector("#update-info");
    let oType = oForm.querySelector("#update-type");
    let oSale = oForm.querySelector("#update-sale");
    goodsList.forEach(goods => {
        if (goods.id === Number.parseInt(id)) {
            oName.value = goods.name;
            oPrice.value = goods.price;
            oStock.value = goods.stock;
            oInfo.value = goods.info;
            oType.value = goods.type;
            oSale.value = goods.sale ? "sale" : "unlisted";
        }
    });
}

function hideUpdateSheet(event) {
    event && event.preventDefault();
    let oSheet = document.querySelector(".update-sheet");
    oSheet.setAttribute("style", "display:none;");
    clearMask();
}

// 遮罩

function addMask() {
    document.querySelector(".mask").removeAttribute("style");
}

function clearMask() {
    document.querySelector(".mask").setAttribute("style", "display:none;");
}

// 选择处理

function selectAll() {
    let oBody = document.querySelector(".table-box tbody");
    let count = 0;
    for (let line of oBody.children) {
        if (line.children[0].checked) count++;
    }
    for (let line of oBody.children) {
        line.children[0].checked = count !== oBody.children.length;
    }
}

function getSelectedID() {
    let result = [];
    let oBody = document.querySelector(".table-box tbody");
    for (let line of oBody.children) {
        if (line.children[0].checked) {
            result.push(Number.parseInt(line.children[1].textContent));
        }
    }
    return result;
}

function deleteSelected() {
    let list = getSelectedID();
    for (let i = 0; i < goodsList.length; i++) {
        if (list.includes(goodsList[i].id)) {
            goodsList.splice(i--, 1);
        }
    }
    refresh();
}

function saleSelected() {
    let list = getSelectedID();
    for (let i = 0; i < goodsList.length; i++) {
        if (list.includes(goodsList[i].id)) {
            goodsList[i].sale = true;
        }
    }
    refresh();
}

function unlistedSelected() {
    let list = getSelectedID();
    for (let i = 0; i < goodsList.length; i++) {
        if (list.includes(goodsList[i].id)) {
            goodsList[i].sale = false;
        }
    }
    refresh();
}

// 筛选

function filter(list) {
    let id = Number.parseInt(document.querySelector("#filter-id").value);
    let name = document.querySelector("#filter-name").value;
    let priceMin = Number.parseInt(document.querySelector("#filter-price-min").value);
    let priceMax = Number.parseInt(document.querySelector("#filter-price-max").value);
    let keyword = document.querySelector("#filter-keyword").value;
    let type = document.querySelector("#filter-type").value;
    let sale = document.querySelector("#filter-sale").value;

    let filteredList = [];

    for (let goods of list) {
        if (
            (!id || goods.id === id)
            && (name === "" || RegExp("\\S*" + name + "\\S*").test(goods.name))
            && (!priceMax || goods.price < priceMax)
            && (!priceMin || goods.price > priceMin)
            && (keyword === "" || RegExp("\\S*" + keyword + "\\S*").test(goods.info))
            && (type === "" || RegExp("\\S*" + type + "\\S*").test(goods.type))
            && ((sale === "all") || (sale === "sale" && goods.sale) || (sale === "unlisted" && !goods.sale))
        ) {
            filteredList.push(goods);
        }

    }
    return filteredList;
}
