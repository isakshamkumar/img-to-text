const checkbox = document.getElementById("checkbox");
const professional = document.getElementById("professional");
// const master = document.getElementById("master");
const basic = document.getElementById("basic");

checkbox.addEventListener("click", () => {
  basic.textContent = basic.textContent === "$39.99" ? "$4.99 " : "$39.99";
  professional.textContent =
    professional.textContent === "$29.99" ? "$2.99" : "$29.99"
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
  document.querySelector(".result").textContent = '';

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
  const targetElement= document.getElementById('result')
  targetElement.scrollIntoView({ behavior: 'smooth' });
 
  
const response = await fetch(url, options);
const result = await response.text();
const resultJson= JSON.parse(result)
 //yedekh liyo
  loader.classList.remove('loader');
  loader.classList.add('hide')

console.log(resultJson)
console.log(result)


//yedekh liyo
// const formattedMessage = message.replace(/\n/g, "<br>");
const formattedValue = resultJson.value.replace(/\n/g, "\n");
// let formattedMessage = '';
// for (let i = 0; i < resultJson.value.length; i++) {
//   if (resultJson.value[i] === '\n') {
//     formattedMessage += '<br>';
//   } else {
//     formattedMessage += resultJson.value[i];
//   }
// }

// console.log(formattedMessage);

// Update the content of the "premium" div with the API result
// document.getElementsByClassName(".result").textContent = formattedValue;


document.querySelector(".result").textContent = formattedValue;
const resultDiv = document.querySelector(".result");
resultDiv.style.visibility = "visible"

// console.log('hi from fetch');
} catch (error) {
console.error(error);
}
}

fileInput.addEventListener("change", function (event) {
  // var imagePreview = document.getElementById('image-preview');
  // //yedekh liyo
  // imagePreview.src ='';

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

// download button
// Function to download the text as a .txt file
function downloadTextAsFile() {
  const textToDownload = document.querySelector('.result').textContent;
  const filename = 'download.txt';

  const element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textToDownload));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

// Add click event listener to the download button
const downloadButton = document.querySelector('.download');
downloadButton.addEventListener('click', downloadTextAsFile);
// copy button
// Function to copy the text to the clipboard
function copyTextToClipboard() {
  const textToCopy = document.querySelector('.result').textContent;

  // Create a textarea element to hold the text temporarily
  const textarea = document.createElement('textarea');
  textarea.value = textToCopy;
  document.body.appendChild(textarea);

  // Select the text in the textarea
  textarea.select();
  textarea.setSelectionRange(0, 99999); // For mobile devices

  // Copy the selected text to the clipboard
  document.execCommand('copy');

  // Remove the textarea element from the DOM
  document.body.removeChild(textarea);

  // Provide visual feedback to the user
  const copyButton = document.querySelector('.copy');
  copyButton.textContent = 'Copied!';
  setTimeout(() => {
    copyButton.textContent = 'Copy Text';
  }, 2000);
}

// Add click event listener to the copy button
const copyButton = document.querySelector('.copy');
copyButton.addEventListener('click', copyTextToClipboard);

//updated prem
const prem= document.getElementById('premium-div');
const targetElement = document.getElementById('pricing-container');
prem.addEventListener('click',()=>{
  targetElement.scrollIntoView({ behavior: 'smooth' });
})

//search the text on the web 
function searchOnGoogle() {
  var resultText = document.querySelector('.result').textContent;
  if (resultText) {
    var searchQuery = resultText.replace(/\n/g, ' ').trim();
    var searchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(searchQuery);
    window.open(searchUrl, '_blank');
  }
}

