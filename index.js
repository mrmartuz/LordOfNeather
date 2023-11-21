//------ VARIABLES ------- //
 
//-TIMELOGIC-//
let calendarDateValue = "01 Frostfall 1"; //the date as a string accessible everywhere
 
let calendarDayValue = 0;  //dayInt
let calendarMonthValue = 1;    //monthInt
let calendarYearValue = 1;    //yearInt
let calendarYearZero = 0; //yearZeroInt to subtract to calendarYearValue to get CountedYear
let calendarCountedYear = 0; //yearInt-yearZero
let calendarEraValue = 0; //eraInt 0 era before time worldcreation
 
 
let timeSpeed = 0; //time speed player change velocity, 0 pause, 1 normal speed
 
let timeDayValue = 1000; //time that pass for every day, 1000 for testing
let nIntervalId; //id for interval calendar logic to clearInterval() and restart
 
//-EVENT LOGIC-//
let eventListArray = [];
 
//--- SET UP key bind--- //
document.addEventListener("keydown", function (e) {
    //TIMESPEED KEY CHANGE 1234 spacebar 
    if (e.key == 1){
        if (timeSpeed!==1) {
            clearInterval(nIntervalId);
            timeSpeed = 1;
            nIntervalId = setInterval(() => {
                calendarDateLogic(); 
            }, 1000);
            $("#calendarSpeed").html("<p>[-------->X1>-------]</p>");
        }
    } else if (e.key == 2) {
        if (timeSpeed!==0.5) {
            clearInterval(nIntervalId);
            timeSpeed = 0.5;
            nIntervalId = setInterval(() => {
                calendarDateLogic(); 
            }, 500);
            $("#calendarSpeed").html("<p>[------>>X2>>-----]</p>");
        }
    } else if (e.key == 3) {
        if (timeSpeed!==0.1) {
            clearInterval(nIntervalId);
            timeSpeed = 0.1;
            nIntervalId = setInterval(() => {
                calendarDateLogic(); 
            }, 100);
            $("#calendarSpeed").html("<p>[--->>>X10>>>---]</p>");
        }
    } else if (e.key == 4) {
        if (timeSpeed!==0.05) {
            clearInterval(nIntervalId);
            timeSpeed = 0.05;
            nIntervalId = setInterval(() => {
                calendarDateLogic(); 
            }, 50);
            $("#calendarSpeed").html("<p>[->>>>X20>>>>-]</p>");
        }
    } else if (e.key == ' ') {
        if (timeSpeed!==0.01) {
            clearInterval(nIntervalId);
            timeSpeed = 0;
            console.log("pause");
            $("#calendarSpeed").html("<p>[--->>PAUSE<<---]</p>");
        }
    } else {
        console.log("key not bind");
    }
});
 
//--- LOOP LOGIC ---
//insert in dateLogic the calls of the loop
function eventLoop(){
 
}
 
 
//function dateLogic
function calendarDateLogic() {
    let calendarDayString = "00";
    calendarDayValue += 1;
    if (calendarDayValue<10){
        calendarDayString = "0" + calendarDayValue;
    } else {
        calendarDayString = calendarDayValue;
    }
    if (calendarDayValue>30) {
        calendarMonthValue += 1;
        calendarDayValue = 1;
        if (calendarMonthValue>12) {
            calendarYearValue += 1;
            calendarMonthValue = 1;
        }
    }
    //Change date
    if (calendarEraValue>0) {
        $("#calendarDate").html("<p>" + calendarDayString + "." + calendarMonthName(calendarMonthValue) + "." + calendarYearValue + "</p>");
    } else {
        $("#calendarDate").html("<p>" + calendarDayString + "." + calendarMonthName(calendarMonthValue) + ".????. 0" + calendarEraValue + "ERA</p>");
    }
 
    calendarDateValue = (calendarDayString + "." + calendarMonthName(calendarMonthValue) + "." + calendarYearValue);
}
 
function calendarMonthName(calendarMonthValue){
    let listMonthNames = ["Frostfall","Shadowrift","Stormwatch","Embermoon","Moonshade","Dreamweave","Mistheaven", "Staarfhall","Silverlight","Suonfyire","Bloodmoon","Evergreen"]
    let monthName = listMonthNames[(calendarMonthValue-1)];
    return monthName
}