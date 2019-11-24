var UsernameFromSession;
var CartArray = [], DBTest = [], DBPric = [], CartArray_Prices = [], CartArrayNamesAvailable = [];
var CellT1 = "", CellT2 = "", CellT3 = "", CellT4 = "";
var IDARR_Test = [], IDARR_Pric = [];
var GrandTotal = 0;
var ServiceProviderSelect = 0, MinimumCost_Test = 0; MaximumCost_Test = 0;
var ArrayForTotal = [], EnrolledEntities_ListArrar = [], GP_Indi = [], Entity_Indi = [];

// Hardcoded Zone is Bangalore
var Zone = "Bangalore";


window.onload = function () {
    UsernameFromSession = sessionStorage.getItem("Username");
    ClearCartArray();

    var d = new Date();
    var dateH = d.toLocaleDateString();
    var timeH = d.toLocaleTimeString();

    document.getElementById("EntityID").textContent = UsernameFromSession;
    document.getElementById("EntityID").style.fontSize = "18px";
    document.getElementById("EntityID").style.color = "#7D3C98";

    var now = new Date();
    var millisTill10 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 13, 52, 0, 0) - now;
    if (millisTill10 < 0) {
        millisTill10 += 86400000; // it's after 10am, try 10am tomorrow.
    }
    setTimeout(function () { alert("It's 13:52 PM Now"); }, millisTill10);
    //CartArray = JSON.parse(sessionStorage.getItem("CartArray_FromSession"));

    GetTheTestPricesTotally();
    Get_All_Entity_Enrolled_List();
}

window.onbeforeunload = function (e) {
    sessionStorage.setItem("CartArray_FromSession", JSON.stringify(CartArray));
}

function ClearCartArray() {
    CartArray = [];
}

function Logout() {

    ClearCartArray();
    UsernameFromSession = "";
    location.replace("http://localhost:28711/Login.html");
}

function add(accumulator, a) {
    return accumulator + a;
}

function Get_All_Entity_Enrolled_List() {

    var ZoneObject = {
        "Zone": Zone
    }

    $.ajax({
        type: "POST",
        url: "WSMain.asmx/GetEnrolled_EntitiesList",
        data: JSON.stringify(ZoneObject),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: S_EnrolledList,
        error: E_EnrolledList
    });

    function S_EnrolledList(data) {
        var In_EnrolledList = data.d;
        In_EnrolledList = In_EnrolledList.split(",");
        for (var i = 0; i < In_EnrolledList.length; i++) {
            EnrolledEntities_ListArrar.push(In_EnrolledList[i]);
        }
    }

    function E_EnrolledList() {
        alert("Network Error. Please Try Again");
    }

}

function CheapestSelect() {
    ServiceProviderSelect = 1;
    document.getElementById("PriceDiv1").style.border = "2px solid Green";
    document.getElementById("PriceDiv2").style.border = "none";
    document.getElementById("PriceDiv3").style.border = "none";
}

function FastestSelect() {
    ServiceProviderSelect = 2;
    document.getElementById("PriceDiv2").style.border = "2px solid Green";
    document.getElementById("PriceDiv1").style.border = "none";
    document.getElementById("PriceDiv3").style.border = "none";
}

function PremiumSelect() {
    ServiceProviderSelect = 3;
    document.getElementById("PriceDiv3").style.border = "2px solid Green";
    document.getElementById("PriceDiv2").style.border = "none";
    document.getElementById("PriceDiv1").style.border = "none";
}

function GetTheTestPricesTotally() {

    var GetPrices_Startup = {
        "Entity": "Medall"
    }

    $.ajax({
        type: "POST",
        url: "WSMain.asmx/GetPrices_Startup_WebMethod",
        data: JSON.stringify(GetPrices_Startup),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: GetTest_Vals_Success,
        error: GetTest_Vals_Error
    });

    function GetTest_Vals_Success(data) {

        var InData_Vals = data.d;
        InData_Vals = InData_Vals.split(">");

        var ATest = InData_Vals[0].split(",");
        var APric = InData_Vals[1].split(",");

        for (var i = 0; i < ATest.length; i++) {
            DBTest.push(ATest[i]);
            DBPric.push(APric[i]);
        }
    }

    function GetTest_Vals_Error() {
        alert("Network Error. Please Try Again");
    }

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

    AddToListBottomLHS();
}

function AddToListBottomLHS() {
    GrandTotal = 0;
    var TSTNAMEIP = document.getElementById("TestNameIP").value;
    CartArray.push(TSTNAMEIP);

    var InvoiceTable_Var = document.getElementById("InvoiceTable");
    alert(CartArray);
    for (var i = 0; i < CartArray.length; i++) {

        var rowInvoiceTable = InvoiceTable_Var.insertRow(1);
        cellT1 = rowInvoiceTable.insertCell(0);
        cellT2 = rowInvoiceTable.insertCell(1);

        // Filling up the details for the two Cells

        ///////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////
        var ChkIndiPrice = {
            "TestCheck": CartArray[i]
        }

        $.ajax({
            type: "POST",
            url: "WSMain.asmx/Chech_Individual_Test_Price",
            data: JSON.stringify(ChkIndiPrice),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: GetTest_Vals_Success,
            error: GetTest_Vals_Error
        });

        function GetTest_Vals_Success(data) {

            var In_Indi_Test_Vals = data.d;
            In_Indi_Test_Vals = In_Indi_Test_Vals.split(">");



            var GP_In = In_Indi_Test_Vals[0].split(",");

            var Entity_In = In_Indi_Test_Vals[1].split(",");


            for (var i = 0; i < GP_In.length - 1; i++) {

                GP_Indi.push(GP_In[i]);
                Entity_Indi.push(Entity_Indi[i]);
                alert(GP_Indi);
                MinimumCost_Test = Math.min.apply(Math, GP_Indi);
                MaximumCost_Test = Math.max.apply(Math, GP_Indi);
            }
        }
        //alert(GP_Indi);
        //alert(MinimumCost_Test);
        //alert(MaximumCost_Test);

        function GetTest_Vals_Error() { alert("Network Error. Please Try Again"); }
        ///////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////

        if (ServiceProviderSelect = 1) {
            cellT1.innerHTML = CartArray[i];
            cellT2.innerHTML = MinimumCost_Test;
        }

        if (ServiceProviderSelect = 3) {
            cellT1.innerHTML = CartArray[i];
            cellT2.innerHTML = MaximumCost_Test;
        }
        cellT1.style.textAlign = "center";
        cellT2.style.textAlign = "center";
        //GrandTotal = Number(GrandTotal) + Number(DBPric[j]);




    }

    if (ServiceProviderSelect == "1") {
        document.getElementById("PriceDiv1").textContent = "Cheapest: " + GrandTotal;

    }
    if (ServiceProviderSelect == "2") {
        document.getElementById("PriceDiv1").textContent = "Fastest: " + GrandTotal;
    }
    if (ServiceProviderSelect == "3") {
        document.getElementById("PriceDiv1").textContent = "Premium: " + GrandTotal;
    }

}
