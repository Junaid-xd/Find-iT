import { users } from "./users.js";
import { returnPassword } from "./users.js";
import { updateUserData } from "./users.js";

const key = localStorage.getItem('key');


function fillFormWithData()
{
  let tempUser;
  users.forEach((user)=>{
    if(user.reg === key)
    {
      tempUser = user;
    }
  });
  document.querySelector('.js-name-ele').value = tempUser.name;
  document.querySelector('.js-contact-ele').value = tempUser.contactNo;


}
fillFormWithData();


document.querySelector('.update-btn').addEventListener('click', ()=>{

  const oldPass = document.querySelector('.js-oldpass-ele').value;
  const nName = document.querySelector('.js-name-ele').value;
  const nContact = document.querySelector('.js-contact-ele').value;
  const newPass = document.querySelector('.js-password-ele').value;
  if(nName!=='' && nContact!=='' && oldPass!=='' && newPass!=='')
  {
    const originalPass = returnPassword(key);

    if(originalPass === oldPass)
    {
      alert('Update Successfully');
      updateUserData(key, nName, nContact, newPass);
      document.querySelector('.js-name-ele').value = '';
      document.querySelector('.js-contact-ele').value = '';
      document.querySelector('.js-oldpass-ele').value = '';
      document.querySelector('.js-password-ele').value = '';
      fillFormWithData();
    }
    else
    {
      document.querySelector('.incorrect-div').innerHTML = 
      `<p>INCORRECT OLD PASSWORD*</p>`;
    }
  }
  else
  {
    document.querySelector('.incorrect-div').innerHTML = 
      `<p>PLEASE FILL ALL INPUT FIELDS*</p>`;
  }
});