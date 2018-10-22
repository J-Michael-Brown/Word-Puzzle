$(document).ready(function() {
  $("#wordPlayForm").submit(function(event) {
    event.preventDefault();

    var inputSentence = $("#userSentence").val();
    var splitSentence = inputSentence.split(" ");


    var newSentence = splitSentence.map(function(splitword) {
      if (splitword.length < 3) {
        return splitword + "aye";
      } else if (splitword.length >= 3) {
        return splitword + "whaaaaaaaaat"
      }

})

  var brandNewFuckingSentence = newSentence.reverse().join(" ");

  $("#sentenceOutput").text(brandNewFuckingSentence);
  });
});
