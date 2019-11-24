var UsernameFromSession;


window.onload = function () {
    GetDateTime_Header();
    setInterval(function () {
        GetDateTime_Header();
    }, 1000);
    
    UsernameFromSession = sessionStorage.getItem("Username");
    document.getElementById("EntityID").textContent = UsernameFromSession;
    document.getElementById("EntityID").style.fontWeight = "bold";
}

function ClearInputField() {
        document.getElementById("TestNameIP").value = "";
        document.getElementById("GPIP").value = "";
        document.getElementById("OPIP").value = "";
}

function GetDateTime_Header() {

    var DT_Now = new Date();    
    document.getElementById("HeaderTime").textContent = DT_Now;
    document.getElementById("HeaderTime").style.fontSize = "14px";
}

//******************************************************
// Main Functions Start Here
//******************************************************

function Deposit_Test_Price() {

    var TNIP = document.getElementById("TestNameIP").value;
    var GPIP = document.getElementById("GPIP").value;
    var OPIP = document.getElementById("OPIP").value;
    var ENTIP = UsernameFromSession;

    var DepositObj = {
        
        "TestNameIN": TNIP,
        "GeneralPriceIN": GPIP,
        "OfferPriceIN": OPIP,
        "EntityIN": ENTIP
    }
    $.ajax({
        type: "POST",
        url: "WSMain.asmx/Deposit_Test_Price",
        data: JSON.stringify(DepositObj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: S_Depo_MenuPrice,
        error: E_Depo_MenuPrice
    });

    function S_Depo_MenuPrice() {
        document.getElementById("Submit_Response_H5").textContent = "Submitted Successfully";
        document.getElementById("Submit_Response_H5").style.color = "green";
        setInterval(function () {
            document.getElementById("Submit_Response_H5").textContent = "";
        }, 5000);
    }
    function E_Depo_MenuPrice() {
        document.getElementById("Submit_Response_H5").textContent = "Error. Please Try Again";
        document.getElementById("Submit_Response_H5").style.color = "red";
    }

    ClearInputField();

}

function Refresh_TestTable_View() {
    var GetMenuEntityOBJ = {
        "EntityName": UsernameFromSession
    }


    $.ajax({
        type: "POST",
        url: "WSMain.asmx/Get_Test_Details_For_Table_View",
        data: JSON.stringify(GetMenuEntityOBJ),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: SGetPriceMenu,
        error: EGetPriceMenu
    });

    function SGetPriceMenu(data) {
        var Datain = data.d;
        Datain = Datain.split(">");

        var NameValues = Datain[0].split(",");
        var GPValues = Datain[1].split(",");
        var OPValues = Datain[2].split(",");

        var TableVisual_RHS = document.getElementById("VisualTable");

        for (var i = 0; i < NameValues.length; i++) {
            var row = TableVisual_RHS.insertRow(1);
            var cellr1 = row.insertCell(0);
            var cellr2 = row.insertCell(1);
            var cellr3 = row.insertCell(2);

            cellr1.innerHTML = NameValues[i];
            cellr2.innerHTML = GPValues[i];
            cellr3.innerHTML = OPValues[i];

            cellr1.style.textAlign = "left";
            cellr2.style.textAlign = "center";
            cellr3.style.textAlign = "center";
        }
    }

    function EGetPriceMenu() {
        alert("Network Error Fetching Details. Please Refresh Again");
    }

}


