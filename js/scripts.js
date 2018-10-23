$(document).ready(function() {
  $("#wordPlayForm").submit(function(event) {
    event.preventDefault();

    var inputSentence = $("#userSentence").val();
    var splitSentence = inputSentence.split("");
    var vowels = ["a", "e", "i", "o", "u"];
    var brandNewSentence = [];

    splitSentence.forEach(function(splitLetter) {
        // for (var i = 0; i < vowels.length; i++) {
        //   if (splitLetter === vowels[i]) {
        //     splitLetter = "-";
        //   }
        // } --- does the same  thing, but as a 'for loop'
        vowels.forEach(function(vowel) {
          if (splitLetter === vowel) {
            splitLetter = "-";
          }
        })
        brandNewSentence.push(splitLetter);
    });

  var brandNewSentence = brandNewSentence.join("");

  $("#sentenceOutput").text(brandNewSentence);
  });
});
