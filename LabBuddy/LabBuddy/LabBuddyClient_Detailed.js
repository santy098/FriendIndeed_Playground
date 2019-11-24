var UsernameFromSession;
var CartArray = [];

window.onload = function () {
    UsernameFromSession = sessionStorage.getItem("Username");

    var d = new Date();
    var dateH = d.toLocaleDateString();
    var timeH = d.toLocaleTimeString();

    setInterval(function () {
        var UN = UsernameFromSession;

        //document.getElementById("EntityID").textContent = UN + " " + dateH + " " + timeH;

        document.getElementById("EntityID").textContent = UN;
        document.getElementById("EntityID").style.fontSize = "24px";
    }, 1000);

    document.getElementById("Price_Compare_Div").textContent = "Price comparison and selection happens here"
    var now = new Date();
    var millisTill10 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 13, 52, 0, 0) - now;
    if (millisTill10 < 0) {
        millisTill10 += 86400000; // it's after 10am, try 10am tomorrow.
    }
    setTimeout(function () { alert("It's 13:52 PM Now"); }, millisTill10);
    CartArray = JSON.parse(sessionStorage.getItem("CartArray_FromSession"));

}

window.onbeforeunload = function (e) {
    sessionStorage.setItem("CartArray_FromSession", JSON.stringify(CartArray));
}

function Addto_Cart() {

    var myNode = document.getElementById("TestsOrdered_InvoiceDiv");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }

    // ******************************
    // Table Creation Start
    // ******************************

    var x = document.createElement("TABLE");
    x.setAttribute("id", "InvoiceTable");
    x.setAttribute("class", "table");
    x.style.fontSize = "16px";
    myNode.appendChild(x);

    var head = document.createElement("THEAD");
    head.setAttribute("id", "Head_InvoiceTable");
    document.getElementById("InvoiceTable").appendChild(head);


    var y = document.createElement("TR");
    y.setAttribute("id", "TR_Head_InvoiceTable");
    document.getElementById("Head_InvoiceTable").appendChild(y);

    var bb = document.createElement("TH");
    bb.textContent = "Test Name";
    bb.style.color = "#85C1E9";
    bb.style.textAlign = "center";
    document.getElementById("TR_Head_InvoiceTable").appendChild(bb);

    var cc = document.createElement("TH");
    cc.textContent = "Price";
    cc.style.color = "#85C1E9";
    cc.style.textAlign = "center";
    document.getElementById("TR_Head_InvoiceTable").appendChild(cc);

    var dd = document.createElement("TH");
    dd.textContent = "Discount";
    dd.style.color = "#85C1E9";
    dd.style.textAlign = "center";
    document.getElementById("TR_Head_InvoiceTable").appendChild(dd);

    var aa = document.createElement("TH");
    aa.textContent = "Amount";
    aa.style.color = "#85C1E9";
    aa.style.textAlign = "center";
    document.getElementById("TR_Head_InvoiceTable").appendChild(aa);

    AddToListBottomLHS();
}

function AddToListBottomLHS() {

    var TSTNAMEIP = document.getElementById("TestNameIP").value;
    CartArray.push(TSTNAMEIP);
    alert(CartArray);
    var InvoiceTable_Var = document.getElementById("InvoiceTable");

    for (var j = 0; j < CartArray.length; j++) {
        var rowInvoiceTable = InvoiceTable_Var.insertRow(1);
        var cellT1 = rowInvoiceTable.insertCell(0);
        var cellT2 = rowInvoiceTable.insertCell(1);
        var cellT3 = rowInvoiceTable.insertCell(2);
        var cellT4 = rowInvoiceTable.insertCell(3);

        cellT1.innerHTML = CartArray[j];
        cellT2.innerHTML = "";
        cellT3.innerHTML = "";
        cellT4.innerHTML = "";

        cellT1.style.textAlign = "left";
        cellT2.style.textAlign = "center";
        cellT3.style.textAlign = "center";
        cellT4.style.textAlign = "center";
    }
    // End of Table population for loop





}

function ClearCartArray() { CartArray = []; }