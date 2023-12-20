import { logIn } from "./users.js";



let loginResult = false;

document.querySelector('.js-log-in-button').addEventListener('click',()=>{
  const id = document.querySelector('.js-reg-ele').value;
  const pass = document.querySelector('.js-password-ele').value;
  loginResult = logIn(id,pass);
  if(loginResult)
  {
    document.querySelector('.incorrect-id-pass-div').innerHTML='';
      document.querySelector('.js-reg-ele').value = '';
      document.querySelector('.js-password-ele').value = '';
      window.location.assign("./HTML/home.html");
  }
  else
  {
    document.querySelector('.incorrect-id-pass-div').innerHTML=`
    <p class="incorrect-id-pass">Incorrect Reg or Password *</p>
    `;
    document.querySelector('.js-reg-ele').value = '';
    document.querySelector('.js-password-ele').value = '';
  }
  console.log(loginResult);
});


document.body.addEventListener('keydown',(event)=>{
  if(event.key==='Enter')
  {
    const id = document.querySelector('.js-reg-ele').value;
    const pass = document.querySelector('.js-password-ele').value;
    loginResult = logIn(id,pass);
    if(loginResult)
    {
      document.querySelector('.incorrect-id-pass-div').innerHTML='';
      document.querySelector('.js-reg-ele').value = '';
      document.querySelector('.js-password-ele').value = '';
      window.location.assign("./HTML/home.html");
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








// const textInput = document. getElementById('textInput');
// textInput. addEventListener('keydown', (event) => {
// if (event. key === 'Enter') {
// console. log('Enter key pressed!' );
// // Perform desired actions here.
// }
// });