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
function reddify(array){
  array[RED]= 200;
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
applyFilter(reddify);
applyFilter(decreaseBlue);
applyFilter(increaseGreenByBlue);  

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
var currentPixel = array[gray] //????

// TODO 7: Create the applyFilterNoBackground function
function applyFilterNoBackground(){
  var backgroundColor = array[SQUARE_SIZE] 
  /*store the background color of the image in a variable to be used later. 
  The background color can be gotten by looking at the top left pixel of your image
   (recall what the index numbers for the top left pixel are).*/ 
  for(var i = 0; i < image.length; i++){
    var row= image[i];
      for(var p = 0; p < row.length; p++){
        row[p] = rgbString;
        if( currentPixel === backgroundColor){
          /* a conditional statement to check if the current pixel value is equal to the background pixel value.
           If it is not, then apply the filter.  */
          var rgbString = row[p];
          var rgbNumbers = rgbStringToArray(rgbString);
          filterFunction(rgbNumbers); 
          rgbString = rgbArrayToString(rgbNumbers);
      } else{
        applyFilter(); 
      }
    }
  }
}
// TODO 5: Create the keepInBounds function
function keepInBounds(number){
  Math.min(255, number>255) 
  Math.max(0, number<0);
  //var value = 0 <number<225 ? number : null 
  Math.min(0<number<255, number)
  var init = Math.min(number, 255)
  var finalNumber = Math.max(init, 0)
  return finalNumber
}

// // TODO 3: Create reddify function
  /*SAM: As a rule of thumb, if you are passing in an array as a parameter to a function, call it array or arr, not rouge. 
  */
//DONE
// TODO 6: Create more filter functions
function decreaseBlue(arr){
  arr[BLUE] = keepInBounds(arr[BLUE] - 50);
}

function increaseGreenByBlue(array){
  array[GREEN] = keepInBounds(array[BLUE] + array[GREEN]);
}



// CHALLENGE code goes below here//
