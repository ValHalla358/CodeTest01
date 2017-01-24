$(document).ready(function() {

    // Display the current day and time with the following format: Today is Sunday. The current time is 9 AM : 50 : 22
    function updateClock() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        var day = today.getDay();
        var hours = today.getHours();
        var minutes = today.getMinutes();
        var seconds = today.getSeconds();

        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        var dayName = weekday[today.getDay()];

        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        if (hours < 12) {
            hours = hours + ':' + minutes + ':' + seconds + ' AM';
        } else {
            hours = hours + ':' + minutes + ':' + seconds + ' PM';
        }
        today = 'Today is ' + dayName + ', ' + mm + '-' + dd + '-' + yyyy + '<br> ' + hours;
        document.getElementById("timeStamp").innerHTML = today;
        setTimeout(updateClock, 1000);
    };
    updateClock();

    // Scroll the string 'Origin Code Academy Rocks! ' from left to right

    var ocaString = "Origin Code Academy Rocks!";

    function scrollString() {
        var fristLetters = ocaString.substr(0, 3);
        var endLetters = ocaString.substr(3, 26);
        ocaString = endLetters + fristLetters;
        document.getElementById("scrollString").innerHTML = ocaString;
        var t = setTimeout(scrollString, 400);

    };
    scrollString();

    // Output the bubble-sorted result using a console.log statement.

    var a = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];

    function bubbleSort(a) {
        var swapped;
        do {
            swapped = false;
            for (var i = 0; i < a.length + 1; i++) {
                //creating a lowest to highest array
                if (a[i] < a[i + 1]) {
                    var temp = a[i];
                    //moving up the index and changing the value of a[i]
                    a[i] = a[i + 1];
                    //using the new value of a[i] to change the value of temp
                    a[i + 1] = temp;
                    //giving an boolean value to the variable of swapped
                    swapped = true;
                }
            }
        } while (swapped);
    }

    bubbleSort(a);
    console.log(a);


    // Attach a click and a double-click event to the <p> element. For single click append the following paragraph: 
    // <p>This is a click event</p> For double-click append the following paragraph: <p>This is a double-click event</p>

    $(".dblClick").dblclick(function() {
        $(this).append("<p>" + "This is a double-click event" + "</p>");
    });

    $("#target").click(function() {
        $(this).append("<p>" + " This is a click event" + "</p>");
    });

    // Change the background color of the div when the button is clicked.

    $("#buttonClick").click(function() {
        $(this).css("background", "#4e33b7");
    });

    // Make the first word of each element bold
    $("#boldList p").each(function() {
        var c = $(this);
        c.html(c.text().replace(/(^\w+)/, '<b>$1</b>'));
    });
});
