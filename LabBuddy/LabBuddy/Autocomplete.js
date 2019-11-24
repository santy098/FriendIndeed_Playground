var POPNames = [
                        "Clumax Jayanagar",
                        "Clumax Padmanabhnagar",
                        "Devgiri Hospital",
                        "Samarth GandhiBazaar",
                        "Depashree Multispeciality hospital",
                        "RAMS Diagnostic Lab",
                        "Infilife",
                        "Adithi Nursing Home",
                        "Medplus Arkere", // Done
                        "Nano Diagnostic",
                        "Bharth Nursing Home",
                        "Diacare Diagnostic Centre",
                        "Apoorva Diagnostics",
                        "Miracle Diagnostic",
                        "Shreyashree Diagnostic Centre",
                        "Geetha Diagnostic Centre",
                        "Sri Sathya sai hi-Tech Diagnostic Centre",
                        "Tirumala",
                        "G.R Diagnostic and Health Care",
                        "Anusha clinical laboratory",
                        "Manipal Diagnostics",
                        "Mathru Multi speciality hospital",
                        "Patil Diagnostics",
                        "Sukam speciality clinic",
                        "Nagarathna hospital",
                        "MCC1041 - R R Nagar ",
                        "Shivam Polyclinic",
                        "Agadi hospital",
                        "BTM Manasa clinic",
                        "Maiya Hospital",
                        "Parijma Medical Centre",
                        "Unique Diagnostic & Healthcare Center",
                        "Sita Bhateja Hospital",
                        "Samarth BTM",
                        "New spandana Diagnostic",
                        "Alpha and Omega Diagnostic Research Centre",
                        "Park View health Care",
                        "Lalitha Diagnostic",
                        "Anugraha Vithal Hospital",
                        "Kincha Hospital",
                        "PWCC (Poorna Pragna)",
                        "Sanjivini Children's Clinic",
                        "Sri Vinayaka Diagnostic Laboratory",
                        "Procare Diagnostics",
                        "Care and Cure Diagnostics"
];



var ILDAgentNames = [
            "Abhishek",
            "Deepak Singh",
            "Niranjan B S",
            "Manjunath",
            "Muneendra",
            "Prasanna",
            "Puneeth",
            "Senthil",
            "Somshekhar",
            "Anil",
            "Arun",
            "Gangadhar",
            "Kiran",
            "Krishna",
            "Krishnamurthy",
            "mahadev",
            "Mahesh",
            "Muniraju",
            "Punith H K",
            "Kiran A",
            "Sagar",
            "Santosh",
            "Shiva Shambu",
            "Sharath",
            "Soma",
            "Pradeep Mys",
            "Praveen kumar Mys",
            "Yeshwanth Kumar Mys",
            "Diwakar Mys",
            "Prabhulinga Gul",
            "Sharath Kumar Mys",
            "Harshavardhan Shi",
            "Harish Shi",
            "Darshan Mys",
            "Chethan Mys",
            "Vijay Mys",
            "Arun Mys",
            "Chandrashekhar Mys",
            "Dhruva Mys",
            "Charan Mys",
            "Kishore Mys",
            "Prabhulinga Gul",
            "Sharath Mys",
            "Harshavardhana Shi",
            "Harish Shi",
            "Chethan Mol Mys",
            "Basavanna Mol Mys",
            "Pavan Kumar",
            "Rajesh C M",            
            "Hemanth Kumar",
            "Oblesh N",
            "Rajesh N",
            "Naresh",
            "Kiran SadashivNgr",

];


function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function (e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;
                    Addto_Cart();
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
       
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });

  
    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}