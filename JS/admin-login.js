import { adminLogin } from "./admin.js";



let loginResult = false;
document.querySelector('.js-log-in-button').addEventListener('click',()=>{
  const id = document.querySelector('.js-reg-ele').value;
  const pass = document.querySelector('.js-password-ele').value;
  loginResult = adminLogin(id,pass);
  if(loginResult)
  {
    document.querySelector('.incorrect-id-pass-div').innerHTML='';
    document.querySelector('.js-reg-ele').value = '';
    document.querySelector('.js-password-ele').value = '';
    localStorage.setItem('adminKey', id);
    window.location.assign("../HTML/admin-home.html");
  }
  else
  {
    document.querySelector('.incorrect-id-pass-div').innerHTML=`
    <p class="incorrect-id-pass">Incorrect Reg or Password *</p>
    `;
    document.querySelector('.js-reg-ele').value = '';
    document.querySelector('.js-password-ele').value = '';
  }
});



document.body.addEventListener('keydown',(event)=>{
  if(event.key==='Enter')
  {
    const id = document.querySelector('.js-reg-ele').value;
    const pass = document.querySelector('.js-password-ele').value;
    loginResult = adminLogin(id,pass);
    if(loginResult)
    {
      document.querySelector('.incorrect-id-pass-div').innerHTML='';
        document.querySelector('.js-reg-ele').value = '';
        document.querySelector('.js-password-ele').value = '';
        localStorage.setItem('adminKey', id);
        window.location.assign("../HTML/admin-home.html");
    }
    else
    {
      document.querySelector('.incorrect-id-pass-div').innerHTML=`
      <p class="incorrect-id-pass">Incorrect Reg or Password *</p>
      `;
      document.querySelector('.js-reg-ele').value = '';
      document.querySelector('.js-password-ele').value = '';
    }
  }
});