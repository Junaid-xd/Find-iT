import { recoveredItemsWithDescription } from "./recover.js";
import { returnName } from "./users.js";
import { returnContact } from "./users.js";

const key = localStorage.getItem('key');


function renderContent()
{
  let content = document.querySelector('.js-grid');
  recoveredItemsWithDescription.forEach((recover)=>{
    content.innerHTML+=`
    <div class="wrapper">
      <div class="des-div">
        ${recover.descriptionDetails}
      </div>
      

      <div class="productName-div pro-name">
        <b>${recover.productName}</b>
      </div>

      <div class="desciption-div css-desciption-div">
        
        <div class="name-div">
          <div class="keyword"><b>Name : </b></div>
          <div class="dynamic-name dynamic">${returnName(recover.reg)}</div>
        </div>

        <div class="reg-div">
          <div class="keyword"><b>Reg No : </b></div>
          <div class="dynamic-reg dynamic">${recover.reg}</div>
        </div>

        <div class="contact-div">
          <div class="keyword"><b>Contact No : </b></div>
          <div class="dynamic-contact dynamic">${returnContact(recover.reg)}</div>
        </div>

        <div class="location-div">
          <div class="keyword"><b>Location : </b></div>
          <div class="dynamic-location dynamic">${recover.location}</div>
        </div>

        <div class="status-div">
          <div class="keyword"><b>Status :</b></div>
          <div class="dynamic current-status" style="background-color: green;">Recovered</div>
        </div>
      </div>
    </div>
    `;
  });
}

renderContent();
