var encode = function(message) {
  var strippedMessage = noPuncs(message);
  var messageLen = strippedMessage.length;
  var width = Math.ceil(Math.sqrt(messageLen));

  return width;
}


var noPuncs = function(message) {
  var strippedMessage = message.replace(/[^A-Za-z]/g,"").toLowerCase();

  return strippedMessage;
};
