$(document).ready(function() {
  $("#wordPlayForm").submit(function(event) {
    event.preventDefault();

    var inputSentence = $("#userSentence").val();
    var splitSentence = inputSentence.split(" ");
    var vowels = ["a", "e", "i", "o", "u"];


    var newSentence = splitSentence.map(function(splitword) {
      splitword = splitword.split("");

      splitword.forEach(function(letter) {
        vowels.forEach(function(vowel) {
          if (vowel === letter) {
            letter = "-";
          }
        })
        alert(letter)
      });

      splitword = splitword.join("");

      return splitword;

    });

  var brandNewFuckingSentence = newSentence.join(" ");

  $("#sentenceOutput").text(brandNewFuckingSentence);
  debugger;
  });
});
