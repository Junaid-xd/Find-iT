
import { foundedItems } from "./founded.js";
import { returnName } from "./users.js";
import { returnContact } from "./users.js";


const key = localStorage.getItem('key');





function renderContent()
{
  let content = document.querySelector('.js-grid');

  foundedItems.forEach((lost)=>{
    const reg = lost.reg;
    const name = returnName(lost.reg);
    const loc = lost.location;
    const contact = returnContact(lost.reg);
    const imgLink = lost.picSrc;
    const proName = lost.productName;


    content.innerHTML+=`
    <div class="wrapper">
        <div class="img-div">
          <img src="${imgLink}" class="css-content-img js-item-img">
        </div>
  

        <div class="productName-div">
          <b>${proName}</b>
        </div>

        <div class="desciption-div css-desciption-div">
          
          <div class="name-div">
            <div class="keyword"><b>Reported By : </b></div>
            <div class="dynamic-name dynamic">${name}</div>
          </div>
  
          <div class="reg-div">
            <div class="keyword"><b>Reg No : </b></div>
            <div class="dynamic-reg dynamic">${reg}</div>
          </div>
  
          <div class="contact-div">
            <div class="keyword"><b>Contact No : </b></div>
            <div class="dynamic-contact dynamic">${contact}</div>
          </div>
  
          <div class="location-div">
            <div class="keyword"><b>Location : </b></div>
            <div class="dynamic-location dynamic">${loc}</div>
          </div>
  
          <div class="status-div">
            <div class="keyword"><b>Status :</b></div>
            <div class="dynamic current-status"><b>Founded</b></div>
          </div>
        </div>
      </div>
    `;
  });
}

renderContent();
