
var pageWidth = $( document ).width() * 0.7 - 20;
$( "#slidecontainer").append( $("<input type='range' min='200' max=" +pageWidth+ " step='1' value='500' class='slider' id='slider' class='slider'>") );

var inputBox = document.getElementById("textField");
inputBox.value = localStorage.getItem("savedInput") || inputBox.value;

var slider = document.getElementById("slider");
slider.value = localStorage.getItem("savedSliderValue");

var outputBox = document.getElementById("output");
var container = document.getElementsByClassName("container");

if (localStorage.getItem("savedSliderValue")) {
    $("#output").css("width", localStorage.getItem("savedSliderValue") + "px");
}

//used to save input box and slider values to local storage
//so it can be used after refreshing the page
function saveState() {
    localStorage.setItem("savedInput", inputBox.value);
    localStorage.setItem("savedSliderValue", slider.value);
}

//used to change the font size if the text is longer than output div's width
function fontSizeChange(){
    if ($("#output")[0].scrollWidth <= $("#output").innerWidth()) {
        $("#output").css("font-size", 50 + "px");
    }

    outputBox.innerHTML = inputBox.value;
    var i = 50;

    while ($("#output")[0].scrollWidth > $("#output").innerWidth()) {
        $("#output").css("font-size", --i + "px");
    }
}

slider.onchange = function() {
    saveState();
    var containerWidth = localStorage.getItem("savedSliderValue");
    
    if (slider.value > container.innerWidth) containerWidth = container.innerWidth;
    
    $("#output").css("width", containerWidth + "px");
    fontSizeChange();
}

inputBox.onkeyup = function() {
    saveState();
    fontSizeChange();
}

