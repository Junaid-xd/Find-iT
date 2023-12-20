import { returnAdminName } from "./admin.js";
import { users } from "./users.js";
import { removeUser } from "./users.js";
import { removeAllFoundedPosts } from "./founded.js";
import { removeAllLostPosts } from "./lost.js";
import { removeAllRecoverdPosts } from "./recover.js";
import { returnBlockStatus } from "./users.js";
import { blockUser } from "./users.js";
import { unblockUser } from "./users.js";

const key = localStorage.getItem('adminKey');




function renderAdminProfile()
{
  document.querySelector('.name-div').innerHTML = `
  ${returnAdminName(key)}
  `;
}


function renderContent()
{
  renderAdminProfile();
  let content = document.querySelector('.js-table-body');
  content.innerHTML='';
  let status;
  let btnContent;
  users.forEach((user)=>{
    if(user.block==0)
    {
      status = false;
      btnContent = 'BLOCK';
    }
    else
    {
      status=true;
      btnContent = 'UNBLOCK';
    }
    content.innerHTML += `
    <tr class="row rrr">
      <td>${user.name}</td>
      <td>${user.reg}</td>
      <td>${user.password}</td>
      <td>${user.contactNo}</td>
      <td>${status}</td>
      <td>
        <button class="block-btn js-block-btn" data-user-reg="${user.reg}">${btnContent}</button>
        <button class="del-btn js-del-btn" data-user-reg="${user.reg}">DELETE</button>
      </td>
    </tr>
    `;
  });
}
renderContent();



document.querySelectorAll('.js-block-btn').forEach((button)=>{
  button.addEventListener('click',()=>{
    const registrationNo = button.getAttribute("data-user-reg");
    const res = returnBlockStatus(registrationNo);
    if(res===0)
    {
      blockUser(registrationNo);
      location.reload();
    }
    else
    {
      unblockUser(registrationNo); 
      location.reload();
    }
  });
});


document.querySelectorAll('.js-del-btn').forEach((button)=>{
  button.addEventListener('click',()=>{
    const registrationNo = button.getAttribute("data-user-reg");
    console.log('ISS USER KO DELETE KARNA HAI : ', registrationNo);
    removeAllFoundedPosts(registrationNo);
    removeAllLostPosts(registrationNo);
    removeAllRecoverdPosts(registrationNo);
    removeUser(registrationNo);
    alert(`The user deleted with REG : ${registrationNo}`);
    location.reload();
  });
});



