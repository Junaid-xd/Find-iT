import { addImgObjToLostArray } from "./lost.js";

const key = localStorage.getItem('key');


let url;

function returnPicSrc(callback) {
    var fileInput = document.querySelector('.js-pic-ele');

    fileInput.addEventListener('change', () => {
        var selectedFile = fileInput.files[0];
        if (selectedFile && selectedFile.type.startsWith('image/')) {
            // Check if the selected file is an image

            // Create a FileReader to read the contents of the file
            var reader = new FileReader();

            // Define a function to be executed when the file is successfully read
            reader.onload = function (e) {
                const source = e.target.result;

                // Call the callback with the source
                callback(source);
            };

            // Read the file as a data URL
            reader.readAsDataURL(selectedFile);
        } else {
            alert('Please select a valid image file.');
        }
    });
}
returnPicSrc(function (source) {
    url = source;
});


function makePost()
{
  document.querySelector('.post-btn').addEventListener('click',()=>{
    const tempSrc = url;
    const tempProName = document.querySelector('.js-name-input').value;
    const tempLocation = document.querySelector('.js-location-input').value;
    if(tempProName!=='' && tempLocation!=='' && tempSrc!== void 0)
    {
        addImgObjToLostArray(key, tempSrc, tempLocation, tempProName);
        document.querySelector('.js-name-input').value = '';
        document.querySelector('.js-location-input').value = '';
        document.querySelector('.js-pic-ele').value = '';
        alert('Post Successfull');
    }
    else
    {
        alert('Please fill all the fields');
    }
  });
}

makePost();