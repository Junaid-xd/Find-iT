import { addAdmin } from "./admin.js";
import { returnAdminName } from "./admin.js";

const key = localStorage.getItem('adminKey');

function renderAdminProfile()
{
  document.querySelector('.name-div').innerHTML = `
  ${returnAdminName(key)}
  `;
}
renderAdminProfile();




function addAdminFunction()
{
  document.querySelector('.js-add-button').addEventListener('click',()=>{
    console.log('clicked');
    const tempName = document.querySelector('.js-name-ele').value;
    const tempID = document.querySelector('.js-id-ele').value;
    const tempPass = document.querySelector('.js-password-ele').value;
  
    if(tempName!=='' && tempID!== '' && tempPass !== '')
    {
      document.querySelector('.js-name-ele').value = '';
      document.querySelector('.js-id-ele').value = '';
      document.querySelector('.js-password-ele').value = '';
      addAdmin(tempName, tempID, tempPass);
      alert('Admin Added SuccessFully!');
    }
    else
    {
      alert('Please fill all input fields');
    }
  });
}

addAdminFunction();