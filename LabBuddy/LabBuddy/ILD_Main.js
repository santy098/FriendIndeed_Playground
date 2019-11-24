var txtcontent = ""; var For_D_WS; var Latval = "", Lonval = ""; var Latval2 = "", Lonval2 = ""; var Latval3 = "", Lonval3 = ""; var Latval4 = "", Lonval4 = "";
var ILD_Data_Samples_Final = 0;
var ILDName = "", Lov = "", Lav = "", Lat1 = "", Lon1 = "";
var LocData = "", AllDs = "", PAD_LatLongs, PAD_POPs;
var ILD_Data_Samples_Final1 = 0;
var AllNames;
var SampVals = 0;

$(document).ready(function () {
    //Password = prompt("Enter PassKey");
    //$('#myModal').modal('show');

    initMap();
});

var ILDNAME1 = ("" + "," + "Abhishek" + "," + "Deepak" + "," + "Guruprasad" + "," + "Manjunath" + "," + "Muneendra" + "," +
                            "Prasanna" + "," + "Puneeth" + "," + "Senthil" + "," + "Somshekhar");

function MonitorFcn() {
    document.getElementById("LeftDiv").innerHTML = "";
    var ILDName = ILDNAME1.split(",");
    for (var i = 1; i < 10; i++) {
        var btn = "Btn" + [i];
        btn = document.createElement("BUTTON");
        btn.textContent = ILDName[i];
        btn.id = "ILD" + [i];
        btn.className = "btn btn-default";
        document.getElementById("LeftDiv").appendChild(btn);

        btn.addEventListener('click', function (event) {
            initMap(this.id);
        });
    }
}

function initMap(clickedID) {

    //document.getElementById("ILD1").style.backgroundColor = "#AED6F1";
    //document.getElementById("ILD2").style.backgroundColor = "#AED6F1";
    //document.getElementById("ILD3").style.backgroundColor = "#AED6F1";
    //document.getElementById("ILD4").style.backgroundColor = "#AED6F1";
    //document.getElementById("ILD5").style.backgroundColor = "#AED6F1";
    //document.getElementById("ILD6").style.backgroundColor = "#AED6F1";
    //document.getElementById("ILD7").style.backgroundColor = "#AED6F1";
    //document.getElementById("ILD8").style.backgroundColor = "#AED6F1";
    //document.getElementById("ILD9").style.backgroundColor = "#AED6F1";
    //document.getElementById(clickedID).style.backgroundColor = "#ABEBC6";
    clickedID = "ILD2"
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
        //alert(today);
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
                A_ILD_Data_Samples =A_ILD_Data_Samples+ Number(ILD_Data_Samples[ii]);
                A_ILD_Data_Cash = A_ILD_Data_Cash + Number(ILD_Data_Cash[ii]);
            }
            document.getElementById("Pname").innerText = ILDName;
            document.getElementById("Pvisits").innerText = ILD_Data_Samples.length + " POP Visits";
            document.getElementById("Psamples").innerText = A_ILD_Data_Samples + " Samples";
            document.getElementById("Pcash").innerText = "INR " + A_ILD_Data_Cash + " Collected";

            var Dt1 = Tdy.getDate();
            var ILD_Input_Query_Data1 = {
                "ILD_ID": clickedID,
                "FromDate": FY,
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
                    "12.869627,77.582080"+ "&" +
                    "12.87735,77.58411"+ "&" + 
                    "12.88799,77.5821"+"&"+
                    "12.89133,7759668"+"&"+
                    "12.89104,77.59478"+"&"+ // done
                    "12.90533,77.58583"+"&"+
                    "12.91098,77.57267"+ "&" + 
                    "12.906810,77.520310" + "&" + 
                    "12.90774,77.52116" + "&" + 
                    "12.91677,77.51793" + "&" + 
                    "12.91972,77.52048"+ "&" + 
                    "12.9223302,77.4501063" + "&" + 
                    "12.9324787,77.4179915" + "&" + 
                    "12.9313545,77.5390746" + "&" + 
                    "12.90877,77.54916"+ "&" + 
                    "12.905689,77.4929643" + "&" + 
                    "12.9081679,77.5340366" + "&" + 
                    "12.8825658,77.4763648" + "&" + 
                    "12.9020911,77.4877844"+ "&" + 
                    "12.9145772,77.5341872" + "&" + 
                    "12.9055695,77.4726753" + "&" + 
                    "12.90979,77.52078" + "&" + 
                    "12.9199025,77.4694283"+ "&" + 
                    "12.8968426,77.5544354" + "&" + 
                    "12.9140427,77.5403065" + "&" + 
                    "12.9426052,77.5810728" + "&" + 
                    "12.9534387,77.5243318"+ "&" + 
                    "12.9492278,77.527754" + "&" + 
                    "12.9630436,77.5296995" + "&" + 
                    "12.9134003,77.5857753"+"&"+
                    "12.9089,77.54881"+"&"+
                    "12.9143,77.54718"+"&"+
                    "12.89254,77.54041"+"&"+
                    "12.90274,77.51986" + "&" +
                    "12.9388476,77.5084997"+"&"+
                    "12.9397937,77.5718006"+"&"+
                    "12.9055117,77.4666815"+"&"+
                    "12.9271999,77.5044985"+"&"+
                    "12.9574076,77.4892095"+"&"+
                    "12.917518,77.545462"+"&"+
                    "12.8905954,77.5418553"
                    );

                PAD_POPs_Names = ("Clumax Jayanagar" + "&" + 
                    "Clumax Padmanabhnagar" + "&" + 
                    "Devgiri Hospital" + "&" +
                    "Samarth GandhiBazaar"+"&"+
                    "Depashree Multispeciality hospital"+"&"+
                    "RAMS Diagnostic Lab"+"&"+
                    "Infilife"+"&"+
                    "Adithi Nursing Home"+"&"+
                    "Medplus Arkere"+"&"+ // Done
                    "Nano Diagnostic"+"&"+
                    "Bharth Nursing Home"+"&"+
                    "Diacare Diagnostic Centre" + "&" + 
                    "Apoorva Diagnostics" + "&" + 
                    "Miracle Diagnostic" + "&" + 
                    "Shreyashree Diagnostic Centre"+ "&" + 
                    "Geetha Diagnostic Centre" + "&" + 
                    "Sri Sathya sai hi-Tech Diagnostic Centre" + "&" + 
                    "Tirumala" + "&" + 
                    "G.R Diagnostic and Health Care"+ "&" + 
                    "Anusha clinical laboratory" + "&" + 
                    "Manipal Diagnostics" + "&" + 
                    "Mathru Multi speciality hospital" + "&" + 
                    "Patil Diagnostics"+ "&" + 
                    "Sukam speciality clinic" + "&" + 
                    "Nagarathna hospital" + "&" + 
                    "MCC1041 - R R Nagar " + "&" + 
                    "Shivam Polyclinic"+ "&" + 
                    "Agadi hospital" + "&" + 
                    "BTM Manasa clinic" + "&" + 
                    "Maiya Hospital" + "&" + 
                    "Parijma Medical Centre"+ "&" + 
                    "Unique Diagnostic & Healthcare Center" + "&" + 
                    "Sita Bhateja Hospital" + "&" + 
                    "Samarth BTM"+"&"+
                    "New spandana Diagnostic"+"&"+
                    "Alpha and Omega Diagnostic Research Centre"+"&"+
                    "Park View health Care"+"&"+
                    "Lalitha Diagnostic"+"&"+
                    "Anugraha Vithal Hospital"+"&"+
                    "Kincha Hospital"+"&"+
                    "PWCC (Poorna Pragna)"+"&"+
                    "Sanjivini Children's Clinic"+"&"+
                    "Sri Vinayaka Diagnostic Laboratory"+"&"+
                    "Procare Diagnostics"+"&"+
                    "Care and Cure Diagnostics"
                    );

                var pop_times = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                var pop_samples = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                var pop_cash = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                /////////////////////////////////////////////////
                // for loop should be applied from here..........
                AllDs = "";
                var start=Number(0);
                var pop_ll="";
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
                            start = start+1;
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
                for(var i=0;i<coordinates.length;i++)
                {  
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
                center: { lat: 12.9397937, lng: 77.5718006},
            },
            Alpha_Omega: {
                center: { lat: 12.9143, lng: 77.54718 },
            },
            ANUSHA_CLINICAL_LABORATORY: {
                center: { lat: 12.9016731, lng: 77.5429177 },
            },
            Apoorva: {
                center: { lat: 12.90774, lng: 77.52116},
            },
            Care_and_Cure: {
                center: { lat: 12.8920554, lng: 77.5423592},
            },
            DiaCare: {
                center: { lat: 12.906810, lng: 77.520310},
            },
            GR_Diagnostics: {
                center: { lat: 12.90877, lng: 77.54916},
            },
            Geetha_Diagnostics: {
                center: { lat: 12.9223302, lng: 77.4501063 },
            },
            InfiLife: {
                center: { lat: 12.88799, lng: 77.5821},
            },
            Lalitha: {
                center: { lat: 12.90274, lng: 77.51986},
            },
            Manipal_Diagnostics: {
                center: { lat: 12.9081679, lng: 77.5340366},
            },
            Miracle: {
                center: { lat: 12.91677, lng: 77.51793},
            },
            Nano_Diagnostics: {
                center: { lat: 12.90533, lng: 77.58583},
            },
            New_Spandana: {
                center: { lat: 12.9089, lng: 77.54881},
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
            uikuik  : {
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
                info:city
            });
        }

    }

} // End of Success Function

