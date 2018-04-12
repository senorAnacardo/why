var nom,gen,dat,acc,inst,prep,lol;

function applyCases() {
  var textAreaValue = "";
  textAreaValue = document.getElementById("userText_var").value;

  console.log(textAreaValue.includes("nameVar|1"));
 switch (textAreaValue) {
      case textAreaValue.includes("nameVar|1"):
        textAreaValue = textAreaValue.replace("nameVar|1", document.getElementById("nominativeInput").value);
      break;
    default:
      console.log("hm");
      console.log(textAreaValue);
  }
  var res = textAreaValue.replace("nameVar", "W3Schools");
  //console.log(res);

  //nameVar|n
}

function propagateDefaultNames() {
  document.getElementById("nominativeInput").disabled = false;
  document.getElementById("genetiveInput").disabled = false;
  document.getElementById("dativeInput").disabled = false;
  document.getElementById("accusativeInput").disabled = false;
  document.getElementById("instrumentalInput").disabled = false;
  document.getElementById("prepositionalInput").disabled = false;

  lol = document.getElementById("defaultUserName").value;
  document.getElementById("nominativeInput").value = lol;
  document.getElementById("genetiveInput").value = lol;
  document.getElementById("dativeInput").value = lol;
  document.getElementById("accusativeInput").value = lol;
  document.getElementById("instrumentalInput").value = lol;
  document.getElementById("prepositionalInput").value = lol;
}

function noDeclination() {
  lol = document.getElementById("defaultUserName").value;
  document.getElementById("nominativeInput").value = lol;
  document.getElementById("genetiveInput").value = lol;
  document.getElementById("dativeInput").value = lol;
  document.getElementById("accusativeInput").value = lol;
  document.getElementById("instrumentalInput").value = lol;
  document.getElementById("prepositionalInput").value = lol;

  document.getElementById("nominativeInput").disabled = true;
  document.getElementById("genetiveInput").disabled = true;
  document.getElementById("dativeInput").disabled = true;
  document.getElementById("accusativeInput").disabled = true;
  document.getElementById("instrumentalInput").disabled = true;
  document.getElementById("prepositionalInput").disabled = true;
}

function showCases() {
  nom = document.getElementById("nominativeInput").value;
  gen = document.getElementById("genetiveInput").value;
  dat = document.getElementById("dativeInput").value;
  acc = document.getElementById("accusativeInput").value;
  inst = document.getElementById("instrumentalInput").value;
  prep = document.getElementById("prepositionalInput").value;

  document.getElementById("outputNom").innerHTML = `${nom}  — прекрасный человек.`
  document.getElementById("outputGen").innerHTML = `У ${gen} есть маленький котёнок.`
  document.getElementById("outputDat").innerHTML = `${dat} его подарили, когда ей было 10 лет.`
  document.getElementById("outputAcc").innerHTML = `Котёнок часто царапал ${acc}.`
  document.getElementById("outputInst").innerHTML = `Видимо, он был очень недоволен ${inst}.`
  document.getElementById("outputPrep").innerHTML = `Мне ещё много чего рассказывали про ${prep}.`

}

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
