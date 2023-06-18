// alert(33)
// $(document).ready(function() {
//   alert(33)
//   $('#quoteinput').keydown(function(e) {
//     var allowedWords = ['Lorem ipsum dolor sit ametus omnisitaque corporis quaerat cumque iusto quis modi saepe alias, unde perferendis', 'world'];
//     var userInput = $(this).val();

//     // Allow backspace key
//     if (e.keyCode === 8) {
//       return true;
//     }

//     userInput += e.key;
//     var isValid = false;

//     for (var i = 0; i < allowedWords.length; i++) {
//       if (allowedWords[i].startsWith(userInput)) {
//         isValid = true;
//         break;
//       }
//     }

//     if (!isValid) {
//       e.preventDefault();
//       return false;
//     }
//   });
// });
// alert(69)
    $(document).ready(function() {
      // alert(70)
      $('#quoteinput').keydown(function(e) {
        var allowedWords = ['Lorem ipsum dolor sit ametus omnisitaque corporis quaerat cumque iusto quis modi saepe alias, unde perferendis', 'world'];
        var userInput = $(this).val();


        // Allow backspace key
        if (e.keyCode === 8) {
          return true;
        }


        userInput += e.key;
        var isValid = false;

        for (var i = 0; i < allowedWords.length; i++) {
          if (allowedWords[i].startsWith(userInput)) {
            isValid = true;
            break;
          }
        }

        if (!isValid) {
          e.preventDefault();
          return false;
        }

        $(this).css("color", "green");
      });
    });

