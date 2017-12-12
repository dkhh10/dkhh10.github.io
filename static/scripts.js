//function to automatically get form input and calculate result
function updateOutput_url() {
  //calculate
  //get form
  var form = document.getElementById("concat");
  //get output
  var out = form.elements["zz"];
  //get two strings
  // var url_4 = form.elements["bestellnr"].value;
  var url_4 = Math.random().toString().slice(2,11);
  var url_6 = form.elements["email"].value;
  var url_8 = form.elements["username"].value;
  //store fixed inputs
  var url_1 = "https://www.shopauskunft.de/neue-bewertung?xc__label="
  var url_2 = "S00030722"
  var url_3 = "&bestellnr=OID-"
  var url_5 = "&email="
  var url_7 = "&username="
  //get operator
  out.value = url_1.concat(url_2,url_3,url_4,url_5,url_6,url_7,url_8);
}

//copy to clipboard button function
function myFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  document.execCommand("copy");
}

$(document).ready(function() {
  $("#copy-button").click(function() {
    $("#copy-button").css("background-color","grey");
  });
});

$(document).ready(function() {
  $("#generate-button").click(function() {
    $("#copy-button").css("background-color","white");
  });
});

$(document).ready(function() {
  $("#generate-button").click(function() {
    $("#generate-button").css("background-color","grey");
  });
});

$(document).ready(function() {
  $("#input_1").click(function() {
    $("#generate-button").css("background-color","#4CAF50");
  });
});

$(document).ready(function() {
  $("#input_2").click(function() {
    $("#generate-button").css("background-color","#4CAF50");
  });
});
