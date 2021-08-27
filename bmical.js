var bmi = 0;
var he = parseFloat(document.getElementById("he").value);
var we = parseFloat(document.getElementById("we").value);
var heg = parseFloat(document.getElementById("heg").value);
var weg = parseFloat(document.getElementById("weg").value);

if (we == 2) {
    weg = weg / 2.2046;
}
if (we == 3) {
    weg = weg / 1000
}
if (he == 2) {
    heg = heg / 100;
}
if (he == 3) {
    heg = heg * 0.0254;
}
bmi = weg / (heg ** 2);
document.getElementById("res").innerHTML = bmi;


var result = " ";
if (bmi < 18.5)
    result = "UnderWeight";
else if (bmi >= 18.5 && bmi <= 24.9)
    result = "Normal Range";
else if (bmi >= 25.0 && bmi <= 29.9999)
    result = "OverWeight ";
else if (bmi == 30)
    result = "Obese";

else if (bmi >= 30.0 && bmi <= 34.9)
    result = "Obese Class I";

else if (bmi >= 35.0 && bmi <= 39.9)
    result = "Obese Class II";
else if (bmi > 40)
    result = "Obese Class III"

else

    result = "sd"
document.getElementById("res1").innerHTML = result;
