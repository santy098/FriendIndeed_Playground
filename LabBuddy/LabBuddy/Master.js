var txtcontent = ""; var For_D_WS; var Latval = "", 
    Lonval = ""; var Latval2 = "", Lonval2 = ""; var Latval3 = "", Lonval3 = ""; var Latval4 = "", Lonval4 = "";
var ILD_Data_Samples_Final = 0;
var ILDName = "", Lov = "", Lav = "", Lat1 = "", Lon1 = "";
var LocData = "", AllDs = "", PAD_LatLongs, PAD_POPs;
var ILD_Data_Samples_Final1 = 0;
var AllNames;
var SampVals = 0;
var Global_SnC = 0;

$(document).ready(function () {

    document.getElementById("map").innerHTML = "";
    document.getElementById("Home").click();
    //document.getElementById("L2LOne").style.visibility = "hidden";
    //document.getElementById("SnCData").style.visibility = "hidden";
   // document.getElementById("Data1").innerHTML = "Click on the Cluster Icons or zoom on the map to Explore deeper. Numbers indicate the Pick up Points(POP) for the ILD Crew."
    //document.getElementById("Data2").innerHTML = "This also helps in visualizing the Density of a geo location and opportunities to add more POPs"
});
var ILDNAME1A = ("" + "," + "Abhishek" + "," + "Deepak" + "," + "Yeshwanth" + "," + "Manjunath" + "," + "Muneendra" + "," +
                            "Prasanna" + "," + "Puneeth" + "," + "Senthil" + "," + "Somshekhar"
                            + "," + "Anil" + "," + "Kiran" + "," + "Krishna" + "," + "KMurthy" + "," + "Mahesh"
                            + "," + "Puneeth J" + "," + "Sagar" + "," + "Santosh" + "," + "Shivu" + "," + "Gangadhar" + "," + "Arun");
function HomeFcn() {

    //document.getElementById("map").innerHTML = "";
    //document.getElementById("map").style.visibility = "visible";
    document.getElementById("LeftDiv").innerHTML = "Welcome to Medall Friendindeed ILD Dashboard";
    document.getElementById("Data1").innerHTML = "Info/Data";
    document.getElementById("Data2").innerHTML = "Info/Data";
    document.getElementById("Data1").innerHTML = "";
    document.getElementById("Data2").innerHTML = "";
    
    //document.getElementById("map").innerHTML = "";
    document.getElementById("map").innerHTML = "";
    document.getElementById("map").textContent = "Select the ILD Crew Member on the Left hand side panel for Viewing His/Her Location in Realtime.";


    var ILDNameA = ILDNAME1A.split(",");
    for (var i = 1; i < 21; i++) {
        var btn = "Btn" + [i];
        //alert(ILDNameA[i]);
        btn = document.createElement("BUTTON");
        btn.textContent = ILDNameA[i];
        btn.id = "ILD" + [i];
        if (i >= 10) { btn.style.backgroundColor = "#82E0AA"; }
        if (i < 10) { btn.style.backgroundColor = "#48C9B0"; }        
        btn.style.color = "black";
        btn.className = "btn btn-default";
        btn.style.width = "48%";
        document.getElementById("LeftDiv").appendChild(btn);

        btn.addEventListener('click', function (event) {
            CCC(this.id);
        });
    }
}

function PerformanceFcn() {
    //alert(Global_SnC);
    document.getElementById("map").style.visibility = "visible";
    document.getElementById("map").innerHTML = "";
    document.getElementById("Data1").innerHTML = "";
    document.getElementById("Data2").innerHTML = "";

    document.getElementById("Data1").innerHTML = "Table 1 is the Data of POP Visits made by the ILD Crew. Every Day has Planned, Actual and Achieved Visits Data in three columns";
    document.getElementById("Data2").innerHTML = "Table 1 is the Data of Samples and Cash Collected Data. Columns are: From Blue being Today, Yesterday, Day Before, 3 Days Before, Current weeek, Previous week, Current Month and Previous Month";

    if (Global_SnC == 0) {
        var x = document.createElement("TABLE");
        x.setAttribute("id", "L2LOne");
        x.style.border = "1px solid black";
        document.getElementById("map").appendChild(x);
        //document.getElementById("TableDiv").appendChild(x);

        var y = document.createElement("TR");
        y.setAttribute("id", "TrV");
        y.style.border = "1px solid black";
        document.getElementById("L2LOne").appendChild(y);

        var z = document.createElement("TH");
        var t = document.createTextNode("Visits Data");
        z.style.border = "1px solid black";
        z.colSpan = "6";
        z.style.textAlign = "center";
        z.appendChild(t);

        var z1 = document.createElement("TH");
        var t1 = document.createTextNode("Today");
        z1.style.border = "1px solid black";
        z1.setAttribute("id", "TDY");
        z1.colSpan = "3";
        z1.appendChild(t1);
        z1.style.textAlign = "center";

        var z2 = document.createElement("TH");
        var t2 = document.createTextNode("Yday");
        z2.style.border = "1px solid black";
        z2.setAttribute("id", "yday");
        z2.colSpan = "3";
        z2.style.textAlign = "center";

        z2.appendChild(t2);
        var z3 = document.createElement("TH");
        var t3 = document.createTextNode("YDay-1");
        z3.style.border = "1px solid black";
        z3.setAttribute("id", "yyday");
        z3.colSpan = "3";
        z3.style.textAlign = "center";

        z3.appendChild(t3);
        var z4 = document.createElement("TH");
        var t4 = document.createTextNode("YDay-2");
        z4.style.border = "1px solid black";
        z4.setAttribute("id", "yyyday");
        z4.style.textAlign = "center";

        z4.colSpan = "3";
        z4.appendChild(t4);
        var z5 = document.createElement("TH");
        var t5 = document.createTextNode("CurrWeek");
        z5.style.border = "1px solid black";
        z5.setAttribute("id", "currentWeek");
        z5.colSpan = "3";
        z5.appendChild(t5);
        z5.style.textAlign = "center";

        var z6 = document.createElement("TH");
        var t6 = document.createTextNode("PrevWeek");
        z6.style.border = "1px solid black";
        z6.setAttribute("id", "prevWeek");
        z6.colSpan = "3";
        z6.appendChild(t6);
        z6.style.textAlign = "center";

        var z7 = document.createElement("TH");
        var t7 = document.createTextNode("CurrMon");
        z7.style.border = "1px solid black";
        z7.setAttribute("id", "CMonth");
        z7.colSpan = "3";
        z7.appendChild(t7);
        z7.style.textAlign = "center";

        var z8 = document.createElement("TH");
        var t8 = document.createTextNode("PrevMon");
        z8.style.border = "1px solid black";
        z8.setAttribute("id", "PMonth");
        z8.colSpan = "3";
        z8.appendChild(t8);
        z8.style.textAlign = "center";

        document.getElementById("TrV").appendChild(z);
        document.getElementById("TrV").appendChild(z1);
        document.getElementById("TrV").appendChild(z2);
        document.getElementById("TrV").appendChild(z3);
        document.getElementById("TrV").appendChild(z4);
        document.getElementById("TrV").appendChild(z5);
        document.getElementById("TrV").appendChild(z6);
        document.getElementById("TrV").appendChild(z7);
        document.getElementById("TrV").appendChild(z8);

        var w = document.createElement("TR");
        w.setAttribute("id", "TrM");
        w.style.border = "1px solid black";
        document.getElementById("L2LOne").appendChild(w);

        var q1 = document.createElement("TH");
        var r1 = document.createTextNode("ILD Name");
        q1.style.border = "1px solid black";
        q1.appendChild(r1);
        q1.style.textAlign = "center";

        var q2 = document.createElement("TH");
        var r2 = document.createTextNode("SE");
        q2.style.border = "1px solid black";
        q2.appendChild(r2);
        q2.style.textAlign = "center";

        var q3 = document.createElement("TH");
        var r3 = document.createTextNode("Route");
        q3.style.border = "1px solid black";
        q3.appendChild(r3);
        q3.style.textAlign = "center";

        var q4 = document.createElement("TH");
        var r4 = document.createTextNode("Cu");
        q4.style.border = "1px solid black";
        q4.appendChild(r4);
        q4.style.textAlign = "center";

        var q5 = document.createElement("TH");
        var r5 = document.createTextNode("NC");
        q5.style.border = "1px solid black";
        q5.appendChild(r5);
        q5.style.textAlign = "center";

        var q6 = document.createElement("TH");
        var r6 = document.createTextNode("TC");
        q6.style.border = "1px solid black";
        q6.appendChild(r6);
        q6.style.textAlign = "center";

        var q7 = document.createElement("TH");
        var r7 = document.createTextNode("PV");
        q7.style.border = "1px solid black";
        q7.appendChild(r7);
        q7.style.textAlign = "center";

        var q8 = document.createElement("TH");
        var r8 = document.createTextNode("AV");
        q8.style.border = "1px solid black";
        q8.appendChild(r8);
        q8.style.textAlign = "center";

        var q9 = document.createElement("TH");
        var r9 = document.createTextNode("%V");
        q9.style.border = "1px solid black";
        q9.appendChild(r9);
        q9.style.textAlign = "center";

        var q10 = document.createElement("TH");
        var r10 = document.createTextNode("PV");
        q10.style.border = "1px solid black";
        q10.appendChild(r10);
        q10.style.textAlign = "center";

        var q11 = document.createElement("TH");
        var r11 = document.createTextNode("AV");
        q11.style.border = "1px solid black";
        q11.appendChild(r11);
        q11.style.textAlign = "center";

        var q12 = document.createElement("TH");
        var r12 = document.createTextNode("%V");
        q12.style.border = "1px solid black";
        q12.appendChild(r12);
        q12.style.textAlign = "center";

        var q13 = document.createElement("TH");
        var r13 = document.createTextNode("PV");
        q13.style.border = "1px solid black";
        q13.appendChild(r13);
        q13.style.textAlign = "center";

        var q14 = document.createElement("TH");
        var r14 = document.createTextNode("AV");
        q14.style.border = "1px solid black";
        q14.appendChild(r14);
        q14.style.textAlign = "center";

        var q15 = document.createElement("TH");
        var r15 = document.createTextNode("%V");
        q15.style.border = "1px solid black";
        q15.appendChild(r15);
        q15.style.textAlign = "center";

        var q16 = document.createElement("TH");
        var r16 = document.createTextNode("PV");
        q16.style.border = "1px solid black";
        q16.appendChild(r16);
        q16.style.textAlign = "center";

        var q17 = document.createElement("TH");
        var r17 = document.createTextNode("AV");
        q17.style.border = "1px solid black";
        q17.appendChild(r17);
        q17.style.textAlign = "center";

        var q18 = document.createElement("TH");
        var r18 = document.createTextNode("%V");
        q18.style.border = "1px solid black";
        q18.appendChild(r18);
        q18.style.textAlign = "center";

        var q19 = document.createElement("TH");
        var r19 = document.createTextNode("PV");
        q19.style.border = "1px solid black";
        q19.appendChild(r19);
        q19.style.textAlign = "center";

        var q20 = document.createElement("TH");
        var r20 = document.createTextNode("AV");
        q20.style.border = "1px solid black";
        q20.appendChild(r20);
        q20.style.textAlign = "center";

        var q21 = document.createElement("TH");
        var r21 = document.createTextNode("%V");
        q21.style.border = "1px solid black";
        q21.appendChild(r21);
        q21.style.textAlign = "center";

        var q22 = document.createElement("TH");
        var r22 = document.createTextNode("PV");
        q22.style.border = "1px solid black";
        q22.appendChild(r22);
        q22.style.textAlign = "center";

        var q23 = document.createElement("TH");
        var r23 = document.createTextNode("AV");
        q23.style.border = "1px solid black";
        q23.appendChild(r23);
        q23.style.textAlign = "center";

        var q24 = document.createElement("TH");
        var r24 = document.createTextNode("%V");
        q24.style.border = "1px solid black";
        q24.appendChild(r24);
        q24.style.textAlign = "center";

        var q25 = document.createElement("TH");
        var r25 = document.createTextNode("PV");
        q25.style.border = "1px solid black";
        q25.appendChild(r25);
        q25.style.textAlign = "center";

        var q26 = document.createElement("TH");
        var r26 = document.createTextNode("AV");
        q26.style.border = "1px solid black";
        q26.appendChild(r26);
        q26.style.textAlign = "center";

        var q27 = document.createElement("TH");
        var r27 = document.createTextNode("%V");
        q27.style.border = "1px solid black";
        q27.appendChild(r27);
        q27.style.textAlign = "center";

        var q28 = document.createElement("TH");
        var r28 = document.createTextNode("PV");
        q28.style.border = "1px solid black";
        q28.appendChild(r28);
        q28.style.textAlign = "center";

        var q29 = document.createElement("TH");
        var r29 = document.createTextNode("AV");
        q29.style.border = "1px solid black";
        q29.appendChild(r29);
        q29.style.textAlign = "center";

        var q30 = document.createElement("TH");
        var r30 = document.createTextNode("%V");
        q30.style.border = "1px solid black";
        q30.appendChild(r30);
        q30.style.textAlign = "center";


        document.getElementById("TrM").appendChild(q1);
        document.getElementById("TrM").appendChild(q2);
        document.getElementById("TrM").appendChild(q3);
        document.getElementById("TrM").appendChild(q4);
        document.getElementById("TrM").appendChild(q5);
        document.getElementById("TrM").appendChild(q6);
        document.getElementById("TrM").appendChild(q7);
        document.getElementById("TrM").appendChild(q8);
        document.getElementById("TrM").appendChild(q9);
        document.getElementById("TrM").appendChild(q10);
        document.getElementById("TrM").appendChild(q11);
        document.getElementById("TrM").appendChild(q12);
        document.getElementById("TrM").appendChild(q13);
        document.getElementById("TrM").appendChild(q14);
        document.getElementById("TrM").appendChild(q15);
        document.getElementById("TrM").appendChild(q16);
        document.getElementById("TrM").appendChild(q17);
        document.getElementById("TrM").appendChild(q18);
        document.getElementById("TrM").appendChild(q19);
        document.getElementById("TrM").appendChild(q20);
        document.getElementById("TrM").appendChild(q21);
        document.getElementById("TrM").appendChild(q22);
        document.getElementById("TrM").appendChild(q23);
        document.getElementById("TrM").appendChild(q24);
        document.getElementById("TrM").appendChild(q25);
        document.getElementById("TrM").appendChild(q26);
        document.getElementById("TrM").appendChild(q27);
        document.getElementById("TrM").appendChild(q28);
        document.getElementById("TrM").appendChild(q29);
        document.getElementById("TrM").appendChild(q30);
    }

    ////////////////////////////////////////////////////////////////////////////
    //Samples and Cash Data

    var xx = document.createElement("TABLE");
    xx.setAttribute("id", "SnCData");
    xx.style.border = "1px solid black";
    document.getElementById("map").appendChild(xx);
    //document.getElementById("TableDiv").appendChild(xx);

    var yas = document.createElement("TR");
    yas.setAttribute("id", "SnCD");
    yas.style.border = "1px solid black";
    document.getElementById("SnCData").appendChild(yas);

    var s1 = document.createElement("TH");
    var e1 = document.createTextNode("Samples & Cash Data");
    s1.style.border = "1px solid black";
    s1.setAttribute("id", "SDH");
    s1.colSpan = "4";
    s1.appendChild(e1);

    var s2 = document.createElement("TH");
    var e2 = document.createTextNode("Samples");
    s2.style.border = "1px solid black";
    s2.setAttribute("id", "SD");
    s2.colSpan = "8";
    s2.appendChild(e2);

    var s3 = document.createElement("TH");
    var e3 = document.createTextNode("Cash");
    s3.style.border = "1px solid black";
    s3.setAttribute("id", "CD");
    s3.colSpan = "8";
    s3.appendChild(e3);
    ///////////////////////////////////////////////////////////////////////////
    var yas1 = document.createElement("TR");
    yas1.setAttribute("id", "SnCD2");
    yas1.style.border = "1px solid black";
    document.getElementById("SnCData").appendChild(yas1);

    var o1 = document.createElement("TH");
    var l1 = document.createTextNode("ILD Name");
    o1.style.border = "1px solid black";    
    o1.appendChild(l1);

    var o2 = document.createElement("TH");
    var l2 = document.createTextNode("SE");
    o2.style.border = "1px solid black";
    o2.appendChild(l2);

    var o3 = document.createElement("TH");
    var l3 = document.createTextNode("Route");
    o3.style.border = "1px solid black";
    o3.appendChild(l3);

    var o4 = document.createElement("TH");
    var l4 = document.createTextNode("Cu");
    o4.style.border = "1px solid black";
    o4.appendChild(l4);

    var o5 = document.createElement("TH");
    var l5 = document.createTextNode("T");
    o5.style.border = "1px solid black";
    o5.appendChild(l5);

    var o6 = document.createElement("TH");
    var l6 = document.createTextNode("Y");
    o6.style.border = "1px solid black";
    o6.appendChild(l6);

    var o7 = document.createElement("TH");
    var l7 = document.createTextNode("Y-1");
    o7.style.border = "1px solid black";
    o7.appendChild(l7);

    var o8 = document.createElement("TH");
    var l8 = document.createTextNode("Y-2");
    o8.style.border = "1px solid black";
    o8.appendChild(l8);

    var o9 = document.createElement("TH");
    var l9 = document.createTextNode("CW");
    o9.style.border = "1px solid black";
    o9.appendChild(l9);

    var o10 = document.createElement("TH");
    var l10 = document.createTextNode("PW");
    o10.style.border = "1px solid black";
    o10.appendChild(l10);

    var o11 = document.createElement("TH");
    var l11 = document.createTextNode("CM");
    o11.style.border = "1px solid black";
    o11.appendChild(l11);

    var o12 = document.createElement("TH");
    var l12 = document.createTextNode("PM");
    o12.style.border = "1px solid black";
    o12.appendChild(l12);

    var o13 = document.createElement("TH");
    var l13 = document.createTextNode("T");
    o13.style.border = "1px solid black";
    o13.appendChild(l13);

    var o14 = document.createElement("TH");
    var l14 = document.createTextNode("Y");
    o14.style.border = "1px solid black";
    o14.appendChild(l14);

    var o15 = document.createElement("TH");
    var l15 = document.createTextNode("Y-1");
    o15.style.border = "1px solid black";
    o15.appendChild(l15);

    var o16 = document.createElement("TH");
    var l16 = document.createTextNode("Y-2");
    o16.style.border = "1px solid black";
    o16.appendChild(l16);

    var o17 = document.createElement("TH");
    var l17 = document.createTextNode("CW");
    o17.style.border = "1px solid black";
    o17.appendChild(l17);

    var o18 = document.createElement("TH");
    var l18 = document.createTextNode("PW");
    o18.style.border = "1px solid black";
    o18.appendChild(l18);

    var o19 = document.createElement("TH");
    var l19 = document.createTextNode("CM");
    o19.style.border = "1px solid black";
    o19.appendChild(l19);

    var o20 = document.createElement("TH");
    var l20 = document.createTextNode("PM");
    o20.style.border = "1px solid black";
    o20.appendChild(l20);

    o1.style.textAlign = "center";
    o2.style.textAlign = "center";
    o3.style.textAlign = "center";
    o4.style.textAlign = "center";
    o5.style.textAlign = "center";
    o6.style.textAlign = "center";
    o7.style.textAlign = "center";
    o8.style.textAlign = "center";
    o9.style.textAlign = "center";
    o10.style.textAlign = "center";
    o11.style.textAlign = "center";
    o12.style.textAlign = "center";
    o13.style.textAlign = "center";
    o14.style.textAlign = "center";
    o15.style.textAlign = "center";
    o16.style.textAlign = "center";
    o17.style.textAlign = "center";
    o18.style.textAlign = "center";
    o19.style.textAlign = "center";
    o20.style.textAlign = "center";
    s1.style.textAlign = "center";
    s2.style.textAlign = "center";
    s3.style.textAlign = "center";
    
    document.getElementById("SnCD").appendChild(s1);
    document.getElementById("SnCD").appendChild(s2);
    document.getElementById("SnCD").appendChild(s3);
    document.getElementById("SnCD2").appendChild(o1);
    document.getElementById("SnCD2").appendChild(o2);
    document.getElementById("SnCD2").appendChild(o3);
    document.getElementById("SnCD2").appendChild(o4);
    document.getElementById("SnCD2").appendChild(o5);
    document.getElementById("SnCD2").appendChild(o6);
    document.getElementById("SnCD2").appendChild(o7);
    document.getElementById("SnCD2").appendChild(o8);
    document.getElementById("SnCD2").appendChild(o9);
    document.getElementById("SnCD2").appendChild(o10);
    document.getElementById("SnCD2").appendChild(o11);
    document.getElementById("SnCD2").appendChild(o12);
    document.getElementById("SnCD2").appendChild(o13);
    document.getElementById("SnCD2").appendChild(o14);
    document.getElementById("SnCD2").appendChild(o15);
    document.getElementById("SnCD2").appendChild(o16);
    document.getElementById("SnCD2").appendChild(o17);
    document.getElementById("SnCD2").appendChild(o18);
    document.getElementById("SnCD2").appendChild(o19);
    document.getElementById("SnCD2").appendChild(o20);



    document.getElementById("LeftDiv").innerHTML = "";
    document.getElementById("LeftDiv").innerHTML = "Performance Chart of all the ILD Crew Members with Visits, " +
    "Samples Collected and Reports Delivered Data, from Today, till the 3 days before and Current week to Previous Month Trends";
   
    btn1 = document.createElement("BUTTON");
    btn1.textContent = "Load Data";
    btn1.id = "LoadData";
    btn1.className = "btn btn-default";
    btn1.style.marginTop = "2%";
    document.getElementById("LeftDiv").appendChild(btn1);

    btn1.addEventListener('click', function (event) {
        All_ILD_Data();
    });

    btn11 = document.createElement("BUTTON");
    btn11.textContent = "Totals";
    btn11.id = "TotalsBtn";
    btn11.className = "btn btn-default";
    btn11.style.marginTop = "2%";
    btn11.disabled = true;
    document.getElementById("LeftDiv").appendChild(btn11);
    btn11.addEventListener('click', function (event) {
        Totals_Func();
    });

    btn110 = document.createElement("BUTTON");
    btn110.textContent = "AutoMail";
    btn110.id = "MailBtn";
    btn110.className = "btn btn-default";
    btn110.style.marginTop = "2%";
    btn110.style.backgroundColor = "#1ABC9C";
    document.getElementById("LeftDiv").appendChild(btn110);
    btn110.addEventListener('click', function (event) {
        AutoMail();
    });

    
        document.getElementById("L2LOne").style.visibility = "visible";
        document.getElementById("SnCData").style.visibility = "visible";
    
    
}



function AutoMail() {

    //window.location.reload(false);
    //document.getElementById("map").innerHTML = ""; 
    //document.getElementById("PerBtn").click();
    

    var myTableArray = [];
    $("table#L2LOne tr").each(function () {
        var arrayOfThisRow = [];
        var tableData = $(this).find('td');
        if (tableData.length > 0) {
            tableData.each(function () { arrayOfThisRow.push($(this).text()); });
            myTableArray.push(arrayOfThisRow);
        }
    });
    // alert(myTableArray);

    var SMTP_Data_In = {
        "a11": myTableArray[0][0],
        "a12": myTableArray[0][6],
        "a13": myTableArray[0][7],
        "a14": myTableArray[0][8],
        "a15": myTableArray[0][10],
        "a16": myTableArray[0][11],

    }
    $.ajax({
        type: "POST",
        url: "WebService1.asmx/Report_Engine",
        data: JSON.stringify(SMTP_Data_In),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: S_SMTP,
        error: E_SMTP
    });
    function S_SMTP() {

        alert("Success!");

    }
    function E_SMTP() { alert("Error!"); }




}

function ClusterFcn() {

        document.getElementById("map").style.visibility = "visible";
        document.getElementById("LeftDiv").innerHTML = "";
        document.getElementById("Data1").innerHTML = "";
        document.getElementById("Data2").innerHTML = "";
        document.getElementById("map").innerHTML = "";

        //document.getElementById("map").textContent = "Select the ILD Crew Member on the Left hand side panel for Viewing His/Her Route Information";
        document.getElementById("Data1").innerHTML = "Click on the Cluster Icons or zoom on the map to Explore deeper. Numbers indicate the Pick up Points(POP) for the ILD Crew."
        document.getElementById("Data2").innerHTML = "This also helps in visualizing the Density of a geo location and opportunities to add more POPs"

        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 5,
            center: { lat: 21.1458, lng: 79.0882 }
        });

        // Create an array of alphabetical characters used to label the markers.
        var labels = '';

        // Add some markers to the map.
        // Note: The code uses the JavaScript Array.prototype.map() method to
        // create an array of markers based on a given "locations" array.
        // The map() method here has nothing to do with the Google Maps API.
        var markers = locations.map(function (location, i) {
            return new google.maps.Marker({
                position: location,
                label: labels[i % labels.length]
            });
        });

        // Add a marker clusterer to manage the markers.
        var markerCluster = new MarkerClusterer(map, markers,
            { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
    }


function RoutesFcn() {

        document.getElementById("map").style.visibility = "visible";

        document.getElementById("Data1").innerHTML = "";
        document.getElementById("Data2").innerHTML = "";
        document.getElementById("Data1").textContent = "Routes are optimized for time(TAT) and not for the distance"
        document.getElementById("Data2").textContent = "Time of the day is considered for optimization due to the traffic involvement in specific areas"
        document.getElementById("LeftDiv").innerHTML = "";
        //document.getElementById("map").innerHTML = "";
        document.getElementById("map").innerHTML = "Click on the ILD Crew member's name to see his/her route and POPs, along with the Optimized Route TAT";

        var ILDNameA = ILDNAME1A.split(",");
        for (var i = 1; i < 10; i++) {
            var btn = "Btn" + [i];
            //alert(ILDNameA[i]);
            btn = document.createElement("BUTTON");
            btn.textContent = ILDNameA[i];
            btn.id = "ILD" + [i];
            btn.style.backgroundColor = "#F1948A";
            btn.style.color = "black";
            btn.className = "btn btn-default";
            document.getElementById("LeftDiv").appendChild(btn);

            btn.addEventListener('click', function (event) {
                initializeMap(this.id);
            });
        }
    }


    function CCC(clickedID) {

        document.getElementById("ILD1").style.backgroundColor = "#48C9B0";
        document.getElementById("ILD2").style.backgroundColor = "#48C9B0";
        document.getElementById("ILD3").style.backgroundColor = "#48C9B0";
        document.getElementById("ILD4").style.backgroundColor = "#48C9B0";
        document.getElementById("ILD5").style.backgroundColor = "#48C9B0";
        document.getElementById("ILD6").style.backgroundColor = "#48C9B0";
        document.getElementById("ILD7").style.backgroundColor = "#48C9B0";
        document.getElementById("ILD8").style.backgroundColor = "#48C9B0";
        document.getElementById("ILD9").style.backgroundColor = "#48C9B0";
        document.getElementById("ILD10").style.backgroundColor = "#82E0AA";
        document.getElementById("ILD11").style.backgroundColor = "#82E0AA";
        document.getElementById("ILD12").style.backgroundColor = "#82E0AA";
        document.getElementById("ILD13").style.backgroundColor = "#82E0AA";
        document.getElementById("ILD14").style.backgroundColor = "#82E0AA";
        document.getElementById("ILD15").style.backgroundColor = "#82E0AA";
        document.getElementById("ILD16").style.backgroundColor = "#82E0AA";
        document.getElementById("ILD17").style.backgroundColor = "#82E0AA";
        document.getElementById("ILD18").style.backgroundColor = "#82E0AA";
        document.getElementById("ILD19").style.backgroundColor = "#82E0AA";
        document.getElementById("ILD20").style.backgroundColor = "#82E0AA";

        document.getElementById(clickedID).style.backgroundColor = "#F1948A";

        //clickedID = "ILD2"
        Clicked_ID = "Get_" + clickedID + "LL";
        For_D_WS = "WebService1.asmx/Get_" + clickedID + "_Data";
        var ComposedURL = "WebService1.asmx/" + Clicked_ID;
        txtcontent = "";
        //if (clickedID == "ILD1") { ILDName = "Abhishek"; txtcontent = "Abhishek"; document.getElementById("RouteList").innerText = "sanjivini clinic\nShivam Polyclinic\nShreyashree Diagnostic Centre\nSita Bhateja Hospital Richmond\nSri Sathya sai hi-Tech Diagnostic Centre\nsukam speciality clinic"; }
        //if (clickedID == "ILD2") { ILDName = "Deepak"; txtcontent = "Deepak"; document.getElementById("RouteList").innerText = "AV Hospital\nAyusha clinic\nBharth Nursing Home\nBharth Nursing Home\nBTM Manasa clinic\nCare and cure\nCare and Cure\nDepashree Multispeciality hospital\nDepashree Multispeciality hospital\nDevagiri\nDiacare Diagnostic Centre\nG.R Diagnostic and Health Care\nGeetha Diagnostic Centre\nHSR  MCC\nInfilife\nJayanagar Clumax\nKincha hospital";}
        //if (clickedID == "ILD3") { ILDName = "Guruprasad"; txtcontent = "Guruprasad"; document.getElementById("RouteList").innerText = "Tirumala\nUnique Diagnostics and Heatlthcare\nVinayaka\nVivek";}
        //if (clickedID == "ILD4") { ILDName = "Manjunath"; txtcontent = "Manjunath"; document.getElementById("RouteList").innerText = "Adithi Nursing Home\nAdithi Nursing Home\nAgadi Hospital\nAlpha and Omega Diagnostic Research Centre\nAnkit\nAnusha clinical laboratory\nApoorva Diagnostics;" }
        //if (clickedID == "ILD5") { ILDName = "Muneendra"; txtcontent = "Muneendra"; document.getElementById("RouteList").innerText = "New spandana Diagnostic\nClumax Padmanabhanagar\nParijma Medical Centre wilson garden\nPark View health Care\nPatil Diaagnostic\nProcare\nPWCC\nRAMS Diagnostic Lab";}
        //if (clickedID == "ILD6") { ILDName = "Prasanna"; txtcontent = "Prasanna"; document.getElementById("RouteList").innerText = "kumarswamy layout\nKumarswamy layout MCC\nLalitha Diagnostic\nLCC siddapura gate\nmagamanpallya lcc\nMaiya Hospital\nManipal Diagnostics\nMathru Multi speciality hospital\nMCC1041 - R R Nagar\nMedplus"; }
        //if (clickedID == "ILD7") { ILDName = "Puneeth"; txtcontent = "Puneeth"; document.getElementById("RouteList").innerText = "Medplus Arkere\nMiracle Diagnostic\nNagarathna hospital\nNano Diagnostic"; }
        //if (clickedID == "ILD8") { ILDName = "Senthil"; txtcontent = "Senthil"; document.getElementById("RouteList").innerText = "Samarth BTM\nSamarth Gandibazaar\nSamarth KR Road\n";}
        //if (clickedID == "ILD9") { ILDName = "Somashekhar"; txtcontent = "Somashekhar"; document.getElementById("RouteList").innerText = ""; }

        $.ajax({
            type: "POST",
            url: ComposedURL,
            data: JSON.stringify(),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: Suc1,
            error: Err1
        });

        function Err1() { //alert("LatLong Retreival Error") 
        }
        function Suc1(data) {
            LocData = data.d;
            LocData = LocData.split(",");
            Latval4 = parseFloat(LocData[0]);
            Lonval4 = parseFloat(LocData[1]);


            var options = {
                zoom: 16,
                center: new google.maps.LatLng(Latval4, Lonval4)
            }

            var LatLng = Latval4 + "," + Lonval4;
            var map = new google.maps.Map(document.getElementById('map'), options);
            // Array of markers
            var markers = [
                {
                    coords: new google.maps.LatLng(Latval4, Lonval4),
                    content: txtcontent
                }
            ];

            // Loop through markers
            for (var i = 0; i < markers.length; i++) {
                // Add marker
                addMarker(markers[i]);
            }

            // Add Marker Function
            function addMarker(props) {
                var marker = new google.maps.Marker({
                    position: props.coords,
                    map: map,
                    //icon:props.iconImage
                });
                // Check for customicon
                if (props.iconImage) {
                    // Set icon image
                    marker.setIcon(props.iconImage);
                }
                // Check content
                if (props.content) {
                    var infoWindow = new google.maps.InfoWindow({
                        content: props.content
                    });
                    marker.addListener('mouseover', function () {
                        infoWindow.open(map, marker);
                    });
                    marker.addListener('mouseout', function () {
                        infoWindow.close(map, marker);
                    });
                }
            }
            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            today1 = new Date();
            var dd = today1.getDate();
            var mm = today1.getMonth() + 1; //January is 0!
            var yyyy = today1.getFullYear();
            today = mm + '/' + dd + '/' + yyyy + ' 00:00:00 AM';
            
            // Get the Samples and Cash Data
            var ILD_Input_Query_Data = {
                "ILD_ID": clickedID,
                "FromDate": today,
            }
            $.ajax({
                type: "POST",
                url: "WebService1.asmx/Get_All_ILD_Data_Full_TODAY",
                data: JSON.stringify(ILD_Input_Query_Data),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: S_ILD_Data,
                error: E_ILD_Data
            });
            function S_ILD_Data(data) {
                var ILD_Data = data.d;

                ILD_Data_Split = ILD_Data.split("<");
                var ILD_Data_Samples = ILD_Data_Split[1].split(",");
                var ILD_Data_Cash = ILD_Data_Split[2].split(",");
                var A_ILD_Data_Samples = Number(0);
                var A_ILD_Data_Cash = Number(0);
                for (var ii = 0; ii < ILD_Data_Samples.length; ii++) {
                    A_ILD_Data_Samples = A_ILD_Data_Samples + Number(ILD_Data_Samples[ii]);
                    A_ILD_Data_Cash = A_ILD_Data_Cash + Number(ILD_Data_Cash[ii]);
                }
                document.getElementById("Data1").innerText = ILDName + " - " + ILD_Data_Samples.length + " POP Visits" + "," + A_ILD_Data_Samples + " Samples and " + A_ILD_Data_Cash + " Collected";                
                
                today1 = new Date();
                var dd = today1.getDate();
                var mm = today1.getMonth() + 1; //January is 0!
                var yyyy = today1.getFullYear();
                today = mm + '/' + dd + '/' + yyyy + ' 00:00:00 AM';

                
                var ILD_Input_Query_Data1 = {
                    "ILD_ID": clickedID,
                    "FromDate": today,
                }
                $.ajax({
                    type: "POST",
                    url: "WebService1.asmx/Get_All_ILD_Data_Full_TODAY",
                    data: JSON.stringify(ILD_Input_Query_Data1),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: S_ILD_Data_LL,
                    error: E_ILD_Data_LL
                });
                function S_ILD_Data_LL(data) {

                    var ILD_Visit_LL1 = data.d;
                    var All_Data_Split = ILD_Visit_LL1.split("<");
                    var ILD_Visit_LL2 = All_Data_Split[0].split("&");
                    var ILD_Visit_Samp = All_Data_Split[1].split("&");
                    var ILD_Visit_Cash = All_Data_Split[2].split("&");

                    //
                    //Padmanabhnagar Center Full Route List (LatLong) for the for loop here
                    //
                    PAD_LatLongs = ("12.93397503,77.58382112" + "&" +
                        "12.12.,77.77." + "&" +
                        "12.92622549,77.56812363" + "&" +
                        "12.94559208,77.57275164" + "&" +
                        "12.869627,77.582080" + "&" +
                        "12.87735,77.58411" + "&" +
                        "12.88799,77.5821" + "&" +
                        "12.89133,7759668" + "&" +
                        "12.89104,77.59478" + "&" + // done
                        "12.90533,77.58583" + "&" +
                        "12.91098,77.57267" + "&" +
                        "12.906810,77.520310" + "&" +
                        "12.90774,77.52116" + "&" +
                        "12.91677,77.51793" + "&" +
                        "12.91972,77.52048" + "&" +
                        "12.9223302,77.4501063" + "&" +
                        "12.9324787,77.4179915" + "&" +
                        "12.9313545,77.5390746" + "&" +
                        "12.90877,77.54916" + "&" +
                        "12.905689,77.4929643" + "&" +
                        "12.9081679,77.5340366" + "&" +
                        "12.8825658,77.4763648" + "&" +
                        "12.9020911,77.4877844" + "&" +
                        "12.9145772,77.5341872" + "&" +
                        "12.9055695,77.4726753" + "&" +
                        "12.90979,77.52078" + "&" +
                        "12.9199025,77.4694283" + "&" +
                        "12.8968426,77.5544354" + "&" +
                        "12.9140427,77.5403065" + "&" +
                        "12.9426052,77.5810728" + "&" +
                        "12.9534387,77.5243318" + "&" +
                        "12.9492278,77.527754" + "&" +
                        "12.9630436,77.5296995" + "&" +
                        "12.9134003,77.5857753" + "&" +
                        "12.9089,77.54881" + "&" +
                        "12.9143,77.54718" + "&" +
                        "12.89254,77.54041" + "&" +
                        "12.90274,77.51986" + "&" +
                        "12.9388476,77.5084997" + "&" +
                        "12.9397937,77.5718006" + "&" +
                        "12.9055117,77.4666815" + "&" +
                        "12.9271999,77.5044985" + "&" +
                        "12.9574076,77.4892095" + "&" +
                        "12.917518,77.545462" + "&" +
                        "12.8905954,77.5418553"
                        );

                    PAD_POPs_Names = ("Clumax Jayanagar" + "&" +
                        "Clumax Padmanabhnagar" + "&" +
                        "Devgiri Hospital" + "&" +
                        "Samarth GandhiBazaar" + "&" +
                        "Depashree Multispeciality hospital" + "&" +
                        "RAMS Diagnostic Lab" + "&" +
                        "Infilife" + "&" +
                        "Adithi Nursing Home" + "&" +
                        "Medplus Arkere" + "&" + // Done
                        "Nano Diagnostic" + "&" +
                        "Bharth Nursing Home" + "&" +
                        "Diacare Diagnostic Centre" + "&" +
                        "Apoorva Diagnostics" + "&" +
                        "Miracle Diagnostic" + "&" +
                        "Shreyashree Diagnostic Centre" + "&" +
                        "Geetha Diagnostic Centre" + "&" +
                        "Sri Sathya sai hi-Tech Diagnostic Centre" + "&" +
                        "Tirumala" + "&" +
                        "G.R Diagnostic and Health Care" + "&" +
                        "Anusha clinical laboratory" + "&" +
                        "Manipal Diagnostics" + "&" +
                        "Mathru Multi speciality hospital" + "&" +
                        "Patil Diagnostics" + "&" +
                        "Sukam speciality clinic" + "&" +
                        "Nagarathna hospital" + "&" +
                        "MCC1041 - R R Nagar " + "&" +
                        "Shivam Polyclinic" + "&" +
                        "Agadi hospital" + "&" +
                        "BTM Manasa clinic" + "&" +
                        "Maiya Hospital" + "&" +
                        "Parijma Medical Centre" + "&" +
                        "Unique Diagnostic & Healthcare Center" + "&" +
                        "Sita Bhateja Hospital" + "&" +
                        "Samarth BTM" + "&" +
                        "New spandana Diagnostic" + "&" +
                        "Alpha and Omega Diagnostic Research Centre" + "&" +
                        "Park View health Care" + "&" +
                        "Lalitha Diagnostic" + "&" +
                        "Anugraha Vithal Hospital" + "&" +
                        "Kincha Hospital" + "&" +
                        "PWCC (Poorna Pragna)" + "&" +
                        "Sanjivini Children's Clinic" + "&" +
                        "Sri Vinayaka Diagnostic Laboratory" + "&" +
                        "Procare Diagnostics" + "&" +
                        "Care and Cure Diagnostics"
                        );

                    var pop_times = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                    var pop_samples = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                    var pop_cash = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                    /////////////////////////////////////////////////
                    // for loop should be applied from here..........
                    AllDs = "";
                    var start = Number(0);
                    var pop_ll = "";
                    for (var i = 0; i < ILD_Visit_LL2.length - 1; i++) {
                        var newLL = ILD_Visit_LL2[i];
                        var ILD_Visit_LL = newLL.split(",");
                        Lav = ILD_Visit_LL[0];
                        Lov = ILD_Visit_LL[1];
                        var POP_LL = PAD_LatLongs.split("&");

                        for (var j = 0; j < POP_LL.length; j++) {
                            var AllLocs = POP_LL[j];
                            var POP_Loca = AllLocs.split(",");
                            lat1 = POP_Loca[0];
                            lon1 = POP_Loca[1];

                            AllNames = PAD_POPs_Names.split("&");  // Says Which Center it is - Name

                            //////////////////////////////////////////////////////////////////////////////
                            var R = 6371000; // Radius of the earth in km
                            var dLat = deg2rad(Lav - lat1);  // deg2rad below
                            var dLon = deg2rad(Lov - lon1);
                            var a =
                                      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                                      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(Lav)) *
                                      Math.sin(dLon / 2) * Math.sin(dLon / 2)
                            ;
                            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                            var d = R * c; // Distance in km
                            //////////////////////////////////////////////////////////////////////////////

                            // Draw FreightPath 
                            //var freightPathCoordinates = [{ lat: 37.772, lng: -122.214 },];
                            //var freightPath = new google.maps.Polyline({
                            //  path: freightPathCoordinates,
                            //geodesic: true,
                            //strokeColor: '#000000',
                            //strokeOpacity: 1.0,
                            //strokeWeight: 2
                            //});

                            //freightPath.setMap(map);

                            if (d < 20) {
                                var LabName = d;
                                start = start + 1;
                                var indi_POP_data = AllNames[j] + "," + ILD_Visit_Samp[i] + "," + ILD_Visit_Cash[i];
                                //alert(indi_POP_data);
                                //alert(AllNames[j] + "\nSamples: " + ILD_Visit_Samp[i] + "\nCash: " + ILD_Visit_Cash[i]);
                                pop_times[j] = pop_times[j] + 1;
                                pop_samples[j] = Number(pop_samples[j]) + Number(ILD_Visit_Samp[i]);
                                pop_cash[j] = Number(pop_cash[j]) + Number(ILD_Visit_Cash[i]);

                                if (start == 1) {
                                    pop_ll = pop_ll + Lav + ',' + Lov
                                }
                                else {
                                    pop_ll = pop_ll + '|' + Lav + ',' + Lov
                                }
                                var myLatLng = {
                                    lat: Number(Lav),
                                    lng: Number(Lov)
                                };
                                var marker = new google.maps.Marker({
                                    position: myLatLng,
                                    title: AllNames[j]
                                });

                                marker.setMap(map);

                            }

                            function deg2rad(deg) {
                                return deg * (Math.PI / 180);
                            }
                        } // End of POP Loop for each ILD 

                    }// End of FOR Loop Main ILD Loop
                    for (var k = 0; k < POP_LL.length; k++) {
                        if (pop_times[k] > 0) {

                            var visi = "", Samp = "", Cash = "", Repo = "", POP = "", row = "";
                            var table = document.getElementById("SuperTable");

                            row = table.insertRow(1);
                            row.style.backgroundColor = "white";
                            POP = row.insertCell(0);
                            visi = row.insertCell(1);
                            Samp = row.insertCell(2);
                            Cash = row.insertCell(3);
                            Repo = row.insertCell(4);
                            POP.innerHTML = AllNames[k];
                            visi.innerHTML = pop_times[k];
                            Samp.innerHTML = pop_samples[k];
                            Cash.innerHTML = pop_cash[k];
                            Repo.innerHTML = "";
                            POP.style.textAlign = "Center";
                            visi.style.textAlign = "Center";
                            POP.style.textAlign = "Center";
                            Samp.style.textAlign = "Center";
                            Cash.style.textAlign = "Center";
                            Repo.style.textAlign = "Center";
                        }
                    }
                    var coordinates = pop_ll.split("|");

                    var flightPlanCoordinates = new Array();
                    for (var i = 0; i < coordinates.length; i++) {
                        var point = new google.maps.LatLng(coordinates[i].split(',')[0], coordinates[i].split(',')[1]);

                        flightPlanCoordinates.push(point);

                    }
                    var flightPath = new google.maps.Polyline({
                        path: flightPlanCoordinates,
                        geodesic: true,
                        strokeColor: '#000000',
                        strokeOpacity: 1.0,
                        strokeWeight: 2
                        //geodesic: true,
                        //strokeColor: '#000000',
                        //strokeOpacity: 1.0,
                        //strokeWeight: 2
                    });
                    //alert(flightPlanCoordinates)
                    flightPath.setMap(map);

                    //var contentString = '<div id="content" style="width: 200px; height: 200px;"><h1>Overlay</h1></div>';
                    //var infowindow = new google.maps.InfoWindow({
                    //  content: contentString
                    //});

                    //google.maps.event.addListener(marker, 'click', function () {
                    //  infowindow.open(map, marker);
                    //});
                    //google.maps.event.addDomListener(window, 'load', initialize);
                }
                function E_ILD_Data_LL() { }

            }
            // alert(ILD_Data_Samples_Final1);
            function E_ILD_Data() { alert("Error getting all the data for the ILDs mentioned.") }
            var citymap = {
                Samarth_GBazaar: {
                    center: { lat: 12.94559208, lng: 77.57275164 },
                },
                Clumax_jayanagar: {
                    center: { lat: 12.93397503, lng: 77.58382112 },
                },
                DevaGiri_Hospital: {
                    center: { lat: 12.92622549, lng: 77.56812363 },
                },
                Clumax_Padmanabhnagar: {
                    center: { lat: 12.9186019, lng: 77.4898171 },
                },
                khincha_Hospital: {
                    center: { lat: 12.9397937, lng: 77.5718006 },
                },
                Alpha_Omega: {
                    center: { lat: 12.9143, lng: 77.54718 },
                },
                ANUSHA_CLINICAL_LABORATORY: {
                    center: { lat: 12.9016731, lng: 77.5429177 },
                },
                Apoorva: {
                    center: { lat: 12.90774, lng: 77.52116 },
                },
                Care_and_Cure: {
                    center: { lat: 12.8920554, lng: 77.5423592 },
                },
                DiaCare: {
                    center: { lat: 12.906810, lng: 77.520310 },
                },
                GR_Diagnostics: {
                    center: { lat: 12.90877, lng: 77.54916 },
                },
                Geetha_Diagnostics: {
                    center: { lat: 12.9223302, lng: 77.4501063 },
                },
                InfiLife: {
                    center: { lat: 12.88799, lng: 77.5821 },
                },
                Lalitha: {
                    center: { lat: 12.90274, lng: 77.51986 },
                },
                Manipal_Diagnostics: {
                    center: { lat: 12.9081679, lng: 77.5340366 },
                },
                Miracle: {
                    center: { lat: 12.91677, lng: 77.51793 },
                },
                Nano_Diagnostics: {
                    center: { lat: 12.90533, lng: 77.58583 },
                },
                New_Spandana: {
                    center: { lat: 12.9089, lng: 77.54881 },
                },
                Park_View: {
                    center: { lat: 12.89254, lng: 77.54041 },
                },
                Patil_Diagnostics: {
                    center: { lat: 12.9020911, lng: 77.4877844 },
                },
                Procare_Diagnostics: {
                    center: { lat: 12.9166161, lng: 77.4761107 },
                },
                Rams_Diagnostics: {
                    center: { lat: 12.87735, lng: 77.58411 },
                },
                Shivam_PolyClinic: {
                    center: { lat: 12.9199025, lng: 77.4694283 },
                },
                ShreeClinic: {
                    center: { lat: 12.9171383, lng: 77.5476748 },
                },
                ShreyaShree_Diagnostics: {
                    center: { lat: 12.91972, lng: 77.52048 },
                },
                Shree_Satya_Sai: {
                    center: { lat: 12.9324787, lng: 77.4179915 },
                },
                Sri_Vinayaka: {
                    center: { lat: 12.9574076, lng: 77.4892095 },
                },
                Thirumala: {
                    center: { lat: 12.9313545, lng: 77.5390746 },
                },
                Unique_Diag: {
                    center: { lat: 12.8968426, lng: 77.5544354 },
                },
                //Vivek_Diag: {
                //    center: { lat: 12., lng: 77. },
                //},
                Adithi_NH: {
                    center: { lat: 12.89133, lng: 77.59668 },
                },
                Agadi_Hosp: {
                    center: { lat: 12.9492278, lng: 77.527754 },
                },
                //Ankitha_Hosp: {
                //    center: { lat: 12., lng: 77. },
                //},
                AV_Hosp: {
                    center: { lat: 12.9388476, lng: 77.5084997 },
                },
                //Ayusha_Clinic: {
                //    center: { lat: 12., lng: 77. },
                //},
                Bharath_NH: {
                    center: { lat: 12.91098, lng: 77.57267 },
                },
                Manasa_BTM: {
                    center: { lat: 12.9140427, lng: 77.5403065 },
                },
                Deepashree_Hosp: {
                    center: { lat: 12.869627, lng: 77.582080 },
                },
                //HSR_LCC: {
                //    center: { lat: 12., lng: 77. },
                //},
                Kumarswamy_LCC: {
                    center: { lat: 12.9166161, lng: 77.4761107 },
                },
                //Siddapura_LCC: {
                //    center: { lat: 12., lng: 77. },
                //},
                //Mangammanpalya_LCC: {
                //    center: { lat: 12., lng: 77. },
                //},
                Maiya_Hosp: {
                    center: { lat: 12.9426052, lng: 77.5810728 },
                },
                Mathru_MSH: {
                    center: { lat: 12.8825658, lng: 77.4763648 },
                },
                MCC_1041_RRNgr: {
                    center: { lat: 12.90979, lng: 77.52078 },
                },
                Medplus_Arikere: {
                    center: { lat: 12.89104, lng: 77.59478 },
                },
                Medplus_Kumarswamy_Lyt: {
                    center: { lat: 12.900841, lng: 77.5593329 },
                },
                Nagarathna_Hosp: {
                    center: { lat: 12.9055695, lng: 77.4726753 },
                },
                Parijma_MC: {
                    center: { lat: 12.9534387, lng: 77.5243318 },
                },
                PWCC: {
                    center: { lat: 12.9055117, lng: 77.4666815 },
                },
                Samarth_BTM: {
                    center: { lat: 12.9134003, lng: 77.5857753 },
                },
                //Samarth_Jay_7: {
                //    center: { lat: 12., lng: 77. },
                //},
                //Samarth_KR_Road: {
                //    center: { lat: 12., lng: 77. },
                //},
                SitaBhateja: {
                    center: { lat: 12.9630436, lng: 77.5296995 },
                },
                Sukum_SC: {
                    center: { lat: 12.9145772, lng: 77.5314872 },
                },
                Sanjivini_Childrens: {
                    center: { lat: 12.9271999, lng: 77.5044985 },
                },////////////////////////////////////////////////////////////////
                wer: {
                    center: { lat: 12.9162421, lng: 77.53172 },
                },
                sfbs: {
                    center: { lat: 12.922107, lng: 77.61392 },
                },
                sdd: {
                    center: { lat: 12.9263422, lng: 77.53898 },
                },
                fuk: {
                    center: { lat: 12.8729327, lng: 77.58133 },
                },
                dfb: {
                    center: { lat: 12.9193084, lng: 77.5404 },
                },
                ////////
                rtye: {
                    center: { lat: 12.9196868, lng: 77.54396 },
                },
                xc: {
                    center: { lat: 12.9609612, lng: 77.49022 },
                },
                dfa: {
                    center: { lat: 12.942459, lng: 77.47732 },
                },
                jg: {
                    center: { lat: 12.9384189, lng: 77.55757 },
                },
                ////////
                ttdf: {
                    center: { lat: 12.9150542, lng: 77.55434 },
                },
                fkd: {
                    center: { lat: 12.927158, lng: 77.52309 },
                },
                dfhssj: {
                    center: { lat: 12.9207962, lng: 77.50351 },
                },
                sdfha: {
                    center: { lat: 12.9210308, lng: 77.53204 },
                },
                shg: {
                    center: { lat: 12.905689, lng: 77.49296 },
                },
                fuyk: {
                    center: { lat: 12.9546086, lng: 77.5214 },
                },
                ////////
                sertb: {
                    center: { lat: 12.9270734, lng: 77.5177 },
                },
                dfhsj: {
                    center: { lat: 12.8704255, lng: 77.62442 },
                },
                dfjdk: {
                    center: { lat: 12.9722576, lng: 77.50879 },
                },
                sfsgrhr: {
                    center: { lat: 12.957389, lng: 77.57218 },
                },
                Sukumdbsb_SC: {
                    center: { lat: 12.9234882, lng: 77.50265 },
                },
                sesya: {
                    center: { lat: 12.9551816, lng: 77.61234 },
                },
                SitaBhfhsjkateja: {
                    center: { lat: 12.8879777, lng: 77.51214 },
                },
                fsfn: {
                    center: { lat: 12.9110237, lng: 77.50847 },
                },
                ftrywb: {
                    center: { lat: 12.9317433, lng: 77.53718 },
                },
                ////////
                ghmd: {
                    center: { lat: 12.9491519, lng: 77.50621 },
                },
                sfgns: {
                    center: { lat: 12.8576528, lng: 77.51908 },
                },
                auyku: {
                    center: { lat: 12.924057, lng: 77.57114 },
                },
                uikuik: {
                    center: { lat: 12.9060633, lng: 77.62193 },
                },
                Sukum_SC: {
                    center: { lat: 12.9437879, lng: 77.53722 },
                },
                Sanjivini_Childrens: {
                    center: { lat: 12.9718368, lng: 77.52587 },
                },
                SitaBhateja: {
                    center: { lat: 12.9591133, lng: 77.60654 },
                },
                Sukum_SC: {
                    center: { lat: 12.9549934, lng: 77.58805 },
                },
                Sanjivini_Childrens: {
                    center: { lat: 12.9409158, lng: 77.5434 },
                },
                SitaBhateja: {
                    center: { lat: 12.9346737, lng: 77.51721 },
                },
                Sukum_SC: {
                    center: { lat: 12.9591934, lng: 77.59279 },
                },
                Sanjivini_Childrens: {
                    center: { lat: 12.9278992, lng: 77.41655 },
                },
                SitaBhateja: {
                    center: { lat: 12.9627732, lng: 77.43418 },
                },
                ////////
                Sukum_SC: {
                    center: { lat: 12.9390139, lng: 77.50676 },
                },
                Sanjivini_Childrens: {
                    center: { lat: 12.9388281, lng: 77.44445 },
                },
                SitaBhateja: {
                    center: { lat: 12.9041963, lng: 77.60577 },
                },////////
                Sukum_SC: {
                    center: { lat: 12.947046, lng: 77.61072 },
                },
                Sanjivini_Childrens: {
                    center: { lat: 12.9630436, lng: 77.5297 },
                },
                SitaBhateja: {
                    center: { lat: 12.9211005, lng: 77.5577 },
                },
                Sukum_SC: {
                    center: { lat: 12.8825658, lng: 77.47636 },
                },
                Sanjivini_Childrens: {
                    center: { lat: 12.9683466, lng: 77.5304 },
                },
                SitaBhateja: {
                    center: { lat: 12.953443, lng: 77.52431 },
                },////////
                Sukum_SC: {
                    center: { lat: 12.913412, lng: 77.6011 },
                },
                Sanjivini_Childrens: {
                    center: { lat: 12.9271999, lng: 77.5045 },
                },
                SitaBhateja: {
                    center: { lat: 12.9324637, lng: 77.59465 },
                },
                Sukum_SC: {
                    center: { lat: 12.9120089, lng: 77.52345 },
                },
                Sanjivini_Childrens: {
                    center: { lat: 12.9444779, lng: 77.57923 },
                },
                SitaBhateja: {
                    center: { lat: 12.9098548, lng: 77.45084 },
                },
                Sukum_SC: {
                    center: { lat: 12.895887, lng: 77.63542 },
                },////////
                Sanjivini_Childrens: {
                    center: { lat: 12.9126611, lng: 77.5213 },
                },
                SitaBhateja: {
                    center: { lat: 12.9258722, lng: 77.50717 },
                },
                Sukum_SC: {
                    center: { lat: 12.9551076, lng: 77.50849 },
                },
                Sanjivini_Childrens: {
                    center: { lat: 12.9426052, lng: 77.51541 },
                },
                SitaBhateja: {
                    center: { lat: 12.9065409, lng: 77.51278 },
                },
                Sukum_SC: {
                    center: { lat: 12.918133, lng: 77.52661 },
                },
                Sanjivini_Childrens: {
                    center: { lat: 12.9570835, lng: 77.49441 },
                },
                SitaBhateja: {
                    center: { lat: 12.926462, lng: 77.54659 },
                },
                Sukum_SC: {
                    center: { lat: 12.9295037, lng: 77.49332 },
                },////////
                Sanjivini_Childrens: {
                    center: { lat: 12.9238229, lng: 77.54128 },
                },
                SitaBhateja: {
                    center: { lat: 12.9297308, lng: 77.5396 },
                },
                Sukum_SC: {
                    center: { lat: 12.942073, lng: 77.55151 },
                },
                Sanjivini_Childrens: {
                    center: { lat: 12.9707236, lng: 77.50364 },
                },
                SitaBhateja: {
                    center: { lat: 12.9227767, lng: 77.41441 },
                },////////
                Sukum_SC: {
                    center: { lat: 12.9727367, lng: 77.51923 },
                },
                Sanjivini_Childrens: {
                    center: { lat: 12.9334216, lng: 77.47257 },
                },
                SitaBhateja: {
                    center: { lat: 12.9173849, lng: 77.49891 },
                },////////
                Sukum_SC: {
                    center: { lat: 12.9273357, lng: 77.51072 },
                },
                Sanjivini_Childrens: {
                    center: { lat: 12.9358334, lng: 77.56827 },
                },
                Sanjivini_Childrens: {
                    center: { lat: 12.9349408, lng: 77.49703 },
                },
                SitaBhateja: {
                    center: { lat: 12.9298717, lng: 77.51563 },
                },
                Sukum_SC: {
                    center: { lat: 12.9207459, lng: 77.54796 },
                },
            };

            for (var city in citymap) {
                // Add the circle for this city to the map.
                var cityCircle = new google.maps.Circle({
                    strokeColor: '#000000',
                    strokeOpacity: 0.8,
                    strokeWeight: 4,
                    fillColor: '#000000',
                    fillOpacity: 0.45,
                    text: "Anoop",
                    map: map,
                    center: citymap[city].center,
                    radius: 100,
                    info: city
                });
            }
            var geocoder = new google.maps.Geocoder;
            var infowindow = new google.maps.InfoWindow;
            geocodeLatLng(geocoder, map, infowindow);

        }
    }

    function geocodeLatLng(geocoder, map, infowindow) {
        //var input = document.getElementById('latlng').value;
        //var latlngStr = 
        var latlng = { lat: parseFloat(Latval4), lng: parseFloat(Lonval4) };
        geocoder.geocode({ 'location': latlng }, function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    map.setZoom(15);
                    var marker = new google.maps.Marker({
                        position: latlng,
                        map: map
                    });
                    document.getElementById("Data2").innerHTML = "<b>Current Crew Location </b>" + results[0].formatted_address;
                    //infowindow.setContent(results[0].formatted_address);
                    //infowindow.open(map, marker);
                } else {
                    window.alert('No results found');
                }
            } else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });
    }
    // End of Success Function Monitoring
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////

    var ILDNAME = "", ILDSE = "", ILDRout = "", PV = "", TSamples = "", TCash = "", ILDNAME1 = "", ILDSE1 = "", ILDRout1 = "", ILDPV = "", ILDPV1 = "";
    var ilname = "", rse = "", rn = "", cus = "", nc = "", tc = "", pv = "", av = "", perv = "", TVisits = "", PERCV = 0, pervJMP = 0, pervJMPWeek = 0,
        pervJMPWeekPre = 0, PERCVdby = 0, PERPrevweek = 0, PERCurrMonth = 0, PERPrevMonth = 0;
    var ilname1 = "", rse1 = "", rn1 = "", cus1 = "", nc1 = "", tc1 = "", pv1 = "", av1 = "", perv1 = "", TVisits1 = "", pervdby = "", pervddby = "";
    var db1 = "", db2 = "", db3 = "", ddb1 = "", ddb2 = "", ddb3 = ""; cw1 = "", cw2 = "", cw3 = ""; pw1 = "", pw2 = "", pw3 = "", cm1 = "", cm2 = "", cm3 = "", pm1 = "", pm2 = "", pm3 = "";
    var GlobalName = "", ILDID = "", TSamples = "", TCash = "", CashData = "", SamplesData = "", SamplesData1 = "", CashData1 = "", SamplesDatat = "";
    var CashData3 = "", SamplesData3 = "", SamplesData2 = "", CashData2 = "";
    var CashData5 = "", SamplesData5 = "", SamplesData4 = "", CashData4 = "";
    var CashData7 = "", SamplesData7 = "", SamplesData6 = "", CashData6 = "";
    var CashData8 = "", SamplesData8 = "", SamplesData9 = "", CashData9 = "";
    var SamplesData10 = "", CashData10 = "", SamplesData11 = "", CashData11 = "";
    var SamplesData12 = "", CashData12 = "", SamplesData13 = "", CashData13 = "";
    var TSamples = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // 10 Values, and NOT 9
    var TCash = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // 10 Values, and NOT 9
    var TSamples_Length = ""; var m = 1, TSamples1 = 0, TCash1 = 0; var k = 23, TSamples11 = 0, TCash11 = 0; TSamples111 = 0, TCash111 = 0;
    var TSamples1111 = 0, TCash1111 = 0, TSamples1111 = 0, TCash1111 = 0, TSamples11111 = 0, TCash11111 = 0, TSamples1t = 0, TCash1t = 0;
    DTT = new Date;
    var TSamples_Length = "", TDate = "", yesterday = "", Daybefore = "", DayDaybefore = "", SWeekBefore = "", EWeekBefore = "";
    var click_token = 0, TSamples111116 = 0, TCash111116 = 0; TSamples1111161 = 0, TCash1111161 = 0;
    var sy = "", sdb = "", sddb = "", scw = "", spw = "", scm = "", spm = "";
    var cy = "", cdb = "", cddb = "", ccw = "", cpw = "", ccm = "", cpm = "";
    var Tpv = 0, Tav = 0, Tperv = 0;
    var DelayCnt = 0, Password = "";
    var La1 = "", La2 = "", Lo1 = "", Lo2 = "", TotalDistance = 0;
    var CLU_JAY_LL = "12.933765,77.583839", PasswordInit = "";
    var FY = "", Fdb = "", Fddb = "", F3db = "", Fcw = "", Fpw = "", Fcm = "", Fpm = "";
    var TY = "", Tdb = "", Tddb = "", Tcw = "", Tpw = "", Tcm = "", Tpm = "", today1 = "", today = "", tomo = "";
    var ILDCust = 0, ILDCust_New = 0, WeekNumber1 = 0, WeekNumber, CurrMonth, PrevMonth;
    var t1 = "", t2 = "", t3 = "", PERCVtdy = "", st = "", ct = "";
    var ptT = 0, atT = 0, aptT = 0, ptY = 0, atY = 0, aptY = 0, ptYY = 0, atYY = 0, aptYY = 0, ptYYY = 0, atYYY = 0, aptYYY = 0, ptCW = 0, atCW = 0, aptCW = 0, ptPW = 0, atPW = 0, aptPW = 0, ptCM = 0, atCM = 0, aptCM = 0, ptPM = 0, atPM = 0, aptPM = 0;
    var stT = 0, ctT = 0, stY = 0, ctY = 0, stYY = 0, ctYY = 0, stYYY = 0, ctYYY = 0, stCW = 0, ctCW = 0, stPWEE = 0, ctPWEE = 0, stCM = 0, ctCM = 0, stPM = 0, ctPM = 0;
    var vptt = 0, vatt = 0, vpptt = 0, vpty = 0, vaty = 0, vppty = 0, vptyy = 0, vatyy = 0, vpptyy = 0, vptyyy = 0, vatyyy = 0, vpptyyy = 0, vptcw = 0, vatcw = 0, vpptcw = 0, vptpw = 0, vatpw = 0, vpptpw = 0, vptcm = 0, vatcm = 0, vpptcm = 0, vptpm = 0, vatpm = 0, vpptpm = 0;
    var MonthName = "", PMonName = "";





    ////////////////////////////////////////
    // Insert the Query for Only L2L visits
    ////////////////////////////////////////

    function Login() {

        //PasswordInit = document.getElementById("usr").value;
        PasswordInit = "fiildp!!";
        if (PasswordInit == "fiildp!!") {
            Password = "OK";
            $('#myModal').modal('hide');
            //document.getElementById("L2LOne").style.visibility = "visible";
            //document.getElementById("SnCData").style.visibility = "visible";
            All_ILD_Data();
        }
        if (PasswordInit != "fiildp!!") {
            $('#myModal').modal('show');
            document.getElementById("usr").style.backgroundColor = "#F1948A";
        }
    }

    ILDNAME1 = ("" + "," + "Abhishek" + "," + "Deepak" + "," + "Yeshwanth" + "," + "Manjunath" + "," + "Muneendra" + "," +
                            "Prasanna" + "," + "Puneeth" + "," + "Senthil" + "," + "Somshekhar"
                            + "," + "Anil" + "," + "Arun" + "," + "Gangadhar" + "," + "Kiran" + "," + "Krishna"
                            + "," + "Krishnamurthy" + "," + "Mahadev" + "," + "Mahesh" + "," + "Muniraju" + "," + "Puneeth HK" + "," + "Kiran A"
                            + "," + "Sagar"+ "," + "Santosh"+ "," + "Shivu");
    ILDSE1 = ("" + "," + "NA" + "," + "NA" + "," + "NA" + "," + "NA" + "," + "NA" + "," + "NA" + "," + "NA" + "," + "NA" + "," + "NA"
        + "," + "NA" + "," + "NA" + "," + "NA" + "," + "NA" + "," + "NA" + "," + "NA" + "," + "NA" + "," + "NA" + "," + "NA"
        + "," + "NA" + "," + "NA" + "," + "NA" + "," + "NA" + "," + "NA");
    ILDRout1 = ("" + "," + "PNB01" + "," + "PNB02" + "," + "GR" + "," + "JAY06" + "," + "GR" + "," +
        "JAY04" + "," + "JAY04" + "," + "JAYCOMB" + "," + "JAYCOMB" + "," +
        "JAY04" + "," + "JAY04" + "," + "JAYCOMB" + "," + "JAYCOMB" + "," +
        "JAY04" + "," + "JAY04" + "," + "JAYCOMB" + "," + "JAYCOMB" + "," +
        "JAY04" + "," + "JAY04" + "," + "JAYCOMB" + "," + "JAYCOMB" + "," +
        "JAY04" + "," + "JAY04");
    ILDPV1 = ("" + "," + "12" + "," + "52" + "," + "6" + "," + "12" + "," + "13" + "," + "32" + "," + "15" + "," + "12" + "," + "8"
        + "," + "30" + "," + "12" + "," + "24" + "," + "39" + "," + "10" + "," + "10" + "," + "4" + "," + "12" + "," + "24"
        + "," + "36" + "," + "4" + "," + "33" + "," + "12" + "," + "4");
    PV = "166";
    var ILDCust1 = ("" + "," + "2" + "," + "23" + "," + "3" + "," + "6" + "," + "7" + "," + "10" + "," + "4" + "," + "4" + "," + "6"
        + "," + "0" + "," + "0" + "," + "0" + "," + "0" + "," + "0" + "," + "0" + "," + "0" + "," + "0" + "," + "0"
        + "," + "0" + "," + "0" + "," + "0" + "," + "0" + "," + "0");
    var ILDCust_New1 = ("" + "," + "0" + "," + "1" + "," + "0" + "," + "0" + "," + "0" + "," + "0" + "," + "0" + "," + "1" + "," + "0"
        + "," + "0" + "," + "0" + "," + "0" + "," + "0" + "," + "0" + "," + "0" + "," + "0" + "," + "0" + "," + "0"
        + "," + "0" + "," + "0" + "," + "0" + "," + "0" + "," + "0");

    /**
         * Returns the week number for this date.  dowOffset is the day of week the week
         * "starts" on for your locale - it can be from 0 to 6. If dowOffset is 1 (Monday),
         * the week returned is the ISO 8601 week number.
         * @param int dowOffset
         * @return int
         */
    Date.prototype.getWeek = function (dowOffset) {
        /*getWeek() was developed by Nick Baicoianu at MeanFreePath: http://www.meanfreepath.com */

        dowOffset = typeof (dowOffset) == 'int' ? dowOffset : 0; //default dowOffset to zero
        var newYear = new Date(this.getFullYear(), 0, 1);
        var day = newYear.getDay() - dowOffset; //the day of week the year begins on
        day = (day >= 0 ? day : day + 7);
        var daynum = Math.floor((this.getTime() - newYear.getTime() -
        (this.getTimezoneOffset() - newYear.getTimezoneOffset()) * 60000) / 86400000) + 1;
        var weeknum;
        //if the year starts before the middle of a week
        if (day < 4) {
            weeknum = Math.floor((daynum + day - 1) / 7) + 1;
            if (weeknum > 52) {
                nYear = new Date(this.getFullYear() + 1, 0, 1);
                nday = nYear.getDay() - dowOffset;
                nday = nday >= 0 ? nday : nday + 7;
                /*if the next year starts before the middle of
                  the week, it is week #1 of that year*/
                weeknum = nday < 4 ? 1 : 53;
            }
        }
        else {
            weeknum = Math.floor((daynum + day - 1) / 7);
        }
        return weeknum;
    };



    function All_ILD_Data() {
        Password = "OK";
        if (Password == "OK") {


            /////////////////////////////////////////////////////////////////////////////////
            ////////////////////////////// Week Number //////////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////

            WeekNumber1 = new Date(); // month number starts from 0
            // or like this
            //var mydate = new Date('March 3, 2011');
            //alert(mydate.getWeek());
            WeekNumber = WeekNumber1.getWeek();
            if (Global_SnC == 0) {
                //document.getElementById("currentWeek").innerHTML = "Week " + WeekNumber;
                //document.getElementById("prevWeek").innerHTML = "Week " + (WeekNumber - 1);
            }
            today1 = new Date();
            var dd = today1.getDate();
            var mm = today1.getMonth() + 1; //January is 0!
            var yyyy = today1.getFullYear();
            if (dd < 10) {
                dd = '0' + dd;
            }
            today = mm + '/' + dd + '/' + yyyy + ' 00:00:00 AM';

            CurrMonth = mm + '/01/2018 00:00:00 AM';
            PrevMonth = (mm - 1) + '/01/2018 00:00:00 AM';
            var PM_Header = mm - 1;
            //alert(mm);
            if (mm = 1) { MonthName = "NOV" }
            if (mm = 2) { MonthName = "JAN"; PMonName = "DEC" }
            if (mm = 3) { MonthName = "FEB"; PMonName = "JAN" }
            if (mm = 4) { MonthName = "MAR"; PMonName = "FEB" }
            //document.getElementById("CMonth").innerHTML = MonthName;
            //document.getElementById("PMonth").innerHTML = PMonName;

            //alert(CurrMonth);
            //alert(PrevMonth);

            tomo = new Date();
            var tom = 1;
            tomo.setDate(tomo.getDate() + tom);
            var ddt = tomo.getDate();
            var mmt = tomo.getMonth() + 1; //January is 0!
            var yyyyt = tomo.getFullYear();
            if (ddt < 10) {
                ddt = '0' + ddt;
            }
            tomo = mmt + '/' + ddt + '/' + yyyyt + ' 00:00:00 AM';

            FY = new Date();
            var one = 1;
            FY.setDate(FY.getDate() - one);
            var d1 = FY.getDate();
            var m1 = FY.getMonth() + 1;
            var y1 = FY.getFullYear();
            if (d1 < 10) {
                d1 = '0' + d1;
            }
            FY = m1 + '/' + d1 + '/' + y1 + ' 00:00:00 AM';
            document.getElementById("yday").innerHTML = d1 + '/' + m1 + '/' + y1;
            //document.getElementById("asy").innerHTML = d1 + '/' + m1 + '/' + y1;
            //document.getElementById("acy").innerHTML = d1 + '/' + m1 + '/' + y1;


            Fdb = new Date();
            var two = 2;
            Fdb.setDate(Fdb.getDate() - two);
            var d2 = Fdb.getDate();
            var m2 = Fdb.getMonth() + 1;
            var y2 = Fdb.getFullYear();
            if (d2 < 10) {
                d2 = '0' + d2;
            }
            Fdb = m2 + '/' + d2 + '/' + y2 + ' 00:00:00 AM';
            document.getElementById("yyday").innerHTML = d2 + '/' + m2 + '/' + y2;
           // document.getElementById("asyy").innerHTML = d2 + '/' + m2 + '/' + y2;
            //document.getElementById("acyy").innerHTML = d2 + '/' + m2 + '/' + y2;


            Fddb = new Date();
            var three = 3;
            Fddb.setDate(Fddb.getDate() - three);
            var d3 = Fddb.getDate();
            var m3 = Fddb.getMonth() + 1;
            var y3 = Fddb.getFullYear();
            if (d3 < 10) {
                d3 = '0' + d3;
            }
            Fddb = m3 + '/' + d3 + '/' + y3 + ' 00:00:00 AM';
            document.getElementById("yyyday").innerHTML = d3 + '/' + m3 + '/' + y3;
            //document.getElementById("asyyy").innerHTML = d3 + '/' + m3 + '/' + y3;
            //document.getElementById("acyyy").innerHTML = d3 + '/' + m3 + '/' + y3;


            F3db = new Date();
            var four = 4;
            F3db.setDate(F3db.getDate() - four);
            var d8 = F3db.getDate();
            var m8 = F3db.getMonth() + 1;
            var y8 = F3db.getFullYear();
            if (d8 < 10) {
                d8 = '0' + d8;
            }
            F3db = m8 + '/' + d8 + '/' + y8 + ' 00:00:00 AM';

            Fcw = new Date();
            var seven = 7;
            Fcw.setDate(Fcw.getDate() - seven);
            var d4 = Fcw.getDate();
            var m4 = Fcw.getMonth() + 1;
            var y4 = Fcw.getFullYear();
            if (d4 < 10) {
                d4 = '0' + d4;
            }
            Fcw = m4 + '/' + d4 + '/' + y4 + ' 00:00:00 AM';

            Fpw = new Date();
            var fourteen = 14;
            Fpw.setDate(Fpw.getDate() - fourteen);
            var d5 = Fpw.getDate();
            var m5 = Fpw.getMonth() + 1;
            var y5 = Fpw.getFullYear();
            if (d5 < 10) {
                d5 = '0' + d5;
            }
            Fpw = m5 + '/' + d5 + '/' + y5 + ' 00:00:00 AM';

            Fcm = new Date();
            var month = 31;
            Fcm.setDate(Fcm.getDate() - month);
            var d6 = Fcm.getDate();
            var m6 = Fcm.getMonth() + 1;
            var y6 = Fcm.getFullYear();
            if (d6 < 10) {
                d6 = '0' + d6;
            }
            Fcm = m6 + '/' + d6 + '/' + y6 + ' 00:00:00 AM';

            Fpm = new Date();
            var prevmonth = 61;
            Fpm.setDate(Fpm.getDate() - prevmonth);
            var d7 = Fpm.getDate();
            var m7 = Fpm.getMonth() + 1;
            var y7 = Fpm.getFullYear();
            if (d7 < 10) {
                d7 = '0' + d7;
            }
            Fpm = m7 + '/' + d7 + '/' + y7 + ' 00:00:00 AM';

            if (click_token > 21) {
                //document.getElementById("LoadData").hint = "Done";
                document.getElementById("LoadData").disabled = true;
            }

            //setTimeout(All_ILD_Data, 10500);
            click_token = click_token + 1;

            ILDNAME = ILDNAME1.split(",");
            //alert(ILDNAME);
            ILDSE = ILDSE1.split(",");
            ILDRout = ILDRout1.split(",");
            ILDPV = ILDPV1.split(",");
            ILDCust = ILDCust1.split(",");
            ILDCust_New = ILDCust_New1.split(",");

            var Total_Customers = Number(ILDCust[k]) + Number(ILDCust_New[k]);

            DTT = Date();
            TDate = DTT.split(" ");
            yesterday = TDate[2] - 1;
            Daybefore = TDate[2] - 2;
            DayDaybefore = TDate[2] - 3;
            SWeekBefore = TDate[2] - 14;
            EWeekBefore = TDate[2] - 7;

            //document.getElementById("LoadData").textContent = "Loading Data...";

            ILDID = "ILD" + k;
            //ptT = 0, atT = 0, aptT = 0, ptY = 0, atY = 0, aptY = 0, ptYY = 0, atYY = 0, aptYY = 0, ptYYY = 0, atYYY = 0, aptYYY = 0, ptCW = 0, atCW = 0, aptCW = 0, ptPW = 0, atPW = 0, aptPW = 0, ptCM = 0, atCM = 0, aptCM = 0, ptPM = 0, atPM = 0, aptPM = 0;
            //stT = 0, ctT = 0, stY = 0, ctY = 0, stYY = 0, ctYY = 0, stYYY = 0, ctYYY = 0, stCW = 0, ctCW = 0, stPW = 0, ctPW = 0, stCM = 0, ctCM = 0, stPM = 0, ctPM = 0;
            //if (Number(k) < 10) {
            AJCallT();
            //}


            //////////////////////////////////////////////////////////////////////////
            if (Global_SnC == 0) {
                var table = document.getElementById("L2LOne");
                row = table.insertRow(2);
                row.style.backgroundColor = "white";

                ilname = row.insertCell(0); rse = row.insertCell(1); rn = row.insertCell(2);
                cus = row.insertCell(3); nc = row.insertCell(4); tc = row.insertCell(5);
                t1 = row.insertCell(6); t2 = row.insertCell(7); t3 = row.insertCell(8);
                pv = row.insertCell(9); av = row.insertCell(10); perv = row.insertCell(11);
                db1 = row.insertCell(12); db2 = row.insertCell(13); db3 = row.insertCell(14);
                ddb1 = row.insertCell(15); ddb2 = row.insertCell(16); ddb3 = row.insertCell(17);
                cw1 = row.insertCell(18); cw2 = row.insertCell(19); cw3 = row.insertCell(20);
                pw1 = row.insertCell(21); pw2 = row.insertCell(22); pw3 = row.insertCell(23);
                cm1 = row.insertCell(24); cm2 = row.insertCell(25); cm3 = row.insertCell(26);
                pm1 = row.insertCell(27); pm2 = row.insertCell(28); pm3 = row.insertCell(29);

                ilname.innerHTML = ILDNAME[k];
                rse.innerHTML = ILDSE[k];
                rn.innerHTML = ILDRout[k];
                cus.innerHTML = ILDCust[k];
                nc.innerHTML = ILDCust_New[k];
                tc.innerHTML = Total_Customers;
                t1.innerHTML = ILDPV[k];
                t2.innerHTML = "0";
                t3.innerHTML = "0";
                pv.innerHTML = ILDPV[k];
                av.innerHTML = "0";
                perv.innerHTML = "0";
                db1.innerHTML = ILDPV[k];
                db2.innerHTML = "0";
                db3.innerHTML = "0";
                ddb1.innerHTML = ILDPV[k];
                ddb2.innerHTML = "0";
                ddb3.innerHTML = "0";
                cw1.innerHTML = ILDPV[k] * 7;
                cw2.innerHTML = "0";
                cw3.innerHTML = "0";
                pw1.innerHTML = ILDPV[k] * 7;
                pw2.innerHTML = "0";
                pw3.innerHTML = "0";
                cm1.innerHTML = ILDPV[k] * 30;
                cm2.innerHTML = "0";
                cm3.innerHTML = "0";
                pm1.innerHTML = ILDPV[k] * 28;
                pm2.innerHTML = "0";
                pm3.innerHTML = "0";

                pervJMP = ILDPV[k];
                pervJMPWeek = pervJMP * 6.5;
                pervJMPWeekPre = pervJMP * 6.5;

                t3.style.fontWeight = "600"; t3.style.color = "black"; t3.style.backgroundColor = "#A3E4D7";
                perv.style.fontWeight = "600"; db3.style.fontWeight = "600"; ddb3.style.fontWeight = "600"; t3.style.fontWeight = "600";
                cw3.style.fontWeight = "600"; pw3.style.fontWeight = "600";
                db3.style.color = "red"; perv.style.color = "red"; ddb3.style.color = "red"; cw3.style.color = "red"; pw3.style.color = "red";
                ilname.style.fontWeight = "600"; rse.style.textAlign = "Center"; rn.style.textAlign = "Center";
                cus.style.textAlign = "Center"; nc.style.textAlign = "Center"; tc.style.textAlign = "Center";
                pv.style.textAlign = "Center"; av.style.textAlign = "Center"; perv.style.textAlign = "Center";
                db1.style.textAlign = "Center"; db2.style.textAlign = "Center"; db3.style.textAlign = "Center";
                ddb1.style.textAlign = "Center"; ddb2.style.textAlign = "Center"; ddb3.style.textAlign = "Center";
                cw1.style.textAlign = "Center"; cw2.style.textAlign = "Center"; cw3.style.textAlign = "Center";
                pw1.style.textAlign = "Center"; pw2.style.textAlign = "Center"; pw3.style.textAlign = "Center";
                cm1.style.textAlign = "Center"; cm2.style.textAlign = "Center"; cm3.style.textAlign = "Center";
                pm1.style.textAlign = "Center"; pm2.style.textAlign = "Center"; pm3.style.textAlign = "Center";
                t1.style.textAlign = "Center"; t2.style.textAlign = "Center"; t3.style.textAlign = "Center";
            }
            //if (Global_SnC == 0) { 
            var table = document.getElementById("SnCData");
            row1 = table.insertRow(2);
            row1.style.backgroundColor = "white";

            ilname1 = row1.insertCell(0);
            rse1 = row1.insertCell(1);
            rn1 = row1.insertCell(2);
            tc1 = row1.insertCell(3);
            st = row1.insertCell(4);
            sy = row1.insertCell(5);
            sdb = row1.insertCell(6);
            sddb = row1.insertCell(7);
            scw = row1.insertCell(8);
            spw = row1.insertCell(9);
            scm = row1.insertCell(10);
            spm = row1.insertCell(11);        // Samples Section
            ct = row1.insertCell(12);
            cy = row1.insertCell(13);
            cdb = row1.insertCell(14);
            cddb = row1.insertCell(15);
            ccw = row1.insertCell(16);
            cpw = row1.insertCell(17);
            ccm = row1.insertCell(18);
            cpm = row1.insertCell(19);       // Cash Section

            st.style.color = "black"; ct.style.color = "black";
            st.style.fontWeight = "600"; ct.style.fontWeight = "600";

            ilname1.innerHTML = ILDNAME[k];
            rse1.innerHTML = ILDSE[k];
            rn1.innerHTML = ILDRout[k];
            tc1.innerHTML = Total_Customers;
            st.innerHTML = "0";
            ct.innerHTML = "0";
            sy.innerHTML = "0";
            cy.innerHTML = "0";
            cdb.innerHTML = "0";
            sdb.innerHTML = "0";
            sddb.innerHTML = "0";
            cddb.innerHTML = "0";
            scw.innerHTML = "0";
            ccw.innerHTML = "0";
            spw.innerHTML = "0";
            cpw.innerHTML = "0";
            scm.innerHTML = "0";
            ccm.innerHTML = "0";

            ilname1.style.fontWeight = "600";

            ilname1.style.textAlign = "Center";
            st.style.textAlign = "Center";
            ct.style.textAlign = "Center";
            rse1.style.textAlign = "Center";
            rn1.style.textAlign = "Center";
            tc1.style.textAlign = "Center";
            //alert(TSamples1 + ".." + TCash1);
            sy.style.textAlign = "Center";
            cy.style.textAlign = "Center";
            sdb.style.textAlign = "Center";
            cdb.style.textAlign = "Center";
            cddb.style.textAlign = "Center";
            sddb.style.textAlign = "Center";
            scw.style.textAlign = "center";
            ccw.style.textAlign = "center";
            spw.style.textAlign = "center";
            cpw.style.textAlign = "center";
            scm.style.textAlign = "center";
            ccm.style.textAlign = "center";
            st.style.backgroundColor = "#A3E4D7";
            TSamples1 = 0;
            TCash1 = 0;
            ct.style.backgroundColor = "#A3E4D7";

            k = k - 1;

            if (k == 0) {
                k = 23;
                document.getElementById("LoadData").textContent = TDate[1] + " " + TDate[2] + " " + TDate[3] + "  " + TDate[0];
            }
        }

        if (Password != "OK") {
            $('#myModal').modal('show');
        }
    }
    
    function PerformanceFcnSnC() {
        //Global_SnC = 1;
        //PerformanceFcn();
    }

    function Totals_Func() {

        var table = document.getElementById("SnCData");
        row1 = table.insertRow(25);
        row1.style.backgroundColor = "#ABEBC6";

        ilname1 = row1.insertCell(0);
        rse1 = row1.insertCell(1);
        rn1 = row1.insertCell(2);
        tc1 = row1.insertCell(3);
        st = row1.insertCell(4);
        sy = row1.insertCell(5);    // Samples Section
        sdb = row1.insertCell(6);
        sddb = row1.insertCell(7);
        scw = row1.insertCell(8);
        spw = row1.insertCell(9);
        scm = row1.insertCell(10);
        spm = row1.insertCell(11);
        ct = row1.insertCell(12);
        cy = row1.insertCell(13);   // Cash Section
        cdb = row1.insertCell(14);
        cddb = row1.insertCell(15);
        ccw = row1.insertCell(16);
        cpw = row1.insertCell(17);
        ccm = row1.insertCell(18);
        cpm = row1.insertCell(19);


        st.style.backgroundColor = "#A3E4D7";
        ct.style.backgroundColor = "#A3E4D7";
        st.style.color = "black"; ct.style.color = "black";
        st.style.fontWeight = "600"; ct.style.fontWeight = "600";

        ilname1.innerHTML = "TOTAL";
        rse1.innerHTML = "Shreepad Bhat";
        rn1.innerHTML = "Zone-1";
        tc1.innerHTML = "67";
        st.innerHTML = stT;
        ct.innerHTML = ctT;
        sy.innerHTML = stY;
        cy.innerHTML = ctY;
        cdb.innerHTML = ctYY;
        sdb.innerHTML = stYY;
        sddb.innerHTML = stYYY;
        cddb.innerHTML = ctYYY;
        scw.innerHTML = stCW;
        ccw.innerHTML = ctCW;
        spw.innerHTML = stPWEE;
        cpw.innerHTML = ctPWEE;
        scm.innerHTML = stCM;
        ccm.innerHTML = ctCM;
        spm.innerHTML = stPM;
        cpm.innerHTML = ctPM;

        rse1.style.fontWeight = "600";
        rn1.style.fontWeight = "600";
        tc1.style.fontWeight = "600";
        st.style.fontWeight = "600";
        ct.style.fontWeight = "600";
        sy.style.fontWeight = "600";
        cy.style.fontWeight = "600";
        cdb.style.fontWeight = "600";
        sdb.style.fontWeight = "600";
        sddb.style.fontWeight = "600";
        cddb.style.fontWeight = "600";
        scw.style.fontWeight = "600";
        ccw.style.fontWeight = "600";
        spw.style.fontWeight = "600";
        cpw.style.fontWeight = "600";
        scm.style.fontWeight = "600";
        ccm.style.fontWeight = "600";


        ilname1.style.fontWeight = "600";
        ilname1.style.textAlign = "Center";
        st.style.textAlign = "Center";
        ct.style.textAlign = "Center";
        rse1.style.textAlign = "Center";
        rn1.style.textAlign = "Center";
        tc1.style.textAlign = "Center";
        sy.style.textAlign = "Center";
        cy.style.textAlign = "Center";
        sdb.style.textAlign = "Center";
        cdb.style.textAlign = "Center";
        cddb.style.textAlign = "Center";
        sddb.style.textAlign = "Center";
        scw.style.textAlign = "center";
        ccw.style.textAlign = "center";
        spw.style.textAlign = "center";
        cpw.style.textAlign = "center";
        scm.style.textAlign = "center";
        ccm.style.textAlign = "center";
        spm.style.textAlign = "center";
        cpm.style.textAlign = "center";

        ////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////// Visits Data /////////////////////////////////////

        var table = document.getElementById("L2LOne");
        row = table.insertRow(25);
        row.style.backgroundColor = "#ABEBC6";

        ilname = row.insertCell(0); rse = row.insertCell(1); rn = row.insertCell(2);
        cus = row.insertCell(3); nc = row.insertCell(4); tc = row.insertCell(5);
        t1 = row.insertCell(6); t2 = row.insertCell(7); t3 = row.insertCell(8);
        pv = row.insertCell(9); av = row.insertCell(10); perv = row.insertCell(11);
        db1 = row.insertCell(12); db2 = row.insertCell(13); db3 = row.insertCell(14);
        ddb1 = row.insertCell(15); ddb2 = row.insertCell(16); ddb3 = row.insertCell(17);
        cw1 = row.insertCell(18); cw2 = row.insertCell(19); cw3 = row.insertCell(20);
        pw1 = row.insertCell(21); pw2 = row.insertCell(22); pw3 = row.insertCell(23);
        cm1 = row.insertCell(24); cm2 = row.insertCell(25); cm3 = row.insertCell(26);
        pm1 = row.insertCell(27); pm2 = row.insertCell(28); pm3 = row.insertCell(29);

        var PlanVisTot = ILDPV1.split(",");
        var PlanVisTotFin = Number(PlanVisTot[1]) + Number(PlanVisTot[2]) + Number(PlanVisTot[3]) + Number(PlanVisTot[4]) + Number(PlanVisTot[5]) + Number(PlanVisTot[6]) + Number(PlanVisTot[7]) + Number(PlanVisTot[8]) + Number(PlanVisTot[9]) + Number(PlanVisTot[10]) + Number(PlanVisTot[11]) + Number(PlanVisTot[12]) + Number(PlanVisTot[13]) + Number(PlanVisTot[14]) + Number(PlanVisTot[15]) + Number(PlanVisTot[16]) + Number(PlanVisTot[17]) + Number(PlanVisTot[18]) + Number(PlanVisTot[19]) + Number(PlanVisTot[20]) + Number(PlanVisTot[21]) + Number(PlanVisTot[22]) + Number(PlanVisTot[23]);

        ilname.innerHTML = "TOTAL";
        rse.innerHTML = "Shreepad Bhat";
        rn.innerHTML = "Zone-1";
        cus.innerHTML = "63";
        nc.innerHTML = "4";
        tc.innerHTML = "67";
        t1.innerHTML = PlanVisTotFin;
        t2.innerHTML = vatt;
        t3.innerHTML = Math.floor(Number(vatt) / (PlanVisTotFin/100)) + "%";
        pv.innerHTML = PlanVisTotFin;
        av.innerHTML = vaty;
        perv.innerHTML = Math.floor(Number(vaty) / (PlanVisTotFin / 100)) + "%";
        db1.innerHTML = PlanVisTotFin;
        db2.innerHTML = vatyy;
        db3.innerHTML = Math.floor(Number(vatyy) / (PlanVisTotFin / 100)) + "%";
        ddb1.innerHTML = PlanVisTotFin;
        ddb2.innerHTML = vatyyy; 
        ddb3.innerHTML = Math.floor(Number(vatyyy) / (PlanVisTotFin / 100)) + "%";
        cw1.innerHTML = (PlanVisTotFin * 7);
        cw2.innerHTML = vatcw;
        cw3.innerHTML = Math.floor(Number(vatcw) / (PlanVisTotFin * 7 / 100)) + "%";
        pw1.innerHTML = (PlanVisTotFin * 7);
        pw2.innerHTML = vatpw;
        pw3.innerHTML = Math.floor(Number(vatpw) / (PlanVisTotFin * 7 / 100)) + "%";
        cm1.innerHTML = (PlanVisTotFin * 28);
        cm2.innerHTML = vatcm;
        cm3.innerHTML = Math.floor(Number(vatcm) / (PlanVisTotFin * 28 / 100)) + "%";
        pm1.innerHTML = (PlanVisTotFin * 28);
        pm2.innerHTML = vatpm;
        pm3.innerHTML = Math.floor(Number(vatpm) / (PlanVisTotFin * 28 / 100)) + "%";


        pervJMP = ILDPV[k];
        pervJMPWeek = pervJMP * 7;
        pervJMPWeekPre = pervJMP * 14;

        t3.style.fontWeight = "600"; t3.style.color = "red"; t3.style.backgroundColor = "#A3E4D7";
        perv.style.fontWeight = "600"; db3.style.fontWeight = "600"; ddb3.style.fontWeight = "600"; t3.style.fontWeight = "600";
        cw3.style.fontWeight = "600"; pw3.style.fontWeight = "600";
        db3.style.color = "red"; perv.style.color = "red"; ddb3.style.color = "red"; cw3.style.color = "red"; pw3.style.color = "red";
        ilname.style.fontWeight = "600"; rse.style.textAlign = "Center"; rn.style.textAlign = "Center";
        cus.style.textAlign = "Center"; nc.style.textAlign = "Center"; tc.style.textAlign = "Center";
        pv.style.textAlign = "Center"; av.style.textAlign = "Center"; perv.style.textAlign = "Center";
        db1.style.textAlign = "Center"; db2.style.textAlign = "Center"; db3.style.textAlign = "Center";
        ddb1.style.textAlign = "Center"; ddb2.style.textAlign = "Center"; ddb3.style.textAlign = "Center";
        cw1.style.textAlign = "Center"; cw2.style.textAlign = "Center"; cw3.style.textAlign = "Center";
        pw1.style.textAlign = "Center"; pw2.style.textAlign = "Center"; pw3.style.textAlign = "Center";
        t1.style.textAlign = "Center"; t2.style.textAlign = "Center"; t3.style.textAlign = "Center";
        cm1.style.textAlign = "Center"; cm2.style.textAlign = "Center"; cm3.style.textAlign = "Center";
        pm1.style.textAlign = "Center"; pm2.style.textAlign = "Center"; pm3.style.textAlign = "Center";

        document.getElementById("TotalsBtn").textContent = "Totalling Complete"
        document.getElementById("TotalsBtn").disabled = true;
        document.getElementById("TotalsBtn").style.backgroundColor = "#EC7063";

       

    }


    //function All_ILD_Data_Total() {

    //    var ILD_Input_Query = {
    //        "ILD_ID": "ILD9",
    //    }
    //    $.ajax({
    //        type: "POST",
    //        url: "WebService1.asmx/Get_All_ILD_Detail_Total",
    //        data: JSON.stringify(ILD_Input_Query),
    //        contentType: "application/json; charset=utf-8",
    //        dataType: "json",
    //        success: S_ILD_Full_T,
    //        error: E_ILD_Full_T
    //    });

    //    function S_ILD_Full_T(data) {
    //        var InDat = data.d;
    //        var Samples_Total = InDat.split(",");
    //        alert(Samples_Total.length);
    //        TSamplesAll = 0;
    //        for (var j = 0; j < Samples_Total.length-1; j++) {
    //            var TSamplesAll = Number(TSamplesAll) + Number(Samples_Total[j]);
    //        }

    //        //alert(TSamplesAll);            
    //    }
    //    function E_ILD_Full_T() { }
    //}

    function AJCallT() {

        var ILD_Input_Query_Data_td = {
            "ILD_ID": ILDID,
            "FromDate": today,
        }

        $.ajax({
            type: "POST",
            url: "WebService1.asmx/Get_All_ILD_Data_Full_TODAY",
            data: JSON.stringify(ILD_Input_Query_Data_td),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: S_ILD_Full,
            error: E_ILD_Full
        });
        function S_ILD_Full(data) {
            //alert(Fdb + "..." + today1);
            //alert(data.d);
            var DataIN1 = data.d;
            if (data.d.length > 0) {

                var DataINSplitt = DataIN1.split("<");
                //alert(DataINSplit[0]);
                //var KMSData = DataINSplit[0];
                SamplesData1t = DataINSplitt[1];    // Samples values
                SamplesDatat = SamplesData1t.split(","); // Total Samples
                CashData1t = DataINSplitt[2]; // Cash values
                CashDatat = CashData1t.split(","); // Total Cash
                //////////////////////////////////////////////////////////////////////////////////////////////////////////
                if (k == 0) {
                    TSamples1t = 0; TCash1t = 0;
                    for (var j = 0; j < SamplesDatat.length; j++) {
                        TSamples1t = Number(TSamples1t) + Number(SamplesDatat[j]);
                        TCash1t = Number(TCash1t) + Number(CashDatat[j]);
                    }
                    st.innerHTML = TSamples1t;
                    ct.innerHTML = TCash1t;
                    stT = Number(stT) + Number(TSamples1t);
                    ctT = Number(ctT) + Number(TCash1t);// alert(SamplesDatat.length);
                    vatt = Number(vatt) + Number(SamplesDatat.length);
                }

                if (k == 1) {
                    TSamples1t = 0; TCash1t = 0;
                    for (var j = 0; j < SamplesDatat.length; j++) {
                        TSamples1t = Number(TSamples1t) + Number(SamplesDatat[j]);
                        TCash1t = Number(TCash1t) + Number(CashDatat[j]);
                    }
                    st.innerHTML = TSamples1t;
                    ct.innerHTML = TCash1t;
                    stT = Number(stT) + Number(TSamples1t);
                    ctT = Number(ctT) + Number(TCash1t); //alert(SamplesDatat.length);
                    vatt = Number(vatt) + Number(SamplesDatat.length);
                }
                if (k == 2) {
                    TSamples1t = 0; TCash1t = 0;
                    for (var j = 0; j < SamplesDatat.length; j++) {
                        TSamples1t = Number(TSamples1t) + Number(SamplesDatat[j]);
                        TCash1t = Number(TCash1t) + Number(CashDatat[j]);
                    }
                    st.innerHTML = TSamples1t;
                    ct.innerHTML = TCash1t;
                    stT = Number(stT) + Number(TSamples1t);
                    ctT = Number(ctT) + Number(TCash1t);
                    vatt = Number(vatt) + Number(SamplesDatat.length);
                }
                if (k == 3) {
                    TSamples1t = 0; TCash1t = 0;
                    for (var j = 0; j < SamplesDatat.length; j++) {
                        TSamples1t = Number(TSamples1t) + Number(SamplesDatat[j]);
                        TCash1t = Number(TCash1t) + Number(CashDatat[j]);
                    }
                    st.innerHTML = TSamples1t;
                    ct.innerHTML = TCash1t;
                    stT = Number(stT) + Number(TSamples1t);
                    ctT = Number(ctT) + Number(TCash1t);
                    vatt = Number(vatt) + Number(SamplesDatat.length);
                }
                if (k == 4) {
                    TSamples1t = 0; TCash1t = 0;
                    for (var j = 0; j < SamplesDatat.length; j++) {
                        TSamples1t = Number(TSamples1t) + Number(SamplesDatat[j]);
                        TCash1t = Number(TCash1t) + Number(CashDatat[j]);
                    }
                    st.innerHTML = TSamples1t;
                    ct.innerHTML = TCash1t;
                    stT = Number(stT) + Number(TSamples1t);
                    ctT = Number(ctT) + Number(TCash1t);
                    vatt = Number(vatt) + Number(SamplesDatat.length);
                }
                if (k == 5) {
                    TSamples1t = 0; TCash1t = 0;
                    for (var j = 0; j < SamplesDatat.length; j++) {
                        TSamples1t = Number(TSamples1t) + Number(SamplesDatat[j]);
                        TCash1t = Number(TCash1t) + Number(CashDatat[j]);
                    }
                    st.innerHTML = TSamples1t;
                    ct.innerHTML = TCash1t;
                    stT = Number(stT) + Number(TSamples1t);
                    ctT = Number(ctT) + Number(TCash1t);
                    vatt = Number(vatt) + Number(SamplesDatat.length);
                }
                if (k == 6) {
                    TSamples1t = 0; TCash1t = 0;
                    for (var j = 0; j < SamplesDatat.length; j++) {
                        TSamples1t = Number(TSamples1t) + Number(SamplesDatat[j]);
                        TCash1t = Number(TCash1t) + Number(CashDatat[j]);
                    }
                    st.innerHTML = TSamples1t;
                    ct.innerHTML = TCash1t;
                    stT = Number(stT) + Number(TSamples1t);
                    ctT = Number(ctT) + Number(TCash1t);
                    vatt = Number(vatt) + Number(SamplesDatat.length);
                }
                if (k == 7) {
                    TSamples1t = 0; TCash1t = 0;
                    for (var j = 0; j < SamplesDatat.length; j++) {
                        TSamples1t = Number(TSamples1t) + Number(SamplesDatat[j]);
                        TCash1t = Number(TCash1t) + Number(CashDatat[j]);
                    }
                    st.innerHTML = TSamples1t;
                    ct.innerHTML = TCash1t;
                    stT = Number(stT) + Number(TSamples1t);
                    ctT = Number(ctT) + Number(TCash1t);
                    vatt = Number(vatt) + Number(SamplesDatat.length);
                }
                if (k == 8) {
                    TSamples1t = 0; TCash1t = 0;
                    for (var j = 0; j < SamplesDatat.length; j++) {
                        TSamples1t = Number(TSamples1t) + Number(SamplesDatat[j]);
                        TCash1t = Number(TCash1t) + Number(CashDatat[j]);
                    }
                    st.innerHTML = TSamples1t;
                    ct.innerHTML = TCash1t;
                    stT = Number(stT) + Number(TSamples1t);
                    ctT = Number(ctT) + Number(TCash1t);
                    vatt = Number(vatt) + Number(SamplesDatat.length);
                }
                if (k == 9) {
                    TSamples1t = 0; TCash1t = 0;
                    for (var j = 0; j < SamplesDatat.length; j++) {
                        TSamples1t = Number(TSamples1t) + Number(SamplesDatat[j]);
                        TCash1t = Number(TCash1t) + Number(CashDatat[j]);
                    }
                    st.innerHTML = TSamples1t;
                    ct.innerHTML = TCash1t;
                    stT = Number(stT) + Number(TSamples1t);
                    ctT = Number(ctT) + Number(TCash1t);
                    vatt = Number(vatt) + Number(SamplesDatat.length);
                }

                if (k == 10) {
                    TSamples1t = 0; TCash1t = 0;
                    for (var j = 0; j < SamplesDatat.length; j++) {
                        TSamples1t = Number(TSamples1t) + Number(SamplesDatat[j]);
                        TCash1t = Number(TCash1t) + Number(CashDatat[j]);
                    }
                    st.innerHTML = TSamples1t;
                    ct.innerHTML = TCash1t;
                    stT = Number(stT) + Number(TSamples1t);
                    ctT = Number(ctT) + Number(TCash1t);
                    vatt = Number(vatt) + Number(SamplesDatat.length);
                }

                if (k == 11) {
                    TSamples1t = 0; TCash1t = 0;
                    for (var j = 0; j < SamplesDatat.length; j++) {
                        TSamples1t = Number(TSamples1t) + Number(SamplesDatat[j]);
                        TCash1t = Number(TCash1t) + Number(CashDatat[j]);
                    }
                    st.innerHTML = TSamples1t;
                    ct.innerHTML = TCash1t;
                    stT = Number(stT) + Number(TSamples1t);
                    ctT = Number(ctT) + Number(TCash1t);
                    vatt = Number(vatt) + Number(SamplesDatat.length);
                }

                if (k == 12) {
                    TSamples1t = 0; TCash1t = 0;
                    for (var j = 0; j < SamplesDatat.length; j++) {
                        TSamples1t = Number(TSamples1t) + Number(SamplesDatat[j]);
                        TCash1t = Number(TCash1t) + Number(CashDatat[j]);
                    }
                    st.innerHTML = TSamples1t;
                    ct.innerHTML = TCash1t;
                    stT = Number(stT) + Number(TSamples1t);
                    ctT = Number(ctT) + Number(TCash1t);
                    vatt = Number(vatt) + Number(SamplesDatat.length);
                }

                if (k == 13) {
                    TSamples1t = 0; TCash1t = 0;
                    for (var j = 0; j < SamplesDatat.length; j++) {
                        TSamples1t = Number(TSamples1t) + Number(SamplesDatat[j]);
                        TCash1t = Number(TCash1t) + Number(CashDatat[j]);
                    }
                    st.innerHTML = TSamples1t;
                    ct.innerHTML = TCash1t;
                    stT = Number(stT) + Number(TSamples1t);
                    ctT = Number(ctT) + Number(TCash1t);
                    vatt = Number(vatt) + Number(SamplesDatat.length);
                }

                if (k == 14) {
                    TSamples1t = 0; TCash1t = 0;
                    for (var j = 0; j < SamplesDatat.length; j++) {
                        TSamples1t = Number(TSamples1t) + Number(SamplesDatat[j]);
                        TCash1t = Number(TCash1t) + Number(CashDatat[j]);
                    }
                    st.innerHTML = TSamples1t;
                    ct.innerHTML = TCash1t;
                    stT = Number(stT) + Number(TSamples1t);
                    ctT = Number(ctT) + Number(TCash1t);
                    vatt = Number(vatt) + Number(SamplesDatat.length);
                }

                if (k == 15) {
                    TSamples1t = 0; TCash1t = 0;
                    for (var j = 0; j < SamplesDatat.length; j++) {
                        TSamples1t = Number(TSamples1t) + Number(SamplesDatat[j]);
                        TCash1t = Number(TCash1t) + Number(CashDatat[j]);
                    }
                    st.innerHTML = TSamples1t;
                    ct.innerHTML = TCash1t;
                    stT = Number(stT) + Number(TSamples1t);
                    ctT = Number(ctT) + Number(TCash1t);
                    vatt = Number(vatt) + Number(SamplesDatat.length);
                }

                if (k == 16) {
                    TSamples1t = 0; TCash1t = 0;
                    for (var j = 0; j < SamplesDatat.length; j++) {
                        TSamples1t = Number(TSamples1t) + Number(SamplesDatat[j]);
                        TCash1t = Number(TCash1t) + Number(CashDatat[j]);
                    }
                    st.innerHTML = TSamples1t;
                    ct.innerHTML = TCash1t;
                    stT = Number(stT) + Number(TSamples1t);
                    ctT = Number(ctT) + Number(TCash1t);
                    vatt = Number(vatt) + Number(SamplesDatat.length);
                }

                if (k == 17) {
                    TSamples1t = 0; TCash1t = 0;
                    for (var j = 0; j < SamplesDatat.length; j++) {
                        TSamples1t = Number(TSamples1t) + Number(SamplesDatat[j]);
                        TCash1t = Number(TCash1t) + Number(CashDatat[j]);
                    }
                    st.innerHTML = TSamples1t;
                    ct.innerHTML = TCash1t;
                    stT = Number(stT) + Number(TSamples1t);
                    ctT = Number(ctT) + Number(TCash1t);
                    vatt = Number(vatt) + Number(SamplesDatat.length);
                }

                if (k == 18) {
                    TSamples1t = 0; TCash1t = 0;
                    for (var j = 0; j < SamplesDatat.length; j++) {
                        TSamples1t = Number(TSamples1t) + Number(SamplesDatat[j]);
                        TCash1t = Number(TCash1t) + Number(CashDatat[j]);
                    }
                    st.innerHTML = TSamples1t;
                    ct.innerHTML = TCash1t;
                    stT = Number(stT) + Number(TSamples1t);
                    ctT = Number(ctT) + Number(TCash1t);
                    vatt = Number(vatt) + Number(SamplesDatat.length);
                }

                if (k == 19) {
                    TSamples1t = 0; TCash1t = 0;
                    for (var j = 0; j < SamplesDatat.length; j++) {
                        TSamples1t = Number(TSamples1t) + Number(SamplesDatat[j]);
                        TCash1t = Number(TCash1t) + Number(CashDatat[j]);
                    }
                    st.innerHTML = TSamples1t;
                    ct.innerHTML = TCash1t;
                    stT = Number(stT) + Number(TSamples1t);
                    ctT = Number(ctT) + Number(TCash1t);
                    vatt = Number(vatt) + Number(SamplesDatat.length);
                }

                if (k == 20) {
                    TSamples1t = 0; TCash1t = 0;
                    for (var j = 0; j < SamplesDatat.length; j++) {
                        TSamples1t = Number(TSamples1t) + Number(SamplesDatat[j]);
                        TCash1t = Number(TCash1t) + Number(CashDatat[j]);
                    }
                    st.innerHTML = TSamples1t;
                    ct.innerHTML = TCash1t;
                    stT = Number(stT) + Number(TSamples1t);
                    ctT = Number(ctT) + Number(TCash1t);
                    vatt = Number(vatt) + Number(SamplesDatat.length);
                }

                if (k ==21) {
                    TSamples1t = 0; TCash1t = 0;
                    for (var j = 0; j < SamplesDatat.length; j++) {
                        TSamples1t = Number(TSamples1t) + Number(SamplesDatat[j]);
                        TCash1t = Number(TCash1t) + Number(CashDatat[j]);
                    }
                    st.innerHTML = TSamples1t;
                    ct.innerHTML = TCash1t;
                    stT = Number(stT) + Number(TSamples1t);
                    ctT = Number(ctT) + Number(TCash1t);
                    vatt = Number(vatt) + Number(SamplesDatat.length);
                }

                if (k == 22) {
                    TSamples1t = 0; TCash1t = 0;
                    for (var j = 0; j < SamplesDatat.length; j++) {
                        TSamples1t = Number(TSamples1t) + Number(SamplesDatat[j]);
                        TCash1t = Number(TCash1t) + Number(CashDatat[j]);
                    }
                    st.innerHTML = TSamples1t;
                    ct.innerHTML = TCash1t;
                    stT = Number(stT) + Number(TSamples1t);
                    ctT = Number(ctT) + Number(TCash1t);
                    vatt = Number(vatt) + Number(SamplesDatat.length);
                }

                if (k == 23) {
                    TSamples1t = 0; TCash1t = 0;
                    for (var j = 0; j < SamplesDatat.length; j++) {
                        TSamples1t = Number(TSamples1t) + Number(SamplesDatat[j]);
                        TCash1t = Number(TCash1t) + Number(CashDatat[j]);
                    }
                    st.innerHTML = TSamples1t;
                    ct.innerHTML = TCash1t;
                    stT = Number(stT) + Number(TSamples1t);
                    ctT = Number(ctT) + Number(TCash1t);
                    vatt = Number(vatt) + Number(SamplesDatat.length);
                }

                if (k == 24) {
                    TSamples1t = 0; TCash1t = 0;
                    for (var j = 0; j < SamplesDatat.length; j++) {
                        TSamples1t = Number(TSamples1t) + Number(SamplesDatat[j]);
                        TCash1t = Number(TCash1t) + Number(CashDatat[j]);
                    }
                    st.innerHTML = TSamples1t;
                    ct.innerHTML = TCash1t;
                    stT = Number(stT) + Number(TSamples1t);
                    ctT = Number(ctT) + Number(TCash1t);
                    vatt = Number(vatt) + Number(SamplesDatat.length);
                }

                //if (k == 25) {
                //    TSamples1t = 0; TCash1t = 0;
                //    for (var j = 0; j < SamplesDatat.length; j++) {
                //        TSamples1t = Number(TSamples1t) + Number(SamplesDatat[j]);
                //        TCash1t = Number(TCash1t) + Number(CashDatat[j]);
                //    }
                //    st.innerHTML = TSamples1t;
                //    ct.innerHTML = TCash1t;
                //    stT = Number(stT) + Number(TSamples1t);
                //    ctT = Number(ctT) + Number(TCash1t);
                //    vatt = Number(vatt) + Number(SamplesDatat.length);
                //}



                t2.innerHTML = SamplesDatat.length;


                PERCVtdy = Math.floor(((SamplesDatat.length) / pervJMP) * 100);
                t3.innerHTML = PERCVtdy + " %";
                vpptt = Number(vpptt) + Number(PERCVtdy);
                m = m + 1;
                if (m == 23) {
                    m = 1;
                }
            }
            AJCallY();
        }

        function E_ILD_Full() { alert("error...") } // Just an Error Function
    }


    function AJCallY() {
        //alert(FY + "....." + today);
        var ILD_Input_Query_Data = {
            "ILD_ID": ILDID,
            "FromDate": FY,
            "ToDate": today,
        }
        //alert(today);
        $.ajax({
            type: "POST",
            url: "WebService1.asmx/Get_All_ILD_Data_Full",
            data: JSON.stringify(ILD_Input_Query_Data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: S_ILD_Full,
            error: E_ILD_Full
        });
        function S_ILD_Full(data) {
            //alert(data.d);
            var DataIN = data.d;
            if (data.d.length > 0) {

                var DataINSplit = DataIN.split("<");
                //alert(DataINSplit[0]);
                var KMSData = DataINSplit[0];
                SamplesData1 = DataINSplit[1];    // Samples values
                SamplesData = SamplesData1.split(","); // Total Samples
                CashData1 = DataINSplit[2]; // Cash values
                CashData = CashData1.split(","); // Total Cash
                //////////////////////////////////////////////////////////////////////////////////////////////////////////
                //if (k == 0) {
                //    for (var j = 0; j < SamplesData.length; j++) {
                //        TSamples1 = Number(TSamples1) + Number(SamplesData[j]);
                //        TCash1 = Number(TCash1) + Number(CashData[j]);
                //    }
                //    sy.innerHTML = TSamples1;
                //    cy.innerHTML = TCash1;
                //    stY = Number(stY) + Number(TSamples1);
                //    ctY = Number(ctY) + Number(TCash1);
                //    vaty = Number(vaty) + Number(SamplesData.length);
                //}
                if (k == 1) {
                    for (var j = 0; j < SamplesData.length; j++) {
                        TSamples1 = Number(TSamples1) + Number(SamplesData[j]);
                        TCash1 = Number(TCash1) + Number(CashData[j]);
                    }
                    sy.innerHTML = TSamples1;
                    cy.innerHTML = TCash1;
                    stY = Number(stY) + Number(TSamples1);
                    ctY = Number(ctY) + Number(TCash1);
                    vaty = Number(vaty) + Number(SamplesData.length);
                }
                if (k == 2) {
                    TSamples1 = 0; TCash1 = 0;
                    for (var j = 0; j < SamplesData.length; j++) {
                        TSamples1 = Number(TSamples1) + Number(SamplesData[j]);
                        TCash1 = Number(TCash1) + Number(CashData[j]);
                    }
                    sy.innerHTML = TSamples1;
                    cy.innerHTML = TCash1;
                    stY = Number(stY) + Number(TSamples1);
                    ctY = Number(ctY) + Number(TCash1);
                    vaty = Number(vaty) + Number(SamplesData.length);
                }
                if (k == 3) {
                    TSamples1 = 0; TCash1 = 0;
                    for (var j = 0; j < SamplesData.length; j++) {
                        TSamples1 = Number(TSamples1) + Number(SamplesData[j]);
                        TCash1 = Number(TCash1) + Number(CashData[j]);
                    }
                    sy.innerHTML = TSamples1;
                    cy.innerHTML = TCash1;
                    stY = Number(stY) + Number(TSamples1);
                    ctY = Number(ctY) + Number(TCash1);
                    vaty = Number(vaty) + Number(SamplesData.length);
                }
                if (k == 4) {
                    TSamples1 = 0; TCash1 = 0;
                    for (var j = 0; j < SamplesData.length; j++) {
                        TSamples1 = Number(TSamples1) + Number(SamplesData[j]);
                        TCash1 = Number(TCash1) + Number(CashData[j]);
                    }
                    sy.innerHTML = TSamples1;
                    cy.innerHTML = TCash1;
                    stY = Number(stY) + Number(TSamples1);
                    ctY = Number(ctY) + Number(TCash1);
                    vaty = Number(vaty) + Number(SamplesData.length);
                }
                if (k == 5) {
                    TSamples1 = 0; TCash1 = 0;
                    for (var j = 0; j < SamplesData.length; j++) {
                        TSamples1 = Number(TSamples1) + Number(SamplesData[j]);
                        TCash1 = Number(TCash1) + Number(CashData[j]);
                    }
                    sy.innerHTML = TSamples1;
                    cy.innerHTML = TCash1;
                    stY = Number(stY) + Number(TSamples1);
                    ctY = Number(ctY) + Number(TCash1);
                    vaty = Number(vaty) + Number(SamplesData.length);
                }
                if (k == 6) {
                    TSamples1 = 0; TCash1 = 0;
                    for (var j = 0; j < SamplesData.length; j++) {
                        TSamples1 = Number(TSamples1) + Number(SamplesData[j]);
                        TCash1 = Number(TCash1) + Number(CashData[j]);
                    }
                    sy.innerHTML = TSamples1;
                    cy.innerHTML = TCash1;
                    stY = Number(stY) + Number(TSamples1);
                    ctY = Number(ctY) + Number(TCash1);
                    vaty = Number(vaty) + Number(SamplesData.length);
                }
                if (k == 7) {
                    TSamples1 = 0; TCash1 = 0;
                    for (var j = 0; j < SamplesData.length; j++) {
                        TSamples1 = Number(TSamples1) + Number(SamplesData[j]);
                        TCash1 = Number(TCash1) + Number(CashData[j]);
                    }
                    sy.innerHTML = TSamples1;
                    cy.innerHTML = TCash1;
                    stY = Number(stY) + Number(TSamples1);
                    ctY = Number(ctY) + Number(TCash1);
                    vaty = Number(vaty) + Number(SamplesData.length);
                }
                if (k == 8) {
                    TSamples1 = 0; TCash1 = 0;
                    for (var j = 0; j < SamplesData.length; j++) {
                        TSamples1 = Number(TSamples1) + Number(SamplesData[j]);
                        TCash1 = Number(TCash1) + Number(CashData[j]);
                    }
                    sy.innerHTML = TSamples1;
                    cy.innerHTML = TCash1;
                    stY = Number(stY) + Number(TSamples1);
                    ctY = Number(ctY) + Number(TCash1);
                    vaty = Number(vaty) + Number(SamplesData.length);
                }
                if (k == 9) {
                    TSamples1 = 0; TCash1 = 0;
                    for (var j = 0; j < SamplesData.length; j++) {
                        TSamples1 = Number(TSamples1) + Number(SamplesData[j]);
                        TCash1 = Number(TCash1) + Number(CashData[j]);
                    }
                    sy.innerHTML = TSamples1;
                    cy.innerHTML = TCash1;
                    stY = Number(stY) + Number(TSamples1);
                    ctY = Number(ctY) + Number(TCash1);
                    vaty = Number(vaty) + Number(SamplesData.length);
                }
                if (k == 10) {
                    TSamples1 = 0; TCash1 = 0;
                    for (var j = 0; j < SamplesData.length; j++) {
                        TSamples1 = Number(TSamples1) + Number(SamplesData[j]);
                        TCash1 = Number(TCash1) + Number(CashData[j]);
                    }
                    sy.innerHTML = TSamples1;
                    cy.innerHTML = TCash1;
                    stY = Number(stY) + Number(TSamples1);
                    ctY = Number(ctY) + Number(TCash1);
                    vaty = Number(vaty) + Number(SamplesData.length);
                }
                if (k == 11) {
                    for (var j = 0; j < SamplesData.length; j++) {
                        TSamples1 = Number(TSamples1) + Number(SamplesData[j]);
                        TCash1 = Number(TCash1) + Number(CashData[j]);
                    }
                    sy.innerHTML = TSamples1;
                    cy.innerHTML = TCash1;
                    stY = Number(stY) + Number(TSamples1);
                    ctY = Number(ctY) + Number(TCash1);
                    vaty = Number(vaty) + Number(SamplesData.length);
                }
                if (k == 12) {
                    TSamples1 = 0; TCash1 = 0;
                    for (var j = 0; j < SamplesData.length; j++) {
                        TSamples1 = Number(TSamples1) + Number(SamplesData[j]);
                        TCash1 = Number(TCash1) + Number(CashData[j]);
                    }
                    sy.innerHTML = TSamples1;
                    cy.innerHTML = TCash1;
                    stY = Number(stY) + Number(TSamples1);
                    ctY = Number(ctY) + Number(TCash1);
                    vaty = Number(vaty) + Number(SamplesData.length);
                }
                if (k == 13) {
                    TSamples1 = 0; TCash1 = 0;
                    for (var j = 0; j < SamplesData.length; j++) {
                        TSamples1 = Number(TSamples1) + Number(SamplesData[j]);
                        TCash1 = Number(TCash1) + Number(CashData[j]);
                    }
                    sy.innerHTML = TSamples1;
                    cy.innerHTML = TCash1;
                    stY = Number(stY) + Number(TSamples1);
                    ctY = Number(ctY) + Number(TCash1);
                    vaty = Number(vaty) + Number(SamplesData.length);
                }
                if (k == 14) {
                    TSamples1 = 0; TCash1 = 0;
                    for (var j = 0; j < SamplesData.length; j++) {
                        TSamples1 = Number(TSamples1) + Number(SamplesData[j]);
                        TCash1 = Number(TCash1) + Number(CashData[j]);
                    }
                    sy.innerHTML = TSamples1;
                    cy.innerHTML = TCash1;
                    stY = Number(stY) + Number(TSamples1);
                    ctY = Number(ctY) + Number(TCash1);
                    vaty = Number(vaty) + Number(SamplesData.length);
                }
                if (k == 15) {
                    TSamples1 = 0; TCash1 = 0;
                    for (var j = 0; j < SamplesData.length; j++) {
                        TSamples1 = Number(TSamples1) + Number(SamplesData[j]);
                        TCash1 = Number(TCash1) + Number(CashData[j]);
                    }
                    sy.innerHTML = TSamples1;
                    cy.innerHTML = TCash1;
                    stY = Number(stY) + Number(TSamples1);
                    ctY = Number(ctY) + Number(TCash1);
                    vaty = Number(vaty) + Number(SamplesData.length);
                }
                if (k == 16) {
                    TSamples1 = 0; TCash1 = 0;
                    for (var j = 0; j < SamplesData.length; j++) {
                        TSamples1 = Number(TSamples1) + Number(SamplesData[j]);
                        TCash1 = Number(TCash1) + Number(CashData[j]);
                    }
                    sy.innerHTML = TSamples1;
                    cy.innerHTML = TCash1;
                    stY = Number(stY) + Number(TSamples1);
                    ctY = Number(ctY) + Number(TCash1);
                    vaty = Number(vaty) + Number(SamplesData.length);
                }
                if (k == 17) {
                    TSamples1 = 0; TCash1 = 0;
                    for (var j = 0; j < SamplesData.length; j++) {
                        TSamples1 = Number(TSamples1) + Number(SamplesData[j]);
                        TCash1 = Number(TCash1) + Number(CashData[j]);
                    }
                    sy.innerHTML = TSamples1;
                    cy.innerHTML = TCash1;
                    stY = Number(stY) + Number(TSamples1);
                    ctY = Number(ctY) + Number(TCash1);
                    vaty = Number(vaty) + Number(SamplesData.length);
                }
                if (k == 18) {
                    TSamples1 = 0; TCash1 = 0;
                    for (var j = 0; j < SamplesData.length; j++) {
                        TSamples1 = Number(TSamples1) + Number(SamplesData[j]);
                        TCash1 = Number(TCash1) + Number(CashData[j]);
                    }
                    sy.innerHTML = TSamples1;
                    cy.innerHTML = TCash1;
                    stY = Number(stY) + Number(TSamples1);
                    ctY = Number(ctY) + Number(TCash1);
                    vaty = Number(vaty) + Number(SamplesData.length);
                }
                if (k == 19) {
                    TSamples1 = 0; TCash1 = 0;
                    for (var j = 0; j < SamplesData.length; j++) {
                        TSamples1 = Number(TSamples1) + Number(SamplesData[j]);
                        TCash1 = Number(TCash1) + Number(CashData[j]);
                    }
                    sy.innerHTML = TSamples1;
                    cy.innerHTML = TCash1;
                    stY = Number(stY) + Number(TSamples1);
                    ctY = Number(ctY) + Number(TCash1);
                    vaty = Number(vaty) + Number(SamplesData.length);
                }
                if (k == 20) {
                    TSamples1 = 0; TCash1 = 0;
                    for (var j = 0; j < SamplesData.length; j++) {
                        TSamples1 = Number(TSamples1) + Number(SamplesData[j]);
                        TCash1 = Number(TCash1) + Number(CashData[j]);
                    }
                    sy.innerHTML = TSamples1;
                    cy.innerHTML = TCash1;
                    stY = Number(stY) + Number(TSamples1);
                    ctY = Number(ctY) + Number(TCash1);
                    vaty = Number(vaty) + Number(SamplesData.length);
                }
                if (k == 21) {
                    TSamples1 = 0; TCash1 = 0;
                    for (var j = 0; j < SamplesData.length; j++) {
                        TSamples1 = Number(TSamples1) + Number(SamplesData[j]);
                        TCash1 = Number(TCash1) + Number(CashData[j]);
                    }
                    sy.innerHTML = TSamples1;
                    cy.innerHTML = TCash1;
                    stY = Number(stY) + Number(TSamples1);
                    ctY = Number(ctY) + Number(TCash1);
                    vaty = Number(vaty) + Number(SamplesData.length);
                }
                if (k == 22) {
                    TSamples1 = 0; TCash1 = 0;
                    for (var j = 0; j < SamplesData.length; j++) {
                        TSamples1 = Number(TSamples1) + Number(SamplesData[j]);
                        TCash1 = Number(TCash1) + Number(CashData[j]);
                    }
                    sy.innerHTML = TSamples1;
                    cy.innerHTML = TCash1;
                    stY = Number(stY) + Number(TSamples1);
                    ctY = Number(ctY) + Number(TCash1);
                    vaty = Number(vaty) + Number(SamplesData.length);
                }
                if (k == 23) {
                    TSamples1 = 0; TCash1 = 0;
                    for (var j = 0; j < SamplesData.length; j++) {
                        TSamples1 = Number(TSamples1) + Number(SamplesData[j]);
                        TCash1 = Number(TCash1) + Number(CashData[j]);
                    }
                    sy.innerHTML = TSamples1;
                    cy.innerHTML = TCash1;
                    stY = Number(stY) + Number(TSamples1);
                    ctY = Number(ctY) + Number(TCash1);
                    vaty = Number(vaty) + Number(SamplesData.length);
                }
                if (k == 24) {
                    TSamples1 = 0; TCash1 = 0;
                    for (var j = 0; j < SamplesData.length; j++) {
                        TSamples1 = Number(TSamples1) + Number(SamplesData[j]);
                        TCash1 = Number(TCash1) + Number(CashData[j]);
                    }
                    sy.innerHTML = TSamples1;
                    cy.innerHTML = TCash1;
                    stY = Number(stY) + Number(TSamples1);
                    ctY = Number(ctY) + Number(TCash1);
                    vaty = Number(vaty) + Number(SamplesData.length);
                }
                av.innerHTML = SamplesData.length;
                //alert(SamplesData.length);

                PERCV = Math.floor(((SamplesData.length) / pervJMP) * 100);
                perv.innerHTML = PERCV + " %";
                vppty = Number(vppty) + Number(PERCV);
                m = m + 1;
                if (m == 23) {
                    m = 1;
                }
            }
            AJCallDBY();

            ////////////////////////////////////////////////////////////////
            /////////////// Distance Formula ///////////////////////////////
            ////////////////////////////////////////////////////////////////
            //for (i = 1; i < KMSData.length; i++) {

            //    //if (KMSData[i - 1] == "0.0,0.0" || KMSData[i] == "0.0,0.0") {
            //    //    i = i + 1;
            //    //}
            //    //alert(i);

            //    var SplitDataLL = KMSData[i];
            //    var SplitDataLL_Sep = SplitDataLL.split(",");
            //    La1 = SplitDataLL_Sep[0];
            //    Lo1 = SplitDataLL_Sep[1];

            //    var R = 6371000; // Radius of the earth in mts

            //    var SDS2 = KMSData[i - 1];
            //    var SDS1 = SDS2.split(",");
            //    La2 = SDS1[0];
            //    Lo2 = SDS1[1];
            //    dLat = deg2rad(La1 - La2);  // deg2rad below
            //    dLon = deg2rad(Lo1 - Lo2);

            //    var a =
            //            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            //            Math.cos(deg2rad(La1)) * Math.cos(deg2rad(La2)) *
            //            Math.sin(dLon / 2) * Math.sin(dLon / 2)
            //    ;
            //    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            //    var ds = R * c; // Distance in km            
            //    TotalDistance = Number(TotalDistance) + Number(ds);

            //    function deg2rad(deg) {
            //        return deg * (Math.PI / 180);
            //    }
            //}            alert(TotalDistance);

            ////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////

        }

        function E_ILD_Full() { alert("error...") } // Just an Error Function
    }

    function AJCallDBY() {

        ///////////////////////////////////////////////////
        ////////////////Daybefore yesterday////////////////
        ///////////////////////////////////////////////////
        //alert(ILDID);
        var ILD_Input_Query_Data1 = {
            "ILD_ID": ILDID,
            "FromDate": Fdb,
            "ToDate": FY,
        }
        $.ajax({
            type: "POST",
            url: "WebService1.asmx/Get_All_ILD_Data_Full",
            data: JSON.stringify(ILD_Input_Query_Data1),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: S_ILD_Full1,
            error: E_ILD_Full1
        });

        function S_ILD_Full1(data) {
            var DataIN11 = data.d;

            if (data.d.length > 0) {

                var DataINSplit11 = DataIN11.split("<");
                //sdb = 0; cdb = 0;

                SamplesData2 = DataINSplit11[1];    // Samples values
                SamplesData3 = SamplesData2.split(","); // Total Samples
                CashData2 = DataINSplit11[2]; // Cash values
                CashData3 = CashData2.split(","); // Total Cash
                //////////////////////////////////////////////////////////////////////////////////////////////////////////
                //TVisits = SamplesData3.length;
                if (k == 0) {
                    TSamples11 = 0; TCash11 = 0;
                    for (var p = 0; p < SamplesData3.length; p++) {
                        TSamples11 = Number(TSamples11) + Number(SamplesData3[p]);
                        TCash11 = Number(TCash11) + Number(CashData3[p]);
                    }
                    sdb.innerHTML = TSamples11;
                    cdb.innerHTML = TCash11;
                    stYY = Number(stYY) + Number(TSamples11);
                    ctYY = Number(ctYY) + Number(TCash11);
                    vatyy = Number(vatyy) + Number(SamplesData3.length);
                }
                if (k == 1) {
                    TSamples11 = 0; TCash11 = 0;
                    for (var p = 0; p < SamplesData3.length; p++) {
                        TSamples11 = Number(TSamples11) + Number(SamplesData3[p]);
                        TCash11 = Number(TCash11) + Number(CashData3[p]);
                    }
                    sdb.innerHTML = TSamples11;
                    cdb.innerHTML = TCash11;
                    stYY = Number(stYY) + Number(TSamples11);
                    ctYY = Number(ctYY) + Number(TCash11);
                    vatyy = Number(vatyy) + Number(SamplesData3.length);
                }
                if (k == 2) {
                    TSamples11 = 0; TCash11 = 0;
                    for (var p = 0; p < SamplesData3.length; p++) {
                        TSamples11 = Number(TSamples11) + Number(SamplesData3[p]);
                        TCash11 = Number(TCash11) + Number(CashData3[p]);
                    }
                    sdb.innerHTML = TSamples11;
                    cdb.innerHTML = TCash11;
                    stYY = Number(stYY) + Number(TSamples11);
                    ctYY = Number(ctYY) + Number(TCash11);
                    vatyy = Number(vatyy) + Number(SamplesData3.length);

                }
                if (k == 3) {
                    TSamples11 = 0; TCash11 = 0;
                    for (var p = 0; p < SamplesData3.length; p++) {
                        TSamples11 = Number(TSamples11) + Number(SamplesData3[p]);
                        TCash11 = Number(TCash11) + Number(CashData3[p]);
                    }
                    sdb.innerHTML = TSamples11;
                    cdb.innerHTML = TCash11;
                    stYY = Number(stYY) + Number(TSamples11);
                    ctYY = Number(ctYY) + Number(TCash11);
                    vatyy = Number(vatyy) + Number(SamplesData3.length);

                }
                if (k == 4) {
                    TSamples11 = 0; TCash11 = 0;
                    for (var p = 0; p < SamplesData3.length; p++) {
                        TSamples11 = Number(TSamples11) + Number(SamplesData3[p]);
                        TCash11 = Number(TCash11) + Number(CashData3[p]);
                    }
                    sdb.innerHTML = TSamples11;
                    cdb.innerHTML = TCash11;
                    stYY = Number(stYY) + Number(TSamples11);
                    ctYY = Number(ctYY) + Number(TCash11);
                    vatyy = Number(vatyy) + Number(SamplesData3.length);

                }
                if (k == 5) {
                    TSamples11 = 0; TCash11 = 0;
                    for (var p = 0; p < SamplesData3.length; p++) {
                        TSamples11 = Number(TSamples11) + Number(SamplesData3[p]);
                        TCash11 = Number(TCash11) + Number(CashData3[p]);
                    }
                    sdb.innerHTML = TSamples11;
                    cdb.innerHTML = TCash11;
                    stYY = Number(stYY) + Number(TSamples11);
                    ctYY = Number(ctYY) + Number(TCash11);
                    vatyy = Number(vatyy) + Number(SamplesData3.length);

                }
                if (k == 6) {
                    TSamples11 = 0; TCash11 = 0;
                    for (var p = 0; p < SamplesData3.length; p++) {
                        TSamples11 = Number(TSamples11) + Number(SamplesData3[p]);
                        TCash11 = Number(TCash11) + Number(CashData3[p]);
                    }
                    sdb.innerHTML = TSamples11;
                    cdb.innerHTML = TCash11;
                    stYY = Number(stYY) + Number(TSamples11);
                    ctYY = Number(ctYY) + Number(TCash11);
                    vatyy = Number(vatyy) + Number(SamplesData3.length);

                }
                if (k == 7) {
                    TSamples11 = 0; TCash11 = 0;
                    for (var p = 0; p < SamplesData3.length; p++) {
                        TSamples11 = Number(TSamples11) + Number(SamplesData3[p]);
                        TCash11 = Number(TCash11) + Number(CashData3[p]);
                    }
                    sdb.innerHTML = TSamples11;
                    cdb.innerHTML = TCash11;
                    stYY = Number(stYY) + Number(TSamples11);
                    ctYY = Number(ctYY) + Number(TCash11);
                    vatyy = Number(vatyy) + Number(SamplesData3.length);

                }
                if (k == 8) {
                    TSamples11 = 0; TCash11 = 0;
                    for (var p = 0; p < SamplesData3.length; p++) {
                        TSamples11 = Number(TSamples11) + Number(SamplesData3[p]);
                        TCash11 = Number(TCash11) + Number(CashData3[p]);
                    }
                    sdb.innerHTML = TSamples11;
                    cdb.innerHTML = TCash11;
                    stYY = Number(stYY) + Number(TSamples11);
                    ctYY = Number(ctYY) + Number(TCash11);
                    vatyy = Number(vatyy) + Number(SamplesData3.length);

                }
                if (k == 9) {
                    TSamples11 = 0; TCash11 = 0;
                    for (var p = 0; p < SamplesData3.length; p++) {
                        TSamples11 = Number(TSamples11) + Number(SamplesData3[p]);
                        TCash11 = Number(TCash11) + Number(CashData3[p]);
                    }
                    sdb.innerHTML = TSamples11;
                    cdb.innerHTML = TCash11;
                    stYY = Number(stYY) + Number(TSamples11);
                    ctYY = Number(ctYY) + Number(TCash11);
                    vatyy = Number(vatyy) + Number(SamplesData3.length);

                }
                if (k == 10) {
                    TSamples11 = 0; TCash11 = 0;
                    for (var p = 0; p < SamplesData3.length; p++) {
                        TSamples11 = Number(TSamples11) + Number(SamplesData3[p]);
                        TCash11 = Number(TCash11) + Number(CashData3[p]);
                    }
                    sdb.innerHTML = TSamples11;
                    cdb.innerHTML = TCash11;
                    stYY = Number(stYY) + Number(TSamples11);
                    ctYY = Number(ctYY) + Number(TCash11);
                    vatyy = Number(vatyy) + Number(SamplesData3.length);
                }
                if (k == 11) {
                    TSamples11 = 0; TCash11 = 0;
                    for (var p = 0; p < SamplesData3.length; p++) {
                        TSamples11 = Number(TSamples11) + Number(SamplesData3[p]);
                        TCash11 = Number(TCash11) + Number(CashData3[p]);
                    }
                    sdb.innerHTML = TSamples11;
                    cdb.innerHTML = TCash11;
                    stYY = Number(stYY) + Number(TSamples11);
                    ctYY = Number(ctYY) + Number(TCash11);
                    vatyy = Number(vatyy) + Number(SamplesData3.length);
                }
                if (k == 12) {
                    TSamples11 = 0; TCash11 = 0;
                    for (var p = 0; p < SamplesData3.length; p++) {
                        TSamples11 = Number(TSamples11) + Number(SamplesData3[p]);
                        TCash11 = Number(TCash11) + Number(CashData3[p]);
                    }
                    sdb.innerHTML = TSamples11;
                    cdb.innerHTML = TCash11;
                    stYY = Number(stYY) + Number(TSamples11);
                    ctYY = Number(ctYY) + Number(TCash11);
                    vatyy = Number(vatyy) + Number(SamplesData3.length);

                }
                if (k == 13) {
                    TSamples11 = 0; TCash11 = 0;
                    for (var p = 0; p < SamplesData3.length; p++) {
                        TSamples11 = Number(TSamples11) + Number(SamplesData3[p]);
                        TCash11 = Number(TCash11) + Number(CashData3[p]);
                    }
                    sdb.innerHTML = TSamples11;
                    cdb.innerHTML = TCash11;
                    stYY = Number(stYY) + Number(TSamples11);
                    ctYY = Number(ctYY) + Number(TCash11);
                    vatyy = Number(vatyy) + Number(SamplesData3.length);

                }
                if (k == 14) {
                    TSamples11 = 0; TCash11 = 0;
                    for (var p = 0; p < SamplesData3.length; p++) {
                        TSamples11 = Number(TSamples11) + Number(SamplesData3[p]);
                        TCash11 = Number(TCash11) + Number(CashData3[p]);
                    }
                    sdb.innerHTML = TSamples11;
                    cdb.innerHTML = TCash11;
                    stYY = Number(stYY) + Number(TSamples11);
                    ctYY = Number(ctYY) + Number(TCash11);
                    vatyy = Number(vatyy) + Number(SamplesData3.length);

                }
                if (k == 15) {
                    TSamples11 = 0; TCash11 = 0;
                    for (var p = 0; p < SamplesData3.length; p++) {
                        TSamples11 = Number(TSamples11) + Number(SamplesData3[p]);
                        TCash11 = Number(TCash11) + Number(CashData3[p]);
                    }
                    sdb.innerHTML = TSamples11;
                    cdb.innerHTML = TCash11;
                    stYY = Number(stYY) + Number(TSamples11);
                    ctYY = Number(ctYY) + Number(TCash11);
                    vatyy = Number(vatyy) + Number(SamplesData3.length);

                }
                if (k == 16) {
                    TSamples11 = 0; TCash11 = 0;
                    for (var p = 0; p < SamplesData3.length; p++) {
                        TSamples11 = Number(TSamples11) + Number(SamplesData3[p]);
                        TCash11 = Number(TCash11) + Number(CashData3[p]);
                    }
                    sdb.innerHTML = TSamples11;
                    cdb.innerHTML = TCash11;
                    stYY = Number(stYY) + Number(TSamples11);
                    ctYY = Number(ctYY) + Number(TCash11);
                    vatyy = Number(vatyy) + Number(SamplesData3.length);

                }
                if (k == 17) {
                    TSamples11 = 0; TCash11 = 0;
                    for (var p = 0; p < SamplesData3.length; p++) {
                        TSamples11 = Number(TSamples11) + Number(SamplesData3[p]);
                        TCash11 = Number(TCash11) + Number(CashData3[p]);
                    }
                    sdb.innerHTML = TSamples11;
                    cdb.innerHTML = TCash11;
                    stYY = Number(stYY) + Number(TSamples11);
                    ctYY = Number(ctYY) + Number(TCash11);
                    vatyy = Number(vatyy) + Number(SamplesData3.length);

                }
                if (k == 18) {
                    TSamples11 = 0; TCash11 = 0;
                    for (var p = 0; p < SamplesData3.length; p++) {
                        TSamples11 = Number(TSamples11) + Number(SamplesData3[p]);
                        TCash11 = Number(TCash11) + Number(CashData3[p]);
                    }
                    sdb.innerHTML = TSamples11;
                    cdb.innerHTML = TCash11;
                    stYY = Number(stYY) + Number(TSamples11);
                    ctYY = Number(ctYY) + Number(TCash11);
                    vatyy = Number(vatyy) + Number(SamplesData3.length);

                }
                if (k == 19) {
                    TSamples11 = 0; TCash11 = 0;
                    for (var p = 0; p < SamplesData3.length; p++) {
                        TSamples11 = Number(TSamples11) + Number(SamplesData3[p]);
                        TCash11 = Number(TCash11) + Number(CashData3[p]);
                    }
                    sdb.innerHTML = TSamples11;
                    cdb.innerHTML = TCash11;
                    stYY = Number(stYY) + Number(TSamples11);
                    ctYY = Number(ctYY) + Number(TCash11);
                    vatyy = Number(vatyy) + Number(SamplesData3.length);

                }
                if (k == 20) {
                    TSamples11 = 0; TCash11 = 0;
                    for (var p = 0; p < SamplesData3.length; p++) {
                        TSamples11 = Number(TSamples11) + Number(SamplesData3[p]);
                        TCash11 = Number(TCash11) + Number(CashData3[p]);
                    }
                    sdb.innerHTML = TSamples11;
                    cdb.innerHTML = TCash11;
                    stYY = Number(stYY) + Number(TSamples11);
                    ctYY = Number(ctYY) + Number(TCash11);
                    vatyy = Number(vatyy) + Number(SamplesData3.length);

                }
                if (k == 21) {
                    TSamples11 = 0; TCash11 = 0;
                    for (var p = 0; p < SamplesData3.length; p++) {
                        TSamples11 = Number(TSamples11) + Number(SamplesData3[p]);
                        TCash11 = Number(TCash11) + Number(CashData3[p]);
                    }
                    sdb.innerHTML = TSamples11;
                    cdb.innerHTML = TCash11;
                    stYY = Number(stYY) + Number(TSamples11);
                    ctYY = Number(ctYY) + Number(TCash11);
                    vatyy = Number(vatyy) + Number(SamplesData3.length);

                }
                if (k == 22) {
                    TSamples11 = 0; TCash11 = 0;
                    for (var p = 0; p < SamplesData3.length; p++) {
                        TSamples11 = Number(TSamples11) + Number(SamplesData3[p]);
                        TCash11 = Number(TCash11) + Number(CashData3[p]);
                    }
                    sdb.innerHTML = TSamples11;
                    cdb.innerHTML = TCash11;
                    stYY = Number(stYY) + Number(TSamples11);
                    ctYY = Number(ctYY) + Number(TCash11);
                    vatyy = Number(vatyy) + Number(SamplesData3.length);

                }
                if (k == 23) {
                    TSamples11 = 0; TCash11 = 0;
                    for (var p = 0; p < SamplesData3.length; p++) {
                        TSamples11 = Number(TSamples11) + Number(SamplesData3[p]);
                        TCash11 = Number(TCash11) + Number(CashData3[p]);
                    }
                    sdb.innerHTML = TSamples11;
                    cdb.innerHTML = TCash11;
                    stYY = Number(stYY) + Number(TSamples11);
                    ctYY = Number(ctYY) + Number(TCash11);
                    vatyy = Number(vatyy) + Number(SamplesData3.length);

                }
                if (k == 24) {
                    TSamples11 = 0; TCash11 = 0;
                    for (var p = 0; p < SamplesData3.length; p++) {
                        TSamples11 = Number(TSamples11) + Number(SamplesData3[p]);
                        TCash11 = Number(TCash11) + Number(CashData3[p]);
                    }
                    sdb.innerHTML = TSamples11;
                    cdb.innerHTML = TCash11;
                    stYY = Number(stYY) + Number(TSamples11);
                    ctYY = Number(ctYY) + Number(TCash11);
                    vatyy = Number(vatyy) + Number(SamplesData3.length);

                }
                db2.innerHTML = SamplesData3.length;

                PERCVdby = Math.floor(((SamplesData3.length) / pervJMP) * 100);
                db3.innerHTML = PERCVdby + " %";
                vpptyy = Number(vpptyy) + Number(PERCVdby);
            }

            m = m + 1;
            if (m == 23) {
                m = 1;
            }
            AJCallDDBY();

        }
        function E_ILD_Full1() { alert("error...") } // Just an Error Function
    }

    function AJCallDDBY() {

        ///////////////////////////////////////////////////
        //Daybefore yesterday//////////////////////////////
        ///////////////////////////////////////////////////
        var ILD_Input_Query_Data2 = {
            "ILD_ID": ILDID,
            "FromDate": Fddb,
            "ToDate": Fdb,
        }

        $.ajax({
            type: "POST",
            url: "WebService1.asmx/Get_All_ILD_Data_Full",
            data: JSON.stringify(ILD_Input_Query_Data2),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: S_ILD_Full11,
            error: E_ILD_Full11
        });

        function S_ILD_Full11(data) {
            var DataIN111 = data.d;
            if (data.d.length > 0) {

                var DataINSplit111 = DataIN111.split("<");
                SamplesData4 = DataINSplit111[1];    // Samples values
                SamplesData5 = SamplesData4.split(","); // Total Samples
                CashData4 = DataINSplit111[2]; // Cash values
                CashData5 = CashData4.split(","); // Total Cash
                //////////////////////////////////////////////////////////////////////////////////////////////////////////

                if (k == 0) {
                    TSamples111 = 0; TCash111 = 0;
                    for (var p = 0; p < SamplesData5.length; p++) {
                        TSamples111 = Number(TSamples111) + Number(SamplesData5[p]);
                        TCash111 = Number(TCash111) + Number(CashData5[p]);
                    }
                    sddb.innerHTML = TSamples111;
                    cddb.innerHTML = TCash111;
                    stYYY = Number(stYYY) + Number(TSamples111);
                    ctYYY = Number(ctYYY) + Number(TCash111);
                    vatyyy = Number(vatyyy) + Number(SamplesData5.length);
                }
                if (k == 1) {
                    TSamples111 = 0; TCash111 = 0;
                    for (var p = 0; p < SamplesData5.length; p++) {
                        TSamples111 = Number(TSamples111) + Number(SamplesData5[p]);
                        TCash111 = Number(TCash111) + Number(CashData5[p]);
                    }
                    sddb.innerHTML = TSamples111;
                    cddb.innerHTML = TCash111;
                    stYYY = Number(stYYY) + Number(TSamples111);
                    ctYYY = Number(ctYYY) + Number(TCash111);
                    vatyyy = Number(vatyyy) + Number(SamplesData5.length);
                }
                if (k == 2) {
                    TSamples111 = 0; TCash111 = 0;
                    for (var p = 0; p < SamplesData5.length; p++) {
                        TSamples111 = Number(TSamples111) + Number(SamplesData5[p]);
                        TCash111 = Number(TCash111) + Number(CashData5[p]);
                    }
                    sddb.innerHTML = TSamples111;
                    cddb.innerHTML = TCash111;
                    stYYY = Number(stYYY) + Number(TSamples111);
                    ctYYY = Number(ctYYY) + Number(TCash111);
                    vatyyy = Number(vatyyy) + Number(SamplesData5.length);
                }
                if (k == 3) {
                    TSamples111 = 0; TCash111 = 0;
                    for (var p = 0; p < SamplesData5.length; p++) {
                        TSamples111 = Number(TSamples111) + Number(SamplesData5[p]);
                        TCash111 = Number(TCash111) + Number(CashData5[p]);
                    }
                    sddb.innerHTML = TSamples111;
                    cddb.innerHTML = TCash111;
                    stYYY = Number(stYYY) + Number(TSamples111);
                    ctYYY = Number(ctYYY) + Number(TCash111);
                    vatyyy = Number(vatyyy) + Number(SamplesData5.length);
                }
                if (k == 4) {
                    TSamples111 = 0; TCash111 = 0;
                    for (var p = 0; p < SamplesData5.length; p++) {
                        TSamples111 = Number(TSamples111) + Number(SamplesData5[p]);
                        TCash111 = Number(TCash111) + Number(CashData5[p]);
                    }
                    sddb.innerHTML = TSamples111;
                    cddb.innerHTML = TCash111;
                    stYYY = Number(stYYY) + Number(TSamples111);
                    ctYYY = Number(ctYYY) + Number(TCash111);
                    vatyyy = Number(vatyyy) + Number(SamplesData5.length);
                }
                if (k == 5) {
                    TSamples111 = 0; TCash111 = 0;
                    for (var p = 0; p < SamplesData5.length; p++) {
                        TSamples111 = Number(TSamples111) + Number(SamplesData5[p]);
                        TCash111 = Number(TCash111) + Number(CashData5[p]);
                    }
                    sddb.innerHTML = TSamples111;
                    cddb.innerHTML = TCash111;
                    stYYY = Number(stYYY) + Number(TSamples111);
                    ctYYY = Number(ctYYY) + Number(TCash111);
                    vatyyy = Number(vatyyy) + Number(SamplesData5.length);
                }
                if (k == 6) {
                    TSamples111 = 0; TCash111 = 0;
                    for (var p = 0; p < SamplesData5.length; p++) {
                        TSamples111 = Number(TSamples111) + Number(SamplesData5[p]);
                        TCash111 = Number(TCash111) + Number(CashData5[p]);
                    }
                    sddb.innerHTML = TSamples111;
                    cddb.innerHTML = TCash111;
                    stYYY = Number(stYYY) + Number(TSamples111);
                    ctYYY = Number(ctYYY) + Number(TCash111);
                    vatyyy = Number(vatyyy) + Number(SamplesData5.length);
                }
                if (k == 7) {
                    TSamples111 = 0; TCash111 = 0;
                    for (var p = 0; p < SamplesData5.length; p++) {
                        TSamples111 = Number(TSamples111) + Number(SamplesData5[p]);
                        TCash111 = Number(TCash111) + Number(CashData5[p]);
                    }
                    sddb.innerHTML = TSamples111;
                    cddb.innerHTML = TCash111;
                    stYYY = Number(stYYY) + Number(TSamples111);
                    ctYYY = Number(ctYYY) + Number(TCash111);
                    vatyyy = Number(vatyyy) + Number(SamplesData5.length);
                }
                if (k == 8) {
                    TSamples111 = 0; TCash111 = 0;
                    for (var p = 0; p < SamplesData5.length; p++) {
                        TSamples111 = Number(TSamples111) + Number(SamplesData5[p]);
                        TCash111 = Number(TCash111) + Number(CashData5[p]);
                    }
                    sddb.innerHTML = TSamples111;
                    cddb.innerHTML = TCash111;
                    stYYY = Number(stYYY) + Number(TSamples111);
                    ctYYY = Number(ctYYY) + Number(TCash111);
                    vatyyy = Number(vatyyy) + Number(SamplesData5.length);
                }
                if (k == 9) {
                    TSamples111 = 0; TCash111 = 0;
                    for (var p = 0; p < SamplesData5.length; p++) {
                        TSamples111 = Number(TSamples111) + Number(SamplesData5[p]);
                        TCash111 = Number(TCash111) + Number(CashData5[p]);
                    }
                    sddb.innerHTML = TSamples111;
                    cddb.innerHTML = TCash111;
                    stYYY = Number(stYYY) + Number(TSamples111);
                    ctYYY = Number(ctYYY) + Number(TCash111);
                    vatyyy = Number(vatyyy) + Number(SamplesData5.length);
                }
                if (k == 10) {
                    TSamples111 = 0; TCash111 = 0;
                    for (var p = 0; p < SamplesData5.length; p++) {
                        TSamples111 = Number(TSamples111) + Number(SamplesData5[p]);
                        TCash111 = Number(TCash111) + Number(CashData5[p]);
                    }
                    sddb.innerHTML = TSamples111;
                    cddb.innerHTML = TCash111;
                    stYYY = Number(stYYY) + Number(TSamples111);
                    ctYYY = Number(ctYYY) + Number(TCash111);
                    vatyyy = Number(vatyyy) + Number(SamplesData5.length);
                }
                if (k == 11) {
                    TSamples111 = 0; TCash111 = 0;
                    for (var p = 0; p < SamplesData5.length; p++) {
                        TSamples111 = Number(TSamples111) + Number(SamplesData5[p]);
                        TCash111 = Number(TCash111) + Number(CashData5[p]);
                    }
                    sddb.innerHTML = TSamples111;
                    cddb.innerHTML = TCash111;
                    stYYY = Number(stYYY) + Number(TSamples111);
                    ctYYY = Number(ctYYY) + Number(TCash111);
                    vatyyy = Number(vatyyy) + Number(SamplesData5.length);
                }
                if (k == 12) {
                    TSamples111 = 0; TCash111 = 0;
                    for (var p = 0; p < SamplesData5.length; p++) {
                        TSamples111 = Number(TSamples111) + Number(SamplesData5[p]);
                        TCash111 = Number(TCash111) + Number(CashData5[p]);
                    }
                    sddb.innerHTML = TSamples111;
                    cddb.innerHTML = TCash111;
                    stYYY = Number(stYYY) + Number(TSamples111);
                    ctYYY = Number(ctYYY) + Number(TCash111);
                    vatyyy = Number(vatyyy) + Number(SamplesData5.length);
                }
                if (k == 13) {
                    TSamples111 = 0; TCash111 = 0;
                    for (var p = 0; p < SamplesData5.length; p++) {
                        TSamples111 = Number(TSamples111) + Number(SamplesData5[p]);
                        TCash111 = Number(TCash111) + Number(CashData5[p]);
                    }
                    sddb.innerHTML = TSamples111;
                    cddb.innerHTML = TCash111;
                    stYYY = Number(stYYY) + Number(TSamples111);
                    ctYYY = Number(ctYYY) + Number(TCash111);
                    vatyyy = Number(vatyyy) + Number(SamplesData5.length);
                }
                if (k == 14) {
                    TSamples111 = 0; TCash111 = 0;
                    for (var p = 0; p < SamplesData5.length; p++) {
                        TSamples111 = Number(TSamples111) + Number(SamplesData5[p]);
                        TCash111 = Number(TCash111) + Number(CashData5[p]);
                    }
                    sddb.innerHTML = TSamples111;
                    cddb.innerHTML = TCash111;
                    stYYY = Number(stYYY) + Number(TSamples111);
                    ctYYY = Number(ctYYY) + Number(TCash111);
                    vatyyy = Number(vatyyy) + Number(SamplesData5.length);
                }
                if (k == 15) {
                    TSamples111 = 0; TCash111 = 0;
                    for (var p = 0; p < SamplesData5.length; p++) {
                        TSamples111 = Number(TSamples111) + Number(SamplesData5[p]);
                        TCash111 = Number(TCash111) + Number(CashData5[p]);
                    }
                    sddb.innerHTML = TSamples111;
                    cddb.innerHTML = TCash111;
                    stYYY = Number(stYYY) + Number(TSamples111);
                    ctYYY = Number(ctYYY) + Number(TCash111);
                    vatyyy = Number(vatyyy) + Number(SamplesData5.length);
                }
                if (k == 16) {
                    TSamples111 = 0; TCash111 = 0;
                    for (var p = 0; p < SamplesData5.length; p++) {
                        TSamples111 = Number(TSamples111) + Number(SamplesData5[p]);
                        TCash111 = Number(TCash111) + Number(CashData5[p]);
                    }
                    sddb.innerHTML = TSamples111;
                    cddb.innerHTML = TCash111;
                    stYYY = Number(stYYY) + Number(TSamples111);
                    ctYYY = Number(ctYYY) + Number(TCash111);
                    vatyyy = Number(vatyyy) + Number(SamplesData5.length);
                }
                if (k == 17) {
                    TSamples111 = 0; TCash111 = 0;
                    for (var p = 0; p < SamplesData5.length; p++) {
                        TSamples111 = Number(TSamples111) + Number(SamplesData5[p]);
                        TCash111 = Number(TCash111) + Number(CashData5[p]);
                    }
                    sddb.innerHTML = TSamples111;
                    cddb.innerHTML = TCash111;
                    stYYY = Number(stYYY) + Number(TSamples111);
                    ctYYY = Number(ctYYY) + Number(TCash111);
                    vatyyy = Number(vatyyy) + Number(SamplesData5.length);
                }
                if (k == 18) {
                    TSamples111 = 0; TCash111 = 0;
                    for (var p = 0; p < SamplesData5.length; p++) {
                        TSamples111 = Number(TSamples111) + Number(SamplesData5[p]);
                        TCash111 = Number(TCash111) + Number(CashData5[p]);
                    }
                    sddb.innerHTML = TSamples111;
                    cddb.innerHTML = TCash111;
                    stYYY = Number(stYYY) + Number(TSamples111);
                    ctYYY = Number(ctYYY) + Number(TCash111);
                    vatyyy = Number(vatyyy) + Number(SamplesData5.length);
                }
                if (k == 19) {
                    TSamples111 = 0; TCash111 = 0;
                    for (var p = 0; p < SamplesData5.length; p++) {
                        TSamples111 = Number(TSamples111) + Number(SamplesData5[p]);
                        TCash111 = Number(TCash111) + Number(CashData5[p]);
                    }
                    sddb.innerHTML = TSamples111;
                    cddb.innerHTML = TCash111;
                    stYYY = Number(stYYY) + Number(TSamples111);
                    ctYYY = Number(ctYYY) + Number(TCash111);
                    vatyyy = Number(vatyyy) + Number(SamplesData5.length);
                }
                if (k == 20) {
                    TSamples111 = 0; TCash111 = 0;
                    for (var p = 0; p < SamplesData5.length; p++) {
                        TSamples111 = Number(TSamples111) + Number(SamplesData5[p]);
                        TCash111 = Number(TCash111) + Number(CashData5[p]);
                    }
                    sddb.innerHTML = TSamples111;
                    cddb.innerHTML = TCash111;
                    stYYY = Number(stYYY) + Number(TSamples111);
                    ctYYY = Number(ctYYY) + Number(TCash111);
                    vatyyy = Number(vatyyy) + Number(SamplesData5.length);
                }
                if (k == 21) {
                    TSamples111 = 0; TCash111 = 0;
                    for (var p = 0; p < SamplesData5.length; p++) {
                        TSamples111 = Number(TSamples111) + Number(SamplesData5[p]);
                        TCash111 = Number(TCash111) + Number(CashData5[p]);
                    }
                    sddb.innerHTML = TSamples111;
                    cddb.innerHTML = TCash111;
                    stYYY = Number(stYYY) + Number(TSamples111);
                    ctYYY = Number(ctYYY) + Number(TCash111);
                    vatyyy = Number(vatyyy) + Number(SamplesData5.length);
                }
                if (k == 22) {
                    TSamples111 = 0; TCash111 = 0;
                    for (var p = 0; p < SamplesData5.length; p++) {
                        TSamples111 = Number(TSamples111) + Number(SamplesData5[p]);
                        TCash111 = Number(TCash111) + Number(CashData5[p]);
                    }
                    sddb.innerHTML = TSamples111;
                    cddb.innerHTML = TCash111;
                    stYYY = Number(stYYY) + Number(TSamples111);
                    ctYYY = Number(ctYYY) + Number(TCash111);
                    vatyyy = Number(vatyyy) + Number(SamplesData5.length);
                }
                if (k == 23) {
                    TSamples111 = 0; TCash111 = 0;
                    for (var p = 0; p < SamplesData5.length; p++) {
                        TSamples111 = Number(TSamples111) + Number(SamplesData5[p]);
                        TCash111 = Number(TCash111) + Number(CashData5[p]);
                    }
                    sddb.innerHTML = TSamples111;
                    cddb.innerHTML = TCash111;
                    stYYY = Number(stYYY) + Number(TSamples111);
                    ctYYY = Number(ctYYY) + Number(TCash111);
                    vatyyy = Number(vatyyy) + Number(SamplesData5.length);
                }
                if (k == 24) {
                    TSamples111 = 0; TCash111 = 0;
                    for (var p = 0; p < SamplesData5.length; p++) {
                        TSamples111 = Number(TSamples111) + Number(SamplesData5[p]);
                        TCash111 = Number(TCash111) + Number(CashData5[p]);
                    }
                    sddb.innerHTML = TSamples111;
                    cddb.innerHTML = TCash111;
                    stYYY = Number(stYYY) + Number(TSamples111);
                    ctYYY = Number(ctYYY) + Number(TCash111);
                    vatyyy = Number(vatyyy) + Number(SamplesData5.length);
                }
                ddb2.innerHTML = SamplesData5.length;
                //alert(TSamples1);

                PERCVddby = Math.floor(((SamplesData5.length) / pervJMP) * 100);
                ddb3.innerHTML = PERCVddby + " %";
                vpptyyy = Number(vpptyyy) + Number(PERCVddby);
            }
            AJCallCWeek();

            m = m + 1;
            if (m == 23) { m = 1; }

        }
        function E_ILD_Full11() { alert("error...ddb") } // Just an Error Function
    }

    function AJCallCWeek() {

        ///////////////////////////////////////////////////
        //Current Week Trend //////////////////////////////
        ///////////////////////////////////////////////////
        //alert(Fcw);
        var ILD_Input_Query_Data3 = {
            "ILD_ID": ILDID,
            "FromDate": Fcw,
            "ToDate": today,
        }
        $.ajax({
            type: "POST",
            url: "WebService1.asmx/Get_All_ILD_Data_Full",
            data: JSON.stringify(ILD_Input_Query_Data3),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: S_ILD_Full111,
            error: E_ILD_Full111
        });

        function S_ILD_Full111(data) {
            //alert(data.d);
            var DataIN111 = data.d;
            if (data.d.length > 0) {

                var DataINSplit111 = DataIN111.split("<");
                SamplesData6 = DataINSplit111[1];    // Samples values
                SamplesData7 = SamplesData6.split(","); // Total Samples
                CashData6 = DataINSplit111[2]; // Cash values
                CashData7 = CashData6.split(","); // Total Cash
                //////////////////////////////////////////////////////////////////////////////////////////////////////////
                //alert(TVisits);
                if (k == 0) {
                    TSamples1111 = 0; TCash1111 = 0;
                    for (var p = 0; p < SamplesData7.length; p++) {
                        TSamples1111 = Number(TSamples1111) + Number(SamplesData7[p]);
                        TCash1111 = Number(TCash1111) + Number(CashData7[p]);
                    }
                    scw.innerHTML = TSamples1111;
                    ccw.innerHTML = TCash1111;
                    stCW = Number(stCW) + Number(TSamples1111);
                    ctCW = Number(ctCW) + Number(TCash1111);
                    vatcw = Number(vatcw) + Number(SamplesData7.length);
                }
                if (k == 1) {
                    TSamples1111 = 0; TCash1111 = 0;
                    for (var p = 0; p < SamplesData7.length; p++) {
                        TSamples1111 = Number(TSamples1111) + Number(SamplesData7[p]);
                        TCash1111 = Number(TCash1111) + Number(CashData7[p]);
                    }
                    scw.innerHTML = TSamples1111;
                    ccw.innerHTML = TCash1111;
                    stCW = Number(stCW) + Number(TSamples1111);
                    ctCW = Number(ctCW) + Number(TCash1111);
                    vatcw = Number(vatcw) + Number(SamplesData7.length);
                }
                if (k == 2) {
                    TSamples1111 = 0; TCash1111 = 0;
                    for (var p = 0; p < SamplesData7.length; p++) {
                        TSamples1111 = Number(TSamples1111) + Number(SamplesData7[p]);
                        TCash1111 = Number(TCash1111) + Number(CashData7[p]);
                    }
                    scw.innerHTML = TSamples1111;
                    ccw.innerHTML = TCash1111;
                    stCW = Number(stCW) + Number(TSamples1111);
                    ctCW = Number(ctCW) + Number(TCash1111);
                    vatcw = Number(vatcw) + Number(SamplesData7.length);
                }
                if (k == 3) {
                    TSamples1111 = 0; TCash1111 = 0;
                    for (var p = 0; p < SamplesData7.length; p++) {
                        TSamples1111 = Number(TSamples1111) + Number(SamplesData7[p]);
                        TCash1111 = Number(TCash1111) + Number(CashData7[p]);
                    }
                    scw.innerHTML = TSamples1111;
                    ccw.innerHTML = TCash1111;
                    stCW = Number(stCW) + Number(TSamples1111);
                    ctCW = Number(ctCW) + Number(TCash1111);
                    vatcw = Number(vatcw) + Number(SamplesData7.length);
                }
                if (k == 4) {
                    TSamples1111 = 0; TCash1111 = 0;
                    for (var p = 0; p < SamplesData7.length; p++) {
                        TSamples1111 = Number(TSamples1111) + Number(SamplesData7[p]);
                        TCash1111 = Number(TCash1111) + Number(CashData7[p]);
                    }
                    scw.innerHTML = TSamples1111;
                    ccw.innerHTML = TCash1111;
                    stCW = Number(stCW) + Number(TSamples1111);
                    ctCW = Number(ctCW) + Number(TCash1111);
                    vatcw = Number(vatcw) + Number(SamplesData7.length);
                }
                if (k == 5) {
                    TSamples1111 = 0; TCash1111 = 0;
                    TSamples1111 = 0; TCash1111 = 0;
                    for (var p = 0; p < SamplesData7.length; p++) {
                        TSamples1111 = Number(TSamples1111) + Number(SamplesData7[p]);
                        TCash1111 = Number(TCash1111) + Number(CashData7[p]);
                    }
                    scw.innerHTML = TSamples1111;
                    ccw.innerHTML = TCash1111;
                    stCW = Number(stCW) + Number(TSamples1111);
                    ctCW = Number(ctCW) + Number(TCash1111);
                    vatcw = Number(vatcw) + Number(SamplesData7.length);
                }
                if (k == 6) {
                    TSamples1111 = 0; TCash1111 = 0;
                    for (var p = 0; p < SamplesData7.length; p++) {
                        TSamples1111 = Number(TSamples1111) + Number(SamplesData7[p]);
                        TCash1111 = Number(TCash1111) + Number(CashData7[p]);
                    }
                    scw.innerHTML = TSamples1111;
                    ccw.innerHTML = TCash1111;
                    stCW = Number(stCW) + Number(TSamples1111);
                    ctCW = Number(ctCW) + Number(TCash1111);
                    vatcw = Number(vatcw) + Number(SamplesData7.length);
                }
                if (k == 7) {
                    TSamples1111 = 0; TCash1111 = 0;
                    for (var p = 0; p < SamplesData7.length; p++) {
                        TSamples1111 = Number(TSamples1111) + Number(SamplesData7[p]);
                        TCash1111 = Number(TCash1111) + Number(CashData7[p]);
                    }
                    scw.innerHTML = TSamples1111;
                    ccw.innerHTML = TCash1111;
                    stCW = Number(stCW) + Number(TSamples1111);
                    ctCW = Number(ctCW) + Number(TCash1111);
                    vatcw = Number(vatcw) + Number(SamplesData7.length);
                }
                if (k == 8) {
                    TSamples1111 = 0; TCash1111 = 0;
                    for (var p = 0; p < SamplesData7.length; p++) {
                        TSamples1111 = Number(TSamples1111) + Number(SamplesData7[p]);
                        TCash1111 = Number(TCash1111) + Number(CashData7[p]);
                    }
                    scw.innerHTML = TSamples1111;
                    ccw.innerHTML = TCash1111;
                    stCW = Number(stCW) + Number(TSamples1111);
                    ctCW = Number(ctCW) + Number(TCash1111);
                    vatcw = Number(vatcw) + Number(SamplesData7.length);
                }
                if (k == 9) {
                    TSamples1111 = 0; TCash1111 = 0;
                    for (var p = 0; p < SamplesData7.length; p++) {
                        TSamples1111 = Number(TSamples1111) + Number(SamplesData7[p]);
                        TCash1111 = Number(TCash1111) + Number(CashData7[p]);
                    }
                    scw.innerHTML = TSamples1111;
                    ccw.innerHTML = TCash1111;
                    stCW = Number(stCW) + Number(TSamples1111);
                    ctCW = Number(ctCW) + Number(TCash1111);
                    vatcw = Number(vatcw) + Number(SamplesData7.length);
                }
                if (k == 10) {
                    TSamples1111 = 0; TCash1111 = 0;
                    for (var p = 0; p < SamplesData7.length; p++) {
                        TSamples1111 = Number(TSamples1111) + Number(SamplesData7[p]);
                        TCash1111 = Number(TCash1111) + Number(CashData7[p]);
                    }
                    scw.innerHTML = TSamples1111;
                    ccw.innerHTML = TCash1111;
                    stCW = Number(stCW) + Number(TSamples1111);
                    ctCW = Number(ctCW) + Number(TCash1111);
                    vatcw = Number(vatcw) + Number(SamplesData7.length);
                }                
                if (k == 11) {
                    TSamples1111 = 0; TCash1111 = 0;
                    for (var p = 0; p < SamplesData7.length; p++) {
                        TSamples1111 = Number(TSamples1111) + Number(SamplesData7[p]);
                        TCash1111 = Number(TCash1111) + Number(CashData7[p]);
                    }
                    scw.innerHTML = TSamples1111;
                    ccw.innerHTML = TCash1111;
                    stCW = Number(stCW) + Number(TSamples1111);
                    ctCW = Number(ctCW) + Number(TCash1111);
                    vatcw = Number(vatcw) + Number(SamplesData7.length);
                }
                if (k == 12) {
                    TSamples1111 = 0; TCash1111 = 0;
                    for (var p = 0; p < SamplesData7.length; p++) {
                        TSamples1111 = Number(TSamples1111) + Number(SamplesData7[p]);
                        TCash1111 = Number(TCash1111) + Number(CashData7[p]);
                    }
                    scw.innerHTML = TSamples1111;
                    ccw.innerHTML = TCash1111;
                    stCW = Number(stCW) + Number(TSamples1111);
                    ctCW = Number(ctCW) + Number(TCash1111);
                    vatcw = Number(vatcw) + Number(SamplesData7.length);
                }
                if (k == 13) {
                    TSamples1111 = 0; TCash1111 = 0;
                    for (var p = 0; p < SamplesData7.length; p++) {
                        TSamples1111 = Number(TSamples1111) + Number(SamplesData7[p]);
                        TCash1111 = Number(TCash1111) + Number(CashData7[p]);
                    }
                    scw.innerHTML = TSamples1111;
                    ccw.innerHTML = TCash1111;
                    stCW = Number(stCW) + Number(TSamples1111);
                    ctCW = Number(ctCW) + Number(TCash1111);
                    vatcw = Number(vatcw) + Number(SamplesData7.length);
                }
                if (k == 14) {
                    TSamples1111 = 0; TCash1111 = 0;
                    for (var p = 0; p < SamplesData7.length; p++) {
                        TSamples1111 = Number(TSamples1111) + Number(SamplesData7[p]);
                        TCash1111 = Number(TCash1111) + Number(CashData7[p]);
                    }
                    scw.innerHTML = TSamples1111;
                    ccw.innerHTML = TCash1111;
                    stCW = Number(stCW) + Number(TSamples1111);
                    ctCW = Number(ctCW) + Number(TCash1111);
                    vatcw = Number(vatcw) + Number(SamplesData7.length);
                }
                if (k == 15) {
                    TSamples1111 = 0; TCash1111 = 0;
                    TSamples1111 = 0; TCash1111 = 0;
                    for (var p = 0; p < SamplesData7.length; p++) {
                        TSamples1111 = Number(TSamples1111) + Number(SamplesData7[p]);
                        TCash1111 = Number(TCash1111) + Number(CashData7[p]);
                    }
                    scw.innerHTML = TSamples1111;
                    ccw.innerHTML = TCash1111;
                    stCW = Number(stCW) + Number(TSamples1111);
                    ctCW = Number(ctCW) + Number(TCash1111);
                    vatcw = Number(vatcw) + Number(SamplesData7.length);
                }
                if (k == 16) {
                    TSamples1111 = 0; TCash1111 = 0;
                    for (var p = 0; p < SamplesData7.length; p++) {
                        TSamples1111 = Number(TSamples1111) + Number(SamplesData7[p]);
                        TCash1111 = Number(TCash1111) + Number(CashData7[p]);
                    }
                    scw.innerHTML = TSamples1111;
                    ccw.innerHTML = TCash1111;
                    stCW = Number(stCW) + Number(TSamples1111);
                    ctCW = Number(ctCW) + Number(TCash1111);
                    vatcw = Number(vatcw) + Number(SamplesData7.length);
                }
                if (k == 17) {
                    TSamples1111 = 0; TCash1111 = 0;
                    for (var p = 0; p < SamplesData7.length; p++) {
                        TSamples1111 = Number(TSamples1111) + Number(SamplesData7[p]);
                        TCash1111 = Number(TCash1111) + Number(CashData7[p]);
                    }
                    scw.innerHTML = TSamples1111;
                    ccw.innerHTML = TCash1111;
                    stCW = Number(stCW) + Number(TSamples1111);
                    ctCW = Number(ctCW) + Number(TCash1111);
                    vatcw = Number(vatcw) + Number(SamplesData7.length);
                }
                if (k == 18) {
                    TSamples1111 = 0; TCash1111 = 0;
                    for (var p = 0; p < SamplesData7.length; p++) {
                        TSamples1111 = Number(TSamples1111) + Number(SamplesData7[p]);
                        TCash1111 = Number(TCash1111) + Number(CashData7[p]);
                    }
                    scw.innerHTML = TSamples1111;
                    ccw.innerHTML = TCash1111;
                    stCW = Number(stCW) + Number(TSamples1111);
                    ctCW = Number(ctCW) + Number(TCash1111);
                    vatcw = Number(vatcw) + Number(SamplesData7.length);
                }
                if (k == 19) {
                    TSamples1111 = 0; TCash1111 = 0;
                    for (var p = 0; p < SamplesData7.length; p++) {
                        TSamples1111 = Number(TSamples1111) + Number(SamplesData7[p]);
                        TCash1111 = Number(TCash1111) + Number(CashData7[p]);
                    }
                    scw.innerHTML = TSamples1111;
                    ccw.innerHTML = TCash1111;
                    stCW = Number(stCW) + Number(TSamples1111);
                    ctCW = Number(ctCW) + Number(TCash1111);
                    vatcw = Number(vatcw) + Number(SamplesData7.length);
                }
                if (k == 20) {
                    TSamples1111 = 0; TCash1111 = 0;
                    for (var p = 0; p < SamplesData7.length; p++) {
                        TSamples1111 = Number(TSamples1111) + Number(SamplesData7[p]);
                        TCash1111 = Number(TCash1111) + Number(CashData7[p]);
                    }
                    scw.innerHTML = TSamples1111;
                    ccw.innerHTML = TCash1111;
                    stCW = Number(stCW) + Number(TSamples1111);
                    ctCW = Number(ctCW) + Number(TCash1111);
                    vatcw = Number(vatcw) + Number(SamplesData7.length);
                }
                if (k == 21) {
                    TSamples1111 = 0; TCash1111 = 0;
                    for (var p = 0; p < SamplesData7.length; p++) {
                        TSamples1111 = Number(TSamples1111) + Number(SamplesData7[p]);
                        TCash1111 = Number(TCash1111) + Number(CashData7[p]);
                    }
                    scw.innerHTML = TSamples1111;
                    ccw.innerHTML = TCash1111;
                    stCW = Number(stCW) + Number(TSamples1111);
                    ctCW = Number(ctCW) + Number(TCash1111);
                    vatcw = Number(vatcw) + Number(SamplesData7.length);
                }
                if (k == 22) {
                    TSamples1111 = 0; TCash1111 = 0;
                    for (var p = 0; p < SamplesData7.length; p++) {
                        TSamples1111 = Number(TSamples1111) + Number(SamplesData7[p]);
                        TCash1111 = Number(TCash1111) + Number(CashData7[p]);
                    }
                    scw.innerHTML = TSamples1111;
                    ccw.innerHTML = TCash1111;
                    stCW = Number(stCW) + Number(TSamples1111);
                    ctCW = Number(ctCW) + Number(TCash1111);
                    vatcw = Number(vatcw) + Number(SamplesData7.length);
                }
                if (k == 23) {
                    TSamples1111 = 0; TCash1111 = 0;
                    for (var p = 0; p < SamplesData7.length; p++) {
                        TSamples1111 = Number(TSamples1111) + Number(SamplesData7[p]);
                        TCash1111 = Number(TCash1111) + Number(CashData7[p]);
                    }
                    scw.innerHTML = TSamples1111;
                    ccw.innerHTML = TCash1111;
                    stCW = Number(stCW) + Number(TSamples1111);
                    ctCW = Number(ctCW) + Number(TCash1111);
                    vatcw = Number(vatcw) + Number(SamplesData7.length);
                }
                if (k == 24) {
                    TSamples1111 = 0; TCash1111 = 0;
                    for (var p = 0; p < SamplesData7.length; p++) {
                        TSamples1111 = Number(TSamples1111) + Number(SamplesData7[p]);
                        TCash1111 = Number(TCash1111) + Number(CashData7[p]);
                    }
                    scw.innerHTML = TSamples1111;
                    ccw.innerHTML = TCash1111;
                    stCW = Number(stCW) + Number(TSamples1111);
                    ctCW = Number(ctCW) + Number(TCash1111);
                    vatcw = Number(vatcw) + Number(SamplesData7.length);
                }
                cw2.innerHTML = SamplesData7.length;

                PERCVweek = Math.floor(((SamplesData7.length) / pervJMPWeek) * 100);
                cw3.innerHTML = PERCVweek + " %";
                vpptcw = Number(vpptcw) + Number(PERCVweek);
                m = m + 1;
                if (m == 23) {
                    m = 1;
                }
            }
            AJCallPrevWeek();
            // Re-Trigger the Whole Process Automatically

        }
        function E_ILD_Full111() { alert("error...") } // Just an Error Function
    }


    function AJCallPrevWeek() {
        //alert(ILDID);
        ///////////////////////////////////////////////////
        //Previous Week Trend /////////////////////////////
        ///////////////////////////////////////////////////
        //alert(SWeekBefore + "...." + EWeekBefore);
        var ILD_Input_Query_Data4 = {
            "ILD_ID": ILDID,
            "FromDate": Fpw,
            "ToDate": Fcw,
        }
        $.ajax({
            type: "POST",
            url: "WebService1.asmx/Get_All_ILD_Data_Full",
            data: JSON.stringify(ILD_Input_Query_Data4),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: S_ILD_Full1111,
            error: E_ILD_Full1111
        });

        function S_ILD_Full1111(data) {
            //alert(data.d);
            var DataIN111 = data.d;
            if (data.d.length > 0) {

                var DataINSplit111 = DataIN111.split("<");
                //alert(DataINSplit111)
                SamplesData8 = DataINSplit111[1];    // Samples values
                SamplesData9 = SamplesData8.split(","); // Total Samples
                CashData8 = DataINSplit111[2]; // Cash values
                CashData9 = CashData8.split(","); // Total Cash
                //////////////////////////////////////////////////////////////////////////////////////////////////////////

                if (k == 0) {
                    TSamples11111 = 0; TCash11111 = 0;
                    for (var p = 0; p < SamplesData9.length; p++) {
                        TSamples11111 = Number(TSamples11111) + Number(SamplesData9[p]);
                        TCash11111 = Number(TCash11111) + Number(CashData9[p]);
                    }
                    spw.innerHTML = TSamples11111;
                    cpw.innerHTML = TCash11111;
                    stPWEE = Number(stPWEE) + Number(TSamples11111);
                    ctPWEE = Number(ctPWEE) + Number(TCash11111);
                    vatpw = Number(vatpw) + Number(SamplesData9.length);
                }
                if (k == 1) {
                    TSamples11111 = 0; TCash11111 = 0;
                    for (var p = 0; p < SamplesData9.length; p++) {
                        TSamples11111 = Number(TSamples11111) + Number(SamplesData9[p]);
                        TCash11111 = Number(TCash11111) + Number(CashData9[p]);
                    }
                    spw.innerHTML = TSamples11111;
                    cpw.innerHTML = TCash11111;
                    stPWEE = Number(stPWEE) + Number(TSamples11111);
                    ctPWEE = Number(ctPWEE) + Number(TCash11111);
                    vatpw = Number(vatpw) + Number(SamplesData9.length);
                    if (spw.innerHTML.length > 0) {
                        //Totals_Func(); alert("AAA")
                        document.getElementById("TotalsBtn").disabled = false;
                        document.getElementById("TotalsBtn").style.backgroundColor = "#00E79F";
                    }
                }
                if (k == 2) {
                    TSamples11111 = 0; TCash11111 = 0;
                    for (var p = 0; p < SamplesData9.length; p++) {
                        TSamples11111 = Number(TSamples11111) + Number(SamplesData9[p]);
                        TCash11111 = Number(TCash11111) + Number(CashData9[p]);
                    }
                    spw.innerHTML = TSamples11111;
                    cpw.innerHTML = TCash11111;
                    stPWEE = Number(stPWEE) + Number(TSamples11111);
                    ctPWEE = Number(ctPWEE) + Number(TCash11111);
                    vatpw = Number(vatpw) + Number(SamplesData9.length);
                }
                if (k == 3) {
                    for (var p = 0; p < SamplesData9.length; p++) {
                        TSamples11111 = Number(TSamples11111) + Number(SamplesData9[p]);
                        TCash11111 = Number(TCash11111) + Number(CashData9[p]);
                    }
                    spw.innerHTML = TSamples11111;
                    cpw.innerHTML = TCash11111;
                    stPWEE = Number(stPWEE) + Number(TSamples11111);
                    ctPWEE = Number(ctPWEE) + Number(TCash11111);
                    vatpw = Number(vatpw) + Number(SamplesData9.length);
                }
                if (k == 4) {
                    TSamples11111 = 0; TCash11111 = 0;
                    for (var p = 0; p < SamplesData9.length; p++) {
                        TSamples11111 = Number(TSamples11111) + Number(SamplesData9[p]);
                        TCash11111 = Number(TCash11111) + Number(CashData9[p]);
                    }
                    spw.innerHTML = TSamples11111;
                    cpw.innerHTML = TCash11111;
                    stPWEE = Number(stPWEE) + Number(TSamples11111);
                    ctPWEE = Number(ctPWEE) + Number(TCash11111);
                    vatpw = Number(vatpw) + Number(SamplesData9.length);
                }
                if (k == 5) {
                    TSamples11111 = 0; TCash11111 = 0;
                    for (var p = 0; p < SamplesData9.length; p++) {
                        TSamples11111 = Number(TSamples11111) + Number(SamplesData9[p]);
                        TCash11111 = Number(TCash11111) + Number(CashData9[p]);
                    }
                    spw.innerHTML = TSamples11111;
                    cpw.innerHTML = TCash11111;
                    stPWEE = Number(stPWEE) + Number(TSamples11111);
                    ctPWEE = Number(ctPWEE) + Number(TCash11111);
                    vatpw = Number(vatpw) + Number(SamplesData9.length);
                }
                if (k == 6) {
                    TSamples11111 = 0; TCash11111 = 0;
                    for (var p = 0; p < SamplesData9.length; p++) {
                        TSamples11111 = Number(TSamples11111) + Number(SamplesData9[p]);
                        TCash11111 = Number(TCash11111) + Number(CashData9[p]);
                    }
                    spw.innerHTML = TSamples11111;
                    cpw.innerHTML = TCash11111;
                    stPWEE = Number(stPWEE) + Number(TSamples11111);
                    ctPWEE = Number(ctPWEE) + Number(TCash11111);
                    vatpw = Number(vatpw) + Number(SamplesData9.length);
                }
                if (k == 7) {
                    TSamples11111 = 0; TCash11111 = 0;
                    for (var p = 0; p < SamplesData9.length; p++) {
                        TSamples11111 = Number(TSamples11111) + Number(SamplesData9[p]);
                        TCash11111 = Number(TCash11111) + Number(CashData9[p]);
                    }
                    spw.innerHTML = TSamples11111;
                    cpw.innerHTML = TCash11111;
                    stPWEE = Number(stPWEE) + Number(TSamples11111);
                    ctPWEE = Number(ctPWEE) + Number(TCash11111);
                    vatpw = Number(vatpw) + Number(SamplesData9.length);
                }
                if (k == 8) {
                    TSamples11111 = 0; TCash11111 = 0;
                    for (var p = 0; p < SamplesData9.length; p++) {
                        TSamples11111 = Number(TSamples11111) + Number(SamplesData9[p]);
                        TCash11111 = Number(TCash11111) + Number(CashData9[p]);
                    }

                    spw.innerHTML = TSamples11111;
                    cpw.innerHTML = TCash11111;
                    stPWEE = Number(stPWEE) + Number(TSamples11111);
                    ctPWEE = Number(ctPWEE) + Number(TCash11111);
                    vatpw = Number(vatpw) + Number(SamplesData9.length);
                }

                if (k == 9) {
                    TSamples11111 = 0; TCash11111 = 0;
                    for (var p = 0; p < SamplesData9.length; p++) {
                        TSamples11111 = Number(TSamples11111) + Number(SamplesData9[p]);
                        TCash11111 = Number(TCash11111) + Number(CashData9[p]);
                    }
                    spw.innerHTML = TSamples11111;
                    cpw.innerHTML = TCash11111;
                    stPWEE = Number(stPWEE) + Number(TSamples11111);
                    ctPWEE = Number(ctPWEE) + Number(TCash11111);
                    vatpw = Number(vatpw) + Number(SamplesData9.length);
                }
                if (k == 10) {
                    TSamples11111 = 0; TCash11111 = 0;
                    for (var p = 0; p < SamplesData9.length; p++) {
                        TSamples11111 = Number(TSamples11111) + Number(SamplesData9[p]);
                        TCash11111 = Number(TCash11111) + Number(CashData9[p]);
                    }
                    spw.innerHTML = TSamples11111;
                    cpw.innerHTML = TCash11111;
                    stPWEE = Number(stPWEE) + Number(TSamples11111);
                    ctPWEE = Number(ctPWEE) + Number(TCash11111);
                    vatpw = Number(vatpw) + Number(SamplesData9.length);
                }
                if (k == 11) {
                    TSamples11111 = 0; TCash11111 = 0;
                    for (var p = 0; p < SamplesData9.length; p++) {
                        TSamples11111 = Number(TSamples11111) + Number(SamplesData9[p]);
                        TCash11111 = Number(TCash11111) + Number(CashData9[p]);
                    }
                    spw.innerHTML = TSamples11111;
                    cpw.innerHTML = TCash11111;
                    stPWEE = Number(stPWEE) + Number(TSamples11111);
                    ctPWEE = Number(ctPWEE) + Number(TCash11111);
                    vatpw = Number(vatpw) + Number(SamplesData9.length);                   
                }
                if (k == 12) {
                    TSamples11111 = 0; TCash11111 = 0;
                    for (var p = 0; p < SamplesData9.length; p++) {
                        TSamples11111 = Number(TSamples11111) + Number(SamplesData9[p]);
                        TCash11111 = Number(TCash11111) + Number(CashData9[p]);
                    }
                    spw.innerHTML = TSamples11111;
                    cpw.innerHTML = TCash11111;
                    stPWEE = Number(stPWEE) + Number(TSamples11111);
                    ctPWEE = Number(ctPWEE) + Number(TCash11111);
                    vatpw = Number(vatpw) + Number(SamplesData9.length);
                }
                if (k == 13) {
                    for (var p = 0; p < SamplesData9.length; p++) {
                        TSamples11111 = Number(TSamples11111) + Number(SamplesData9[p]);
                        TCash11111 = Number(TCash11111) + Number(CashData9[p]);
                    }
                    spw.innerHTML = TSamples11111;
                    cpw.innerHTML = TCash11111;
                    stPWEE = Number(stPWEE) + Number(TSamples11111);
                    ctPWEE = Number(ctPWEE) + Number(TCash11111);
                    vatpw = Number(vatpw) + Number(SamplesData9.length);
                }
                if (k == 14) {
                    TSamples11111 = 0; TCash11111 = 0;
                    for (var p = 0; p < SamplesData9.length; p++) {
                        TSamples11111 = Number(TSamples11111) + Number(SamplesData9[p]);
                        TCash11111 = Number(TCash11111) + Number(CashData9[p]);
                    }
                    spw.innerHTML = TSamples11111;
                    cpw.innerHTML = TCash11111;
                    stPWEE = Number(stPWEE) + Number(TSamples11111);
                    ctPWEE = Number(ctPWEE) + Number(TCash11111);
                    vatpw = Number(vatpw) + Number(SamplesData9.length);
                }
                if (k == 15) {
                    TSamples11111 = 0; TCash11111 = 0;
                    for (var p = 0; p < SamplesData9.length; p++) {
                        TSamples11111 = Number(TSamples11111) + Number(SamplesData9[p]);
                        TCash11111 = Number(TCash11111) + Number(CashData9[p]);
                    }
                    spw.innerHTML = TSamples11111;
                    cpw.innerHTML = TCash11111;
                    stPWEE = Number(stPWEE) + Number(TSamples11111);
                    ctPWEE = Number(ctPWEE) + Number(TCash11111);
                    vatpw = Number(vatpw) + Number(SamplesData9.length);
                }
                if (k == 16) {
                    TSamples11111 = 0; TCash11111 = 0;
                    for (var p = 0; p < SamplesData9.length; p++) {
                        TSamples11111 = Number(TSamples11111) + Number(SamplesData9[p]);
                        TCash11111 = Number(TCash11111) + Number(CashData9[p]);
                    }
                    spw.innerHTML = TSamples11111;
                    cpw.innerHTML = TCash11111;
                    stPWEE = Number(stPWEE) + Number(TSamples11111);
                    ctPWEE = Number(ctPWEE) + Number(TCash11111);
                    vatpw = Number(vatpw) + Number(SamplesData9.length);
                }
                if (k == 17) {
                    TSamples11111 = 0; TCash11111 = 0;
                    for (var p = 0; p < SamplesData9.length; p++) {
                        TSamples11111 = Number(TSamples11111) + Number(SamplesData9[p]);
                        TCash11111 = Number(TCash11111) + Number(CashData9[p]);
                    }
                    spw.innerHTML = TSamples11111;
                    cpw.innerHTML = TCash11111;
                    stPWEE = Number(stPWEE) + Number(TSamples11111);
                    ctPWEE = Number(ctPWEE) + Number(TCash11111);
                    vatpw = Number(vatpw) + Number(SamplesData9.length);
                }
                if (k == 18) {
                    TSamples11111 = 0; TCash11111 = 0;
                    for (var p = 0; p < SamplesData9.length; p++) {
                        TSamples11111 = Number(TSamples11111) + Number(SamplesData9[p]);
                        TCash11111 = Number(TCash11111) + Number(CashData9[p]);
                    }

                    spw.innerHTML = TSamples11111;
                    cpw.innerHTML = TCash11111;
                    stPWEE = Number(stPWEE) + Number(TSamples11111);
                    ctPWEE = Number(ctPWEE) + Number(TCash11111);
                    vatpw = Number(vatpw) + Number(SamplesData9.length);
                }

                if (k == 19) {
                    TSamples11111 = 0; TCash11111 = 0;
                    for (var p = 0; p < SamplesData9.length; p++) {
                        TSamples11111 = Number(TSamples11111) + Number(SamplesData9[p]);
                        TCash11111 = Number(TCash11111) + Number(CashData9[p]);
                    }
                    spw.innerHTML = TSamples11111;
                    cpw.innerHTML = TCash11111;
                    stPWEE = Number(stPWEE) + Number(TSamples11111);
                    ctPWEE = Number(ctPWEE) + Number(TCash11111);
                    vatpw = Number(vatpw) + Number(SamplesData9.length);
                }
                if (k == 20) {
                    TSamples11111 = 0; TCash11111 = 0;
                    for (var p = 0; p < SamplesData9.length; p++) {
                        TSamples11111 = Number(TSamples11111) + Number(SamplesData9[p]);
                        TCash11111 = Number(TCash11111) + Number(CashData9[p]);
                    }
                    spw.innerHTML = TSamples11111;
                    cpw.innerHTML = TCash11111;
                    stPWEE = Number(stPWEE) + Number(TSamples11111);
                    ctPWEE = Number(ctPWEE) + Number(TCash11111);
                    vatpw = Number(vatpw) + Number(SamplesData9.length);                    
                }
                if (k == 21) {
                    TSamples11111 = 0; TCash11111 = 0;
                    for (var p = 0; p < SamplesData9.length; p++) {
                        TSamples11111 = Number(TSamples11111) + Number(SamplesData9[p]);
                        TCash11111 = Number(TCash11111) + Number(CashData9[p]);
                    }
                    spw.innerHTML = TSamples11111;
                    cpw.innerHTML = TCash11111;
                    stPWEE = Number(stPWEE) + Number(TSamples11111);
                    ctPWEE = Number(ctPWEE) + Number(TCash11111);
                    vatpw = Number(vatpw) + Number(SamplesData9.length);
                }
                if (k == 22) {
                    TSamples11111 = 0; TCash11111 = 0;
                    for (var p = 0; p < SamplesData9.length; p++) {
                        TSamples11111 = Number(TSamples11111) + Number(SamplesData9[p]);
                        TCash11111 = Number(TCash11111) + Number(CashData9[p]);
                    }
                    spw.innerHTML = TSamples11111;
                    cpw.innerHTML = TCash11111;
                    stPWEE = Number(stPWEE) + Number(TSamples11111);
                    ctPWEE = Number(ctPWEE) + Number(TCash11111);
                    vatpw = Number(vatpw) + Number(SamplesData9.length);
                }
                if (k == 23) {
                    TSamples11111 = 0; TCash11111 = 0;
                    for (var p = 0; p < SamplesData9.length; p++) {
                        TSamples11111 = Number(TSamples11111) + Number(SamplesData9[p]);
                        TCash11111 = Number(TCash11111) + Number(CashData9[p]);
                    }
                    spw.innerHTML = TSamples11111;
                    cpw.innerHTML = TCash11111;
                    stPWEE = Number(stPWEE) + Number(TSamples11111);
                    ctPWEE = Number(ctPWEE) + Number(TCash11111);
                    vatpw = Number(vatpw) + Number(SamplesData9.length);
                }
                if (k == 24) {
                    TSamples11111 = 0; TCash11111 = 0;
                    for (var p = 0; p < SamplesData9.length; p++) {
                        TSamples11111 = Number(TSamples11111) + Number(SamplesData9[p]);
                        TCash11111 = Number(TCash11111) + Number(CashData9[p]);
                    }
                    spw.innerHTML = TSamples11111;
                    cpw.innerHTML = TCash11111;
                    stPWEE = Number(stPWEE) + Number(TSamples11111);
                    ctPWEE = Number(ctPWEE) + Number(TCash11111);
                    vatpw = Number(vatpw) + Number(SamplesData9.length);
                    if (spw.innerHTML.length > 0) {
                        //Totals_Func(); alert("AAA")
                        document.getElementById("TotalsBtn").disabled = false;
                        document.getElementById("TotalsBtn").style.backgroundColor = "#00E79F";
                    }
                }
                pw2.innerHTML = SamplesData9.length;
                //alert(TSamples1);
                //alert(vatpw);
                PERPrevweek = Math.floor(((SamplesData9.length) / pervJMPWeekPre) * 100);
                pw3.innerHTML = PERPrevweek + " %";
                vpptpw = Number(vpptpw) + Number(PERPrevweek);

                //document.getElementById("LoadData").click();
                
            }
            m = m + 1;
            if (m == 23) {
                m = 1;
            }
        }
        AJCallCurrMonth();
        function E_ILD_Full1111() { alert("error...") } // Just an Error Function
    }


    function AJCallCurrMonth() {
        //alert(PrevMonth);
        ///////////////////////////////////////////////////
        //Previous Week Trend /////////////////////////////
        ///////////////////////////////////////////////////
        //alert(SWeekBefore + "...." + EWeekBefore);
        var ILD_Input_Query_Data5 = {
            "ILD_ID": ILDID,
            "FromDate": CurrMonth,
            "ToDate": today,
        }
        $.ajax({
            type: "POST",
            url: "WebService1.asmx/Get_All_ILD_Data_Full",
            data: JSON.stringify(ILD_Input_Query_Data5),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: S_ILD_Full11111,
            error: E_ILD_Full11111
        });

        function S_ILD_Full11111(data) {
            //alert(data.d);
            var DataIN1111 = data.d;
            if (data.d.length > 0) {

                var DataINSplit1111 = DataIN1111.split("<");
                //alert(DataINSplit111)
                SamplesData10 = DataINSplit1111[1];    // Samples values
                SamplesData11 = SamplesData10.split(","); // Total Samples
                CashData10 = DataINSplit1111[2]; // Cash values
                CashData11 = CashData10.split(","); // Total Cash
                //////////////////////////////////////////////////////////////////////////////////////////////////////////

                if (k == 0) {
                    TSamples111116 = 0; TCash111116 = 0;
                    for (var p = 0; p < SamplesData11.length; p++) {
                        TSamples111116 = Number(TSamples111116) + Number(SamplesData11[p]);
                        TCash111116 = Number(TCash111116) + Number(CashData11[p]);
                    }
                    scm.innerHTML = TSamples111116;
                    ccm.innerHTML = TCash111116;
                    stCM = Number(stCM) + Number(TSamples111116);
                    ctCM = Number(ctCM) + Number(TCash111116);
                    vatcm = Number(vatcm) + Number(SamplesData11.length);
                }/////////////////////////////////////////////////////////////////////////////////////
                if (k == 1) {
                    TSamples111116 = 0; TCash111116 = 0;
                    for (var p = 0; p < SamplesData11.length; p++) {
                        TSamples111116 = Number(TSamples111116) + Number(SamplesData11[p]);
                        TCash111116 = Number(TCash111116) + Number(CashData11[p]);
                    }
                    scm.innerHTML = TSamples111116;
                    ccm.innerHTML = TCash111116;
                    stCM = Number(stCM) + Number(TSamples111116);
                    ctCM = Number(ctCM) + Number(TCash111116);
                    vatcm = Number(vatcm) + Number(SamplesData11.length);
                }//////////////////////////////////////////////////////////////////////////////////////////
                if (k == 2) {
                    TSamples111116 = 0; TCash111116 = 0;
                    for (var p = 0; p < SamplesData11.length; p++) {
                        TSamples111116 = Number(TSamples111116) + Number(SamplesData11[p]);
                        TCash111116 = Number(TCash111116) + Number(CashData11[p]);
                    }
                    scm.innerHTML = TSamples111116;
                    ccm.innerHTML = TCash111116;
                    stCM = Number(stCM) + Number(TSamples111116);
                    ctCM = Number(ctCM) + Number(TCash111116);
                    vatcm = Number(vatcm) + Number(SamplesData11.length);
                }/////////////////////////////////////////////////////////////////////////////////////////
                if (k == 3) {
                    TSamples111116 = 0; TCash111116 = 0;
                    for (var p = 0; p < SamplesData11.length; p++) {
                        TSamples111116 = Number(TSamples111116) + Number(SamplesData11[p]);
                        TCash111116 = Number(TCash111116) + Number(CashData11[p]);
                    }
                    scm.innerHTML = TSamples111116;
                    ccm.innerHTML = TCash111116;
                    stCM = Number(stCM) + Number(TSamples111116);
                    ctCM = Number(ctCM) + Number(TCash111116);
                    vatcm = Number(vatcm) + Number(SamplesData11.length);
                }/////////////////////////////////////////////////////////////////////////////////////////
                if (k == 4) {
                    TSamples111116 = 0; TCash111116 = 0;
                    for (var p = 0; p < SamplesData11.length; p++) {
                        TSamples111116 = Number(TSamples111116) + Number(SamplesData11[p]);
                        TCash111116 = Number(TCash111116) + Number(CashData11[p]);
                    }
                    scm.innerHTML = TSamples111116;
                    ccm.innerHTML = TCash111116;
                    stCM = Number(stCM) + Number(TSamples111116);
                    ctCM = Number(ctCM) + Number(TCash111116);
                    vatcm = Number(vatcm) + Number(SamplesData11.length);
                }/////////////////////////////////////////////////////////////////////////////////////////
                if (k == 5) {
                    TSamples111116 = 0; TCash111116 = 0;
                    for (var p = 0; p < SamplesData11.length; p++) {
                        TSamples111116 = Number(TSamples111116) + Number(SamplesData11[p]);
                        TCash111116 = Number(TCash111116) + Number(CashData11[p]);
                    }
                    scm.innerHTML = TSamples111116;
                    ccm.innerHTML = TCash111116;
                    stCM = Number(stCM) + Number(TSamples111116);
                    ctCM = Number(ctCM) + Number(TCash111116);
                    vatcm = Number(vatcm) + Number(SamplesData11.length);
                }/////////////////////////////////////////////////////////////////////////////////////////
                if (k == 6) {
                    TSamples111116 = 0; TCash111116 = 0;
                    for (var p = 0; p < SamplesData11.length; p++) {
                        TSamples111116 = Number(TSamples111116) + Number(SamplesData11[p]);
                        TCash111116 = Number(TCash111116) + Number(CashData11[p]);
                    }
                    scm.innerHTML = TSamples111116;
                    ccm.innerHTML = TCash111116;
                    stCM = Number(stCM) + Number(TSamples111116);
                    ctCM = Number(ctCM) + Number(TCash111116);
                    vatcm = Number(vatcm) + Number(SamplesData11.length);
                }/////////////////////////////////////////////////////////////////////////////////////////
                if (k == 7) {
                    TSamples111116 = 0; TCash111116 = 0;
                    for (var p = 0; p < SamplesData11.length; p++) {
                        TSamples111116 = Number(TSamples111116) + Number(SamplesData11[p]);
                        TCash111116 = Number(TCash111116) + Number(CashData11[p]);
                    }
                    scm.innerHTML = TSamples111116;
                    ccm.innerHTML = TCash111116;
                    stCM = Number(stCM) + Number(TSamples111116);
                    ctCM = Number(ctCM) + Number(TCash111116);
                    vatcm = Number(vatcm) + Number(SamplesData11.length);
                }/////////////////////////////////////////////////////////////////////////////////////////
                if (k == 8) {
                    TSamples111116 = 0; TCash111116 = 0;
                    for (var p = 0; p < SamplesData11.length; p++) {
                        TSamples111116 = Number(TSamples111116) + Number(SamplesData11[p]);
                        TCash111116 = Number(TCash111116) + Number(CashData11[p]);
                    }
                    scm.innerHTML = TSamples111116;
                    ccm.innerHTML = TCash111116;
                    stCM = Number(stCM) + Number(TSamples111116);
                    ctCM = Number(ctCM) + Number(TCash111116);
                    vatcm = Number(vatcm) + Number(SamplesData11.length);
                }/////////////////////////////////////////////////////////////////////////////////////////
                if (k == 9) {
                    TSamples111116 = 0; TCash111116 = 0;
                    for (var p = 0; p < SamplesData11.length; p++) {
                        TSamples111116 = Number(TSamples111116) + Number(SamplesData11[p]);
                        TCash111116 = Number(TCash111116) + Number(CashData11[p]);
                    }
                    scm.innerHTML = TSamples111116;
                    ccm.innerHTML = TCash111116;
                    stCM = Number(stCM) + Number(TSamples111116);
                    ctCM = Number(ctCM) + Number(TCash111116);
                    vatcm = Number(vatcm) + Number(SamplesData11.length);
                }///////////////////////////////////////////////////////////////////////////////////////
                if (k == 10) {
                    TSamples111116 = 0; TCash111116 = 0;
                    for (var p = 0; p < SamplesData11.length; p++) {
                        TSamples111116 = Number(TSamples111116) + Number(SamplesData11[p]);
                        TCash111116 = Number(TCash111116) + Number(CashData11[p]);
                    }
                    scm.innerHTML = TSamples111116;
                    ccm.innerHTML = TCash111116;
                    stCM = Number(stCM) + Number(TSamples111116);
                    ctCM = Number(ctCM) + Number(TCash111116);
                    vatcm = Number(vatcm) + Number(SamplesData11.length);
                }/////////////////////////////////////////////////////////////////////////////////////
                if (k == 11) {
                    TSamples111116 = 0; TCash111116 = 0;
                    for (var p = 0; p < SamplesData11.length; p++) {
                        TSamples111116 = Number(TSamples111116) + Number(SamplesData11[p]);
                        TCash111116 = Number(TCash111116) + Number(CashData11[p]);
                    }
                    scm.innerHTML = TSamples111116;
                    ccm.innerHTML = TCash111116;
                    stCM = Number(stCM) + Number(TSamples111116);
                    ctCM = Number(ctCM) + Number(TCash111116);
                    vatcm = Number(vatcm) + Number(SamplesData11.length);
                }//////////////////////////////////////////////////////////////////////////////////////////
                if (k == 12) {
                    TSamples111116 = 0; TCash111116 = 0;
                    for (var p = 0; p < SamplesData11.length; p++) {
                        TSamples111116 = Number(TSamples111116) + Number(SamplesData11[p]);
                        TCash111116 = Number(TCash111116) + Number(CashData11[p]);
                    }
                    scm.innerHTML = TSamples111116;
                    ccm.innerHTML = TCash111116;
                    stCM = Number(stCM) + Number(TSamples111116);
                    ctCM = Number(ctCM) + Number(TCash111116);
                    vatcm = Number(vatcm) + Number(SamplesData11.length);
                }/////////////////////////////////////////////////////////////////////////////////////////
                if (k == 13) {
                    TSamples111116 = 0; TCash111116 = 0;
                    for (var p = 0; p < SamplesData11.length; p++) {
                        TSamples111116 = Number(TSamples111116) + Number(SamplesData11[p]);
                        TCash111116 = Number(TCash111116) + Number(CashData11[p]);
                    }
                    scm.innerHTML = TSamples111116;
                    ccm.innerHTML = TCash111116;
                    stCM = Number(stCM) + Number(TSamples111116);
                    ctCM = Number(ctCM) + Number(TCash111116);
                    vatcm = Number(vatcm) + Number(SamplesData11.length);
                }/////////////////////////////////////////////////////////////////////////////////////////
                if (k == 14) {
                    TSamples111116 = 0; TCash111116 = 0;
                    for (var p = 0; p < SamplesData11.length; p++) {
                        TSamples111116 = Number(TSamples111116) + Number(SamplesData11[p]);
                        TCash111116 = Number(TCash111116) + Number(CashData11[p]);
                    }
                    scm.innerHTML = TSamples111116;
                    ccm.innerHTML = TCash111116;
                    stCM = Number(stCM) + Number(TSamples111116);
                    ctCM = Number(ctCM) + Number(TCash111116);
                    vatcm = Number(vatcm) + Number(SamplesData11.length);
                }/////////////////////////////////////////////////////////////////////////////////////////
                if (k == 15) {
                    TSamples111116 = 0; TCash111116 = 0;
                    for (var p = 0; p < SamplesData11.length; p++) {
                        TSamples111116 = Number(TSamples111116) + Number(SamplesData11[p]);
                        TCash111116 = Number(TCash111116) + Number(CashData11[p]);
                    }
                    scm.innerHTML = TSamples111116;
                    ccm.innerHTML = TCash111116;
                    stCM = Number(stCM) + Number(TSamples111116);
                    ctCM = Number(ctCM) + Number(TCash111116);
                    vatcm = Number(vatcm) + Number(SamplesData11.length);
                }/////////////////////////////////////////////////////////////////////////////////////////
                if (k == 16) {
                    TSamples111116 = 0; TCash111116 = 0;
                    for (var p = 0; p < SamplesData11.length; p++) {
                        TSamples111116 = Number(TSamples111116) + Number(SamplesData11[p]);
                        TCash111116 = Number(TCash111116) + Number(CashData11[p]);
                    }
                    scm.innerHTML = TSamples111116;
                    ccm.innerHTML = TCash111116;
                    stCM = Number(stCM) + Number(TSamples111116);
                    ctCM = Number(ctCM) + Number(TCash111116);
                    vatcm = Number(vatcm) + Number(SamplesData11.length);
                }/////////////////////////////////////////////////////////////////////////////////////////
                if (k == 17) {
                    TSamples111116 = 0; TCash111116 = 0;
                    for (var p = 0; p < SamplesData11.length; p++) {
                        TSamples111116 = Number(TSamples111116) + Number(SamplesData11[p]);
                        TCash111116 = Number(TCash111116) + Number(CashData11[p]);
                    }
                    scm.innerHTML = TSamples111116;
                    ccm.innerHTML = TCash111116;
                    stCM = Number(stCM) + Number(TSamples111116);
                    ctCM = Number(ctCM) + Number(TCash111116);
                    vatcm = Number(vatcm) + Number(SamplesData11.length);
                }/////////////////////////////////////////////////////////////////////////////////////////
                if (k == 18) {
                    TSamples111116 = 0; TCash111116 = 0;
                    for (var p = 0; p < SamplesData11.length; p++) {
                        TSamples111116 = Number(TSamples111116) + Number(SamplesData11[p]);
                        TCash111116 = Number(TCash111116) + Number(CashData11[p]);
                    }
                    scm.innerHTML = TSamples111116;
                    ccm.innerHTML = TCash111116;
                    stCM = Number(stCM) + Number(TSamples111116);
                    ctCM = Number(ctCM) + Number(TCash111116);
                    vatcm = Number(vatcm) + Number(SamplesData11.length);
                }/////////////////////////////////////////////////////////////////////////////////////////
                if (k == 19) {
                    TSamples111116 = 0; TCash111116 = 0;
                    for (var p = 0; p < SamplesData11.length; p++) {
                        TSamples111116 = Number(TSamples111116) + Number(SamplesData11[p]);
                        TCash111116 = Number(TCash111116) + Number(CashData11[p]);
                    }
                    scm.innerHTML = TSamples111116;
                    ccm.innerHTML = TCash111116;
                    stCM = Number(stCM) + Number(TSamples111116);
                    ctCM = Number(ctCM) + Number(TCash111116);
                    vatcm = Number(vatcm) + Number(SamplesData11.length);
                }///////////////////////////////////////////////////////////////////////////////////////
                if (k == 20) {
                    TSamples111116 = 0; TCash111116 = 0;
                    for (var p = 0; p < SamplesData11.length; p++) {
                        TSamples111116 = Number(TSamples111116) + Number(SamplesData11[p]);
                        TCash111116 = Number(TCash111116) + Number(CashData11[p]);
                    }
                    scm.innerHTML = TSamples111116;
                    ccm.innerHTML = TCash111116;
                    stCM = Number(stCM) + Number(TSamples111116);
                    ctCM = Number(ctCM) + Number(TCash111116);
                    vatcm = Number(vatcm) + Number(SamplesData11.length);
                }
                if (k == 21) {
                    TSamples111116 = 0; TCash111116 = 0;
                    for (var p = 0; p < SamplesData11.length; p++) {
                        TSamples111116 = Number(TSamples111116) + Number(SamplesData11[p]);
                        TCash111116 = Number(TCash111116) + Number(CashData11[p]);
                    }
                    scm.innerHTML = TSamples111116;
                    ccm.innerHTML = TCash111116;
                    stCM = Number(stCM) + Number(TSamples111116);
                    ctCM = Number(ctCM) + Number(TCash111116);
                    vatcm = Number(vatcm) + Number(SamplesData11.length);
                }
                if (k == 22) {
                    TSamples111116 = 0; TCash111116 = 0;
                    for (var p = 0; p < SamplesData11.length; p++) {
                        TSamples111116 = Number(TSamples111116) + Number(SamplesData11[p]);
                        TCash111116 = Number(TCash111116) + Number(CashData11[p]);
                    }
                    scm.innerHTML = TSamples111116;
                    ccm.innerHTML = TCash111116;
                    stCM = Number(stCM) + Number(TSamples111116);
                    ctCM = Number(ctCM) + Number(TCash111116);
                    vatcm = Number(vatcm) + Number(SamplesData11.length);
                }
                if (k == 23) {
                    TSamples111116 = 0; TCash111116 = 0;
                    for (var p = 0; p < SamplesData11.length; p++) {
                        TSamples111116 = Number(TSamples111116) + Number(SamplesData11[p]);
                        TCash111116 = Number(TCash111116) + Number(CashData11[p]);
                    }
                    scm.innerHTML = TSamples111116;
                    ccm.innerHTML = TCash111116;
                    stCM = Number(stCM) + Number(TSamples111116);
                    ctCM = Number(ctCM) + Number(TCash111116);
                    vatcm = Number(vatcm) + Number(SamplesData11.length);
                }
                if (k == 24) {
                    TSamples111116 = 0; TCash111116 = 0;
                    for (var p = 0; p < SamplesData11.length; p++) {
                        TSamples111116 = Number(TSamples111116) + Number(SamplesData11[p]);
                        TCash111116 = Number(TCash111116) + Number(CashData11[p]);
                    }
                    scm.innerHTML = TSamples111116;
                    ccm.innerHTML = TCash111116;
                    stCM = Number(stCM) + Number(TSamples111116);
                    ctCM = Number(ctCM) + Number(TCash111116);
                    vatcm = Number(vatcm) + Number(SamplesData11.length);
                }

                cm2.innerHTML = SamplesData11.length;

                var TCM = pervJMP * 31;
                PERCurrMonth = Math.floor(((SamplesData11.length) / TCM) * 100);
                cm3.innerHTML = PERCurrMonth + " %";
                vpptcm = Number(vpptcm) + Number(PERCurrMonth);

            }
            m = m + 1;
            if (m == 23) {
                m = 1;
            }
            //document.getElementById("LoadData").click();
            AJCallPrevMonth();

        }
        function E_ILD_Full11111() { alert("Error CM") } // Just an Error Function
    }


    function AJCallPrevMonth() {
        //alert(PrevMonth);
        ///////////////////////////////////////////////////
        //Previous Prev Month /////////////////////////////
        ///////////////////////////////////////////////////
        var ILD_Input_Query_Data6 = {
            "ILD_ID": ILDID,
            "FromDate": PrevMonth,
            "ToDate": CurrMonth,
        }
        $.ajax({
            type: "POST",
            url: "WebService1.asmx/Get_All_ILD_Data_Full",
            data: JSON.stringify(ILD_Input_Query_Data6),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: S_ILD_Full111111,
            error: E_ILD_Full111111
        });

        function S_ILD_Full111111(data) {
            //alert(data.d);
            var DataIN11111 = data.d;
            if (data.d.length > 0) {

                var DataINSplit11111 = DataIN11111.split("<");
                //alert(DataINSplit111)
                SamplesData12 = DataINSplit11111[1];    // Samples values
                SamplesData13 = SamplesData12.split(","); // Total Samples
                CashData12 = DataINSplit11111[2]; // Cash values
                CashData13 = CashData12.split(","); // Total Cash
                //////////////////////////////////////////////////////////////////////////////////////////////////////////

                if (k == 0) {
                    TSamples1111161 = 0; TCash1111161 = 0;
                    for (var p = 0; p < SamplesData13.length; p++) {
                        TSamples1111161 = Number(TSamples1111161) + Number(SamplesData13[p]);
                        TCash1111161 = Number(TCash1111161) + Number(CashData13[p]);
                    }
                    spm.innerHTML = TSamples1111161;
                    cpm.innerHTML = TCash1111161;
                    stPM = Number(stCM) + Number(TSamples1111161);
                    ctPM = Number(ctCM) + Number(TCash1111161);
                    vatpm = Number(vatcm) + Number(SamplesData13.length);
                }/////////////////////////////////////////////////////////////////////////////////////
                if (k == 1) {
                    TSamples1111161 = 0; TCash1111161 = 0;
                    for (var p = 0; p < SamplesData13.length; p++) {
                        TSamples1111161 = Number(TSamples1111161) + Number(SamplesData13[p]);
                        TCash1111161 = Number(TCash1111161) + Number(CashData13[p]);
                    }
                    spm.innerHTML = TSamples1111161;
                    cpm.innerHTML = TCash1111161;
                    stPM = Number(stCM) + Number(TSamples1111161);
                    ctPM = Number(ctCM) + Number(TCash1111161);
                    vatpm = Number(vatcm) + Number(SamplesData13.length);
                }//////////////////////////////////////////////////////////////////////////////////////////
                if (k == 2) {
                    TSamples1111161 = 0; TCash1111161 = 0;
                    for (var p = 0; p < SamplesData13.length; p++) {
                        TSamples1111161 = Number(TSamples1111161) + Number(SamplesData13[p]);
                        TCash1111161 = Number(TCash1111161) + Number(CashData13[p]);
                    }
                    spm.innerHTML = TSamples1111161;
                    cpm.innerHTML = TCash1111161;
                    stPM = Number(stCM) + Number(TSamples1111161);
                    ctPM = Number(ctCM) + Number(TCash1111161);
                    vatpm = Number(vatcm) + Number(SamplesData13.length);
                }/////////////////////////////////////////////////////////////////////////////////////////
                if (k == 3) {
                    TSamples1111161 = 0; TCash1111161 = 0;
                    for (var p = 0; p < SamplesData13.length; p++) {
                        TSamples1111161 = Number(TSamples1111161) + Number(SamplesData13[p]);
                        TCash1111161 = Number(TCash1111161) + Number(CashData13[p]);
                    }
                    spm.innerHTML = TSamples1111161;
                    cpm.innerHTML = TCash1111161;
                    stPM = Number(stCM) + Number(TSamples1111161);
                    ctPM = Number(ctCM) + Number(TCash1111161);
                    vatpm = Number(vatcm) + Number(SamplesData13.length);
                }/////////////////////////////////////////////////////////////////////////////////////////
                if (k == 4) {
                    TSamples1111161 = 0; TCash1111161 = 0;
                    for (var p = 0; p < SamplesData13.length; p++) {
                        TSamples1111161 = Number(TSamples1111161) + Number(SamplesData13[p]);
                        TCash1111161 = Number(TCash1111161) + Number(CashData13[p]);
                    }
                    spm.innerHTML = TSamples1111161;
                    cpm.innerHTML = TCash1111161;
                    stPM = Number(stCM) + Number(TSamples1111161);
                    ctPM = Number(ctCM) + Number(TCash1111161);
                    vatpm = Number(vatcm) + Number(SamplesData13.length);
                }/////////////////////////////////////////////////////////////////////////////////////////
                if (k == 5) {
                    TSamples1111161 = 0; TCash1111161 = 0;
                    for (var p = 0; p < SamplesData13.length; p++) {
                        TSamples1111161 = Number(TSamples1111161) + Number(SamplesData13[p]);
                        TCash1111161 = Number(TCash1111161) + Number(CashData13[p]);
                    }
                    spm.innerHTML = TSamples1111161;
                    cpm.innerHTML = TCash1111161;
                    stPM = Number(stCM) + Number(TSamples1111161);
                    ctPM = Number(ctCM) + Number(TCash1111161);
                    vatpm = Number(vatcm) + Number(SamplesData13.length);
                }/////////////////////////////////////////////////////////////////////////////////////////
                if (k == 6) {
                    TSamples1111161 = 0; TCash1111161 = 0;
                    for (var p = 0; p < SamplesData13.length; p++) {
                        TSamples1111161 = Number(TSamples1111161) + Number(SamplesData13[p]);
                        TCash1111161 = Number(TCash1111161) + Number(CashData13[p]);
                    }
                    spm.innerHTML = TSamples1111161;
                    cpm.innerHTML = TCash1111161;
                    stPM = Number(stCM) + Number(TSamples1111161);
                    ctPM = Number(ctCM) + Number(TCash1111161);
                    vatpm = Number(vatcm) + Number(SamplesData13.length);
                }/////////////////////////////////////////////////////////////////////////////////////////
                if (k == 7) {
                    TSamples1111161 = 0; TCash1111161 = 0;
                    for (var p = 0; p < SamplesData13.length; p++) {
                        TSamples1111161 = Number(TSamples1111161) + Number(SamplesData13[p]);
                        TCash1111161 = Number(TCash1111161) + Number(CashData13[p]);
                    }
                    spm.innerHTML = TSamples1111161;
                    cpm.innerHTML = TCash1111161;
                    stPM = Number(stCM) + Number(TSamples1111161);
                    ctPM = Number(ctCM) + Number(TCash1111161);
                    vatpm = Number(vatcm) + Number(SamplesData13.length);
                }/////////////////////////////////////////////////////////////////////////////////////////
                if (k == 8) {
                    TSamples1111161 = 0; TCash1111161 = 0;
                    for (var p = 0; p < SamplesData13.length; p++) {
                        TSamples1111161 = Number(TSamples1111161) + Number(SamplesData13[p]);
                        TCash1111161 = Number(TCash1111161) + Number(CashData13[p]);
                    }
                    spm.innerHTML = TSamples1111161;
                    cpm.innerHTML = TCash1111161;
                    stPM = Number(stCM) + Number(TSamples1111161);
                    ctPM = Number(ctCM) + Number(TCash1111161);
                    vatpm = Number(vatcm) + Number(SamplesData13.length);
                }/////////////////////////////////////////////////////////////////////////////////////////
                if (k == 9) {
                    TSamples1111161 = 0; TCash1111161 = 0;
                    for (var p = 0; p < SamplesData13.length; p++) {
                        TSamples1111161 = Number(TSamples1111161) + Number(SamplesData13[p]);
                        TCash1111161 = Number(TCash1111161) + Number(CashData13[p]);
                    }
                    spm.innerHTML = TSamples1111161;
                    cpm.innerHTML = TCash1111161;
                    stPM = Number(stCM) + Number(TSamples1111161);
                    ctPM = Number(ctCM) + Number(TCash1111161);
                    vatpm = Number(vatcm) + Number(SamplesData13.length);
                }///////////////////////////////////////////////////////////////////////////////////////
                if (k == 10) {
                    TSamples1111161 = 0; TCash1111161 = 0;
                    for (var p = 0; p < SamplesData13.length; p++) {
                        TSamples1111161 = Number(TSamples1111161) + Number(SamplesData13[p]);
                        TCash1111161 = Number(TCash1111161) + Number(CashData13[p]);
                    }
                    spm.innerHTML = TSamples1111161;
                    cpm.innerHTML = TCash1111161;
                    stPM = Number(stCM) + Number(TSamples1111161);
                    ctPM = Number(ctCM) + Number(TCash1111161);
                    vatpm = Number(vatcm) + Number(SamplesData13.length);
                }
                /////////////////////////////////////////////////////////////////////////////////////
                if (k == 11) {
                    TSamples1111161 = 0; TCash1111161 = 0;
                    for (var p = 0; p < SamplesData13.length; p++) {
                        TSamples1111161 = Number(TSamples1111161) + Number(SamplesData13[p]);
                        TCash1111161 = Number(TCash1111161) + Number(CashData13[p]);
                    }
                    spm.innerHTML = TSamples1111161;
                    cpm.innerHTML = TCash1111161;
                    stPM = Number(stCM) + Number(TSamples1111161);
                    ctPM = Number(ctCM) + Number(TCash1111161);
                    vatpm = Number(vatcm) + Number(SamplesData13.length);
                }//////////////////////////////////////////////////////////////////////////////////////////
                if (k == 12) {
                    TSamples1111161 = 0; TCash1111161 = 0;
                    for (var p = 0; p < SamplesData13.length; p++) {
                        TSamples1111161 = Number(TSamples1111161) + Number(SamplesData13[p]);
                        TCash1111161 = Number(TCash1111161) + Number(CashData13[p]);
                    }
                    spm.innerHTML = TSamples1111161;
                    cpm.innerHTML = TCash1111161;
                    stPM = Number(stCM) + Number(TSamples1111161);
                    ctPM = Number(ctCM) + Number(TCash1111161);
                    vatpm = Number(vatcm) + Number(SamplesData13.length);
                }/////////////////////////////////////////////////////////////////////////////////////////
                if (k == 13) {
                    TSamples1111161 = 0; TCash1111161 = 0;
                    for (var p = 0; p < SamplesData13.length; p++) {
                        TSamples1111161 = Number(TSamples1111161) + Number(SamplesData13[p]);
                        TCash1111161 = Number(TCash1111161) + Number(CashData13[p]);
                    }
                    spm.innerHTML = TSamples1111161;
                    cpm.innerHTML = TCash1111161;
                    stPM = Number(stCM) + Number(TSamples1111161);
                    ctPM = Number(ctCM) + Number(TCash1111161);
                    vatpm = Number(vatcm) + Number(SamplesData13.length);
                }/////////////////////////////////////////////////////////////////////////////////////////
                if (k == 14) {
                    TSamples1111161 = 0; TCash1111161 = 0;
                    for (var p = 0; p < SamplesData13.length; p++) {
                        TSamples1111161 = Number(TSamples1111161) + Number(SamplesData13[p]);
                        TCash1111161 = Number(TCash1111161) + Number(CashData13[p]);
                    }
                    spm.innerHTML = TSamples1111161;
                    cpm.innerHTML = TCash1111161;
                    stPM = Number(stCM) + Number(TSamples1111161);
                    ctPM = Number(ctCM) + Number(TCash1111161);
                    vatpm = Number(vatcm) + Number(SamplesData13.length);
                }/////////////////////////////////////////////////////////////////////////////////////////
                if (k == 15) {
                    TSamples1111161 = 0; TCash1111161 = 0;
                    for (var p = 0; p < SamplesData13.length; p++) {
                        TSamples1111161 = Number(TSamples1111161) + Number(SamplesData13[p]);
                        TCash1111161 = Number(TCash1111161) + Number(CashData13[p]);
                    }
                    spm.innerHTML = TSamples1111161;
                    cpm.innerHTML = TCash1111161;
                    stPM = Number(stCM) + Number(TSamples1111161);
                    ctPM = Number(ctCM) + Number(TCash1111161);
                    vatpm = Number(vatcm) + Number(SamplesData13.length);
                }/////////////////////////////////////////////////////////////////////////////////////////
                if (k == 16) {
                    TSamples1111161 = 0; TCash1111161 = 0;
                    for (var p = 0; p < SamplesData13.length; p++) {
                        TSamples1111161 = Number(TSamples1111161) + Number(SamplesData13[p]);
                        TCash1111161 = Number(TCash1111161) + Number(CashData13[p]);
                    }
                    spm.innerHTML = TSamples1111161;
                    cpm.innerHTML = TCash1111161;
                    stPM = Number(stCM) + Number(TSamples1111161);
                    ctPM = Number(ctCM) + Number(TCash1111161);
                    vatpm = Number(vatcm) + Number(SamplesData13.length);
                }/////////////////////////////////////////////////////////////////////////////////////////
                if (k == 17) {
                    TSamples1111161 = 0; TCash1111161 = 0;
                    for (var p = 0; p < SamplesData13.length; p++) {
                        TSamples1111161 = Number(TSamples1111161) + Number(SamplesData13[p]);
                        TCash1111161 = Number(TCash1111161) + Number(CashData13[p]);
                    }
                    spm.innerHTML = TSamples1111161;
                    cpm.innerHTML = TCash1111161;
                    stPM = Number(stCM) + Number(TSamples1111161);
                    ctPM = Number(ctCM) + Number(TCash1111161);
                    vatpm = Number(vatcm) + Number(SamplesData13.length);
                }/////////////////////////////////////////////////////////////////////////////////////////
                if (k == 18) {
                    TSamples1111161 = 0; TCash1111161 = 0;
                    for (var p = 0; p < SamplesData13.length; p++) {
                        TSamples1111161 = Number(TSamples1111161) + Number(SamplesData13[p]);
                        TCash1111161 = Number(TCash1111161) + Number(CashData13[p]);
                    }
                    spm.innerHTML = TSamples1111161;
                    cpm.innerHTML = TCash1111161;
                    stPM = Number(stCM) + Number(TSamples1111161);
                    ctPM = Number(ctCM) + Number(TCash1111161);
                    vatpm = Number(vatcm) + Number(SamplesData13.length);
                }/////////////////////////////////////////////////////////////////////////////////////////
                if (k == 19) {
                    TSamples1111161 = 0; TCash1111161 = 0;
                    for (var p = 0; p < SamplesData13.length; p++) {
                        TSamples1111161 = Number(TSamples1111161) + Number(SamplesData13[p]);
                        TCash1111161 = Number(TCash1111161) + Number(CashData13[p]);
                    }
                    spm.innerHTML = TSamples1111161;
                    cpm.innerHTML = TCash1111161;
                    stPM = Number(stCM) + Number(TSamples1111161);
                    ctPM = Number(ctCM) + Number(TCash1111161);
                    vatpm = Number(vatcm) + Number(SamplesData13.length);
                }///////////////////////////////////////////////////////////////////////////////////////
                if (k == 20) {
                    TSamples1111161 = 0; TCash1111161 = 0;
                    for (var p = 0; p < SamplesData13.length; p++) {
                        TSamples1111161 = Number(TSamples1111161) + Number(SamplesData13[p]);
                        TCash1111161 = Number(TCash1111161) + Number(CashData13[p]);
                    }
                    spm.innerHTML = TSamples1111161;
                    cpm.innerHTML = TCash1111161;
                    stPM = Number(stCM) + Number(TSamples1111161);
                    ctPM = Number(ctCM) + Number(TCash1111161);
                    vatpm = Number(vatcm) + Number(SamplesData13.length);
                }
                if (k == 21) {
                    TSamples1111161 = 0; TCash1111161 = 0;
                    for (var p = 0; p < SamplesData13.length; p++) {
                        TSamples1111161 = Number(TSamples1111161) + Number(SamplesData13[p]);
                        TCash1111161 = Number(TCash1111161) + Number(CashData13[p]);
                    }
                    spm.innerHTML = TSamples1111161;
                    cpm.innerHTML = TCash1111161;
                    stPM = Number(stCM) + Number(TSamples1111161);
                    ctPM = Number(ctCM) + Number(TCash1111161);
                    vatpm = Number(vatcm) + Number(SamplesData13.length);
                }
                if (k == 22) {
                    TSamples1111161 = 0; TCash1111161 = 0;
                    for (var p = 0; p < SamplesData13.length; p++) {
                        TSamples1111161 = Number(TSamples1111161) + Number(SamplesData13[p]);
                        TCash1111161 = Number(TCash1111161) + Number(CashData13[p]);
                    }
                    spm.innerHTML = TSamples1111161;
                    cpm.innerHTML = TCash1111161;
                    stPM = Number(stCM) + Number(TSamples1111161);
                    ctPM = Number(ctCM) + Number(TCash1111161);
                    vatpm = Number(vatcm) + Number(SamplesData13.length);
                }
                if (k == 23) {
                    TSamples1111161 = 0; TCash1111161 = 0;
                    for (var p = 0; p < SamplesData13.length; p++) {
                        TSamples1111161 = Number(TSamples1111161) + Number(SamplesData13[p]);
                        TCash1111161 = Number(TCash1111161) + Number(CashData13[p]);
                    }
                    spm.innerHTML = TSamples1111161;
                    cpm.innerHTML = TCash1111161;
                    stPM = Number(stCM) + Number(TSamples1111161);
                    ctPM = Number(ctCM) + Number(TCash1111161);
                    vatpm = Number(vatcm) + Number(SamplesData13.length);
                }
                if (k == 24) {
                    TSamples1111161 = 0; TCash1111161 = 0;
                    for (var p = 0; p < SamplesData13.length; p++) {
                        TSamples1111161 = Number(TSamples1111161) + Number(SamplesData13[p]);
                        TCash1111161 = Number(TCash1111161) + Number(CashData13[p]);
                    }
                    spm.innerHTML = TSamples1111161;
                    cpm.innerHTML = TCash1111161;
                    stPM = Number(stCM) + Number(TSamples1111161);
                    ctPM = Number(ctCM) + Number(TCash1111161);
                    vatpm = Number(vatcm) + Number(SamplesData13.length);
                }
                pm2.innerHTML = SamplesData13.length;

                var TPM = pervJMP * 28;
                PERPrevMonth = Math.floor(((SamplesData11.length) / TPM) * 100);
                pm3.innerHTML = PERPrevMonth + " %";
                vpptpm = Number(vpptpm) + Number(PERPrevMonth);

                

            }
            m = m + 1;
            if (m == 23) {
                m = 1; 
            }
            //if()
            document.getElementById("LoadData").click();

        }
        function E_ILD_Full111111() { alert("Error PM") } // Just an Error Function
    }

    ////////////////////////////////////
    // ..End Of Function


    var map;
    var clickedID = "";
    var directionsDisplay = null;
    var directionsService;
    var polylinePath;
    var nodes = [];
    var prevNodes = [];
    var markers = [];
    var durations = [];
    var Abhi = []; var Deepak = []; var Guru = []; var Puneeth = []; var Prasanna = [];
    var Senthil = []; var Soma = []; var Manjunath = []; var Muneendra = [];


    Abhi = [
        // Padmanabhanagar
        { "lat": 12.9184256, "lng": 77.5598365 },
        // jayanagar Samarth - KR Road
        { "lat": 12.9271999, "lng": 77.5044985 },
        // Padmanabhanagar
        { "lat": 12.9184256, "lng": 77.5598365 },
        // Jayanagar
        { "lat": 12.933765, "lng": 77.5816503 },
    ]
    Deepak = [
       // Padmanabhanagar
       { "lat": 12.9184256, "lng": 77.5598365 },
       // New Spandana
       { "lat": 12.9097718, "lng": 77.540917 },
       // ParkView
       { "lat": 12.890226, "lng": 77.5375678 },
       // Diacare
       { "lat": 12.8951319, "lng": 77.4597621 },
       // Miracle
       { "lat": 12.9170452, "lng": 77.5178714 },
       //// Geetha
       //{ "lat": 12.881184, "lng": 12.881184 },
       // Tirumala
       { "lat": 12.93264449999, "lng": 77.5403681 },
       // GR Diag
       { "lat": 12.9087213, "lng": 77.5490925 },
       // Lalitha
       { "lat": 12.905041950000, "lng": 77.57415044999 },
       // Ayush Clinic
       { "lat": 12.9133795, "lng": 77.5386923 },
    ]
    Guru = [
        // Samarth G Bazaar
        { "lat": 12.9441985, "lng": 77.5729004 },
        // Jayanagar
        { "lat": 12.933765, "lng": 77.5816503 },
        // AV H
        { "lat": 12.9388569, "lng": 77.5785402 },
        // Kincha O Center
        { "lat": 12.9388984, "lng": 77.5785402 },
        // Ankitha Diagnostics
        { "lat": 12.9400586, "lng": 77.5683138 },
    ]
    Manjunath = [
        // Jayanagar
        { "lat": 12.933765, "lng": 77.5816503 },
        // RAMS Diag
        { "lat": 12.8774845, "lng": 77.5837192 },
        // Infilife
        { "lat": 12.8879777, "lng": 77.5121434 },
        // Adithi N H
        { "lat": 12.895182, "lng": 77.5832816 },
        // Medplus Arekere
        { "lat": 12.8910361, "lng": 77.5926577 },
        // NANO
        { "lat": 12.9054117, "lng": 77.5837282 },
        // Bharath N H
        { "lat": 12.9118859, "lng": 77.5729915 },
    ]
    Muneendra = [
        //// Jayanagar
        //{ "lat": 12.933765, "lng": 77.5816503 },
        // Samarth G Bazaar
        { "lat": 12.9441985, "lng": 77.5729004 },
        // Maiya H
        { "lat": 12.9426052, "lng": 77.5154124 },
        // Padmanabhanagar
        { "lat": 12.9184256, "lng": 77.5598365 },
        // jayanagar Samarth - KR Road
        { "lat": 12.9271999, "lng": 77.5044985 },
        // Mangammanapalya LCC
        { "lat": 12.9034479, "lng": 77.6298732 },
        // HSR LCC
        { "lat": 12.9197029, "lng": 77.6429483 },
        // Manasa Clinic BTM
        { "lat": 12.9210042, "lng": 77.6210184 },
        // Samarth BTM
        { "lat": 12.913412, "lng": 77.6010953 },
        // Ayush Clinic
        { "lat": 12.9231045, "lng": 77.573427 },
    ]
    Prasanna = [
        // Padmanabhanagar
        { "lat": 12.9184256, "lng": 77.5598365 },
        // DevGiri
        { "lat": 12.927018116215013, "lng": 77.56557990080614 },
        // Vinayaka H
        { "lat": 12.8986002, "lng": 77.5667543 },
        // Care and Cure
        { "lat": 12.95895425, "lng": 77.58083855 },
    ]
    Puneeth = [
        // Padmanabhanagar
        { "lat": 12.9184256, "lng": 77.5598365 },
        // Jayanagar
        { "lat": 12.933765, "lng": 77.5816503 },
        // Anusha
        { "lat": 12.905689, "lng": 77.4929643 },
        // Patil Diagnostics
        { "lat": 12.9028979, "lng": 77.556568 },
        // Medall Kumarswamy Layout
        { "lat": 12.9029973, "lng": 77.5541741 },
        // Medall Kumarswamy Layout
        { "lat": 12.9010829, "lng": 77.5579378 },
    ]
    Senthil = [
        // Jayanagar
        { "lat": 12.933765, "lng": 77.5816503 },
        // Sita-Bhateja
        { "lat": 12.9632294, "lng": 77.5997428 },
        // Agadi N H
        { "lat": 12.9492371, "lng": 77.5977945 },
        // Parijma M C
        { "lat": 12.9465778, "lng": 77.5882572 },
        // Payarwani DC -- Medall LCC Siddpura
        { "lat": 12.9464881, "lng": 77.5890934 },
    ]
    Soma = [
        // Jayanagar
        { "lat": 12.933765, "lng": 77.5816503 },
        // RAMS Diag
        { "lat": 12.8774845, "lng": 77.5837192 },
        // Infilife
        { "lat": 12.8879777, "lng": 77.5121434 },
        // Adithi N H
        { "lat": 12.895182, "lng": 77.5832816 },
        // Medplus Arekere
        { "lat": 12.8910361, "lng": 77.5926577 },
        // NANO
        { "lat": 12.9054117, "lng": 77.5837282 },
        // Bharath N H
        { "lat": 12.9118859, "lng": 77.5729915 },
    ]





    // Initialize google maps
    function initializeMap(clickedID) {

        // Map options
        var opts = {
            center: new google.maps.LatLng(12.9716, 77.5946),
            zoom: 12,
            streetViewControl: false,
            mapTypeControl: false,
        };

        map = new google.maps.Map(document.getElementById('map'), opts);



        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if (clickedID == "ILD1") {
            //alert(clickedID);
            for (var i = 0; i < Abhi.length; i++) {
                marker = new google.maps.Marker({ position: Abhi[i], map: map });
                markers.push(marker);

                // Add destination (max 9)
                if (nodes.length >= 9) {
                    alert('Max destinations added');
                    return;
                }
                // If there are directions being shown, clear them
                clearDirections();

                // Add a node to map
                marker = new google.maps.Marker({ position: Abhi[i], map: map });
                markers.push(marker);

                //// Store node's lat and lng
                nodes.push(Abhi[i]);
            }
            if (nodes.length < 2) {
                if (prevNodes.length >= 2) {
                    nodes = prevNodes;
                } else {
                    alert('Click on the map to select destination points');
                    return;
                }
            }
            if (directionsDisplay != null) {
                directionsDisplay.setMap(null);
                directionsDisplay = null;
            }

            $('#ga-buttons').hide();
            // Get route durations
            getDurations(function () {
                $('.ga-info').show();
                // Get config and create initial GA population
                ga.getConfig();
                var pop = new ga.population();
                pop.initialize(nodes.length);
                var route = pop.getFittest().chromosome;
                ga.evolvePopulation(pop, function (update) {
                    $('#generations-passed').html(update.generation);
                    var TimeBest = (update.population.getFittest().getDistance() / 60).toFixed(2);
                    $('#Data2').html("Abhishek - Optimized Route Time: " + TimeBest + " Mins for " + Math.ceil(TimeBest / 8.273) + " Kms");
                    //$('#best-time').html('Optimized Route Time: ' + (update.population.getFittest().getDistance() )+ ' Kms');

                    // Get route coordinates
                    var route = update.population.getFittest().chromosome;
                    var routeCoordinates = [];
                    for (index in route) {
                        routeCoordinates[index] = nodes[route[index]];
                    }
                    routeCoordinates[route.length] = nodes[route[0]];
                    // Display temp. route
                    if (polylinePath != undefined) {
                        polylinePath.setMap(null);
                    }
                    polylinePath = new google.maps.Polyline({
                        path: routeCoordinates,
                        strokeColor: "#0066ff",
                        strokeOpacity: 0.75,
                        strokeWeight: 2,
                    });
                    polylinePath.setMap(map);
                }, function (result) {
                    // Get route
                    route = result.population.getFittest().chromosome;
                    // Add route to map
                    directionsService = new google.maps.DirectionsService();
                    directionsDisplay = new google.maps.DirectionsRenderer();
                    directionsDisplay.setMap(map);
                    var waypts = [];
                    for (var i = 1; i < route.length; i++) {
                        waypts.push({
                            location: nodes[route[i]],
                            stopover: true
                        });
                    }

                    // Add final route to map
                    $('#travel-type').value = "DRIVING";
                    var request = {
                        origin: nodes[route[0]],
                        destination: nodes[route[0]],
                        waypoints: waypts,
                        travelMode: google.maps.TravelMode[$('#travel-type').val()],
                        avoidHighways: parseInt($('#avoid-highways').val()) > 0 ? true : false,
                        avoidTolls: false
                    };
                    directionsService.route(request, function (response, status) {
                        if (status == google.maps.DirectionsStatus.OK) {
                            directionsDisplay.setDirections(response);
                        }
                        clearMapMarkers();
                    });
                });
            });
        }
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if (clickedID == "ILD2") {
            //alert(clickedID);
            for (var i = 0; i < Deepak.length; i++) {
                marker = new google.maps.Marker({ position: Deepak[i], map: map });
                markers.push(marker);

                // Add destination (max 9)
                if (nodes.length >= 9) {
                    alert('Max destinations added');
                    return;
                }
                // If there are directions being shown, clear them
                clearDirections();

                // Add a node to map
                marker = new google.maps.Marker({ position: Deepak[i], map: map });
                markers.push(marker);

                //// Store node's lat and lng
                nodes.push(Deepak[i]);
            }
            if (nodes.length < 2) {
                if (prevNodes.length >= 2) {
                    nodes = prevNodes;
                } else {
                    alert('Click on the map to select destination points');
                    return;
                }
            }
            if (directionsDisplay != null) {
                directionsDisplay.setMap(null);
                directionsDisplay = null;
            }

            $('#ga-buttons').hide();
            // Get route durations
            getDurations(function () {
                $('.ga-info').show();
                // Get config and create initial GA population
                ga.getConfig();
                var pop = new ga.population();
                pop.initialize(nodes.length);
                var route = pop.getFittest().chromosome;
                ga.evolvePopulation(pop, function (update) {
                    $('#generations-passed').html(update.generation);
                    var TimeBest = (update.population.getFittest().getDistance() / 60).toFixed(2);
                    $('#Data2').html("Deepak - Optimized Route Time: " + TimeBest + " Mins for " + Math.ceil(TimeBest / 8.273) + " Kms");
                    //$('#best-time').html('Optimized Route Time: ' + (update.population.getFittest().getDistance() )+ ' Kms');

                    // Get route coordinates
                    var route = update.population.getFittest().chromosome;
                    var routeCoordinates = [];
                    for (index in route) {
                        routeCoordinates[index] = nodes[route[index]];
                    }
                    routeCoordinates[route.length] = nodes[route[0]];
                    // Display temp. route
                    if (polylinePath != undefined) {
                        polylinePath.setMap(null);
                    }
                    polylinePath = new google.maps.Polyline({
                        path: routeCoordinates,
                        strokeColor: "#0066ff",
                        strokeOpacity: 0.75,
                        strokeWeight: 2,
                    });
                    polylinePath.setMap(map);
                }, function (result) {
                    // Get route
                    route = result.population.getFittest().chromosome;
                    // Add route to map
                    directionsService = new google.maps.DirectionsService();
                    directionsDisplay = new google.maps.DirectionsRenderer();
                    directionsDisplay.setMap(map);
                    var waypts = [];
                    for (var i = 1; i < route.length; i++) {
                        waypts.push({
                            location: nodes[route[i]],
                            stopover: true
                        });
                    }

                    // Add final route to map
                    $('#travel-type').value = "DRIVING";
                    var request = {
                        origin: nodes[route[0]],
                        destination: nodes[route[0]],
                        waypoints: waypts,
                        travelMode: google.maps.TravelMode[$('#travel-type').val()],
                        avoidHighways: parseInt($('#avoid-highways').val()) > 0 ? true : false,
                        avoidTolls: false
                    };
                    directionsService.route(request, function (response, status) {
                        if (status == google.maps.DirectionsStatus.OK) {
                            directionsDisplay.setDirections(response);
                        }
                        clearMapMarkers();
                    });
                });
            });
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if (clickedID == "ILD3") {
            //alert(clickedID);
            for (var i = 0; i < Guru.length; i++) {
                marker = new google.maps.Marker({ position: Guru[i], map: map });
                markers.push(marker);

                // Add destination (max 9)
                if (nodes.length >= 9) {
                    alert('Max destinations added');
                    return;
                }
                // If there are directions being shown, clear them
                clearDirections();

                // Add a node to map
                marker = new google.maps.Marker({ position: Guru[i], map: map });
                markers.push(marker);

                //// Store node's lat and lng
                nodes.push(Guru[i]);
            }
            if (nodes.length < 2) {
                if (prevNodes.length >= 2) {
                    nodes = prevNodes;
                } else {
                    alert('Click on the map to select destination points');
                    return;
                }
            }
            if (directionsDisplay != null) {
                directionsDisplay.setMap(null);
                directionsDisplay = null;
            }

            $('#ga-buttons').hide();
            // Get route durations
            getDurations(function () {
                $('.ga-info').show();
                // Get config and create initial GA population
                ga.getConfig();
                var pop = new ga.population();
                pop.initialize(nodes.length);
                var route = pop.getFittest().chromosome;
                ga.evolvePopulation(pop, function (update) {
                    $('#generations-passed').html(update.generation);
                    var TimeBest = (update.population.getFittest().getDistance() / 60).toFixed(2);
                    $('#Data2').html("Guruprasad - Optimized Route Time: " + TimeBest + " Mins for " + Math.ceil(TimeBest / 8.273) + " Kms");
                    //$('#best-time').html('Optimized Route Time: ' + (update.population.getFittest().getDistance() )+ ' Kms');

                    // Get route coordinates
                    var route = update.population.getFittest().chromosome;
                    var routeCoordinates = [];
                    for (index in route) {
                        routeCoordinates[index] = nodes[route[index]];
                    }
                    routeCoordinates[route.length] = nodes[route[0]];
                    // Display temp. route
                    if (polylinePath != undefined) {
                        polylinePath.setMap(null);
                    }
                    polylinePath = new google.maps.Polyline({
                        path: routeCoordinates,
                        strokeColor: "#0066ff",
                        strokeOpacity: 0.75,
                        strokeWeight: 2,
                    });
                    polylinePath.setMap(map);
                }, function (result) {
                    // Get route
                    route = result.population.getFittest().chromosome;
                    // Add route to map
                    directionsService = new google.maps.DirectionsService();
                    directionsDisplay = new google.maps.DirectionsRenderer();
                    directionsDisplay.setMap(map);
                    var waypts = [];
                    for (var i = 1; i < route.length; i++) {
                        waypts.push({
                            location: nodes[route[i]],
                            stopover: true
                        });
                    }

                    // Add final route to map
                    $('#travel-type').value = "DRIVING";
                    var request = {
                        origin: nodes[route[0]],
                        destination: nodes[route[0]],
                        waypoints: waypts,
                        travelMode: google.maps.TravelMode[$('#travel-type').val()],
                        avoidHighways: parseInt($('#avoid-highways').val()) > 0 ? true : false,
                        avoidTolls: false
                    };
                    directionsService.route(request, function (response, status) {
                        if (status == google.maps.DirectionsStatus.OK) {
                            directionsDisplay.setDirections(response);
                        }
                        clearMapMarkers();
                    });
                });
            });
        }
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        if (clickedID == "ILD4") {
            //alert(clickedID);
            for (var i = 0; i < Manjunath.length; i++) {
                marker = new google.maps.Marker({ position: Manjunath[i], map: map });
                markers.push(marker);

                // Add destination (max 9)
                if (nodes.length >= 9) {
                    alert('Max destinations added');
                    return;
                }
                // If there are directions being shown, clear them
                clearDirections();

                // Add a node to map
                marker = new google.maps.Marker({ position: Manjunath[i], map: map });
                markers.push(marker);

                //// Store node's lat and lng
                nodes.push(Manjunath[i]);
            }
            if (nodes.length < 2) {
                if (prevNodes.length >= 2) {
                    nodes = prevNodes;
                } else {
                    alert('Click on the map to select destination points');
                    return;
                }
            }
            if (directionsDisplay != null) {
                directionsDisplay.setMap(null);
                directionsDisplay = null;
            }

            $('#ga-buttons').hide();
            // Get route durations
            getDurations(function () {
                $('.ga-info').show();
                // Get config and create initial GA population
                ga.getConfig();
                var pop = new ga.population();
                pop.initialize(nodes.length);
                var route = pop.getFittest().chromosome;
                ga.evolvePopulation(pop, function (update) {
                    $('#generations-passed').html(update.generation);
                    var TimeBest = (update.population.getFittest().getDistance() / 60).toFixed(2);
                    $('#Data2').html("Manjunath - Optimized Route Time: " + TimeBest + " Mins for " + Math.ceil(TimeBest / 8.273) + " Kms");
                    //$('#best-time').html('Optimized Route Time: ' + (update.population.getFittest().getDistance() )+ ' Kms');

                    // Get route coordinates
                    var route = update.population.getFittest().chromosome;
                    var routeCoordinates = [];
                    for (index in route) {
                        routeCoordinates[index] = nodes[route[index]];
                    }
                    routeCoordinates[route.length] = nodes[route[0]];
                    // Display temp. route
                    if (polylinePath != undefined) {
                        polylinePath.setMap(null);
                    }
                    polylinePath = new google.maps.Polyline({
                        path: routeCoordinates,
                        strokeColor: "#0066ff",
                        strokeOpacity: 0.75,
                        strokeWeight: 2,
                    });
                    polylinePath.setMap(map);
                }, function (result) {
                    // Get route
                    route = result.population.getFittest().chromosome;
                    // Add route to map
                    directionsService = new google.maps.DirectionsService();
                    directionsDisplay = new google.maps.DirectionsRenderer();
                    directionsDisplay.setMap(map);
                    var waypts = [];
                    for (var i = 1; i < route.length; i++) {
                        waypts.push({
                            location: nodes[route[i]],
                            stopover: true
                        });
                    }

                    // Add final route to map
                    $('#travel-type').value = "DRIVING";
                    var request = {
                        origin: nodes[route[0]],
                        destination: nodes[route[0]],
                        waypoints: waypts,
                        travelMode: google.maps.TravelMode[$('#travel-type').val()],
                        avoidHighways: parseInt($('#avoid-highways').val()) > 0 ? true : false,
                        avoidTolls: false
                    };
                    directionsService.route(request, function (response, status) {
                        if (status == google.maps.DirectionsStatus.OK) {
                            directionsDisplay.setDirections(response);
                        }
                        clearMapMarkers();
                    });
                });
            });
        }
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if (clickedID == "ILD5") {
            //alert(clickedID);
            for (var i = 0; i < Muneendra.length; i++) {
                marker = new google.maps.Marker({ position: Muneendra[i], map: map });
                markers.push(marker);

                // Add destination (max 9)
                if (nodes.length >= 9) {
                    alert('Max destinations added');
                    return;
                }
                // If there are directions being shown, clear them
                clearDirections();

                // Add a node to map
                marker = new google.maps.Marker({ position: Muneendra[i], map: map });
                markers.push(marker);

                //// Store node's lat and lng
                nodes.push(Muneendra[i]);
            }
            if (nodes.length < 2) {
                if (prevNodes.length >= 2) {
                    nodes = prevNodes;
                } else {
                    alert('Click on the map to select destination points');
                    return;
                }
            }
            if (directionsDisplay != null) {
                directionsDisplay.setMap(null);
                directionsDisplay = null;
            }

            $('#ga-buttons').hide();
            // Get route durations
            getDurations(function () {
                $('.ga-info').show();
                // Get config and create initial GA population
                ga.getConfig();
                var pop = new ga.population();
                pop.initialize(nodes.length);
                var route = pop.getFittest().chromosome;
                ga.evolvePopulation(pop, function (update) {
                    $('#generations-passed').html(update.generation);
                    var TimeBest = (update.population.getFittest().getDistance() / 60).toFixed(2);
                    $('#Data2').html("Muneendra - Optimized Route Time: " + TimeBest + " Mins for " + Math.ceil(TimeBest / 8.273) + " Kms");
                    //$('#best-time').html('Optimized Route Time: ' + (update.population.getFittest().getDistance() )+ ' Kms');

                    // Get route coordinates
                    var route = update.population.getFittest().chromosome;
                    var routeCoordinates = [];
                    for (index in route) {
                        routeCoordinates[index] = nodes[route[index]];
                    }
                    routeCoordinates[route.length] = nodes[route[0]];
                    // Display temp. route
                    if (polylinePath != undefined) {
                        polylinePath.setMap(null);
                    }
                    polylinePath = new google.maps.Polyline({
                        path: routeCoordinates,
                        strokeColor: "#0066ff",
                        strokeOpacity: 0.75,
                        strokeWeight: 2,
                    });
                    polylinePath.setMap(map);
                }, function (result) {
                    // Get route
                    route = result.population.getFittest().chromosome;
                    // Add route to map
                    directionsService = new google.maps.DirectionsService();
                    directionsDisplay = new google.maps.DirectionsRenderer();
                    directionsDisplay.setMap(map);
                    var waypts = [];
                    for (var i = 1; i < route.length; i++) {
                        waypts.push({
                            location: nodes[route[i]],
                            stopover: true
                        });
                    }

                    // Add final route to map
                    $('#travel-type').value = "DRIVING";
                    var request = {
                        origin: nodes[route[0]],
                        destination: nodes[route[0]],
                        waypoints: waypts,
                        travelMode: google.maps.TravelMode[$('#travel-type').val()],
                        avoidHighways: parseInt($('#avoid-highways').val()) > 0 ? true : false,
                        avoidTolls: false
                    };
                    directionsService.route(request, function (response, status) {
                        if (status == google.maps.DirectionsStatus.OK) {
                            directionsDisplay.setDirections(response);
                        }
                        clearMapMarkers();
                    });
                });
            });
        }
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if (clickedID == "ILD6") {
            //alert(clickedID);
            for (var i = 0; i < Prasanna.length; i++) {
                marker = new google.maps.Marker({ position: Prasanna[i], map: map });
                markers.push(marker);

                // Add destination (max 9)
                if (nodes.length >= 9) {
                    alert('Max destinations added');
                    return;
                }
                // If there are directions being shown, clear them
                clearDirections();

                // Add a node to map
                marker = new google.maps.Marker({ position: Prasanna[i], map: map });
                markers.push(marker);

                //// Store node's lat and lng
                nodes.push(Prasanna[i]);
            }
            if (nodes.length < 2) {
                if (prevNodes.length >= 2) {
                    nodes = prevNodes;
                } else {
                    alert('Click on the map to select destination points');
                    return;
                }
            }
            if (directionsDisplay != null) {
                directionsDisplay.setMap(null);
                directionsDisplay = null;
            }

            $('#ga-buttons').hide();
            // Get route durations
            getDurations(function () {
                $('.ga-info').show();
                // Get config and create initial GA population
                ga.getConfig();
                var pop = new ga.population();
                pop.initialize(nodes.length);
                var route = pop.getFittest().chromosome;
                ga.evolvePopulation(pop, function (update) {
                    $('#generations-passed').html(update.generation);
                    var TimeBest = (update.population.getFittest().getDistance() / 60).toFixed(2);
                    $('#Data2').html("Prasanna - Optimized Route Time: " + TimeBest + " Mins for " + Math.ceil(TimeBest / 8.273) + " Kms");
                    //$('#best-time').html('Optimized Route Time: ' + (update.population.getFittest().getDistance() )+ ' Kms');

                    // Get route coordinates
                    var route = update.population.getFittest().chromosome;
                    var routeCoordinates = [];
                    for (index in route) {
                        routeCoordinates[index] = nodes[route[index]];
                    }
                    routeCoordinates[route.length] = nodes[route[0]];
                    // Display temp. route
                    if (polylinePath != undefined) {
                        polylinePath.setMap(null);
                    }
                    polylinePath = new google.maps.Polyline({
                        path: routeCoordinates,
                        strokeColor: "#0066ff",
                        strokeOpacity: 0.75,
                        strokeWeight: 2,
                    });
                    polylinePath.setMap(map);
                }, function (result) {
                    // Get route
                    route = result.population.getFittest().chromosome;
                    // Add route to map
                    directionsService = new google.maps.DirectionsService();
                    directionsDisplay = new google.maps.DirectionsRenderer();
                    directionsDisplay.setMap(map);
                    var waypts = [];
                    for (var i = 1; i < route.length; i++) {
                        waypts.push({
                            location: nodes[route[i]],
                            stopover: true
                        });
                    }

                    // Add final route to map
                    $('#travel-type').value = "DRIVING";
                    var request = {
                        origin: nodes[route[0]],
                        destination: nodes[route[0]],
                        waypoints: waypts,
                        travelMode: google.maps.TravelMode[$('#travel-type').val()],
                        avoidHighways: parseInt($('#avoid-highways').val()) > 0 ? true : false,
                        avoidTolls: false
                    };
                    directionsService.route(request, function (response, status) {
                        if (status == google.maps.DirectionsStatus.OK) {
                            directionsDisplay.setDirections(response);
                        }
                        clearMapMarkers();
                    });
                });
            });
        }
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if (clickedID == "ILD7") {
            //alert(clickedID);
            for (var i = 0; i < Puneeth.length; i++) {
                marker = new google.maps.Marker({ position: Puneeth[i], map: map });
                markers.push(marker);

                // Add destination (max 9)
                if (nodes.length >= 9) {
                    alert('Max destinations added');
                    return;
                }
                // If there are directions being shown, clear them
                clearDirections();

                // Add a node to map
                marker = new google.maps.Marker({ position: Puneeth[i], map: map });
                markers.push(marker);

                //// Store node's lat and lng
                nodes.push(Puneeth[i]);
            }
            if (nodes.length < 2) {
                if (prevNodes.length >= 2) {
                    nodes = prevNodes;
                } else {
                    alert('Click on the map to select destination points');
                    return;
                }
            }
            if (directionsDisplay != null) {
                directionsDisplay.setMap(null);
                directionsDisplay = null;
            }

            $('#ga-buttons').hide();
            // Get route durations
            getDurations(function () {
                $('.ga-info').show();
                // Get config and create initial GA population
                ga.getConfig();
                var pop = new ga.population();
                pop.initialize(nodes.length);
                var route = pop.getFittest().chromosome;
                ga.evolvePopulation(pop, function (update) {
                    $('#generations-passed').html(update.generation);
                    var TimeBest = (update.population.getFittest().getDistance() / 60).toFixed(2);
                    $('#Data2').html("Puneeth - Optimized Route Time: " + TimeBest + " Mins for " + Math.ceil(TimeBest / 8.273) + " Kms");
                    //$('#best-time').html('Optimized Route Time: ' + (update.population.getFittest().getDistance() )+ ' Kms');

                    // Get route coordinates
                    var route = update.population.getFittest().chromosome;
                    var routeCoordinates = [];
                    for (index in route) {
                        routeCoordinates[index] = nodes[route[index]];
                    }
                    routeCoordinates[route.length] = nodes[route[0]];
                    // Display temp. route
                    if (polylinePath != undefined) {
                        polylinePath.setMap(null);
                    }
                    polylinePath = new google.maps.Polyline({
                        path: routeCoordinates,
                        strokeColor: "#0066ff",
                        strokeOpacity: 0.75,
                        strokeWeight: 2,
                    });
                    polylinePath.setMap(map);
                }, function (result) {
                    // Get route
                    route = result.population.getFittest().chromosome;
                    // Add route to map
                    directionsService = new google.maps.DirectionsService();
                    directionsDisplay = new google.maps.DirectionsRenderer();
                    directionsDisplay.setMap(map);
                    var waypts = [];
                    for (var i = 1; i < route.length; i++) {
                        waypts.push({
                            location: nodes[route[i]],
                            stopover: true
                        });
                    }

                    // Add final route to map
                    $('#travel-type').value = "DRIVING";
                    var request = {
                        origin: nodes[route[0]],
                        destination: nodes[route[0]],
                        waypoints: waypts,
                        travelMode: google.maps.TravelMode[$('#travel-type').val()],
                        avoidHighways: parseInt($('#avoid-highways').val()) > 0 ? true : false,
                        avoidTolls: false
                    };
                    directionsService.route(request, function (response, status) {
                        if (status == google.maps.DirectionsStatus.OK) {
                            directionsDisplay.setDirections(response);
                        }
                        clearMapMarkers();
                    });
                });
            });
        }
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if (clickedID == "ILD8") {
            //alert(clickedID);
            for (var i = 0; i < Senthil.length; i++) {
                marker = new google.maps.Marker({ position: Senthil[i], map: map });
                markers.push(marker);

                // Add destination (max 9)
                if (nodes.length >= 9) {
                    alert('Max destinations added');
                    return;
                }
                // If there are directions being shown, clear them
                clearDirections();

                // Add a node to map
                marker = new google.maps.Marker({ position: Senthil[i], map: map });
                markers.push(marker);

                //// Store node's lat and lng
                nodes.push(Senthil[i]);
            }
            if (nodes.length < 2) {
                if (prevNodes.length >= 2) {
                    nodes = prevNodes;
                } else {
                    alert('Click on the map to select destination points');
                    return;
                }
            }
            if (directionsDisplay != null) {
                directionsDisplay.setMap(null);
                directionsDisplay = null;
            }

            $('#ga-buttons').hide();
            // Get route durations
            getDurations(function () {
                $('.ga-info').show();
                // Get config and create initial GA population
                ga.getConfig();
                var pop = new ga.population();
                pop.initialize(nodes.length);
                var route = pop.getFittest().chromosome;
                ga.evolvePopulation(pop, function (update) {
                    $('#generations-passed').html(update.generation);
                    var TimeBest = (update.population.getFittest().getDistance() / 60).toFixed(2);
                    $('#Data2').html("Senthil - Optimized Route Time: " + TimeBest + " Mins for " + Math.ceil(TimeBest / 8.273) + " Kms");
                    //$('#best-time').html('Optimized Route Time: ' + (update.population.getFittest().getDistance() )+ ' Kms');

                    // Get route coordinates
                    var route = update.population.getFittest().chromosome;
                    var routeCoordinates = [];
                    for (index in route) {
                        routeCoordinates[index] = nodes[route[index]];
                    }
                    routeCoordinates[route.length] = nodes[route[0]];
                    // Display temp. route
                    if (polylinePath != undefined) {
                        polylinePath.setMap(null);
                    }
                    polylinePath = new google.maps.Polyline({
                        path: routeCoordinates,
                        strokeColor: "#0066ff",
                        strokeOpacity: 0.75,
                        strokeWeight: 2,
                    });
                    polylinePath.setMap(map);
                }, function (result) {
                    // Get route
                    route = result.population.getFittest().chromosome;
                    // Add route to map
                    directionsService = new google.maps.DirectionsService();
                    directionsDisplay = new google.maps.DirectionsRenderer();
                    directionsDisplay.setMap(map);
                    var waypts = [];
                    for (var i = 1; i < route.length; i++) {
                        waypts.push({
                            location: nodes[route[i]],
                            stopover: true
                        });
                    }

                    // Add final route to map
                    $('#travel-type').value = "DRIVING";
                    var request = {
                        origin: nodes[route[0]],
                        destination: nodes[route[0]],
                        waypoints: waypts,
                        travelMode: google.maps.TravelMode[$('#travel-type').val()],
                        avoidHighways: parseInt($('#avoid-highways').val()) > 0 ? true : false,
                        avoidTolls: false
                    };
                    directionsService.route(request, function (response, status) {
                        if (status == google.maps.DirectionsStatus.OK) {
                            directionsDisplay.setDirections(response);
                        }
                        clearMapMarkers();
                    });
                });
            });
        }
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if (clickedID == "ILD9") {
            //alert(clickedID);
            for (var i = 0; i < Soma.length; i++) {
                marker = new google.maps.Marker({ position: Soma[i], map: map });
                markers.push(marker);

                // Add destination (max 9)
                if (nodes.length >= 9) {
                    alert('Max destinations added');
                    return;
                }
                // If there are directions being shown, clear them
                clearDirections();

                // Add a node to map
                marker = new google.maps.Marker({ position: Soma[i], map: map });
                markers.push(marker);

                //// Store node's lat and lng
                nodes.push(Soma[i]);
            }
            if (nodes.length < 2) {
                if (prevNodes.length >= 2) {
                    nodes = prevNodes;
                } else {
                    alert('Click on the map to select destination points');
                    return;
                }
            }
            if (directionsDisplay != null) {
                directionsDisplay.setMap(null);
                directionsDisplay = null;
            }

            $('#ga-buttons').hide();
            // Get route durations
            getDurations(function () {
                $('.ga-info').show();
                // Get config and create initial GA population
                ga.getConfig();
                var pop = new ga.population();
                pop.initialize(nodes.length);
                var route = pop.getFittest().chromosome;
                ga.evolvePopulation(pop, function (update) {
                    $('#generations-passed').html(update.generation);
                    var TimeBest = (update.population.getFittest().getDistance() / 60).toFixed(2);
                    $('#Data2').html("Somashekhar - Optimized Route Time: " + TimeBest + " Mins for " + Math.ceil(TimeBest / 8.273) + " Kms");
                    //$('#best-time').html('Optimized Route Time: ' + (update.population.getFittest().getDistance() )+ ' Kms');
                    //alert(update.population.getFittest().getDistance());
                    // Get route coordinates
                    var route = update.population.getFittest().chromosome;
                    var routeCoordinates = [];
                    for (index in route) {
                        routeCoordinates[index] = nodes[route[index]];
                    }
                    routeCoordinates[route.length] = nodes[route[0]];
                    // Display temp. route
                    if (polylinePath != undefined) {
                        polylinePath.setMap(null);
                    }
                    polylinePath = new google.maps.Polyline({
                        path: routeCoordinates,
                        strokeColor: "#0066ff",
                        strokeOpacity: 0.75,
                        strokeWeight: 2,
                    });
                    polylinePath.setMap(map);
                }, function (result) {
                    // Get route
                    route = result.population.getFittest().chromosome;
                    // Add route to map
                    directionsService = new google.maps.DirectionsService();
                    directionsDisplay = new google.maps.DirectionsRenderer();
                    directionsDisplay.setMap(map);
                    var waypts = [];
                    for (var i = 1; i < route.length; i++) {
                        waypts.push({
                            location: nodes[route[i]],
                            stopover: true
                        });
                    }

                    // Add final route to map
                    $('#travel-type').value = "DRIVING";
                    var request = {
                        origin: nodes[route[0]],
                        destination: nodes[route[0]],
                        waypoints: waypts,
                        travelMode: google.maps.TravelMode[$('#travel-type').val()],
                        avoidHighways: parseInt($('#avoid-highways').val()) > 0 ? true : false,
                        avoidTolls: false
                    };
                    directionsService.route(request, function (response, status) {
                        if (status == google.maps.DirectionsStatus.OK) {
                            directionsDisplay.setDirections(response);
                        }
                        clearMapMarkers();
                    });
                });
            });
        }


        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Update destination count
        $('#destinations-count').html(nodes.length);

        // Add "my location" button
        var myLocationDiv = document.createElement('div');
        new getMyLocation(myLocationDiv, map);
        map.controls[google.maps.ControlPosition.TOP_RIGHT].push(myLocationDiv);

        function getMyLocation(myLocationDiv, map) {
            var myLocationBtn = document.createElement('button');
            myLocationBtn.innerHTML = 'My Location';
            myLocationBtn.className = 'large-btn';
            myLocationBtn.style.margin = '5px';
            myLocationBtn.style.opacity = '0.95';
            myLocationBtn.style.borderRadius = '3px';
            //myLocationDiv.appendChild(myLocationBtn);

            google.maps.event.addDomListener(myLocationBtn, 'click', function () {
                navigator.geolocation.getCurrentPosition(function (success) {
                    map.setCenter(new google.maps.LatLng(success.coords.latitude, success.coords.longitude));
                    //map.setZoom(12);
                });
            });
        }
    }
    // Get all durations depending on travel type
    function getDurations(callback) {
        $('#travel-type').value = "DRIVING";
        var service = new google.maps.DistanceMatrixService();
        service.getDistanceMatrix({
            origins: nodes,
            destinations: nodes,
            travelMode: google.maps.TravelMode[$('#travel-type').val()],
            avoidHighways: parseInt($('#avoid-highways').val()) > 0 ? true : false,
            avoidTolls: false,
        }, function (distanceData) {
            // Create duration data array
            var nodeDistanceData;
            for (originNodeIndex in distanceData.rows) {
                nodeDistanceData = distanceData.rows[originNodeIndex].elements;
                durations[originNodeIndex] = [];
                for (destinationNodeIndex in nodeDistanceData) {
                    if (durations[originNodeIndex][destinationNodeIndex] = nodeDistanceData[destinationNodeIndex].duration == undefined) {
                        alert('Error: couldn\'t get a trip duration from API');
                        return;
                    }
                    durations[originNodeIndex][destinationNodeIndex] = nodeDistanceData[destinationNodeIndex].duration.value;
                }
            }
            if (callback != undefined) {
                callback();
            }


        });

    }

    // Removes markers and temporary paths
    function clearMapMarkers() {
        for (index in markers) {
            markers[index].setMap(null);
        }
        prevNodes = nodes;
        nodes = [];
        if (polylinePath != undefined) {
            polylinePath.setMap(null);
        }

        markers = [];

        $('#ga-buttons').show();
    }
    // Removes map directions
    function clearDirections() {
        // If there are directions being shown, clear them
        if (directionsDisplay != null) {
            directionsDisplay.setMap(null);
            directionsDisplay = null;
        }
    }
    // Completely clears map
    function clearMap() {
        clearMapMarkers();
        clearDirections();

        $('#destinations-count').html('0');
    }
    // Initial Google Maps
    //google.maps.event.addDomListener(window, 'load', initializeMap(clickedID));
    // Create listeners
    $(document).ready(function () {
        $('#clear-map').click(clearMap);
        // Start GA
        //$('#find-route').click(function () {

        //});
    });
    // GA code
    var ga = {
        // Default config
        "crossoverRate": 0.5,
        "mutationRate": 0.1,
        "populationSize": 50,
        "tournamentSize": 5,
        "elitism": true,
        "maxGenerations": 100,

        "tickerSpeed": 100,
        // Loads config from HTML inputs
        "getConfig": function () {
            ga.crossoverRate = parseFloat($('#crossover-rate').val());
            ga.mutationRate = parseFloat($('#mutation-rate').val());
            ga.populationSize = parseInt($('#population-size').val()) || 50;
            ga.elitism = parseInt($('#elitism').val()) || false;
            ga.maxGenerations = parseInt($('#maxGenerations').val()) || 50;
        },

        // Evolves given population
        "evolvePopulation": function (population, generationCallBack, completeCallBack) {
            // Start evolution
            var generation = 1;
            var evolveInterval = setInterval(function () {
                if (generationCallBack != undefined) {
                    generationCallBack({
                        population: population,
                        generation: generation,
                    });
                }
                // Evolve population
                population = population.crossover();
                population.mutate();
                generation++;

                // If max generations passed
                if (generation > ga.maxGenerations) {
                    // Stop looping
                    clearInterval(evolveInterval);

                    if (completeCallBack != undefined) {
                        completeCallBack({
                            population: population,
                            generation: generation,
                        });
                    }
                }
            }, ga.tickerSpeed);
        },
        // Population class
        "population": function () {
            // Holds individuals of population
            this.individuals = [];

            // Initial population of random individuals with given chromosome length
            this.initialize = function (chromosomeLength) {
                this.individuals = [];

                for (var i = 0; i < ga.populationSize; i++) {
                    var newIndividual = new ga.individual(chromosomeLength);
                    newIndividual.initialize();
                    this.individuals.push(newIndividual);
                }
            };

            // Mutates current population
            this.mutate = function () {
                var fittestIndex = this.getFittestIndex();
                for (index in this.individuals) {
                    // Don't mutate if this is the elite individual and elitism is enabled 
                    if (ga.elitism != true || index != fittestIndex) {
                        this.individuals[index].mutate();
                    }
                }
            };
            // Applies crossover to current population and returns population of offspring
            this.crossover = function () {
                // Create offspring population
                var newPopulation = new ga.population();

                // Find fittest individual
                var fittestIndex = this.getFittestIndex();
                for (index in this.individuals) {
                    // Add unchanged into next generation if this is the elite individual and elitism is enabled
                    if (ga.elitism == true && index == fittestIndex) {
                        // Replicate individual
                        var eliteIndividual = new ga.individual(this.individuals[index].chromosomeLength);
                        eliteIndividual.setChromosome(this.individuals[index].chromosome.slice());
                        newPopulation.addIndividual(eliteIndividual);
                    } else {
                        // Select mate
                        var parent = this.tournamentSelection();
                        // Apply crossover
                        this.individuals[index].crossover(parent, newPopulation);
                    }
                }

                return newPopulation;
            };
            // Adds an individual to current population
            this.addIndividual = function (individual) {
                this.individuals.push(individual);
            };
            // Selects an individual with tournament selection
            this.tournamentSelection = function () {
                // Randomly order population
                for (var i = 0; i < this.individuals.length; i++) {
                    var randomIndex = Math.floor(Math.random() * this.individuals.length);
                    var tempIndividual = this.individuals[randomIndex];
                    this.individuals[randomIndex] = this.individuals[i];
                    this.individuals[i] = tempIndividual;
                }
                // Create tournament population and add individuals
                var tournamentPopulation = new ga.population();
                for (var i = 0; i < ga.tournamentSize; i++) {
                    tournamentPopulation.addIndividual(this.individuals[i]);
                }
                return tournamentPopulation.getFittest();
            };

            // Return the fittest individual's population index
            this.getFittestIndex = function () {
                var fittestIndex = 0;
                // Loop over population looking for fittest
                for (var i = 1; i < this.individuals.length; i++) {
                    if (this.individuals[i].calcFitness() > this.individuals[fittestIndex].calcFitness()) {
                        fittestIndex = i;
                    }
                }
                return fittestIndex;
            };
            // Return fittest individual
            this.getFittest = function () {
                return this.individuals[this.getFittestIndex()];
            };
        },
        // Individual class
        "individual": function (chromosomeLength) {
            this.chromosomeLength = chromosomeLength;
            this.fitness = null;
            this.chromosome = [];
            // Initialize random individual
            this.initialize = function () {
                this.chromosome = [];
                // Generate random chromosome
                for (var i = 0; i < this.chromosomeLength; i++) {
                    this.chromosome.push(i);
                }
                for (var i = 0; i < this.chromosomeLength; i++) {
                    var randomIndex = Math.floor(Math.random() * this.chromosomeLength);
                    var tempNode = this.chromosome[randomIndex];
                    this.chromosome[randomIndex] = this.chromosome[i];
                    this.chromosome[i] = tempNode;
                }
            };

            // Set individual's chromosome
            this.setChromosome = function (chromosome) {
                this.chromosome = chromosome;
            };

            // Mutate individual
            this.mutate = function () {
                this.fitness = null;

                // Loop over chromosome making random changes
                for (index in this.chromosome) {
                    if (ga.mutationRate > Math.random()) {
                        var randomIndex = Math.floor(Math.random() * this.chromosomeLength);
                        var tempNode = this.chromosome[randomIndex];
                        this.chromosome[randomIndex] = this.chromosome[index];
                        this.chromosome[index] = tempNode;
                    }
                }
            };

            // Returns individuals route distance
            this.getDistance = function () {
                var totalDistance = 0;
                for (index in this.chromosome) {
                    var startNode = this.chromosome[index];
                    var endNode = this.chromosome[0];
                    if ((parseInt(index) + 1) < this.chromosome.length) {
                        endNode = this.chromosome[(parseInt(index) + 1)];
                    }
                    totalDistance += durations[startNode][endNode];
                }

                totalDistance += durations[startNode][endNode];

                return totalDistance;
            };
            // Calculates individuals fitness value
            this.calcFitness = function () {
                if (this.fitness != null) {
                    return this.fitness;
                }

                var totalDistance = this.getDistance();
                this.fitness = 1 / totalDistance;
                return this.fitness;
            };
            // Applies crossover to current individual and mate, then adds it's offspring to given population
            this.crossover = function (individual, offspringPopulation) {
                var offspringChromosome = [];
                // Add a random amount of this individual's genetic information to offspring
                var startPos = Math.floor(this.chromosome.length * Math.random());
                var endPos = Math.floor(this.chromosome.length * Math.random());
                var i = startPos;
                while (i != endPos) {
                    offspringChromosome[i] = individual.chromosome[i];
                    i++
                    if (i >= this.chromosome.length) {
                        i = 0;
                    }
                }
                // Add any remaining genetic information from individual's mate
                for (parentIndex in individual.chromosome) {
                    var node = individual.chromosome[parentIndex];
                    var nodeFound = false;
                    for (offspringIndex in offspringChromosome) {
                        if (offspringChromosome[offspringIndex] == node) {
                            nodeFound = true;
                            break;
                        }
                    }
                    if (nodeFound == false) {
                        for (var offspringIndex = 0; offspringIndex < individual.chromosome.length; offspringIndex++) {
                            if (offspringChromosome[offspringIndex] == undefined) {
                                offspringChromosome[offspringIndex] = node;
                                break;
                            }
                        }
                    }
                }
                // Add chromosome to offspring and add offspring to population
                var offspring = new ga.individual(this.chromosomeLength);
                offspring.setChromosome(offspringChromosome);
                offspringPopulation.addIndividual(offspring);
            };
        },
    }

    function AddILD_POP() {


    }