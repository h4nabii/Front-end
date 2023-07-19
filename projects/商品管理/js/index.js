let goodsList = [];

goodsList = [
    new Goods("test1", 10),
    new Goods("test2", 11),
    new Goods("test3", 12),
    new Goods("test4", 13),
    new Goods("test5", 14, "vegetables", 20),
];

// 顶部按钮栏
$("#top-add").click(popAddSheet);                       // btnTopAdd
$("#top-remove").click(deleteSelected);                 // btnTopDelete
$("#top-unlisted").click(funcSetSelectedSale(false));   // btnTpUnlisted
$("#top-sale").click(funcSetSelectedSale(true));        // btnTopSale

// 表格行为
$("#add-confirm").click(insert);                // btnAddConfirm
$("#add-cancel").click(hideAddSheet);           // btnAddCancel
$("#update-confirm").click(update);             // btnUpdateConfirm
$("#update-cancel").click(hideUpdateSheet);     // btnUpdateCancel

// 全选按钮（TH 实现）
$(".table-select").click(selectAll);            // btnSelectAll

// filterInputs
$(".filter-input").each((_, input) => $(input).on("input", refresh));

refresh();

// 创建、刷新表格

function refresh() {
    let filteredList = filter(goodsList);

    let oBody = $(".table-box tbody").text("");

    if (filteredList.length === 0) {
        oBody.append(
            $("<tr/>").append(
                $("<td/>")
                    .attr("colspan", "9")
                    .text("无对应内容")
            )
        );
        return;
    }

    for (let goods of filteredList) {
        oBody.append(
            $("<tr/>").append(
                // select
                $("<input/>")
                    .attr("type", "checkbox")
                    .css({
                        verticalAlign: "middle",
                        width: 16,
                        height: 16
                    }),

                // texts
                $("<td/>").text(goods.id),
                $("<td/>").text(goods.name),
                $("<td/>").text(goods.price),
                $("<td/>").text(goods.stock),
                $("<td/>").text(goods.info),
                $("<td/>").text(goods.type),
                $("<td/>")
                    .text(goods.sale ? "在售" : "未上架")
                    .addClass(goods.sale ? "sale" : "unlisted"),

                // buttons
                $("<td/>").append(
                    $("<button/>")
                        .text("删除")
                        .click(funcRemove(goods.id)),
                    $("<button/>")
                        .text("修改")
                        .click(funcPopUpdateSheet(goods.id)),
                    $("<button/>")
                        .text(goods.sale ? "下架" : "上架")
                        .click(change)
                )
            )
        );
    }
}

// 增删改查

function insert(event) {
    event && event.preventDefault();
    let oForm = $(".add-sheet form");
    goodsList.push(
        new Goods(
            oForm.find("#add-name").val(),
            oForm.find("#add-price").val(),
            oForm.find("#add-stock").val(),
            oForm.find("#add-info").val(),
            oForm.find("#add-type").val(),
        )
    );
    refresh();
    hideAddSheet();
}

function funcRemove(id) {
    if (typeof id !== "number") throw new TypeError("wrong type");
    return function () {
        goodsList.forEach((goods, index) => {
            if (goods.id === id) goodsList.splice(index, 1);
        });
        refresh();
    }
}

function update(event) {
    event && event.preventDefault();
    goodsList.forEach((goods, index) => {
        if (goods.id === Number.parseInt($("#update-id").text())) {
            goodsList[index].name = $("#update-name").val();
            goodsList[index].price = $("#update-price").val();
            goodsList[index].stock = $("#update-stock").val();
            goodsList[index].info = $("#update-info").val();
            goodsList[index].type = $("#update-type").val();
            goodsList[index].sale = $("#update-sale").val() === "sale";
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
    $(".add-sheet").removeAttr("style");
    $("#add-id").text(id);
}

// 表格操作

function clearAddSheet() {
    let oForm = $(".add-sheet form");
    oForm.find("#add-name").val("");
    oForm.find("#add-price").val("");
    oForm.find("#add-stock").val("");
    oForm.find("#add-info").val("");
    oForm.find("#add-type").val("");
}

function hideAddSheet(event) {
    event && event.preventDefault();
    $(".add-sheet").attr("style", "display:none;");
    clearAddSheet();
    clearMask();
}

function funcPopUpdateSheet(id) {
    if (typeof id !== "number") throw new TypeError("wrong type");
    return function () {
        addMask();
        $(".update-sheet").removeAttr("style");
        $("#update-id").text(id);
        goodsList.forEach(goods => {
            if (goods.id === id) {
                $("#update-name").val(goods.name);
                $("#update-price").val(goods.price);
                $("#update-stock").val(goods.stock);
                $("#update-info").val(goods.info);
                $("#update-type").val(goods.type);
                $("#update-sale").val(goods.sale ? "sale" : "unlisted");
            }
        });
    }
}

function hideUpdateSheet(event) {
    event && event.preventDefault();
    $(".update-sheet").attr("style", "display:none;");
    clearMask();
}

// 遮罩

function addMask() {
    $(".mask").removeAttr("style");
}

function clearMask() {
    $(".mask").attr("style", "display:none;");
}

// 选择处理
// TODO: 改为JQuery
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

// TODO: 改为JQuery
function getSelectedID() {
    let result = [];
    for (let line of $(".table-box tbody").children()) {
        if (line.children[0].checked) {
            result.push(Number.parseInt(line.children[1].textContent));
        }
    }
    return result;
}

function deleteSelected() {
    let list = getSelectedID();
    console.log(list);
    for (let i = 0; i < goodsList.length; i++) {
        if (list.includes(goodsList[i].id)) {
            goodsList.splice(i--, 1);
        }
    }
    refresh();
}

// 这个函数返回一个函数
function funcSetSelectedSale(bool) {
    return function () {
        let list = getSelectedID();
        for (let item of goodsList)
            if (list.includes(item.id)) item.sale = bool;
        refresh();
    };
}


// 筛选
function filter(list) {
    let id = Number.parseInt($("#filter-id").val());
    let name = $("#filter-name").val();
    let priceMin = Number.parseInt($("#filter-price-min").val());
    let priceMax = Number.parseInt($("#filter-price-max").val());
    let keyword = $("#filter-keyword").val();
    let type = $("#filter-type").val();
    let sale = $("#filter-sale").val();

    let filteredList = [];

    for (let goods of list) {
        if (
            (!id || goods.id === id)
            && (name === "" || RegExp("\\S*" + name + "\\S*").test(goods.name))
            && (!priceMax || goods.price <= priceMax)
            && (!priceMin || goods.price >= priceMin)
            && (keyword === "" || RegExp("\\S*" + keyword + "\\S*").test(goods.info))
            && (type === "" || RegExp("\\S*" + type + "\\S*").test(goods.type))
            && ((sale === "all") || (sale === "sale" && goods.sale) || (sale === "unlisted" && !goods.sale))
        ) {
            filteredList.push(goods);
        }
    }
    return filteredList;
}
