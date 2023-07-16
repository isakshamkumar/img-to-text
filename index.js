const checkbox = document.getElementById("checkbox");
const professional = document.getElementById("professional");
// const master = document.getElementById("master");
const basic = document.getElementById("basic");

checkbox.addEventListener("click", () => {
  basic.textContent = basic.textContent === "$199.99" ? "$19.99" : "$199.99";
  professional.textContent =
    professional.textContent === "$249.99" ? "$24.99 " : "$249.99";
//   master.textContent = master.textContent === "$399.99" ? "$39.99" : "$399.99";
});
const toggles = Array.from(document.querySelectorAll(".faq-toggle"));
// const toggles = document.querySelectorAll(".faq-toggle");
// for(let i=0;i<toggles.length;i++){
//   toggles[i].addEventListener("click",()=>{
//     alert('hi')
//   })
// }


toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    // alert('hi')
    toggle.parentNode.classList.toggle("active");
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const userMenuButton = document.getElementById("user-menu-button");
  const userMenu = document.getElementById("user-menu");

  userMenuButton.addEventListener("click", function() {
      const expanded = userMenuButton.getAttribute("aria-expanded") === "false" || true;
      userMenuButton.setAttribute("aria-expanded", !expanded);
      userMenu.classList.toggle("hidden");
  });

  // Close user menu when clicking outside
  document.addEventListener("click", function(event) {
      if (!userMenuButton.contains(event.target) && !userMenu.contains(event.target)) {
          userMenuButton.setAttribute("aria-expanded", "false");
          userMenu.classList.add("hidden");
      }
  });
});
document.querySelector("html").classList.add('js');

var fileInput  = document.querySelector( ".input-file" ),  
button     = document.querySelector( ".input-file-trigger" ),
the_return = document.querySelector(".file-return");

button.addEventListener( "keydown", function( event ) {  
if ( event.keyCode == 13 || event.keyCode == 32 ) {  
fileInput.focus();  
}  
});
button.addEventListener( "click", function( event ) {
fileInput.focus();
return false;
});  
fileInput.addEventListener( "change", function( event ) {  
the_return.innerHTML = this.value;  
});  


// to preview the file
var fileInput = document.getElementById('my-file');

// Get the image preview element
var imagePreview = document.getElementById('image-preview');

// Listen for file input change event
fileInput.addEventListener('change', function () {
// Get the selected file
var file = fileInput.files[0];

// Create a FileReader instance
var reader = new FileReader();

// Set the image source once it's loaded
reader.onload = function (e) {
imagePreview.src = e.target.result;
};

// Read the file as a data URL
reader.readAsDataURL(file);
});


// result
async function select(file) {
  const loader= document.getElementById('loader');
  loader.classList.remove('hide');
  loader.classList.add('loader');
const url = 'https://pen-to-print-handwriting-ocr.p.rapidapi.com/recognize/';
const data = new FormData();
data.append('srcImg', file, file.name);
data.append('Session', 'string');

const options = {
method: 'POST',
headers: {
  'X-RapidAPI-Key': '546c232bf9msh68a97b48966d016p1cf9e2jsnbb61b7bea4f2',
  'X-RapidAPI-Host': 'pen-to-print-handwriting-ocr.p.rapidapi.com'
},
body: data
};

try {
  //yedekh liyo
  loader.classList.remove('loader');
  loader.classList.add('hide')

const response = await fetch(url, options);
const result = await response.text();
const resultJson= JSON.parse(result)
// console.log(resultJson)
// console.log(result)


//yedekh liyo
const formattedValue = resultJson.value.replace(/\\n/g, '\n');
// console.log(formattedValue);

// Update the content of the "premium" div with the API result
document.getElementById("premium-div").textContent = formattedValue;


console.log(result);
// console.log('hi from fetch');
} catch (error) {
console.error(error);
}
}

fileInput.addEventListener("change", function (event) {
  var imagePreview = document.getElementById('image-preview');
  //yedekh liyo
  imagePreview.src ='';

const selectedFiles = event.target.files;

// Assuming only one file is selected
const file = selectedFiles[0];

// Check if the file is in the desired format (JPG or PNG)
if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
select(file);
} else {
console.log("Please select a JPG or PNG image file.");
}
});