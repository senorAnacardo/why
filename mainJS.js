function cleanString(stringToClean) {
  var punctuationless = stringToClean.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g,"");
  var cleanedString = punctuationless.replace(/\s{2,}/g," ");
  return cleanedString;
}

//------------------------------------------------------------------------------

document.getElementById("mainUserText").value = "";

function refreshButton() {
    location.reload();
}

function removeDuplicateUsingSet(arr) {
  let unique_array = Array.from(new Set(arr));
return unique_array
}

function populateTableFromInput() {
  var accesKey,
      userInputText,
      userInputText_lowerCase,
      split_userInputText_lowerCase_with_duplicates,
      split_userInputText_lowerCase_WITHOUT_duplicates;

  accesKey = document.getElementById("mainUserText").value;
  userInputText = accesKey;
  userInputText_lowerCase = userInputText.toLowerCase().trim();
  userInputText_lowerCase = cleanString(userInputText_lowerCase);
  split_userInputText_lowerCase_with_duplicates = userInputText_lowerCase.split(" ");
  split_userInputText_lowerCase_WITHOUT_duplicates = removeDuplicateUsingSet(split_userInputText_lowerCase_with_duplicates);

  var table = document.getElementsByTagName('table')[0];

  for (var i = 0; i < split_userInputText_lowerCase_WITHOUT_duplicates.length; i++) {
    var newRow = table.insertRow(1);
    var duplicatesNumber = 0;
    for (var j = 0; j < split_userInputText_lowerCase_with_duplicates.length; j++) {
        if (split_userInputText_lowerCase_WITHOUT_duplicates[i] === split_userInputText_lowerCase_with_duplicates[j]) {duplicatesNumber++;}
      }
    for (var j = 0; j < 1; j++) {
      var cel1 = newRow.insertCell(0);
      var cel2 = newRow.insertCell(1);
      var omg = split_userInputText_lowerCase_WITHOUT_duplicates[i]
      cel1.innerHTML = omg;
      cel2.innerHTML = duplicatesNumber;
    }
  }
  document.getElementById("submitButton").disabled = true;
  document.getElementById("mainUserText").disabled = true;
}

const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;

const comparer = (idx, asc) => (a, b) => ((v1, v2) =>
    v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
    )(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));

// do the work...
document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
    const table = th.closest('table');
    Array.from(table.querySelectorAll('tr:nth-child(n+2)'))
        .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
        .forEach(tr => table.appendChild(tr) );
})));

function clean(e) {
  var textfield = document.getElementById(e);
  var regex = /[^a-z 0-9?!,.а-я]/gi;
  //textfield.value = textfield.value.replace(regex, "");
  if (textfield.value.search(regex) > -1) {
    document.getElementById("status").innerHTML = "poop was found";
    textfield.value = textfield.value.replace(regex, "");
  } else {
    document.getElementById("status").innerHTML = "";
  }


}

function repetitionHighlight(str) {
  var textfield = document.getElementById(str);

}
















// IE11 Support (non-ES6) -- SORTER (below)

// If you want to support IE11, you'll need to ditch the ES6 syntax and add polyfills for Array.from, Array.forEach and Element.closest.
//
// i.e.
// var getCellValue = function(tr, idx){ return tr.children[idx].innerText || tr.children[idx].textContent; }
//
// var comparer = function(idx, asc) { return function(a, b) { return function(v1, v2) {
//         return v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2);
//     }(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));
// }};
//
// // do the work...
// Array.from(document.querySelectorAll('th')).forEach(function(th) { th.addEventListener('click', function() {
//         var table = th.closest('table');
//         Array.from(table.querySelectorAll('tr:nth-child(n+2)'))
//             .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
//             .forEach(function(tr) { table.appendChild(tr) });
//     })
// });

//IE11 Support (non-ES6) -- SORTER (above) ^^^^^^^^
