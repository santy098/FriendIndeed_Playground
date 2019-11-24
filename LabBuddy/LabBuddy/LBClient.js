var UsernameFromSession = "";
var ORD_ID_Val = "";
var CartArrayVAR = "", GP_indiVAR = "", TotalCheapVAR = "", EntityCheapVAR = "", CostIndexCheapVAR = "";
var CartArray = [], DBTest = [], DBPric = [], CartArray_Prices = [], CartArrayNamesAvailable = [];
var CellT1 = "", CellT2 = "", CellT3 = "", CellT4 = "";
var IDARR_Test = [], IDARR_Pric = [];
var GrandTotal = 0;
var ServiceProviderSelect = 0, MinimumCost_Test = []; MaximumCost_Test = [];
var ArrayForTotal = [], EnrolledEntities_ListArrar = [], GP_Indi = [], Entity_Indi = [];
var CostIndexCheap = [], CostIndexPremium = [];
var EntityCheap = [], EntityPremium = [];
var EntityCheapArr = [], EntityPremiumArr = [];
var ValidationToken_TestText = 0;
var TotalCheap = 0, TotalPremium = 0;
FinalSelectToken = 0;

///////////// New Arrays
var TestList_ModalArray = [];

// Hardcoded Zone is Bangalore
Zone = "Bangalore";


window.onload = function () {
    UsernameFromSession = sessionStorage.getItem("Username");
    CartArray = [];
    CostIndexCheap = [], CostIndexPremium = [];

    var d = new Date();
    //alert(d)
    document.getElementById("EntityID").textContent = UsernameFromSession;
    document.getElementById("EntityID").style.fontSize = "28px";
    document.getElementById("EntityID").style.color = "#7D3C98";

    var now = new Date();
    var millisTill10 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 13, 52, 0, 0) - now;
    if (millisTill10 < 0) {
        millisTill10 += 86400000; // it's after 10am, try 10am tomorrow.
    }
    setTimeout(function () { alert("It's 13:52 PM Now"); }, millisTill10);
    //CartArray = JSON.parse(sessionStorage.getItem("CartArray_FromSession"));

    //GetTheTestPricesTotally();
    //Get_All_Entity_Enrolled_List();

}

function MainBookNow_Hidden() {

}

window.onbeforeunload = function (e) {
    sessionStorage.setItem("CartArray_FromSession", JSON.stringify(CartArray));
}

function ClearCartArray() {
    CartArray = [];
    Addto_Cart();
    CartArrayVAR = "", GP_indiVAR = "", TotalCheapVAR = "", EntityCheapVAR = "", CostIndexCheapVAR = "";
    CartArray = [], DBTest = [], DBPric = [], CartArray_Prices = [], CartArrayNamesAvailable = [];
    ModalSubmit();
}

function Logout() {

    //ClearCartArray();
    CartArray = [];
    UsernameFromSession = "";
    location.replace("http://friendindeed.in/LabBuddyLogin.html");
}

function add(accumulator, a) {
    return accumulator + a;
}

function ModalClose() {
    document.getElementById("BookNow").style.visibility = "visible";
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

function ORDER() {

    var DateTimeVAR = new Date();

    if (FinalSelectToken == 1) {
        CartArrayVAR = "", GP_indiVAR = "", EntityCheapVAR = "", CostIndexCheapVAR = "";
        for (var i = 0; i < CartArray.length; i++) {
            if (CartArrayVAR.length == 0) {
                CartArrayVAR = CartArray[i];
                GP_indiVAR = GP_Indi[i];
                EntityCheapVAR = EntityCheap[i];
            }
            else {
                CartArrayVAR = CartArrayVAR + "," + CartArray[i];
                GP_indiVAR = GP_indiVAR + "," + GP_Indi[i];
                EntityCheapVAR = EntityCheapVAR + "," + EntityCheap[i];
            }
        }


        for (var j = 0; j < CostIndexCheap.length; j++) {
            if (CostIndexCheapVAR.length == 0) {
                CostIndexCheapVAR = CostIndexCheap[j];
            }
            else {
                CostIndexCheapVAR = CostIndexCheapVAR + "," + CostIndexCheap[j];
            }
        }

        var EconomySelectOBJ = {
            "DateTimeA": DateTimeVAR,
            "TestsOrderedA": CartArrayVAR,
            "TestPricesA": CostIndexCheapVAR,
            "AmountPayableA": TotalCheapVAR,
            "EntityA": EntityCheapVAR,
            "StatusA": "1",
            "OrderedByA": UsernameFromSession,
        }

        $.ajax({
            type: "POST",
            url: "WSMain.asmx/Order_Confirmation_Renewed",
            data: JSON.stringify(EconomySelectOBJ),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: Success_Order_Confirmation,
            error: Error_Order_Confirmation
        });

        function Success_Order_Confirmation(data) {
            //alert(data.d)
            if (data.d == "Success") {
                document.getElementById("ModalConfirm").click();
                setTimeout(function () {
                    location.reload();
                }, 2000);
            }
        }

        function Error_Order_Confirmation() {
            alert("Error Placing Order FINAL. Please Try Again");
        }
    }
    // End of Economy Select


    if (FinalSelectToken == 2) {
        // this is pending as the TAT dimension is not appended to the system yet
    }

    if (FinalSelectToken == 3) {
        var PremiumSelectOBJ = {
            "TestsOrderedA": CartArrayVAR,
            "TestPricesA": CostIndexPremium,
            "AmountPayableA": TotalPremium,
            "EntityA": EntityPremium,
            "StatusA": "1",
            "OrderedByA": UsernameFromSession
        }

        $.ajax({
            type: "POST",
            url: "WSMain.asmx/Order_Confirmation",
            data: JSON.stringify(PremiumSelectOBJ),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: Success_Order_Confirmation,
            error: Error_Order_Confirmation
        });

        function Success_Order_Confirmation() {
            document.getElementById("ModalConfirm").click();
        }

        function Error_Order_Confirmation() { alert("Error Placing Order. Please Try Again"); }
    }
}


function ConfirmFcn() {
    var r = confirm("Are you sure to place the Order?");
    if (r == true) {
        ORDER();
    } else {
    }
}

function CheapestSelect() {
    document.getElementById("divCheapTable").style.border = "1px solid #6C3483";
    document.getElementById("divFastestTable").style.border = "";
    document.getElementById("divPremiumTable").style.border = "";
    FinalSelectToken = 1;
    ConfirmFcn();
}

function FastestSelect() {
    document.getElementById("divCheapTable").style.border = "";
    document.getElementById("divFastestTable").style.border = "1px solid #6C3483";
    document.getElementById("divPremiumTable").style.border = "";
    FinalSelectToken = 2;
    ConfirmFcn();
}

function PremiumSelect() {
    document.getElementById("divCheapTable").style.border = "";
    document.getElementById("divFastestTable").style.border = "";
    document.getElementById("divPremiumTable").style.border = "1px solid #6C3483";
    FinalSelectToken = 3;
    ConfirmFcn();
}

function Addto_Cart() {
    var aaa = document.getElementById("TestNameIP").value;
    var Valid_Input = TestNames.includes(aaa);

    if (Valid_Input = true) {
        Run_AddToCart_AfterValidation();
    }
    //else {
    //    //alert("Wrong Input. Please Select from the Dropdown List");
    //}

    // Validating the Input Test as to the Test exists or not (in the Array)
}

function Run_AddToCart_AfterValidation() {

    var TSTNAMEIP = document.getElementById("TestNameIP").value;
    CartArray.push(TSTNAMEIP);

    var myNode = document.getElementById("TestsListView_inModel");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }

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
    bb.style.color = "#6C3483";
    bb.style.textAlign = "center";
    document.getElementById("TR_Head_InvoiceTable").appendChild(bb);

    var InvoiceTable_Var = document.getElementById("InvoiceTable");

    for (var i = 0; i < CartArray.length; i++) {
        var rowInvoiceTable = InvoiceTable_Var.insertRow(1);
        var cellT1 = rowInvoiceTable.insertCell(0);
        cellT1.innerHTML = CartArray[i];
    }

    //////////////////////////////////////////////////// Getting Prices for all Tests
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    var ChkIndiPrice = {
        "TestCheck": TSTNAMEIP
    }

    $.ajax({
        type: "POST",
        url: "WSMain.asmx/Check_Individual_Test_Price",
        data: JSON.stringify(ChkIndiPrice),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: GetTest_Vals_Success,
        error: GetTest_Vals_Error
    });

    function GetTest_Vals_Success(data) {
        GP_Indi = [], Entity_Indi = [];
        var low = "", high = "";

        var In_Indi_Test_Vals = data.d;
        In_Indi_Test_Vals = In_Indi_Test_Vals.split(">");

        var GP_In = In_Indi_Test_Vals[0].split(",");
        var Entity_In = In_Indi_Test_Vals[1].split(",");

        for (var j = 0; j < GP_In.length - 1; j++) {
            GP_Indi.push(GP_In[j]);
            Entity_Indi.push(Entity_In[j]); // Only to clean the last element with ',' from the WS
        }


        low = Math.min.apply(Math, GP_Indi);
        high = Math.max.apply(Math, GP_Indi);


        var Index_Cheap = GP_Indi.indexOf(low.toString());
        var Index_Premium = GP_Indi.indexOf(high.toString());


        // If cheapest cost is of two entities, then 
        // put both names in the entity column of invoice table

        // code here
        //////////////////////////////////////



        EntityCheap.push(Entity_Indi[Index_Cheap]);
        EntityPremium.push(Entity_Indi[Index_Premium]);

        CostIndexCheap.push(low);
        CostIndexPremium.push(high);

        TotalCheap = CostIndexCheap.reduce(add);
        TotalPremium = CostIndexPremium.reduce(add);

        document.getElementById("CheapestBtn").textContent = "Rs. " + TotalCheap;
        document.getElementById("PremiumBtn").textContent = "Rs. " + TotalPremium;
        document.getElementById("FastestBtn").textContent = "Rs. " + (TotalPremium * 1.5);

        ModalSubmit();


    }
    function GetTest_Vals_Error() { alert("Error getting the Individual Values for the tests. Try Again"); }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////// Getting Prices for all Tests /////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////

    document.getElementById("TestNameIP").value = "";


}

function ModalSubmit() {

    var myNode = document.getElementById("divCheapTable");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }

    // ******************************
    // **** Table Creation Start ****
    // ******************************

    var x = document.createElement("TABLE");
    x.setAttribute("id", "InvoiceTableMain");
    x.setAttribute("class", "table");
    x.style.fontSize = "14px";
    myNode.appendChild(x);

    var head = document.createElement("THEAD");
    head.setAttribute("id", "Head_InvoiceTableMain");
    document.getElementById("InvoiceTableMain").appendChild(head);


    var y = document.createElement("TR");
    y.setAttribute("id", "TR_Head_InvoiceTableMain");
    document.getElementById("Head_InvoiceTableMain").appendChild(y);

    var bb = document.createElement("TH");
    bb.textContent = "Test Name";
    bb.style.color = "#6C3483";
    bb.style.textAlign = "center";
    document.getElementById("TR_Head_InvoiceTableMain").appendChild(bb);

    var cc = document.createElement("TH");
    cc.textContent = "Price";
    cc.style.color = "#6C3483";
    cc.style.textAlign = "center";
    document.getElementById("TR_Head_InvoiceTableMain").appendChild(cc);

    var dd = document.createElement("TH");
    dd.textContent = "Entity";
    dd.style.color = "#6C3483";
    dd.style.textAlign = "center";
    document.getElementById("TR_Head_InvoiceTableMain").appendChild(dd);

    var InvoiceTable_Var = document.getElementById("InvoiceTableMain");

    for (var i = 0; i < CartArray.length; i++) {

        var rowInvoiceTable = InvoiceTable_Var.insertRow(1);
        cellT1 = rowInvoiceTable.insertCell(0);
        cellT2 = rowInvoiceTable.insertCell(1);
        cellT3 = rowInvoiceTable.insertCell(2);

        cellT1.innerHTML = CartArray[i];
        cellT2.innerHTML = CostIndexCheap[i];
        cellT3.innerHTML = EntityCheap[i];

    }

    //////////////////////////////////////////////////////////////////
    ///////////////// Expensive Div Table Start //////////////////////
    //////////////////////////////////////////////////////////////////

    var myNode = document.getElementById("divPremiumTable");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }

    // ******************************
    // Table Creation Start
    // ******************************

    var x = document.createElement("TABLE");
    x.setAttribute("id", "InvoiceTableMainPremium");
    x.setAttribute("class", "table");
    x.style.fontSize = "14px";
    myNode.appendChild(x);

    var head = document.createElement("THEAD");
    head.setAttribute("id", "Head_InvoiceTableMainPremium");
    document.getElementById("InvoiceTableMainPremium").appendChild(head);


    var y = document.createElement("TR");
    y.setAttribute("id", "TR_Head_InvoiceTableMainPremium");
    document.getElementById("Head_InvoiceTableMainPremium").appendChild(y);

    var bb = document.createElement("TH");
    bb.textContent = "Test Name";
    bb.style.color = "#6C3483";
    bb.style.textAlign = "center";
    document.getElementById("TR_Head_InvoiceTableMainPremium").appendChild(bb);

    var cc = document.createElement("TH");
    cc.textContent = "Price";
    cc.style.color = "#6C3483";
    cc.style.textAlign = "center";
    document.getElementById("TR_Head_InvoiceTableMainPremium").appendChild(cc);

    var dd = document.createElement("TH");
    dd.textContent = "Entity";
    dd.style.color = "#6C3483";
    dd.style.textAlign = "center";
    document.getElementById("TR_Head_InvoiceTableMainPremium").appendChild(dd);

    var InvoiceTable_Var = document.getElementById("InvoiceTableMainPremium");

    for (var i = 0; i < CartArray.length; i++) {

        var rowInvoiceTable = InvoiceTable_Var.insertRow(1);
        cellT1 = rowInvoiceTable.insertCell(0);
        cellT2 = rowInvoiceTable.insertCell(1);
        cellT3 = rowInvoiceTable.insertCell(2);

        cellT1.innerHTML = CartArray[i];
        cellT2.innerHTML = CostIndexPremium[i];
        cellT3.innerHTML = EntityPremium[i];
    }

    //document.getElementById("CheapBtn").textContent = "";

    //////////////////////////////////////////////////////////////////
    ///////////////// Expensive Div Table End ////////////////////////
    //////////////////////////////////////////////////////////////////
}

var TestNames = [
    "1st Trimester Down Syndrome Screening Double Marker",
    "Anti Cyclic Citrullinated Peptide (Anti Ccp)",
    "Anti Thyro Peroxidase Antibody (Tpo)",
    "C Reactive Protein (Crp)   Quantitative",
    "Ca 125",
    "Creatinine",
    "Electrolytes (Na  K  Cl)",
    "Estradiol   Oestrogen   E2",
    "Ferritin",
    "Folic Acid   Folate   Serum",
    "Follicle Stimulating Hormone (Fsh)",
    "Free T3  Free T4 & Tsh   Free Tft",
    "Fsh  Lh & Prolactin",
    "Insulin Fasting",
    "Leutinising Hormone (Lh)",
    "Lipid Profile",
    "Liver Function Test",
    "Para Thyroid Hormone (Pth)",
    "Prolactin",
    "Quadruple Marker",
    "Testosterone   Total",
    "Thyroid Profile  Tft( T3  T4  Tsh)",
    "Thyroid Stimulating Hormone  Tsh",
    "Total Prostate Specific Antigen   Psa",
    "Triple Test Markers  Second Trimester",
    "Vitamin B12 (Cyanocobalamin)",
    "Vitamin D (25   Hydroxy Cholecalciferol)",
    "Absolute Eosinophil Count (Aec)",
    "Absolute Neutrophil Count",
    "Acid Phosphatase   Total",
    "Acid Phosphatase   Total & Prostatic Fraction",
    "Adenosine Deaminase (Ada)   Serum",
    "Afb 24 Hrs Sputum",
    "Afb   24 Hrs Urine",
    "Afb   Urine",
    "Afb Culture   Conventional Method",
    "Alanine Aminotransferase (Alt Sgpt)",
    "Albumin",
    "Albumin   Ascitic Fluid",
    "Albumin   Protein   Urine",
    "Alcohol   Blood (Qualitative)",
    "Alcohol   Urine (Qualitative)",
    "Alfa Feto Protein Afp",
    "Alkaline Phosphatase (Alp   Sap)",
    "Ammonia",
    "Amphetamine (Doa)   Urine",
    "Amylase   Serum",
    "Amylase Urine Spot Sample",
    "Ana Profile",
    "Anaerobic Culture",
    "Anca Mpo   P Anca",
    "Anca Pr3   C Anca",
    "Angiotensin Converting Enzyme (Ace)",
    "Anti Cardiolipin Antibody (Acl)   Igg",
    "Anti Cardiolipin Antibody (Acl)   Igm",
    "Anti Dsdna   (Elisa)",
    "Anti Microsomal (Ama)   Anti Thyro Peroxidase (Tpo)",
    "Anti Mullerian Hormone (Amh)",
    "Anti Neutrophil Cytoplasmic Antibody (Anca)",
    "Anti Nuclear Antibodies (Ana)  Elisa",
    "Anti Phospholipid Antibody (Apa)   Igg",
    "Anti Phospholipid Antibody (Apa)   Igm",
    "Anti Streptolysin O (Aso) Titre   Quantitative",
    "Anti Thyroglobulin Antibody (Anti Tg Ab)",
    "Anti Thyroid Antibodies (Ama  Atg)",
    "Antibody To H.Pylori   Total",
    "Antibody To Hepatitis B Surface Antigen   (Anti Hbsag)",
    "Ascitic   Peritoneal Fluid Analysis",
    "Ascitic   Peritoneal Fluid For Culture & Sensitivity   Aerobic",
    "Aspartate Aminotransferase (Ast Sgot)",
    "Aspirated Fluid For Culture & Sensitivity   Aerobic",
    "Barbiturate (Doa)   Urine",
    "Bence Jones Protein   Urine",
    "Benzodiazepine (Doa)   Urine",
    "Beta Human Chorionic Gonadotrophin   Beta Hcg",
    "Bicarbonate Hco3",
    "Bilirubin (Total  Direct & Id)",
    "Biopsy (Extra Large Specimen)",
    "Biopsy (Large Sized Specimen)",
    "Biopsy (Medium Sized Specimen)",
    "Biopsy (Oncology Specimen)",
    "Biopsy (Small Specimen)",
    "Blood Culture & Sensitivity(Enteric & Nonenteric)",
    "Blood Group & Rh Type",
    "Blood Urea Nitrogen (Bun)",
    "Body Fluid For Culture & Sensitivity   Aerobic",
    "Bone Marrow Reporting",
    "Bone Specimen   Medium",
    "Bone Specimen   Small",
    "Bronchial Washing For Culture & Sensitivity   Aerobic",
    "Brucella Agglutinins Test",
    "B Type Natriuretic Peptide   Bnp",
    "C Peptide",
    "Ca 15 3",
    "Ca 19 9",
    "Calcium",
    "Calcium   24 Hrs Urine",
    "Calcium  Urine   Spot Sample",
    "Calcium Creatinine Ratio   24 Hrs Urine",
    "Calcium Creatinine Ratio   Spot Sample   Urine",
    "Carbamazepine   Tegretol (Tdm)",
    "Cardiac Enzymes (Sgot Ck Ckmb Trop I (Qualitative) Ldh)",
    "Catheter Tip For Culture & Sensitivity   Aerobic",
    "Cea (Carcino Embryonic Antigen)",
    "Cerebrospinal Fluid (Csf) Analysis",
    "Cerebrospinal Fluid (Csf) For Culture & Sensitivity   Aerobic",
    "Chikungunya   Igm Antibody (Qualitative)",
    "Chloride",
    "Chloride   Cerebrospinal Fluid (Csf)",
    "Chloride  Urine   Spot Sample",
    "Cholesterol   Body Fluid",
    "Cholesterol Total",
    "Cholinesterase (Pseudocholinesterase)",
    "Cocaine (Doa)   Urine",
    "Complete Blood Count With Esr",
    "Complete Haemogram",
    "Conjunctival Swab For Culture & Sensitivity   Aerobic",
    "Cortisol   4 Pm",
    "Cortisol   8 Am",
    "Cortisol   Random",
    "Creatinine   24 Hrs Urine",
    "Creatinine   Body Fluid",
    "Creatinine Clearance   24 Hrs Urine",
    "Creatinine Clearance   6 Hrs Urine",
    "Creatinine Kinase   Mb   Creatinine Phosphokinase Mb (Ck Mb)",
    "Creatinine Kinase   Creatinine Phosphokinase (Ck Cpk)",
    "Creatinine Urine   Spot Sample",
    "Cytology",
    "Cytomegalo Virus (Cmv) Antibody   Igg",
    "Cytomegalo Virus (Cmv) Antibody   Igm",
    "D Dimer",
    "Dengue Profile (Igg  Igm & Ns1)   Rapid",
    "Dengue Test Camp",
    "Dhea Sulphate",
    "Direct Coombs Test (Dct)",
    "Drain Tip For Culture & Sensitivity   Aerobic",
    "Ear Swab For Culture & Sensitivity   Aerobic",
    "Electrolytes   24 Hrs Urine",
    "Electrolytes   Urine (Spot Sample)",
    "Electrophoresis   Protein",
    "Erythrocyte Sedimentation Rate   Esr",
    "Estriol Unconjugated   E3",
    "Et Tip For Culture & Sensitivity   Aerobic",
    "Eye Swab For Culture & Sensitivity   Aerobic",
    "Fibrin Degradation Product (Fdp) D Dimer",
    "Fluid For Culture & Sensitivity   Aerobic",
    "Fnac   Multiple Sites",
    "Fnac   Single Site",
    "Free Beta Human Chorionic Gonadotrophin (Free B Hcg)",
    "Free Prostatic Specific Antigen (Free & Total)",
    "Free T3 (Ft3)",
    "Free T4 (Ft4)",
    "Fungal Culture",
    "G6pd   Glucose 6 Phosphate Dehydrogenase",
    "Gamma Glutamyl Transferase (G Gt)",
    "Glucose   Fasting",
    "Glucose   Fasting   Blood & Urine",
    "Glucose   Post Dinner",
    "Glucose   Post Lunch",
    "Glucose   Post Prandial (Pp)   Blood & Urine",
    "Glucose   Postprandial",
    "Glucose   Postprandial With Oral Glucose",
    "Glucose   Pre Dinner",
    "Glucose   Pre Lunch",
    "Glucose   Random",
    "Glucose   Random Blood & Urine",
    "Glucose   Synovial Fluid",
    "Glucose Challenge Test (Gct)",
    "Glycosylated Haemoglobin (Hba1c)",
    "Gram S Stain",
    "Haemoglobin Electrophoresis   Hb Electrophoresis",
    "Haemoglobin Hb",
    "Hb  Tc  Dc & Esr",
    "Hb Tc & Dc",
    "Hdl Cholesterol",
    "Hepatitis A Virus Antibody   Igm  Anti Hav Igm",
    "Hepatitis B Core Antibody   Igm (Hbcab   Igm)",
    "Hepatitis B E Antibody   (Anti Hbeag)",
    "Hepatitis B E Antigen   (Hbeag)",
    "Hepatitis B Surface Antigen (Hbsag)   Elisa",
    "Hepatitis B Surface Antigen (Hbsag)   Chemiluminiscence",
    "Hepatitis B Surface Antigen (Hbsag)   Spot   Rapid Test",
    "Hepatitis C Virus Antibody   Igg Total (Anti Hcv)   Elisa",
    "Hepatitis C Virus Antibody (Anti Hcv)   Rapid",
    "Hepatitis C Virus Antibody (Anti Hcv)   Chemiluminiscence",
    "Hepatitis E Virus Antibody   Igm (Anti Hev Igm)",
    "Herpes Simplex Virus (Hsv) 1 & 2 Antibodies Igg",
    "Herpes Simplex Virus (Hsv) 1 & 2 Antibodies   Igm",
    "Herpes Simplex Virus (Hsv) 1 Antibodies   Igg & Igm",
    "Herpes Simplex Virus (Hsv) 2 Antibodies   Igg & Igm",
    "High Sensitive C   Reactive Protein (Hscrp) Quantitative",
    "Hiv 1 & 2 Elisa",
    "Hiv 1 & 2   Chemiluminiscence",
    "Hiv  Spot Rapid Test",
    "Homocysteine Level",
    "Human Growth Hormone  Gh",
    "Immunoglobulin E   Total",
    "India Ink Preparation   Stain For Cryptococcus   Csf",
    "Indirect Coombs Test (Ict)",
    "Inhibin A",
    "Insulin   Postprandial",
    "Insulin Random",
    "Insulin (Oral Glucose   120 Min)",
    "Insulin (Oral Glucose   30 Min)",
    "Insulin (Oral Glucose   60 Min)",
    "Insulin (Oral Glucose   90 Min)",
    "Ionised Calcium",
    "Iron",
    "Iron & Tibc",
    "Iron Profile",
    "Lactate",
    "Lactate Dehydrogenase (Ldh)",
    "Ldl   Cholesterol",
    "Le (Lupus Erythematosus) Cells",
    "Leptospira Antibodies   Igg & Igm   Rapid",
    "Lipase",
    "Lipase",
    "Lipoprotein (A)",
    "Lupus Anticoagulant",
    "Magnesium",
    "Magnesium   24 Hrs Urine",
    "Magnesium  Urine   Spot Sample",
    "Malaria Test Camp",
    "Mean Corpuscular Haemoglobin   Mch",
    "Mean Corpuscular Haemoglobin Concentration   Mchc",
    "Mean Corpuscular Volume Mcv",
    "Microalbumin   Creatinine Ratio  Urine   Spot Sample",
    "Microalbumin  Urine   Spot Sample",
    "Microalbuminuria   24 Hrs Urine",
    "Nail Clipping For Fungus",
    "Nasal Swab For Culture Sensitivity   Aerobic",
    "Nicotine",
    "Nipple Discharge From Both Breasts (R & L)   Cytology",
    "Nipple Discharge From One Breast   Cytology",
    "Opiates (Morphine) (Doa)",
    "Osmolality   Blood",
    "Osmolality   Urine",
    "Packed Cell Volume  Pcv   Hct",
    "Pap Smear By Conventional Method",
    "Partial Thromboplastin Time (Ptt)   Aptt",
    "Peripheral Smear Study   Ps   Pbs",
    "Phenobarbitone",
    "Phenytoin (Eptoin)",
    "Phosphorous   24 Hrs Urine",
    "Phosphorus",
    "Phosphorus  Urine   Spot Sample",
    "Platelet Count  Plt Count",
    "Pleural Fluid Analysis",
    "Pleural Fluid For Culture & Sensitivity   Aerobic",
    "Potassium   24 Hrs Urine",
    "Potassium (K&)",
    "Potassium  Urine   Spot Sample",
    "Progesterone",
    "Protein (Albumin)   24 Hrs Urine",
    "Protein   Creatinine Ratio   24 Hrs Urine",
    "Protein   Creatinine Ratio   Urine   Spot Sample",
    "Protein Estimation  Urine   Spot Sample",
    "Protein Total (Total Protein)",
    "Prothrombin Time   Pt",
    "Pus For Culture & Sensitivity   Aerobic",
    "Quantiferon Tb Gold   Gamma Interferon For Tb",
    "Rapid Malaria Test   Malarial Antigen Test",
    "Rbc Count",
    "Red Cell Indices (Mch  Mchc & Mcv)",
    "Reticulocyte Count",
    "Rheumatoid Arthritis   Ra Factor   Quantitative",
    "Rubella Igg Antibody",
    "Rubella Igm Antibody",
    "Semen For Culture & Sensitivity   Aerobic",
    "Serum Proteins",
    "Serum Transferrin",
    "Sickle Cell Preparation",
    "Skin Scrapings For Fungus (Multiple Sites)",
    "Skin Scrapings For Fungus (Single Site)",
    "Slide Review (For Second Opinion)",
    "Smear For C.Diphtheriae   Klb ( Diptheria)",
    "Smear For Malarial Parasite (Mp)",
    "Smear For Microfilaria (Mf)",
    "Sodium   24 Hours Urine",
    "Sodium (Na&)",
    "Sodium  Urine   Spot Sample",
    "Sputum For Afb",
    "Sputum For Culture And Sensitivity   Aerobic",
    "Stool Analysis   Complete",
    "Stool For Culture & Sensitivity  Aerobic",
    "Stool For Microscopy",
    "Stool For Occult Blood",
    "Stool For Reducing Substances",
    "Suction Tip For Culture & Sensitivity Aerobic",
    "Surveillance Test   Ot Swabs   Anaerobic Culture",
    "Surveillance Test   Ot Swabs   Aerobic Culture",
    "Swab For Culture & Sensitivity   Aerobic",
    "Synovial Fluid For Culture & Sensitivity   Aerobic",
    "Tc & Dc",
    "Testosterone Panel   Androgen Panel",
    "Thc   Tetrahydrocannabinol (Cannabis Marijuana) (Doa)",
    "Throat Swab For Culture & Senstivity   Aerobic",
    "Thyro 5 (T3  T4 Tsh  Free T3 & Free T4)",
    "Thyroglobulin (Tg) Level",
    "Thyroxine   T4",
    "Tissue For Culture & Sensitivity  Aerobic",
    "Tissue Transglutaminase (Ttg) Iga",
    "Tissue Transglutaminase (Ttg)   Igg",
    "Torch Profile   Igg",
    "Torch Profile   Igg & Igm",
    "Torch Profile   Igm",
    "Total Iron Binding Capacity (Tibc)",
    "Total Wbc Count Tc",
    "Toxoplasma   Igg Antibody",
    "Toxoplasma   Igm Antibody",
    "Tracheal Tip For Culture & Sensitivity   Aerobic",
    "Tracheostomy Aspirate For Culture & Sensitivity   Aerobic",
    "Transferrin Saturation",
    "Triglycerides (Tgl)",
    "Triiodothyronine   T3",
    "Troponin I (Qualitative)",
    "Troponin T (Qualitative)",
    "Typhidot   Igg (Qualitative)",
    "Typhidot   Igm (Qualitative)",
    "Urea",
    "Urea   24 Hrs Urine",
    "Urea  Urine   Spot Sample",
    "Urethral Swab For Culture & Sensitivity Aerobic",
    "Uric Acid",
    "Uric Acid   24 Hrs Urine",
    "Urine Complete Analysis",
    "Urine For Bile Salt & Bile Pigment",
    "Urine For Culture & Sensitivity  Aerobic",
    "Urine For Drugs Level (Upto 6 Drugs)",
    "Urine For Drugs Level (Upto 9 Drugs)",
    "Urine For Fungus",
    "Urine For Microscopy Deposit",
    "Urine For Pregnancy Test   Ug",
    "Urine For Reducing Substances",
    "Urine Glucose   Fasting",
    "Urine Glucose   Post Dinner",
    "Urine Glucose   Post Lunch",
];

function Refresh() {
    location.reload();
}

function Tracker() {

    // OrderStart = Order Received
    // AgentAppointed = Executive On the Way ETA: 00 Mins
    // En Route = About to Reach the Lab
    // Processing = Analysis in Progress
    // Completed = Report Ready



}

function Search_OrderID() {
    ORD_ID_Val = document.getElementById("OrderID_Input").value;

    var Get_Order_Details_OBJ = {
        "OrderNumber": ORD_ID_Val,
    }

    $.ajax({
        type: "POST",
        url: "WSMain.asmx/Get_Order_Details",
        data: JSON.stringify(Get_Order_Details_OBJ),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: S_Get_Order_Details,
        error: E_Get_Order_Details
    });

    function S_Get_Order_Details(data) {
        var IN_Ord_Detail_Data11 = data.d;
        var IN_Ord_Detail_Data = IN_Ord_Detail_Data11.split(">");

        var SR = IN_Ord_Detail_Data[0];
        var DT = IN_Ord_Detail_Data[1];
        var TO = IN_Ord_Detail_Data[2];
        var EN = IN_Ord_Detail_Data[3];
        var ST = IN_Ord_Detail_Data[4];

        var myNode = document.getElementById("TrackerMODALd_BodyDIV");
        while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
        }

        var a = document.createElement("H6");
        a.id = "OrderID_H6";
        a.style.textAlign = "left";
        myNode.appendChild(a);

        var x = document.createElement("TABLE");
        x.setAttribute("id", "TrackerMODALd_BodyDIV_Table");
        x.setAttribute("class", "table");
        x.style.fontSize = "12px";
        myNode.appendChild(x);

        var head = document.createElement("THEAD");
        head.setAttribute("id", "Head_TrackerMODALd_Body");
        document.getElementById("TrackerMODALd_BodyDIV_Table").appendChild(head);

        var y = document.createElement("TR");
        y.setAttribute("id", "TR_TrackerMODALd_Body");
        document.getElementById("Head_TrackerMODALd_Body").appendChild(y);

        var bb = document.createElement("TH");
        bb.textContent = "DateTime  ";
        bb.style.color = "#6C3483";
        bb.style.textAlign = "center";
        document.getElementById("TR_TrackerMODALd_Body").appendChild(bb);

        var cc = document.createElement("TH");
        cc.textContent = "Test Name";
        cc.style.color = "#6C3483";
        cc.style.textAlign = "center";
        document.getElementById("TR_TrackerMODALd_Body").appendChild(cc);

        var TrackerTable = document.getElementById("TrackerMODALd_BodyDIV_Table");


        var TrackerTableRow = TrackerTable.insertRow(1);

        var cellT1 = TrackerTableRow.insertCell(0);
        var cellT2 = TrackerTableRow.insertCell(1);

        cellT1.innerHTML = DT;
        cellT2.innerHTML = TO;

        if (ST != 5) {
            cellT1.style.color = "gray";
            cellT2.style.color = "gray";
            document.getElementById("OrderID_H6").textContent = "Order ID: B" + Number(SR * 12) + "Z";
            document.getElementById("OrderID_H6").style.fontSize = "12px";
            document.getElementById("OrderID_H6").style.color = "gray";
        }

        if (ST == 5) {
            cellT1.style.color = "green";
            cellT2.style.color = "green";
            document.getElementById("OrderID_H6").textContent = "Order ID: B" + Number(SR * 12) + "Z - COMPLETED";
            document.getElementById("OrderID_H6").style.fontSize = "12px";
            document.getElementById("OrderID_H6").style.color = "green";
        }

        // Construct the State Diagram From Here

        var NODE = document.getElementById("TrackerMODALd_BodyDIV_StateDiag");
        while (NODE.firstChild) {
            NODE.removeChild(NODE.firstChild);
        }

        var a = document.createElement("H6");
        a.id = "H6_1";
        a.style.textAlign = "left";
        NODE.appendChild(a);

        var aa = document.createElement("H4");
        aa.id = "H4_1";
        aa.style.textAlign = "left";
        NODE.appendChild(aa);

        var aaa = document.createElement("H6");
        aaa.id = "H6_2";
        aaa.style.textAlign = "left";
        NODE.appendChild(aaa);

        var aaaa = document.createElement("H4");
        aaaa.id = "H4_2";
        aaaa.style.textAlign = "left";
        NODE.appendChild(aaaa);

        var aaaaa = document.createElement("H6");
        aaaaa.id = "H6_3";
        aaaaa.style.textAlign = "left";
        NODE.appendChild(aaaaa);

        var aaaaaa = document.createElement("H4");
        aaaaaa.id = "H4_3";
        aaaaaa.style.textAlign = "left";
        NODE.appendChild(aaaaaa);

        var aaaaaaa = document.createElement("H6");
        aaaaaaa.id = "H6_4";
        aaaaaaa.style.textAlign = "left";
        NODE.appendChild(aaaaaaa);

        var aaaaaaaa = document.createElement("H4");
        aaaaaaaa.id = "H4_4";
        aaaaaaaa.style.textAlign = "left";
        NODE.appendChild(aaaaaaaa);

        var aaaaaaaaa = document.createElement("H6");
        aaaaaaaaa.id = "H6_5";
        aaaaaaaaa.style.textAlign = "left";
        NODE.appendChild(aaaaaaaaa);

        // OrderStart = Order Received
        // AgentAppointed = Executive On the Way ETA: 00 Mins
        // En Route = About to Reach the Lab
        // Processing = Analysis in Progress
        // Completed = Report Ready

        document.getElementById("H6_1").textContent = "\u25C9 Order Received";
        document.getElementById("H6_2").textContent = "\u25C9 Executive En Route Pickup";
        document.getElementById("H6_3").textContent = "\u25C9 About to Reach the Lab";
        document.getElementById("H6_4").textContent = "\u25C9 Analysis in Progress";
        document.getElementById("H6_5").textContent = "\u25C9 Report Ready";

        document.getElementById("H6_1").style.marginLeft = "5%";
        document.getElementById("H6_2").style.marginLeft = "5%";
        document.getElementById("H6_3").style.marginLeft = "5%";
        document.getElementById("H6_4").style.marginLeft = "5%";
        document.getElementById("H6_5").style.marginLeft = "5%";

        document.getElementById("H4_1").style.marginLeft = "6%";
        document.getElementById("H4_2").style.marginLeft = "6%";
        document.getElementById("H4_3").style.marginLeft = "6%";
        document.getElementById("H4_4").style.marginLeft = "6%";

        document.getElementById("H4_1").style.color = "gray";
        document.getElementById("H4_2").style.color = "gray";
        document.getElementById("H4_3").style.color = "gray";
        document.getElementById("H4_4").style.color = "gray";

        document.getElementById("H6_1").style.color = "gray";
        document.getElementById("H6_2").style.color = "gray";
        document.getElementById("H6_3").style.color = "gray";
        document.getElementById("H6_4").style.color = "gray";
        document.getElementById("H6_5").style.color = "gray";


        document.getElementById("H4_1").textContent = '\u2758';
        document.getElementById("H4_2").textContent = '\u2758';
        document.getElementById("H4_3").textContent = '\u2758';
        document.getElementById("H4_4").textContent = '\u2758';

        if (ST == 1) {
            document.getElementById("H6_1").style.color = "green";
            document.getElementById("H6_2").style.color = "gray";
            document.getElementById("H6_3").style.color = "gray";
            document.getElementById("H6_4").style.color = "gray";
            document.getElementById("H6_5").style.color = "gray";

            document.getElementById("H6_1").style.fontWeight = "bold";
            document.getElementById("H6_1").textContent = "\u25C9 Order Received - " + DT;
        }

        if (ST == 2) {
            document.getElementById("H6_1").style.color = "green";
            document.getElementById("H6_2").style.color = "green";
            document.getElementById("H6_3").style.color = "gray";
            document.getElementById("H6_4").style.color = "gray";
            document.getElementById("H6_5").style.color = "gray";

            document.getElementById("H6_2").style.fontWeight = "bold";
            document.getElementById("H6_1").textContent = "\u25C9 Order Received - " + DT;
        }

        if (ST == 3) {
            document.getElementById("H6_1").style.color = "green";
            document.getElementById("H6_2").style.color = "green";
            document.getElementById("H6_3").style.color = "green";
            document.getElementById("H6_4").style.color = "gray";
            document.getElementById("H6_5").style.color = "gray";
            document.getElementById("H6_3").style.fontWeight = "bold";
            document.getElementById("H6_1").textContent = "\u25C9 Order Received - " + DT;
        }

        if (ST == 4) {
            document.getElementById("H6_1").style.color = "green";
            document.getElementById("H6_2").style.color = "green";
            document.getElementById("H6_3").style.color = "green";
            document.getElementById("H6_4").style.color = "green";
            document.getElementById("H6_5").style.color = "gray";
            document.getElementById("H6_4").style.fontWeight = "bold";
            document.getElementById("H6_1").textContent = "\u25C9 Order Received - " + DT;
        }

        if (ST == 5) {
            document.getElementById("H6_1").style.color = "green";
            document.getElementById("H6_2").style.color = "green";
            document.getElementById("H6_3").style.color = "green";
            document.getElementById("H6_4").style.color = "green";
            document.getElementById("H6_5").style.color = "green";
            document.getElementById("H6_5").style.fontWeight = "bold";
            document.getElementById("H6_1").textContent = "\u25C9 Order Received - " + DT;
        }


    }

    function E_Get_Order_Details() { alert("Error Getting Order Details. Try Again") }

}