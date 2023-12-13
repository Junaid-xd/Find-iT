import { verifyReg } from "./users.js";
import { addNewUser } from "./users.js";





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
returnPicSrc(function(source){
  url=source;
});


function registerUser()
{
  document.querySelector('.register-btn').addEventListener('click', ()=>{
 
    const tempName = document.querySelector('.js-name-ele').value;
    const tempReg = document.querySelector('.js-reg-ele').value;
    const tempPassword = document.querySelector('.js-password-ele').value;
    const tempContact = document.querySelector('.js-contact-ele').value;
    const tempSource = url;


    if(tempName!=='' && tempReg!=='' && tempPassword!=='' && tempContact!=='' && tempSource!== void 0)
    {
      if(!verifyReg(tempReg))
      {
        addNewUser(tempReg, tempPassword, tempName, tempSource, tempContact);
        document.querySelector('.js-name-ele').value = '';
        document.querySelector('.js-reg-ele').value = '';
        document.querySelector('.js-password-ele').value = '';
        document.querySelector('.js-contact-ele').value = '';
        document.querySelector('.js-pic-ele').value = '';
      }
      else
      {
        alert('This registration Number is already registered');
        document.querySelector('.js-name-ele').value = '';
        document.querySelector('.js-reg-ele').value = '';
        document.querySelector('.js-password-ele').value = '';
        document.querySelector('.js-contact-ele').value = '';
        document.querySelector('.js-pic-ele').value = '';
      }
    }
    else
    {
      alert('Please fill all the input Fields');
    }
  });
}

registerUser();