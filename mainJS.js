function removeDuplicateUsingSet(arr) {
  let unique_array = Array.from(new Set(arr))
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
  userInputText_lowerCase = userInputText.toLowerCase();
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
  document.getElementById("mainUserText").value = "";
}

// SORTER playAround

function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch, x1, y1;
  table = document.getElementById("mainTable");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("TR");
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[1];
      y = rows[i + 1].getElementsByTagName("TD")[1];
      console.log(typeof x);
      x1 = parseInt(x);
      y1 = parseInt(y);
      //check if the two rows should switch place:
      if (x1.innerHTML > y1.innerHTML) {
        //if so, mark as a switch and break the loop:
        shouldSwitch= true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
