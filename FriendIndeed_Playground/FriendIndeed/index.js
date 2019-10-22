function getData() {
    var dates = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
    var ildid = document.getElementById('ildid').value;
    var samples= document.getElementById('samples').value;
    var cash = document.getElementById('cash').value;
    var reports= document.getElementById('reports').value;
    var pop = document.getElementById('pop').value;
    var latlong = document.getElementById('latlong').value;
    var zone = document.getElementById('zone').value;
	
    var QQQ = {
        "DateTime1": dates,
        "ILDID1": ildid,
        "Samples1": samples,
        "Cash1": cash,
        "Reports1": reports,
        "POP1": pop,
        "LatLong1": latlong,
        "Zone1": zone
    }

    $.ajax({
        type: "POST",
        url: "WebService1.asmx/InsertData",
        data: JSON.stringify(QQQ),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: Success,
        error: ErrorInsert
    });
	function Success(data) {
		

        alert("Success in pushing the data");

    }

    function ErrorInsert() {
        alert("Error in pushing the data");
    }
}


    $.ajax({
        type: "POST",
        url: "WebService1.asmx/GetChartData",
        data: JSON.stringify(),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: SuccessDisplay,
        error: ErrorDisplay
    });
    function SuccessDisplay(data) {
        var dat = data.d;
        var samp = dat.split('<')[0];
        samp = samp.split(',');
        var zones = dat.split('<')[1];
        zones = zones.split(',');
        
        var mychart = document.getElementById("myChart").getContext('2d');
        var chart = new Chart(mychart, {
            type: 'pie',
            data: {
                labels: zones,
                datasets: [{
                    label: '# of samples',
                    data: samp,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1

                }]

            },
            options: {
                layout: {
                    padding: {
                        left: 50,
                        right: 50,
                        top: 20,
                        bottom: 20
                    }
                },
                title: {
                    display: true,
                    text: 'Pie chart'
                }
            }

        });
        var ctx = document.getElementById("myChart1").getContext('2d');
        var myLineChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: zones,
                datasets: [{
                    label: '# of samples',
                    data: samp,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1

                }]
            },
            options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                },
                layout: {
                    padding: {
                        left: 50,
                        right: 50,
                        top: 20,
                        bottom: 20
                    }
                },
                title: {
                    display: true,
                    text: 'Line Graph'
                }

            }



        });

        var cht2 = document.getElementById("myChart2").getContext('2d');
        var myRadarChart = new Chart(cht2, {
            type: 'polarArea',
            data: {
                labels: zones,
                datasets: [{
                    label: '# of samples',
                    data: samp,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1

                }]
            },
            options: {
                layout: {
                    padding: {
                        left: 50,
                        right: 50,
                        top: 20,
                        bottom: 20
                    }
                },
                title: {
                    display: true,
                    text: 'Polar Area Graph'
                }
            }


        });


        var cht3 = document.getElementById("myChart3").getContext('2d');
        var myBarChart = new Chart(cht3, {
            type: 'bar',
            data: {
                labels: zones,
                datasets: [{
                    label: '# of samples',
                    data: samp,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1

                }]  
            },
            options: {
                layout: {
                    padding: {
                        left: 50,
                        right: 50,
                        top: 20,
                        bottom: 20
                    }
                },
                title: {
                    display: true,
                    text: 'Bar Chart'
                }
            }
        });
    }

    function ErrorDisplay() {
        alert("Error in displaying the data");
    }
   
