var $ = function (id) {
    return document.getElementById(id);
};

var fixPrinter = function() {
    var stringOutput = "";
    var stringMessage1 = "Check the power cable.";
    var stringMessage2 = "Check the printer-computer cable.";
    var stringMessage3 = "Ensure printer software is installed.";
    var stringMessage4 = "Check / replace ink.";
    var stringMessage5 = "Check for paper jam.";
    var stringMessage6 = "Looks like everything is working fine!";
    var boolPrinting = $("not_printing").selected;
    var boolRedLight = $("yes_redlight").selected;
    var boolRecognised = $("not_recognised").selected;
    
    if ($("yes_printing").selected === false && $("not_printing").selected === false || 
    $("yes_redlight").selected === false && $("no_redlight").selected === false ||
    $("yes_recognised").selected === false && $("not_recognised").selected === false) {
        alert ("I'm sorry, buy you must answer all three of the questions.  Please try again.");
        stringOutput = "I'm sorry, buy you must answer all three of the above questions.  Please try again.";
    } else switch (true) {
        case boolPrinting===true && boolRedLight===true && boolRecognised===true:
            stringOutput = stringMessage2 + "\n" + stringMessage3 + "\n" + stringMessage4;
            break;
        case boolPrinting===true && boolRedLight===true && boolRecognised===false:
            stringOutput = stringMessage4 + "\n" + stringMessage5;
            break;
        case boolPrinting===true && boolRedLight===false && boolRecognised===true:
            stringOutput = stringMessage1 + "\n" + stringMessage2 + "\n" + stringMessage3;
            break;
        case boolPrinting===true && boolRedLight===false && boolRecognised===false:    
            stringOutput = stringMessage5;
            break;
        case boolPrinting===false && boolRedLight===true && boolRecognised===true:    
            stringOutput = stringMessage3 + "\n" + stringMessage4;
            break;
        case boolPrinting===false && boolRedLight===true && boolRecognised===false:
            stringOutput = stringMessage4;
            break;
        case boolPrinting===false && boolRedLight===false && boolRecognised===true:
            stringOutput = stringMessage3;
            break;
        default:    
            stringOutput = stringMessage6;
            break;
        }   
    
    $("output").value = stringOutput;
};

window.onload = function () {
    $("troubleshoot").onclick = fixPrinter;
};





