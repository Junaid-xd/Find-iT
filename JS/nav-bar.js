import { returnName } from "./users.js";
import { returnProfilePic } from "./users.js";
import { changeProfilePic } from "./users.js";
import { verifyBlockStatus } from "./users.js";


const key = localStorage.getItem('key');


function profilePortionVisible()
{
  document.querySelector('.js-menu-logo').addEventListener('click',()=>{
    document.querySelector('.js-profile-div').classList.remove('profile-div');
    document.querySelector('.js-profile-div').classList.add('make-visible');
  });
  
  document.querySelector('.back-div').addEventListener('click',()=>{
    document.querySelector('.js-profile-div').classList.remove('make-visible');
    document.querySelector('.js-profile-div').classList.add('profile-div');
  });
}
profilePortionVisible();



function selectNewPic()
{
  var fileInput = document.querySelector(".input-element");

  fileInput.addEventListener('change', function() {
      var selectedFile = fileInput.files[0];

      if (selectedFile && selectedFile.type.startsWith('image/')) {
          // Check if the selected file is an image

          // Create a FileReader to read the contents of the file
          var reader = new FileReader();

          // Define a function to be executed when the file is successfully read
          reader.onload = function(e) {
             const source = e.target.result; 
             changeProfilePic(key, source);
             location.reload();
          };

          // Read the file as a data URL
          reader.readAsDataURL(selectedFile);
      } else {
          alert('Please select a valid image file.');
      }
  });
}
selectNewPic();


function setProfilePic()
{
  let img = document.querySelector('.profile-pic');
  img.src = returnProfilePic(key);
  // console.log(img);
}
setProfilePic();


function loadProfile()
{
  document.querySelector('.name-div').innerHTML = `
  <p class="reg-no"><b>${returnName(key)}</b></p>
`;

}
loadProfile();



//===============================================================
//======================= LOST OPTIONS===========================
//===============================================================
let los = false;

function makeLostOptionsVisible()
{
  document.querySelector('.lost-item-button').addEventListener('click', ()=>{
    if(los===false)
    {
      makeFoundOptionDisable();
      makeRecoveredOptionDisable();
      document.querySelector('.lost-options-div').classList.add('lost-options-div-visible');
      document.querySelector('.lost-options-div-visible').classList.remove('lost-options-div');
      los=true;
    }
    else
    {
      makeLostOptionDisable();
      los=false;
    }
  });
}
makeLostOptionsVisible();

function makeLostOptionDisable()
{
  document.querySelector('.common-lost-div').classList.add('lost-options-div');
  document.querySelector('.common-lost-div').classList.remove('lost-options-div-visible');
}


//===============================================================
//======================= FOUND OPTIONS==========================
//===============================================================
let fou = false;

function makeFoundOptionsVisible()
{
  document.querySelector('.founded-item-button').addEventListener('click', ()=>{
    if(fou===false)
    {
      makeLostOptionDisable();
      makeRecoveredOptionDisable();
      document.querySelector('.founded-options-div').classList.add('founded-options-div-visible');
      document.querySelector('.founded-options-div-visible').classList.remove('founded-options-div');
      fou=true;
    }
    else
    {
      makeFoundOptionDisable();
      fou=false;
    }
  });
}
makeFoundOptionsVisible();

function makeFoundOptionDisable()
{
  document.querySelector('.common-founded-div').classList.add('founded-options-div');
  document.querySelector('.common-founded-div').classList.remove('founded-options-div-visible');
}


//===============================================================
//====================== RECOVER OPTIONS=========================
//===============================================================
let reco = false;

function makeRecoverOptionsVisible()
{
  document.querySelector('.recovered-item-button').addEventListener('click', ()=>{
    if(reco===false)
    {
      makeLostOptionDisable();
      makeFoundOptionDisable();
      document.querySelector('.recovered-options-div').classList.add('recovered-options-div-visible');
      document.querySelector('.recovered-options-div-visible').classList.remove('recovered-options-div');
      reco=true;
    }
    else
    {
      makeRecoveredOptionDisable();
      reco=false; 
    }
    
  });
}
makeRecoverOptionsVisible();

function makeRecoveredOptionDisable()
{
  document.querySelector('.common-recovered-div').classList.add('recovered-options-div');
  document.querySelector('.common-recovered-div').classList.remove('recovered-options-div-visible');
}





document.querySelector('.find-btn').addEventListener('click',()=>{
  console.log('Clicked');
  const status = verifyBlockStatus(key);
  if(!status)
  {
    window.location.assign("../HTML/find-item-form.html");
  }
  else
  {
    alert('You are Blocked by the Admin');
  }
});



document.querySelector('.lost-btn').addEventListener('click',()=>{
  console.log('Clicked');
  const status = verifyBlockStatus(key);
  if(!status)
  {
    window.location.assign("../HTML/lost-item-img-form.html");
  }
  else
  {
    alert('You are Blocked by the Admin');
  }
});