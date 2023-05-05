// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}
// TODO 3: Create reddify function
function reddify(rouge){
  rouge[RED]= 200;
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
applyFilter(reddify);
  

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
///////////////////////////////////////////////////////// EX ARRAYS:
// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction){
for(var i = 0; i < image.length; i++){
  var row= image[i];
    for(var p = 0; p < row.length; p++){
      var rgbString = row[p];
      var rgbNumbers = rgbStringToArray(rgbString);
      filterFunction(rgbNumbers); 
      rgbString = rgbArrayToString(rgbNumbers);
      row[p] = rgbString;
    }
    
  }
} 

// TODO 7: Create the applyFilterNoBackground function
function applyFilterNoBackground(){
  // var backgroundColor = [SQUARE_SIZE]
  for(var i = 0; i < image.length; i++){
    var row= image[i];
      for(var p = 0; p < row.length; p++){
        var rgbString = row[p];
        var rgbNumbers = rgbStringToArray(rgbString);
        filterFunction(rgbNumbers); 
        rgbString = rgbArrayToString(rgbNumbers);
        row[p] = rgbString;
      //   if(){
      // }
}
}
// TODO 5: Create the keepInBounds function
function keepInBounds(number){
  // Math.min(255, number>255) 
  // Math.max(0, number<0);
  var init = Math.min(number, 255)
  var finalNumber = Math.max(init, 0)
  return finalNumber
}

// // TODO 3: Create reddify function
  /*SAM: As a rule of thumb, if you are passing in an array as a parameter to a function, call it array or arr, not rouge. 
  */
// function reddify(rouge){
//   rouge[RED]= 200;
// }

// TODO 6: Create more filter functions
function decreaseBlue(arr){
  /*SAM: You need to reference the array that is being passed in as an argument here. For example, you can't just use [BLUE], 
    it needs to be arr[BLUE], because [BLUE] is just a number (see image.js line 7)
  */
  [BLUE] = keepInBounds([BLUE] - 50);
}
function increaseGreenByBlue(aeray) {
    /*SAM: Same error as above. 
  */
  [GREEN] = keepInBounds([BLUE] + [GREEN])
  }
}
// CHALLENGE code goes below here//
