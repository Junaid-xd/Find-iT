import { returnName } from "./users.js";
import { returnContact } from "./users.js";
import { foundItemsWithDes } from "./founded.js";




function renderContent()
{
  let content = document.querySelector('.js-grid');
  foundItemsWithDes.forEach((lost)=>{

    content.innerHTML+=`
    <div class="wrapper">
      <div class="des-div">${lost.descriptionDetails}</div>
      

      <div class="productName-div pro-name"><b>${lost.productName}</b></div>

      <div class="desciption-div css-desciption-div">
        
        <div class="name-div">
          <div class="keyword"><b>Reported By : </b></div>
          <div class="dynamic-name dynamic">${returnName(lost.reg)}</div>
        </div>

        <div class="reg-div">
          <div class="keyword"><b>Reg No : </b></div>
          <div class="dynamic-reg dynamic">${lost.reg}</div>
        </div>

        <div class="contact-div">
          <div class="keyword"><b>Contact No : </b></div>
          <div class="dynamic-contact dynamic">${returnContact(lost.reg)}</div>
        </div>

        <div class="location-div">
          <div class="keyword"><b>Location : </b></div>
          <div class="dynamic-location dynamic">${lost.location}</div>
        </div>

        <div class="status-div">
          <div class="keyword"><b>Status :</b></div>
          <div class="dynamic current-status" style="background-color: rgb(56, 96, 112);">Founded</div>
        </div>
      </div>
    </div>`;
  });
}

renderContent();