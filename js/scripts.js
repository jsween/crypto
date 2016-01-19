var encode = function(message) {
  var strippedMessage = noPuncs(message);
  var messageLen = strippedMessage.length;        //gets message length
  var width = Math.ceil(Math.sqrt(messageLen));   //finds num of columns
  var secretMessage = "";

  for(var i = 0; i < width; i++) {
    for(var j = i; j < messageLen; j += width) {
      secretMessage += strippedMessage[j];
    }
  };
  return addSpaces(5, secretMessage);
};

var noPuncs = function(message) {         //removes non alpha
  var strippedMessage = message.replace(/[^A-Za-z]/g,"").toLowerCase();

  return strippedMessage;
};


var addSpaces = function(n, message) {
  var finalMessage = "";

  for(var i = 0; i < message.length; i++) {
    finalMessage += message[i];
    if((i + 1) % n === 0) {
      finalMessage += " ";
    };
  };
  return finalMessage;
};


$(function() {
  $("form#crypto").submit(function(event) {
    var message = $("input#message").val();
    var encryptMessage = encode(message);

    $(".encryptMessage").text(encryptMessage);

    $("#result").show();
    event.preventDefault();
  });
});
